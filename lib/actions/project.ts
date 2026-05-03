"use server";

import prisma from "../prisma";

export async function getFrontProjects() {
  const data = await prisma.project.findMany({
    include: {
      tags: true,
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 4,
  });

  return data;
}

export type FrontProject = Awaited<ReturnType<typeof getFrontProjects>>[number];
