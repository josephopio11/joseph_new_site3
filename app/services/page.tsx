import Pagination from "@/components/pagination";
import { BlogSidebar } from "@/components/post-display/blog-sidebar";
import PostsPreview from "@/components/PostsPreview";
import { SITE_CONFIG } from "@/lib/data";
import getPostMetadata from "@/lib/posts/getPostMetadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Services",
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
    "Discover a wide range of professional computer science services by Joseph Opio — a passionate educator and technology expert. From private Python tutoring, coding workshops, and curriculum design to web development, 3D animation, automation scripts, and digital transformation for schools, Joseph helps learners, educators, and organisations harness the power of computing. Whether you need engaging lessons, technical guidance, or innovative digital solutions, these services make technology accessible, creative, and impactful.",
  robots: "index, follow",
  openGraph: {
    url: "/services",
    title: "Services",
    description:
      "Discover a wide range of professional computer science services by Joseph Opio — a passionate educator and technology expert. From private Python tutoring, coding workshops, and curriculum design to web development, 3D animation, automation scripts, and digital transformation for schools, Joseph helps learners, educators, and organisations harness the power of computing. Whether you need engaging lessons, technical guidance, or innovative digital solutions, these services make technology accessible, creative, and impactful.",
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
      "Discover a wide range of professional computer science services by Joseph Opio — a passionate educator and technology expert. From private Python tutoring, coding workshops, and curriculum design to web development, 3D animation, automation scripts, and digital transformation for schools, Joseph helps learners, educators, and organisations harness the power of computing. Whether you need engaging lessons, technical guidance, or innovative digital solutions, these services make technology accessible, creative, and impactful.",
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
    <div className="pt-10 print:pt-0">
      <div className="my-16 print:hidden">{/* Just a spacer */}</div>
      <div className="container mx-auto px-4 py-8 print:p-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          <article className="max-w-7xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl leading-tight font-bold text-balance md:text-5xl print:text-black">
                  Services
                </h1>

                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  Explore a variety of technology and education services
                  designed to inspire learning, creativity, and innovation. From
                  coding lessons and curriculum development to web design,
                  automation, and digital consultancy, these offerings help
                  students, educators, and organisations make the most of
                  computer science in today’s digital world.{" "}
                  <Link href="/#contact" className="underline">
                    Click here
                  </Link>{" "}
                  to contact me directly.
                </p>
              </div>
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
            <p className="mt-12 hidden border-2 border-slate-500 pt-2 text-center text-sm text-slate-500 italic print:static print:mt-0 print:block print:border-0 print:pt-6 print:text-xs">
              This content was printed from Joseph Opio's site.
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
