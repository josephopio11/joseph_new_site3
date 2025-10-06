import { PostMetadata } from "./PostMetadata";

export function getSortedTagCounts(
  posts: PostMetadata[],
): { tag: string; count: number }[] {
  const allTags = posts
    .map((post) => post.tags || [])
    .filter((tags) => tags.length > 0);

  const flattenedTags = allTags.flat();

  // split all tags by spaces and hyphens
  const cleanedTags = flattenedTags
    .map((tag) =>
      tag
        .toLowerCase()
        .trim()
        .replace(/\.$/, "")
        .split(/[\s-]+/),
    )
    .flat();

  // REMOVE DOTS AT THE END OF TAGS

  const filteredTags = cleanedTags.filter((tag) => tag.length > 3);

  // count the frequency of each tag
  const tagCounts = filteredTags.reduce((acc: Record<string, number>, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const tagCountArray = Object.entries(tagCounts).map(([tag, count]) => ({
    tag,
    count,
  }));

  const sortedArray = tagCountArray.sort((a, b) => b.count - a.count);

  return sortedArray.slice(0, 20);
}
