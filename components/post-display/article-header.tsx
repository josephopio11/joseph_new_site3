import { Calendar, User } from "lucide-react";
import Image from "next/image";

interface ArticleHeaderProps {
  title: string;
  subtitle: string;
  date: string;
  imageSrc: string;
}

export function ArticleHeader({
  title,
  subtitle,
  date,
  imageSrc,
}: ArticleHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl leading-tight font-bold text-balance md:text-5xl print:text-black">
          {title}
        </h1>

        <p className="text-muted-foreground text-xl leading-relaxed text-pretty">
          {subtitle}
        </p>
      </div>

      <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Joseph Opio</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <time dateTime="2025-03-10">{new Date(date).toDateString()}</time>
        </div>
        <span>8 min read</span>
      </div>

      <div className="bg-muted aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={`/images/posts/${imageSrc}`}
          alt={title}
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>
    </div>
  );
}
