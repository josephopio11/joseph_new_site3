"use server";

import prisma from "@/lib/prisma";
import { sluggify } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export async function grabAllPosts() {
  const data = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      slug: true,
      subtitle: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
export async function getAllPosts(start: number, end: number) {
  const take = end - start;
  const data = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      date: true,
      slug: true,
      subtitle: true,
      image: true,
      tags: true,
      badge: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: start,
    take: take,
  });

  return data;
}

export type PostsType = Awaited<ReturnType<typeof getAllPosts>>[number];

export async function getPostBySlug(slug: string) {
  const data = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
    include: {
      tags: true,
    },
  });
  return data;
}

export type PostType = Awaited<ReturnType<typeof getPostBySlug>>;

export async function createPost(data: {
  title: string;
  slug: string;
  subtitle?: string;
  content: string;
  categoryId?: number;
  tags?: string[];
  featuredImage?: string;
}) {
  try {
    const post = await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        subtitle: data.subtitle,
        content: data.content,
        categoryId: data.categoryId,
        tags: {
          connect: data.tags?.map((tag) => ({
            where: { name: tag },
          })),
        },
        image: data.featuredImage,
      },
    });

    revalidatePath("/posts");
    return { success: true, post };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, error: "Failed to create post" };
  }
}

export async function updatePost(
  id: string,
  data: {
    title?: string;
    slug?: string;
    subtitle?: string;
    content?: string;
    categoryId?: number;
    tags?: string[];
    featuredImage?: string;
    isPublished?: boolean;
    isFeatured?: boolean;
    badge?: string;
  },
) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        ...data,
        tags: data.tags
          ? {
              set: [],
              connect: data.tags.map((tag) => ({
                where: { name: tag },
              })),
            }
          : undefined,
        image: data.featuredImage,
        slug: data.title ? sluggify(data.title) : data.slug,
      },
    });

    revalidatePath(`/posts/${post.slug}`);
    revalidatePath("/posts");
    return { success: true, post };
  } catch (error) {
    console.error("Error updating post:", error);
    return { success: false, error: "Failed to update post" };
  }
}

export async function uploadPostImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    const postTitle = formData.get("postTitle") as string;

    if (!file || !postTitle) {
      return { success: false, error: "Missing file or post title" };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name;
    const slugifiedTitle = sluggify(postTitle);

    // Path: public/images/posts/[post-title]/[filename]
    const relativeDir = `images/posts/${slugifiedTitle}`;
    const absoluteDir = path.join(process.cwd(), "public", relativeDir);
    const filePath = path.join(absoluteDir, filename);

    await mkdir(absoluteDir, { recursive: true });
    await writeFile(filePath, buffer);

    const publicUrl = `/${relativeDir}/${filename}`;

    return { success: true, url: publicUrl };
  } catch (error) {
    console.error("Error uploading image:", error);
    return { success: false, error: "Failed to upload image" };
  }
}

export async function getPublishedPosts(
  q: string | null = null,
  page?: number,
  per_page?: number,
  category: string | null = null,
) {
  if (!page || page < 1) page = 1;
  if (!per_page) per_page = 12;

  const skip = (page - 1) * per_page;
  const take = per_page;

  const posts = await prisma.post.findMany({
    where: {
      ...(q && {
        OR: [
          {
            subtitle: { contains: q, mode: "insensitive" },
          },
          { title: { contains: q, mode: "insensitive" } },
        ],
      }),
      // isPublished: true,
      ...(category && { category: { name: { equals: category } } }),
    },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      subtitle: true,
      category: true,
      image: true,
      createdAt: true,
    },
    skip,
    take,
  });
  return posts;
}

export type PublishedPostType = Awaited<
  ReturnType<typeof getPublishedPosts>
>[number];

// export async function getPostBySlug(slug: string) {
//   try {
//     const post = await prisma.post.findUnique({
//       where: { slug },
//       include: {
//         category: true,
//         tags: true,
//       },
//     });
//     if (!post) return { success: false, error: "Post not found" };
//     return { success: true, data: post };
//   } catch (error) {
//     console.error("Error fetching post by slug:", error);
//     return { success: false, error: "Failed to fetch post" };
//   }
// }

export async function getPostById(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        category: true,
        tags: true,
      },
    });
    if (!post) return { success: false, error: "Post not found" };
    return { success: true, data: post };
  } catch (error) {
    console.error("Error fetching post by id:", error);
    return { success: false, error: "Failed to fetch post" };
  }
}
