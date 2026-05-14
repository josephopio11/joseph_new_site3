import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import matter from "gray-matter";
import { marked } from "marked";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

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

  // ─── Clean up existing data ───────────────────────────────────────────────
  await prisma.post.deleteMany();

  // ─── Process markdown files ───────────────────────────────────────────────

  const postsDir = join(process.cwd(), "posts");
  const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  console.log(`📂 Found ${files.length} markdown files`);

  for (const file of files) {
    const filePath = join(postsDir, file);
    const content = readFileSync(filePath, "utf-8");
    const matterResult = matter(content);

    if (!matterResult.data.title) {
      console.log(`⚠️  Skipping ${file} - no title found`);
      continue;
    }

    // const slug = slugify(frontmatter.title);
    const slug = file.replace(".md", "");

    console.log(`📝 Processing: ${matterResult.data.title}`);

    // Convert markdown body to HTML
    const htmlContent = await marked.parse(matterResult.content);

    // Create or find tags
    const tagConnections: { id: number }[] = [];
    if (matterResult.data.tags && matterResult.data.tags.length > 0) {
      for (const tagName of matterResult.data.tags) {
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
          title: matterResult.data.title,
          subtitle: matterResult.data.subtitle,
          date: new Date(matterResult.data.date),
          createdAt: new Date(matterResult.data.date),
          updatedAt: new Date(matterResult.data.date),
          image: matterResult.data.image,
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
          title: matterResult.data.title,
          slug,
          subtitle: matterResult.data.subtitle,
          date: new Date(matterResult.data.date),
          createdAt: new Date(matterResult.data.date),
          updatedAt: new Date(matterResult.data.date),
          image: matterResult.data.image,
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
