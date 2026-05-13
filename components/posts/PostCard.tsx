import { PublishedPostType } from "@/actions/post";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface PostCardProps {
  post: PublishedPostType;
}

export default function PostCard({ post }: PostCardProps) {
  const date = new Date(post.createdAt);

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {post.image ? (
          <Image
            alt={post.title}
            src={`/images/posts/${post.image}`}
            width={600}
            height={600}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-400">
            No image
          </div>
        )}
        <Badge className="absolute top-3 left-3 z-50 border-white">
          <div className="flex items-center gap-2 text-[10px] font-medium tracking-wider">
            <Calendar className="h-3 w-3" />
            {format(date, "E, MMM dd, yyyy")}
          </div>
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 line-clamp-2 text-sm font-bold text-zinc-900 transition-colors group-hover:text-zinc-600 lg:text-base dark:text-zinc-100 dark:group-hover:text-zinc-400">
          {post.title}
        </h3>
        <p className="line-clamp-1 flex-1 text-xs text-zinc-600 lg:text-sm dark:text-zinc-400">
          {post.subtitle}
        </p>
      </div>
    </Link>
  );
}
