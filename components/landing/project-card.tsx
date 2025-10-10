import { projectsData } from "@/lib/data";
import { getRandomColour } from "@/lib/utils";
import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

type ProjectCardProps = {
  project: (typeof projectsData)[number];
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="bg-card/50 border-border hover:border-primary/50 group overflow-hidden pt-0 transition-all">
      <div className="border-b-primary my-0 aspect-video overflow-hidden border-b">
        <Image
          width={1000}
          height={1000}
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ objectPosition: "center top" }}
        />
      </div>
      <CardContent className="p-3">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.siteUrl && (
            <Button variant={"link"} size={"icon"} asChild>
              <Link href={project.siteUrl} target={project.title}>
                <LinkIcon className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
        <p className="text-muted-foreground border-primary mb-3 line-clamp-2 text-sm">
          {project.description}
        </p>
        <div className="flex flex-row flex-wrap gap-1">
          {project.tags.map((tag, index) => (
            <span
              className={`${getRandomColour()} shrink-0 rounded-full px-3 py-1 text-xs text-white`}
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
