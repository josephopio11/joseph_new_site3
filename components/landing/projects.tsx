import { projectsData } from "@/lib/data";
import Link from "next/link";
import { Button } from "../ui/button";
import LinkTrigger from "./link-trigger";
import ProjectCard from "./project-card";
import SectionTitle from "./section-title";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto scroll-mt-28 px-4 sm:my-30"
    >
      <LinkTrigger section="Projects" />
      <div className="mb-12 flex items-center justify-between">
        <SectionTitle
          title="My Projects"
          sometext="Discover projects that showcase my passion for innovation."
        />

        <Button
          variant="outline"
          className="border-border hover:bg-card bg-transparent"
          asChild
        >
          <Link href="/projects">See All</Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projectsData.slice(0, 4).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
