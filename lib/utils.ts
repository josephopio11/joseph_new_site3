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
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  if (!!opacity) {
    opacity = "90";
    console.log(randomColor + `/${String(opacity)}`);
    return randomColor + `/${String(opacity)}`;
  }

  console.log(randomColor);
  return randomColor;
}

export function getRandomBackgroundColour(): string {
  const colors = [
    `bg-red-700/20`,
    `bg-blue-700/20`,
    `bg-green-700/20`,
    `bg-yellow-700/20`,
    `bg-purple-700/20`,
    `bg-pink-700/20`,
    `bg-indigo-700/20`,
    `bg-teal-700/20`,
    `bg-orange-700/20`,
    `bg-cyan-700/20`,
    `bg-emerald-700/20`,
    `bg-fuchsia-700/20`,
    `bg-violet-700/20`,
    `bg-rose-700/20`,
    `bg-sky-700/20`,
    `bg-lime-700/20`,
    `bg-amber-700/20`,
    `bg-slate-700/20`,
    `bg-gray-700/20`,
    `bg-zinc-700/20`,
    `bg-neutral-700/20`,
    `bg-stone-700/20`,
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

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
