interface ArticleContentProps {
  content: string | null;
}

export function ArticleContent({ content }: ArticleContentProps) {
  if (!content) return null;
  return (
    <div className="prose prose-lg text-foreground mt-8 max-w-none! space-y-6">
      {/* prose-pre:w-fit 
      prose-pre:max-w-none 
      prose-pre:overflow-x-scroll  */}
      <article className="text-foreground prose-blockquote:dark:invert prose-blockquote:text-sm prose-h1:text-red-500 prose-em:text-purple-500 prose-h2:text-emerald-500 prose-h4:text-orange-500 prose-a:text-primary prose-h3:text-sky-500 prose-strong:text-foreground print:prose-strong:text-black prose-pre:whitespace-pre-wrap prose-pre:wrap-break-word print:text-sm print:text-black">
        <div
          className="prose-pre:whitespace-pre-wrap prose-pre:wrap-break-word print:text-sm print:text-black"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <If it works, it works>
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}
