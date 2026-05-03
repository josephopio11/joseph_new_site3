import { NavLink } from "./generated/prisma/browser";

export type SectionName = NavLink[][number]["name"];

export type Post = {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  image: string;
  tags: string[];
  randomNumber: number;
};
