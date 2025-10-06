import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getPostMetadataRnd from "@/lib/posts/getPostMetadataRnd";
import { getTagCounts } from "@/lib/utils";
import { Hash } from "lucide-react";

const topics = [
  { name: "Artificial Intelligence", count: 234 },
  { name: "Climate Change", count: 189 },
  { name: "Cryptocurrency", count: 156 },
  { name: "Space Exploration", count: 142 },
  { name: "Renewable Energy", count: 128 },
  { name: "Cybersecurity", count: 115 },
];

export function PopularTopics() {
  const posts = getPostMetadataRnd();

  const sortedTags = getTagCounts(posts);
  console.log(sortedTags);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Hash className="text-accent h-5 w-5" />
          Popular Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Badge
              key={topic.name}
              variant="secondary"
              className="hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
            >
              {topic.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
