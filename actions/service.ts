"use server";

import prisma from "@/lib/prisma";

export default async function getUniqueServicePerCategory() {
  const data = await prisma.serviceCategory.findMany({
    include: {
      services: {
        take: 2,
      },
    },
  });

  console.log(data);
  return data;
}

export type ServiceDisplayType = Awaited<
  ReturnType<typeof getUniqueServicePerCategory>
>;
