"use server";

import prisma from "@/lib/prisma";

export async function grabAllPosts() {
  const data = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      subtitle: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
export async function getAllPosts(start: number, end: number) {
  const take = end - start;
  const data = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      date: true,
      slug: true,
      subtitle: true,
      image: true,
      tags: true,
      badge: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: start,
    take: take,
  });

  return data;
}

export type PostsType = Awaited<ReturnType<typeof getAllPosts>>[number];

export async function getPostBySlug(slug: string) {
  const data = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
    include: {
      tags: true,
    },
  });
  return data;
}

export type PostType = Awaited<ReturnType<typeof getPostBySlug>>;
