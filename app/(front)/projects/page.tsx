import ProjectCard from "@/components/landing/project-card";
import Pagination from "@/components/pagination";
import { BlogSidebar } from "@/components/post-display/blog-sidebar";
import { projectsData, SITE_CONFIG } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "My Projects",
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
    title: "My Projects",
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

export default async function ProjectsPage(props: {
  searchParams: SearchParams;
}) {
  // const postMetadata = getPostMetadata();
  const params = await props.searchParams;
  const page = params.page ? parseInt(params.page as string) : 1;
  const perPage = params.per_page ? parseInt(params.per_page as string) : 12;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const lastPage = Math.ceil(projectsData.length / perPage);
  const hasNextPage = page < lastPage;
  const hasPreviousPage = page > 1;
  const projectsSlice = projectsData.slice(start, end);

  return (
    <div className="pt-10 print:pt-0">
      <div className="my-16 print:hidden">{/* Just a spacer */}</div>
      <div className="container mx-auto px-4 py-8 print:p-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:gap-12 print:gap-2">
          <article className="max-w-7xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl leading-tight font-bold text-balance md:text-5xl print:text-black">
                  My Projects
                </h1>

                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  This is where ideas come to life. Here you&apos;ll find a
                  collection of work that represents my journey as a teacher and
                  computer science lover from experimental concepts to polished
                  solutions. Each project tells a story of problem-solving,
                  creativity, and continuous learning.
                </p>
              </div>
            </div>
            <div className="text-foreground my-8 grid max-w-none! grid-cols-1 space-y-6 sm:grid-cols-2 sm:gap-6 sm:space-y-0 md:grid-cols-3 print:gap-2">
              {projectsSlice.map((project, index) => (
                <ProjectCard key={String(index)} project={project} />
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
          <aside className="lg:sticky lg:top-8 lg:self-start print:hidden">
            <BlogSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
