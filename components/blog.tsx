import getPostMetadata from "@/lib/posts/getPostMetadata";
import Link from "next/link";
import { BsPlusCircle } from "react-icons/bs";
import PostsPreview from "./PostsPreview";

export default function Blog() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata
    .slice(0, 6)
    .map((post) => <PostsPreview key={post.slug} {...post} />);
  return (
    <section className="container mx-auto scroll-mt-28 px-4 sm:mb-40" id="blog">
      <div className="border-b-2 border-b-slate-500 py-2">
        <div className="py-2">
          <h2 className="mb-12 text-4xl font-bold md:text-5xl">Blog</h2>
        </div>
      </div>
      <div className="p-auto m-auto flex flex-col">
        <div className="hide-scroll-bar flex snap-x snap-mandatory overflow-x-scroll pb-10">
          {postPreviews}
          <>
            <div className="mt-4 mr-5 flex snap-start">
              <div className="inline-block px-3">
                <Link href={`/posts`} className="group">
                  <div className="flex h-full w-96 max-w-xs items-center justify-center overflow-hidden rounded-lg align-middle shadow-md transition-shadow duration-300 ease-in-out group-hover:bg-white/30 hover:shadow-xl dark:bg-slate-800 group-hover:dark:bg-slate-700">
                    <div className="mx-auto flex flex-col items-center justify-center">
                      <h4 className="mb-5 font-bold dark:text-white">
                        Read more...
                      </h4>
                      <BsPlusCircle className="h-10 w-10 dark:text-white" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
