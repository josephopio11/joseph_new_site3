/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <It still works> */
import { cn } from "@/lib/utils";

interface PostContentProps {
  content: string;
  className?: string;
}

export default function PostContent({ content, className }: PostContentProps) {
  return (
    <div
      className={cn("prose prose-zinc dark:prose-invert max-w-none", className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
