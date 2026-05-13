"use client";

import { uploadPostImage } from "@/actions/post";
import { Badge as UIBadge } from "@/components/ui/badge";
import { Button as UIButton } from "@/components/ui/button";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Loader2,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
// Redefining imports because the search output showed them in components/ui
// I'll need to make sure the paths are correct based on the find result.
import { Input as UIInput } from "@/components/ui/input";
import { Label as UILabel } from "@/components/ui/label";
import { Textarea as UITextarea } from "@/components/ui/textarea";
import { cn, sluggify } from "@/lib/utils";

interface MetadataFormProps {
  initialData?: any;
  onComplete: (data: any) => void;
}

export default function MetadataForm({
  initialData,
  onComplete,
}: MetadataFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    subtitle: initialData?.subtitle || "",
    categoryId: initialData?.categoryId || "",
    tags: initialData?.tags || [],
    featuredImage: initialData?.featuredImage || "",
  });
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (formData.title && !formData.slug) {
      setFormData((prev) => ({
        ...prev,
        slug: sluggify(formData.title),
      }));
    }
  }, [formData.title]);

  const handleTitleChange = (val: string) => {
    setFormData((prev) => ({ ...prev, title: val }));
    if (!formData.slug || (initialData && false)) {
      // only auto-generate if slug is empty or we're in creation mode
      setFormData((prev) => ({ ...prev, slug: sluggify(val) }));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append("file", file);
    formDataUpload.append("postTitle", formData.title || "untitled-post");

    try {
      const result = await uploadPostImage(formDataUpload);
      if (result.success && result.url) {
        setFormData((prev) => ({ ...prev, featuredImage: result.url }));
        toast.success("Featured image uploaded");
      } else {
        toast.error(result.error || "Upload failed");
      }
    } catch (err) {
      toast.error("An error occurred during upload");
    } finally {
      setIsUploading(false);
    }
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = () => {
    onComplete(formData);
  };

  return (
    <div className="mx-auto w-full max-w-xl space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-12 rounded-full transition-all duration-300",
                step >= i
                  ? "bg-zinc-900 dark:bg-zinc-100"
                  : "bg-zinc-200 dark:bg-zinc-800",
              )}
            />
          ))}
        </div>
        <span className="text-xs font-medium tracking-wider text-zinc-400 uppercase">
          Step {step} of 3
        </span>
      </div>

      {step === 1 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6 duration-500">
          <div className="space-y-2">
            <UILabel htmlFor="title">Post Title</UILabel>
            <UIInput
              id="title"
              placeholder="The Art of Minimalism..."
              value={formData.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="text-lg font-medium"
            />
          </div>
          <div className="space-y-2">
            <UILabel htmlFor="slug">URL Slug</UILabel>
            <UIInput
              id="slug"
              placeholder="the-art-of-minimalism"
              value={formData.slug}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, slug: e.target.value }))
              }
            />
          </div>
          <div className="space-y-2">
            <UILabel htmlFor="subtitle">Subtitle</UILabel>
            <UITextarea
              id="subtitle"
              placeholder="A deep dive into the essence of less."
              value={formData.subtitle}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subtitle: e.target.value }))
              }
              className="min-h-[100px] resize-none"
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6 duration-500">
          <div className="space-y-2">
            <UILabel>Category</UILabel>
            <div className="grid grid-cols-2 gap-3">
              {["Design", "Development", "Productivity", "Lifestyle"].map(
                (cat) => (
                  <div
                    key={cat}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, categoryId: cat }))
                    }
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all",
                      formData.categoryId === cat
                        ? "border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-900"
                        : "border-zinc-100 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700",
                    )}
                  >
                    <div
                      className={cn(
                        "h-4 w-4 rounded-full border-2",
                        formData.categoryId === cat
                          ? "border-zinc-900 dark:border-zinc-100"
                          : "border-zinc-300 dark:border-zinc-700",
                      )}
                    />
                    <span className="font-medium">{cat}</span>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="space-y-2">
            <UILabel>Tags</UILabel>
            <div className="mb-3 flex flex-wrap gap-2">
              {formData.tags.map((tag: string, idx: number) => (
                <UIBadge
                  key={idx}
                  variant="secondary"
                  className="gap-1 px-3 py-1"
                >
                  {tag}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-red-500"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        tags: prev.tags.filter((t: string) => t !== tag),
                      }))
                    }
                  />
                </UIBadge>
              ))}
            </div>
            <UIInput
              placeholder="Press Enter to add tags..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const val = (e.target as HTMLInputElement).value.trim();
                  if (val && !formData.tags.includes(val)) {
                    setFormData((prev) => ({
                      ...prev,
                      tags: [...prev.tags, val],
                    }));
                  }
                  (e.target as HTMLInputElement).value = "";
                }
              }}
            />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6 duration-500">
          <UILabel>Featured Image</UILabel>
          <div
            className={cn(
              "relative flex aspect-video flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-4 transition-all",
              formData.featuredImage
                ? "border-zinc-200 dark:border-zinc-800"
                : "border-zinc-300 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600",
            )}
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            {formData.featuredImage ? (
              <div className="absolute inset-0 p-2">
                <img
                  src={formData.featuredImage}
                  className="h-full w-full rounded-xl object-cover"
                  alt="Featured"
                />
              </div>
            ) : (
              <>
                <div className="rounded-full bg-zinc-100 p-3 dark:bg-zinc-800">
                  <ImageIcon className="h-6 w-6 text-zinc-500" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    Click to upload image
                  </p>
                  <p className="text-sm text-zinc-500">PNG, JPG or WebP</p>
                </div>
              </>
            )}
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          {isUploading && (
            <div className="flex animate-pulse items-center justify-center gap-2 text-sm text-zinc-500">
              <Loader2 className="h-4 w-4 animate-spin" />
              Uploading image...
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-between border-t border-zinc-100 pt-8 dark:border-zinc-900">
        <UIButton
          variant="ghost"
          onClick={prevStep}
          disabled={step === 1}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </UIButton>

        {step < 3 ? (
          <UIButton onClick={nextStep} className="gap-2 px-6">
            Next
            <ChevronRight className="h-4 w-4" />
          </UIButton>
        ) : (
          <UIButton
            onClick={handleSubmit}
            className="gap-2 bg-zinc-900 px-6 text-white dark:bg-zinc-100 dark:text-zinc-900"
          >
            Complete Setup
            <Check className="h-4 w-4" />
          </UIButton>
        )}
      </div>
    </div>
  );
}
