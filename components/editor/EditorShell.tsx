"use client";

import React, { useState, useEffect } from "react";
import {
  createPost,
  updatePost
} from "@/actions/post";
import PostEditor from "@/components/editor/PostEditor";
import MetadataForm from "@/components/editor/MetadataForm";
import {
  Button
} from "@/components/ui/button";
import {
  toast
} from "sonner";
import {
  Loader2,
  Save,
  Settings,
  FileText
} from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorShellProps {
  initialData?: {
    id: string;
    title: string;
    slug: string;
    subtitle?: string;
    content: string;
    categoryId?: number;
    tags: string[];
    image?: string;
  };
}

export default function EditorShell({ initialData }: EditorShellProps) {
  const [view, setView] = useState<"editor" | "metadata">("editor");
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(initialData?.content || "");
  const [metadata, setMetadata] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    subtitle: initialData?.subtitle || "",
    categoryId: initialData?.categoryId || (undefined as number | undefined),
    tags: initialData?.tags || [],
    featuredImage: initialData?.image || "",
  });
  const [postId, setPostId] = useState<string | null>(initialData?.id || null);

  const handleMetadataComplete = (data: any) => {
    setMetadata({
      ...data,
      categoryId: data.categoryId ? parseInt(data.categoryId, 10) : undefined,
    });
    setView("editor");
    toast.success("Metadata updated");
  };

  const handleSave = async () => {
    if (!metadata.title || !content) {
      toast.error("Please provide both a title and content");
      return;
    }

    setIsLoading(true);
    try {
      const result = postId
        ? await updatePost(postId, { ...metadata, content })
        : await createPost({ ...metadata, content });

      if (result.success) {
        toast.success(postId ? "Post updated successfully" : "Post created successfully");
        if (!postId && result.post) {
          setPostId(result.post.id);
        }
      } else {
        toast.error(result.error || "An error occurred while saving");
      }
    } catch (error) {
      toast.error("A critical error occurred while saving");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans">
      <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-zinc-900 dark:bg-zinc-100 rounded-lg">
            <FileText className="w-5 h-5 text-white dark:text-zinc-900" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">Post Editor</h1>
            <p className="text-[10px] text-zinc-500 uppercase font-medium">
              {postId ? "Editing existing post" : "Drafting Session"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            onClick={() => setView("metadata")}
            className={cn(
              "gap-2 transition-all",
              view === "metadata" ? "bg-zinc-100 dark:bg-zinc-800" : ""
            )}
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Metadata</span>
          </Button>
          <Button
            onClick={handleSave}
            disabled={isLoading}
            className="gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 px-4 transition-all active:scale-95"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>Save Post</span>
          </Button>
        </div>
      </header>

      <main className="flex-1 relative overflow-hidden flex flex-col p-4 md:p-8 lg:p-12 max-w-6xl mx-auto w-full">
        {view === "metadata" ? (
          <div className="flex-1 flex items-center justify-center animate-in fade-in zoom-in-95 duration-300">
            <MetadataForm
              initialData={metadata}
              onComplete={handleMetadataComplete}
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-2">
              <input
                type="text"
                value={metadata.title}
                onChange={(e) => setMetadata(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter post title..."
                className="text-3xl font-bold bg-transparent border-none outline-none placeholder:text-zinc-300 dark:placeholder:text-zinc-700 w-full"
              />
            </div>
            <div className="flex-1 min-h-[70vh]">
              {typeof window !== "undefined" && (
                <PostEditor
                  initialContent={content}
                  onChange={setContent}
                />
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
