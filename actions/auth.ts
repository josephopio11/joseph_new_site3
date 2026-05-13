"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function requireAuth() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return session;
}

export async function getSessionJo() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}

export type RequireAuthSessionType = Awaited<ReturnType<typeof requireAuth>>;
