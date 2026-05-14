"use server";

import prisma from "@/lib/prisma";

export async function subscribeToNewsletter(data: {
  email: string;
  name: string;
}) {
  try {
    const res = await prisma.subscription.create({
      data,
    });
    return { success: true, data: res };
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { success: false, error: "This email is already subscribed." };
    }
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
