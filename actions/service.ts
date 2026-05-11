"use server";

import prisma from "@/lib/prisma";

export default async function getUniqueServicePerCategory() {
  const data = await prisma.serviceCategory.findMany({
    include: {
      services: {
        take: 1,
      },
    },
  });

  console.log(data);
  return data;
}

export type ServiceDisplayType = Awaited<
  ReturnType<typeof getUniqueServicePerCategory>
>;
