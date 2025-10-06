import Pagination from "@/components/pagination";
import { Sidebar } from "@/components/post-display/sidebar";
import PostsPreview from "@/components/PostsPreview";
import getPostMetadata from "@/lib/posts/getPostMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.josephopio.com/posts"),
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
  const postMetadata = getPostMetadata();
  const params = await props.searchParams;
  const page = params.page ? parseInt(params.page as string) : 1;
  const perPage = params.per_page ? parseInt(params.per_page as string) : 12;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const lastPage = Math.ceil(postMetadata.length / perPage);
  const hasNextPage = page < lastPage;
  const hasPreviousPage = page > 1;
  const postsSlice = postMetadata.slice(start, end);

  return (
    <div className="pt-10">
      <div className="my-16">{/* Just a spacer */}</div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          <article className="max-w-7xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl leading-tight font-bold text-balance md:text-5xl print:text-black">
                  Blog and Posts Page
                </h1>

                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  This is where I share all about me. If you need any
                  information. Please look through my posts. Click here to
                  contact me directly.
                </p>
              </div>

              {/* <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Joseph Opio</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime="2025-03-10">
                    {new Date(date).toDateString()}
                  </time>
                </div>
                <span>8 min read</span>
              </div> */}

              {/* <div className="bg-muted aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={`/images/posts/${imageSrc}`}
                  alt={title}
                  className="h-full w-full object-cover"
                  width={1920}
                  height={1080}
                  priority
                />
              </div> */}
            </div>
            <div className="text-foreground my-8 grid !max-w-none grid-cols-1 space-y-6 sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:grid-cols-3">
              {postsSlice.map((post) => (
                <PostsPreview key={post.slug} {...post} />
              ))}
            </div>
            <Pagination
              hasNextPage={hasNextPage}
              hasPreviousPage={hasPreviousPage}
              totalPages={lastPage}
            />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {/* Tags: */}
              {/* <pre>{JSON.stringify(post.data.tags, null, 2)}</pre> */}
              {/* {post.data.tags.map((tag: string) => (
                <Badge
                  variant="secondary"
                  className={`text-xs font-medium text-white ${getRandomColour()} print:text-black`}
                >
                  {tag}
                </Badge>
              ))} */}
            </div>
            <p className="mt-12 hidden border-2 border-slate-500 pt-2 text-center text-sm text-slate-500 italic print:static print:mt-0 print:block print:border-0 print:pt-6 print:text-xs">
              This content was printed from Joseph Opio's site.
              (www.josephopio.com)
            </p>
          </article>
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
