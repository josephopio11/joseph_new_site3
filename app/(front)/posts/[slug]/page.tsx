import { getPostBySlug, grabAllPosts } from "@/actions/post";
import { ArticleContent } from "@/components/post-display/article-content";
import { ArticleHeader } from "@/components/post-display/article-header";
import { Sidebar } from "@/components/post-display/sidebar";
import { Badge } from "@/components/ui/badge";
import { getRandomColour } from "@/lib/utils";
import type { Metadata } from "next";

export const generateStaticParams = async () => {
  const posts = await grabAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const slug = (await props.params).slug;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Not found",
      description: "The page you are seeking is not found",
    };
  }

  const tags = post.tags;

  const postImage = () => {
    if (post.image === undefined) {
      return "bg.jpg";
    } else {
      return post.image;
    }
  };

  const postTags = () => {
    if (tags === undefined) {
      return (
        "joseph, opio, teacher, igcse, a level, cambridge, computer, science, " +
        post.title.split(" ").join(", ").toLowerCase()
      );
    }
    return (
      "joseph, opio, teacher, igcse, a level, cambridge, computer, science, " +
      post.title.split(" ").join(", ").toLowerCase() +
      ", " +
      tags.join(", ")
    );
  };

  if (!post)
    return {
      title: "Not found",
      description: "The page you are seeking is not found",
    };

  return {
    title: post.title,
    description: post.subtitle,
    keywords: postTags(),
    openGraph: {
      url: "/posts/" + slug,
      title: post.title,
      description: post.subtitle || "",
      images: [
        {
          url: "/images/posts/" + postImage(),
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "website",
      siteName: "Joseph Opio",
    },
    twitter: {
      card: "summary_large_image",
      site: "@josephopio11",
      creator: "@josephopio11",
      images: "/images/posts/" + postImage(),
      description: post.subtitle,
    },
  };
}

const BlogPage = async (props: Props) => {
  const slug = (await props.params).slug;

  const post = await getPostBySlug(slug);
  // const post = getPostContent(slug);

  if (!post) return null;

  const wanted = () => {
    if (post.image === undefined) {
      return "bg.jpg";
    } else {
      return post.image;
    }
  };

  return (
    <div className="pt-10">
      <div className="my-16">{/* Just a spacer */}</div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          <article className="max-w-7xl">
            <ArticleHeader
              title={post.title}
              subtitle={post.subtitle}
              date={post.createdAt}
              imageSrc={wanted()}
            />
            <ArticleContent content={post.content} />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              Tags:
              {/* <pre>{JSON.stringify(post.data.tags, null, 2)}</pre> */}
              {post.tags.map((tag) => (
                <Badge
                  key={tag.id}
                  variant="secondary"
                  className={`text-xs font-medium text-white ${getRandomColour()} uppercase print:text-black`}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
            <p className="mt-12 hidden border-2 border-slate-500 pt-2 text-center text-sm text-slate-500 italic print:static print:mt-0 print:block print:border-0 print:pt-6 print:text-xs">
              This content was printed from Joseph Opio&apos;s site.
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
};

export default BlogPage;
