import { getPublishedPosts } from "@/actions/post";
import PostCard from "@/components/posts/PostCard";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function PostsDashboardPage() {
  const posts = await getPublishedPosts();

  if (!posts) {
    return (
      <div className="min-h-screen bg-zinc-50 p-4 text-zinc-900 md:p-8 lg:p-12 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="mb-2 text-4xl font-extrabold tracking-tight">
                All Posts
              </h1>
              <p className="text-zinc-500 dark:text-zinc-400">
                Explore our latest insights and stories.
              </p>
            </div>
          </header>
        </div>
      </div>
    );
  }

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              {/* Joseph Here */}

              <header className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h1 className="mb-2 text-4xl font-extrabold tracking-tight">
                    All Posts
                  </h1>
                </div>
                <Link href="/dashboard/posts/new">
                  <Button className="gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
                    <Plus className="h-4 w-4" />
                    New Post
                  </Button>
                </Link>
              </header>

              {posts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    No published posts found.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
