import fs from "fs";
import matter from "gray-matter";
import { redirect } from "next/navigation";
import { PostMetadata } from "./PostMetadata";

function getRandomItem({ length }: any) {
  return Math.floor(Math.random() * length);
}

const getPostMetadataRnd = (): PostMetadata[] => {
  try {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    //gray matter to read data from each file
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      const randomNumber = getRandomItem(files.length);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
        image: matterResult.data.image,
        tags: matterResult.data.tags,
        randomNumber,
      };
    });

    return posts.sort((a, b) => (a.randomNumber > b.randomNumber ? 1 : -1));
  } catch (error) {
    redirect("/");
  }
};

export default getPostMetadataRnd;

export function shufflePosts(posts: PostMetadata[]) {
  for (let i = posts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [posts[i], posts[j]] = [posts[j], posts[i]];
  }
  return posts;
}
