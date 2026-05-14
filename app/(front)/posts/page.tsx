import { getAllPosts } from "@/actions/post";
import Pagination from "@/components/pagination";
import { BlogSidebar } from "@/components/post-display/blog-sidebar";
import PostsPreview from "@/components/PostsPreview";
import { SITE_CONFIG } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "My Blog and Posts",
  keywords: [
    "posts",
    "blog",
    "joseph",
    "opio",
    "computer",
    "science",
    "teacher",
    "gems",
    "xcl",
    "igcse",
    "cambridge",
    "programming",
  ],
  description:
    "Read this blog and you will learn a lot form Joseph Opio. This is a blog where I share my thoughts and ideas about the world. I work at XCL Education. I am a Computer Science Teacher. I teach Computer Science at A Level. I teach Computer Science at O Level. I teach Computer Science at IGCSE. I teach Computer Science at AP. I teach Computer Science at IB. I teach Computer Science at GCSE. I am me.",
  robots: "index, follow",
  openGraph: {
    url: "/",
    title: "My Blog and Posts",
    description:
      "Read this blog and you will learn a lot from Joseph Opio. Thi sis a blog where I share my thoughts and ideas about the world and life in general. I work at XCL Education. I am a Computer Science Teacher. I teach Computer Science at A Level. I teach Computer Science at O Level. I teach Computer Science at IGCSE. I teach Computer Science at AP. I teach Computer Science at IB. I teach Computer Science at GCSE. I am me.",
    images: [
      {
        url: "/images/posts/bg.jpg",
        width: 800,
        height: 800,
        alt: "Joseph Opio",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Joseph Opio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "/images/posts/bg.jpg",
    description:
      "Read this blog and you will learn a lot from Joseph Opio. Thi sis a blog where I share my thoughts and ideas about the world and life in general.",
  },
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function PostsPage(props: { searchParams: SearchParams }) {
  const params = await props.searchParams;

  const page = params.page ? parseInt(params.page as string) : 1;
  const perPage = params.per_page ? parseInt(params.per_page as string) : 12;

  const { data: myPosts, count } = await getAllPosts(page, perPage);

  const lastPage = Math.ceil(count / perPage);
  const hasNextPage = page < lastPage;
  const hasPreviousPage = page > 1;

  return (
    <div className="pt-10 print:pt-0">
      <div className="my-16 print:hidden">{/* Just a spacer */}</div>
      <div className="container mx-auto px-4 py-8 print:p-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          <article className="max-w-7xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl leading-tight font-bold text-balance md:text-5xl print:text-black">
                  Blog and Posts Page
                </h1>

                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  This is where I share all about me. If you need any
                  information. Please look through my posts.{" "}
                  <Link href="/#contact" className="underline">
                    Click here
                  </Link>{" "}
                  to contact me directly.
                </p>
              </div>
            </div>
            <div className="text-foreground my-8 grid max-w-none! grid-cols-1 space-y-6 sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:grid-cols-3">
              {myPosts.map((post) => (
                <PostsPreview key={post.slug} {...post} />
              ))}
            </div>
            <Pagination
              hasNextPage={hasNextPage}
              hasPreviousPage={hasPreviousPage}
              totalPages={lastPage}
            />
            <p className="mt-12 hidden border-2 border-slate-500 pt-2 text-center text-sm text-slate-500 italic print:static print:mt-0 print:block print:border-0 print:pt-6 print:text-xs">
              This content was printed from Joseph Opio&apos;s site.
              (www.josephopio.com)
            </p>
          </article>
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
