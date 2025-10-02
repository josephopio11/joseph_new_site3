import getFormattedDate from "@/lib/posts/getFormattedDate";
import { PostMetadata } from "@/lib/posts/PostMetadata";
import Image from "next/image";
import Link from "next/link";

const PostsPreview = (props: PostMetadata) => {
  const wanted = () => {
    const available_image = props.image;
    const default_image = "bg.jpg";

    if (available_image === undefined) {
      return default_image;
    }
    return available_image;
  };
  return (
    <Link
      href={`/posts/${props.slug}`}
      className="m-2 h-auto w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl dark:bg-slate-800 dark:hover:bg-slate-700"
    >
      <div className="">
        <Image
          src={`/images/posts/${wanted()}`}
          alt={`${props.title}`}
          className="m-0 aspect-video object-cover"
          width={960}
          height={540}
        />
        <div className="p-2">
          <p className="m-0 text-xs font-light italic dark:text-slate-100">
            {getFormattedDate(props.date)}
          </p>
          <h3 className="my-0 text-lg font-semibold no-underline transition delay-150 ease-in-out hover:text-black/70 hover:underline dark:text-white/70 dark:hover:text-white">
            {props.title}
          </h3>
          <p className="text-xs font-light text-slate-500 hover:text-slate-300">
            {props.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostsPreview;
