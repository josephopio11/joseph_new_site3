import PostsPreview from "@/components/PostsPreview";
import getFormattedDate from "@/lib/posts/getFormattedDate";
import getPostContent from "@/lib/posts/getPostContent";
import getPostMetadata from "@/lib/posts/getPostMetadata";
import getPostMetadataRnd from "@/lib/posts/getPostMetadataRnd";
import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import Image from "next/image";
import BackButton from "./_component/backbutton";

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

const PostPage = async (props: any) => {
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
    <div className="w-full pt-10">
      <div className="my-16">{/* Just a spacer */}</div>
      <div className="prose lg:prose-lg dark:prose-invert !container mx-auto print:hidden">
        <div className="mx-auto object-cover">
          <Image
            src={`/images/posts/${wanted()}`}
            alt={`${post.data.title}`}
            className="mt-0 aspect-video rounded-xl border border-white object-cover shadow-lg shadow-black/30 lg:aspect-[5/2] dark:border-white/50 dark:shadow-white/30"
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <div className="prose lg:prose-xl dark:prose-invert !container mx-auto px-4">
        <h1 className="font-bold dark:text-white/90">{post.data.title}</h1>
        <p className="border-b-2 border-b-white/30 text-sm">
          {getFormattedDate(post.data.date)}
        </p>
        {/* <p className="text-sm">{postTags()}</p> */}
        <article className="print:text-sm print:italic">
          <Markdown>{post.content}</Markdown>
        </article>
        <div>
          <div className="mb-6 border-y-2 border-y-slate-500 py-2">
            <h3 className="text-center !text-sm">Tags:</h3>
            <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-center align-middle">
              {tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="rounded-md border border-white bg-black/60 px-2 py-1 text-center text-sm text-white shadow-md shadow-black/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <BackButton />
        </div>
      </div>
      <div className="dark:prose-invert !container mx-auto mt-8 mb-2 w-full px-4 print:hidden">
        <div className="border-b-2 border-b-slate-500 py-2">
          <h2 className="text-3xl font-bold dark:text-white/90">
            Related Posts
          </h2>
        </div>
        <div className="p-auto m-auto flex flex-col">
          <div className="hide-scroll-bar flex snap-x overflow-x-scroll pb-10">
            {postPreviews}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
