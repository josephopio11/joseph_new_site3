import { getAllPostCategories } from "@/actions/category";
import { getPublishedPosts } from "@/actions/post";
import PostCard from "@/components/posts/PostCard";
import { PostsFilters } from "@/components/posts/PostsFilters";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function PostsDashboardPage(props: {
  searchParams: SearchParams;
}) {
  const params = await props.searchParams;

  console.log(params);
  const q = params.q as string | undefined;
  const page = params.page ? parseInt(params.page as string) : 1;
  const perPage = params.per_page ? parseInt(params.per_page as string) : 12;

  // { per_page: '12', page: '1', q: 'another' }

  const posts = await getPublishedPosts(q, page, perPage);
  const categories = await getAllPostCategories();

  console.log(categories);

  if (!posts) {
    return (
      <>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="px-4 lg:px-6">
                <header className="mb-12 flex flex-row items-center justify-between gap-4">
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

                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    No published posts found.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <header className="mb-12 flex flex-row items-center justify-between gap-4">
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

              <PostsFilters categories={categories} />

              {posts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="text-lg text-zinc-500 dark:text-zinc-400">
                    No published posts found.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
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
