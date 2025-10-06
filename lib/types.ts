import { navLinks } from "./data";

export type SectionName = (typeof navLinks)[number]["name"];

export type Post = {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  image: string;
  tags: string[];
  randomNumber: number;
};
