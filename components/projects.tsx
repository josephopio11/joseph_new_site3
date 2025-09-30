import { projects } from "@/lib/data";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-4xl font-bold md:text-5xl">My Projects</h2>
          <p className="text-muted-foreground">
            Discover projects that showcase my passion for design and
            innovation.
          </p>
        </div>
        <Button
          variant="outline"
          className="border-border hover:bg-card bg-transparent"
        >
          See All
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-card/50 border-border hover:border-primary/50 group overflow-hidden transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span
                  className={`${project.tagColor} shrink-0 rounded-full px-3 py-1 text-xs text-white`}
                >
                  {project.tag}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
