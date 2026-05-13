"use client";

import { PublishedPostType } from "@/actions/post";
import PostCard from "./PostCard";

type Props = {
  posts: PublishedPostType[];
};

export default function PostsRenderer({ posts }: Props) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
