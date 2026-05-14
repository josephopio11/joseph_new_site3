"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "@/lib/generated/prisma/client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  categories: Category[];
};

export function PostsFilters({ categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // check if there are any params and return true or false
  const hasParams = searchParams.toString().length > 0;

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery.length === 0) params.delete("q");
    // if (searchQuery.length < 3) return;

    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        params.set("q", searchQuery);
      } else {
        params.delete("q");
      }

      params.set("page", "1");
      router.replace(`?${params.toString()}`);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, searchParams.toString]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    params.set("page", "1");
    router.replace(`?${params.toString()}`);
  };

  const handlePerPageChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set("per_page", value);
    } else {
      params.delete("per_page");
    }
    params.set("page", "1");
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <div className="relative w-full">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <Input
          className="pl-9"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Select
        defaultValue={searchParams.get("category") || "all"}
        onValueChange={handleCategoryChange}
      >
        <SelectTrigger className="w-full max-w-60">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        onValueChange={handlePerPageChange}
        defaultValue={searchParams.get("per_page") || "12"}
      >
        <SelectTrigger className="w-full max-w-37.5">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="6">6</SelectItem>
          <SelectItem value="12">12</SelectItem>
          <SelectItem value="18">18</SelectItem>
          <SelectItem value="24">24</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
