import Markdown from "markdown-to-jsx";

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg text-foreground mt-8 !max-w-none space-y-6">
      {/* prose-pre:w-fit 
      prose-pre:max-w-none 
      prose-pre:overflow-x-scroll  */}
      <article className="text-foreground prose-blockquote:dark:invert prose-blockquote:text-sm prose-h1:text-red-500 prose-em:text-purple-500 prose-h2:text-emerald-500 prose-h4:text-orange-500 prose-h3:text-sky-500 prose-strong:text-foreground print:prose-strong:text-black prose-pre:whitespace-pre-wrap prose-pre:break-words print:text-sm print:text-black">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
}
