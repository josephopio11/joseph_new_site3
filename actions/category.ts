"use server";

import prisma from "@/lib/prisma";

export async function getAllPostCategories() {
  const data = await prisma.category.findMany({
    where: {
      posts: {
        some: {
          isPublished: true,
        },
      },
    },
  });

  return data;
}
