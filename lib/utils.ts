import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { fadedColours, solidColours } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomColour(opacity?: string): string {
  const randomColor =
    solidColours[Math.floor(Math.random() * solidColours.length)];

  if (!!opacity) {
    opacity = "90";
    return randomColor + `/${String(opacity)}`;
  }

  return randomColor;
}

export function getRandomBackgroundColour(): string {
  const randomColor =
    fadedColours[Math.floor(Math.random() * fadedColours.length)];

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

export const sluggify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

export function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
