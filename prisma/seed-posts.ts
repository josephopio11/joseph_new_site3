import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { Pool } from "pg";
import { marked } from "marked";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

interface Frontmatter {
  title: string;
  subtitle?: string;
  date: string;
  image?: string;
  tags?: string[];
}

function parseFrontmatter(content: string): {
  frontmatter: Frontmatter;
  body: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {} as Frontmatter, body: content };
  }

  const frontmatterStr = match[1];
  const body = match[2];

  const frontmatter: Frontmatter = {
    title: "",
    subtitle: undefined,
    date: "",
    image: undefined,
    tags: [],
  };

  const lines = frontmatterStr.split("\n");
  let inArray = false;
  let arrayValues: string[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("title:")) {
      const value = trimmedLine.slice(6).trim();
      frontmatter.title = value.replace(/^["']|["']$/g, "");
    } else if (trimmedLine.startsWith("subtitle:")) {
      const value = trimmedLine.slice(9).trim();
      frontmatter.subtitle = value.replace(/^["']|["']$/g, "");
    } else if (trimmedLine.startsWith("date:")) {
      const value = trimmedLine.slice(5).trim();
      frontmatter.date = value.replace(/^["']|["']$/g, "");
    } else if (trimmedLine.startsWith("image:")) {
      const value = trimmedLine.slice(6).trim();
      frontmatter.image = value.replace(/^["']|["']$/g, "");
    } else if (trimmedLine.startsWith("tags:")) {
      inArray = true;
      arrayValues = [];
    } else if (inArray) {
      if (trimmedLine === "[") {
        continue;
      } else if (trimmedLine === "]") {
        frontmatter.tags = arrayValues;
        inArray = false;
      } else {
        const value = trimmedLine
          .replace(/^["']|["']$/, "")
          .replace(/,$/, "")
          .trim();
        if (value) {
          arrayValues.push(value);
        }
      }
    }
  }

  return { frontmatter, body };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

async function main() {
  console.log("🌱 Starting posts seed...");

  const postsDir = join(process.cwd(), "posts");
  const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  console.log(`📂 Found ${files.length} markdown files`);

  for (const file of files) {
    const filePath = join(postsDir, file);
    const content = readFileSync(filePath, "utf-8");
    const { frontmatter, body } = parseFrontmatter(content);

    if (!frontmatter.title) {
      console.log(`⚠️  Skipping ${file} - no title found`);
      continue;
    }

    const slug = slugify(frontmatter.title);

    console.log(`📝 Processing: ${frontmatter.title}`);

    // Convert markdown body to HTML
    const htmlContent = await marked.parse(body);

    // Create or find tags
    const tagConnections: { id: number }[] = [];
    if (frontmatter.tags && frontmatter.tags.length > 0) {
      for (const tagName of frontmatter.tags) {
        const tagSlug = slugify(tagName);

        let tag = await prisma.tags.findUnique({
          where: { slug: tagSlug },
        });

        if (!tag) {
          tag = await prisma.tags.create({
            data: {
              name: tagName,
              slug: tagSlug,
            },
          });
        }

        tagConnections.push({ id: tag.id });
      }
    }

    // Check if post already exists
    const existingPost = await prisma.post.findUnique({
      where: { slug },
    });

    if (existingPost) {
      console.log(`  ↳ Updating existing post`);
      await prisma.post.update({
        where: { slug },
        data: {
          title: frontmatter.title,
          subtitle: frontmatter.subtitle,
          date: new Date(frontmatter.date),
          createdAt: new Date(frontmatter.date),
          updatedAt: new Date(frontmatter.date),
          image: frontmatter.image,
          content: htmlContent,
          tags: {
            set: tagConnections,
          },
        },
      });
    } else {
      console.log(`  ↳ Creating new post`);
      await prisma.post.create({
        data: {
          title: frontmatter.title,
          slug,
          subtitle: frontmatter.subtitle,
          date: new Date(frontmatter.date),
          createdAt: new Date(frontmatter.date),
          updatedAt: new Date(frontmatter.date),
          image: frontmatter.image,
          content: htmlContent,
          tags: {
            connect: tagConnections,
          },
        },
      });
    }
  }

  console.log("✅ Posts seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
