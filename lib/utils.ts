import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomColour() {
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

  return randomColor;
}

export function getTagCounts(posts: Post[]): Record<string, number> {
  return posts.reduce(
    (acc, post) => {
      post.tags.forEach((tag) => {
        const cleanTag = tag.trim(); // strip extra spaces
        acc[cleanTag] = (acc[cleanTag] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>,
  );
}

export function getSortedTagCounts(
  posts: Post[],
): { tag: string; count: number }[] {
  // build frequency map
  const counts: Record<string, number> = posts.reduce(
    (acc, post) => {
      post.tags.forEach((tag) => {
        const cleanTag = tag.trim();
        acc[cleanTag] = (acc[cleanTag] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  // convert to array and sort ascending by count
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.count - b.count);
}
