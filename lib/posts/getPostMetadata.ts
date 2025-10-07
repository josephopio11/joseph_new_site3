import fs from "fs";
import matter from "gray-matter";
import { redirect } from "next/navigation";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  try {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    //gray matter to read data from each file
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title as string,
        date: new Date(matterResult.data.date),
        subtitle: matterResult.data.subtitle as string,
        slug: fileName.replace(".md", ""),
        image: matterResult.data.image as string,
        tags: matterResult.data.tags as string[],
        badge: matterResult.data.badge as string,
      };
    });

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    redirect("/");
  }
};

export default getPostMetadata;
