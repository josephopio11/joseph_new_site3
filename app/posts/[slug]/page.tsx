import { ArticleContent } from "@/components/post-display/article-content";
import { ArticleHeader } from "@/components/post-display/article-header";
import { Sidebar } from "@/components/post-display/sidebar";
import PostsPreview from "@/components/PostsPreview";
import { Badge } from "@/components/ui/badge";
import getPostContent from "@/lib/posts/getPostContent";
import getPostMetadata from "@/lib/posts/getPostMetadata";
import getPostMetadataRnd from "@/lib/posts/getPostMetadataRnd";
import { getRandomColour } from "@/lib/utils";
import { Metadata } from "next";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props: any): Promise<Metadata> {
  const slug = (await props.params).slug;
  const post = getPostContent(slug);
  const tags = post.data.tags;

  const postImage = () => {
    if (post.data.image === undefined) {
      return "bg.jpg";
    } else {
      return post.data.image;
    }
  };

  const postTags = () => {
    if (tags === undefined) {
      return (
        "joseph, opio, teacher, igcse, a level, cambridge, computer, science, " +
        post.data.title.split(" ").join(", ").toLowerCase()
      );
    }
    return (
      "joseph, opio, teacher, igcse, a level, cambridge, computer, science, " +
      post.data.title.split(" ").join(", ").toLowerCase() +
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
    title: post.data.title,
    description: post.data.subtitle,
    keywords: postTags(),
    openGraph: {
      url: "/posts/" + slug,
      title: post.data.title,
      description: post.data.subtitle,
      images: [
        {
          url: "/images/posts/" + postImage(),
          alt: post.data.title,
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
      description: post.data.subtitle,
    },
  };
}

const BlogPage = async (props: any) => {
  const slug = (await props.params).slug;
  const post = getPostContent(slug);
  const tags = post.data.tags;

  const wanted = () => {
    if (post.data.image === undefined) {
      return "bg.jpg";
    } else {
      return post.data.image;
    }
  };

  const postMetadata = getPostMetadataRnd();
  const postPreviews = postMetadata.map((post) => (
    <PostsPreview key={post.slug} {...post} />
  ));

  const postTags = () => {
    if (tags === undefined) {
      return (
        "joseph, opio, teacher, igcse, a level, cambridge, computer, science, " +
        post.data.title.split(" ").join(", ").toLowerCase()
      );
    }
    return (
      post.data.title.split(" ").join(", ").toLowerCase() +
      ", " +
      tags.join(", ")
    );
  };

  return (
    <div className="pt-10">
      <div className="my-16">{/* Just a spacer */}</div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          <article className="max-w-7xl">
            <ArticleHeader
              title={post.data.title}
              subtitle={post.data.subtitle}
              date={post.data.date}
              imageSrc={wanted()}
            />
            <ArticleContent content={post.content} />
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              Tags:
              {/* <pre>{JSON.stringify(post.data.tags, null, 2)}</pre> */}
              {post.data.tags.map((tag: string) => (
                <Badge
                  variant="secondary"
                  className={`text-xs font-medium text-white ${getRandomColour()} uppercase print:text-black`}
                >
                  {tag}
                </Badge>
              ))}
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
};

export default BlogPage;
