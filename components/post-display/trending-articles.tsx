import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getPostMetadataRnd, {
  shufflePosts,
} from "@/lib/posts/getPostMetadataRnd";
import { getRandomColour } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";

const trendingArticles = [
  {
    id: 1,
    title: "Breaking: Major Climate Agreement Reached at Global Summit",
    category: "Environment",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Tech Giant Announces Revolutionary Quantum Computing Breakthrough",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Markets Rally as Economic Indicators Show Strong Growth",
    category: "Business",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "New Study Reveals Surprising Benefits of Mediterranean Diet",
    category: "Health",
    readTime: "6 min read",
  },
];

export async function TrendingArticles() {
  const posts = (await shufflePosts(getPostMetadataRnd())).slice(0, 4);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="text-primary h-5 w-5" />
          Related Articles
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {posts.map((article, index) => (
            <a key={article.slug} href={article.slug} className="group block">
              <div className="flex gap-3">
                <span className="text-muted-foreground/40 group-hover:text-accent text-2xl font-bold transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 space-y-1">
                  <h3 className="group-hover:text-primary line-clamp-2 text-sm leading-snug font-semibold transition-colors">
                    {article.title}
                  </h3>
                  <div className="text-muted-foreground flex items-center gap-2 text-xs">
                    {/* @ts-ignore */}
                    {article?.tags?.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1">
                        {article.tags?.slice(0, 2).map((tag) => (
                          <Badge
                            aria-label={tag}
                            className={`text-xs font-medium text-white ${getRandomColour()} print:text-black`}
                          >
                            {tag.slice(0, 25)}
                          </Badge>
                        ))}
                      </div>
                    )}
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
