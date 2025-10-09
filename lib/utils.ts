import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomColour(opacity?: string): string {
  const colors = [
    "bg-red-700",
    "bg-blue-700",
    "bg-green-700",
    "bg-yellow-700",
    "bg-purple-700",
    "bg-pink-700",
    "bg-indigo-700",
    "bg-teal-700",
    "bg-orange-700",
    "bg-cyan-700",
    "bg-emerald-700",
    "bg-fuchsia-700",
    "bg-violet-700",
    "bg-rose-700",
    "bg-sky-700",
    "bg-lime-700",
    "bg-amber-700",
    "bg-slate-700",
    "bg-gray-700",
    "bg-zinc-700",
    "bg-neutral-700",
    "bg-stone-700",
  ] as const;
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  if (!!opacity) {
    opacity = "90";
    console.log(randomColor + `/${opacity}`);
    return randomColor + `/${opacity}`;
  }

  console.log(randomColor);
  return randomColor;
}

export const validateString = (
  value: unknown,
  maxLength: number,
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
