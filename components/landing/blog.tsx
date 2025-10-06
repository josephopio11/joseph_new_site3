import getPostMetadata from "@/lib/posts/getPostMetadata";
import PostsPreview from "../PostsPreview";
import { Button } from "../ui/button";

export default function Blog() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata
    .slice(0, 4)
    .map((post) => <PostsPreview key={post.slug} {...post} />);
  return (
    <section className="container mx-auto scroll-mt-28 px-4 sm:mb-40" id="blog">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl dark:text-gray-200">
            Blog
          </h2>
          <p className="text-muted-foreground">
            Wanna have some good read... here you go!
          </p>
        </div>
        <Button
          variant="outline"
          className="border-border hover:bg-card bg-transparent"
          asChild
        >
          <a href="/posts">See All</a>
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
          {postPreviews}
        </div>
      </div>
    </section>
  );
}
