import getPostContent from "./getPostContent";

export const getCurrentPostInfo = async (slug: string) => {
  const post = getPostContent(slug);
  return {
    title: post.data.title,
    date: post.data.date,
    tags: post.data.tags,
    slug: slug,
    subtitle: post.data.subtitle,
    image: post.data.image,
  };
};
