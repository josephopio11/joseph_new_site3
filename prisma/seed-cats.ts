import { PrismaClient } from "@/lib/generated/prisma/client";
import { sluggify } from "@/lib/utils";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const categories = [
  "Education",
  "Computer Science Education",
  "Programming",
  "Web Development",
  "Artificial Intelligence",
  "Emerging Technologies",
  "Digital Wellness",
  "Gaming",
  "Personal Growth",
  "Creative Writing",
  "Art and Design",
  "Music",
  "Health and Fitness",
  "Parenting",
  "Travel",
  "Culture and History",
];

async function seedCategories() {
  for (const category of categories) {
    await prisma.category.create({
      data: {
        name: category,
        slug: sluggify(category),
      },
    });
  }
}

seedCategories()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
