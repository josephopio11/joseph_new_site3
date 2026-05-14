"use server";

import prisma from "@/lib/prisma";

export async function subscribeToNewsletter(data: {
  email: string;
  name: string;
}) {
  const res = await prisma.subscription.create({
    data,
  });

  return res;
}
