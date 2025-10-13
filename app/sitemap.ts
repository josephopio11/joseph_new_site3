import getPostMetadata from "@/lib/posts/getPostMetadata";

export default async function sitemap() {
  const pages = getPostMetadata();

  const posts = pages.map((page) => ({
    url: `https://www.josephopio.com/posts/${page.slug}`,
    lastModified: new Date(page.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [
    {
      url: `https://www.josephopio.com/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `https://www.josephopio.com/posts`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `https://converter.josephopio.com/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...posts,
  ];
}
