import { getRandomPosts } from "@/actions/post";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { shufflePosts } from "@/lib/posts/getPostMetadataRnd";
import { TrendingUp } from "lucide-react";

type Props = {
  title?: string;
};

export async function TrendingArticles({ title }: Props) {
  const posts = (await shufflePosts(await getRandomPosts())).slice(0, 6);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="text-primary h-5 w-5" />
          {title || "Related Articles"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((article, index) => (
            <a
              key={article.slug}
              href={`/posts/${article.slug}`}
              className="group block"
            >
              <div className="flex gap-3">
                <span className="text-muted-foreground/40 group-hover:text-accent text-2xl font-bold transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 space-y-1">
                  <h3 className="group-hover:text-primary line-clamp-2 text-sm leading-snug font-semibold transition-colors">
                    {article.title}
                  </h3>
                  <div className="text-muted-foreground flex items-center gap-2 text-xs">
                    {/* {article?.tags && article?.tags?.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1">
                        {article.tags?.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            aria-label={tag}
                            className={`text-xs font-medium text-white ${getRandomColour()} print:text-black`}
                          >
                            {tag.slice(0, 25)}
                          </Badge>
                        ))}
                      </div>
                    )} */}
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
