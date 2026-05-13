"use server";

import prisma from "@/lib/prisma";

export async function getAllPostCategories() {
  const data = await prisma.category.findMany({
    where: {
      post: {
        some: {
          isPublished: true,
        },
      },
    },
  });

  return data;
}
