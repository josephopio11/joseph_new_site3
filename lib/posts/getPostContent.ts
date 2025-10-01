import fs from "fs";
import matter from "gray-matter";
import { redirect } from "next/navigation";

const getPostContent = (slug: string) => {
  try {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    redirect("/posts");
  }
};

export default getPostContent;
