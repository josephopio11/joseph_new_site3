import { getRandomPosts } from "@/actions/post";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSortedTagCounts } from "@/lib/posts/getTagCounts";
import { cn, getRandomColour } from "@/lib/utils";
import { Hash } from "lucide-react";

// const topics = [
//   { name: "Artificial Intelligence", count: 234 },
//   { name: "Climate Change", count: 189 },
//   { name: "Cryptocurrency", count: 156 },
//   { name: "Space Exploration", count: 142 },
//   { name: "Renewable Energy", count: 128 },
//   { name: "Cybersecurity", count: 115 },
// ];

export async function PopularTopics() {
  const posts = await getRandomPosts();
  const tagCounts = getSortedTagCounts(posts);

  console.log("tagCounts", tagCounts);

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
          {tagCounts.map((topic) => (
            <Badge
              key={topic.id}
              variant="secondary"
              className={cn(
                "hover:bg-accent hover:text-accent-foreground h-7 cursor-pointer rounded-full text-white capitalize transition-colors",
                getRandomColour(),
              )}
            >
              {topic.name}
              {/* <span className="bg-background text-foreground flex h-4 w-4 items-center justify-center rounded-full p-1 text-[10px] font-light">
                {topic.count}
              </span> */}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
