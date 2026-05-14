import { RandomPostType } from "@/actions/post";

export function getSortedTagCounts(posts: RandomPostType[]) {
  const allTags = posts
    .map((post) => post.tags || [])
    .filter((tags) => tags.length > 0);

  const flattenedTags = allTags.flat();
  const tagSorted = flattenedTags.sort((a, b) => b.count - a.count);

  return tagSorted.slice(0, 5);
}
