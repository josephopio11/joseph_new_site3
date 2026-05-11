"use server";

import prisma from "@/lib/prisma";

export async function getFrontProjects() {
  const data = await prisma.project.findMany({
    include: {
      tags: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
}

export type FrontProject = Awaited<ReturnType<typeof getFrontProjects>>[number];

export async function getAllProjects(start: number, end: number) {
  const take = end - start;
  const count = await prisma.project.count();
  const projects = await prisma.project.findMany({
    include: {
      tags: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: start,
    take: take,
  });

  return { projects, count };
}
