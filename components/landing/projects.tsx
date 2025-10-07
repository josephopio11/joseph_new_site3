import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto scroll-mt-28 px-4 py-20"
    >
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl dark:text-gray-200">
            My Projects
          </h2>
          <p className="text-muted-foreground">
            Discover projects that showcase my passion for innovation.
          </p>
        </div>
        <Button
          variant="outline"
          className="border-border hover:bg-card bg-transparent"
          asChild
        >
          <Link href="/projects">See All</Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projectsData.slice(0, 4).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

type ProjectProps = (typeof projectsData)[number];

function OldProjects({
  title,
  description,
  tags,
  siteUrl,
  imageUrl,
}: ProjectProps) {
  return (
    <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 sm:h-[22rem] sm:pr-8 sm:group-even:pl-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
      <div className="flex h-full flex-col px-5 pt-4 pb-7 sm:max-w-[50%] sm:pt-10 sm:pr-2 sm:pl-10 sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        {siteUrl === "" ? (
          ""
        ) : (
          <Link
            href={siteUrl}
            className="flex flex-shrink-0 cursor-pointer py-2"
            target={title}
          >
            <div className="rounded-full border-2 border-white/50 bg-blue-900/[0.7] px-3 py-1 text-[0.7rem] font-bold tracking-wider text-zinc-50 uppercase shadow-lg shadow-blue-900/50 transition active:translate-y-1 active:shadow-none">
              Check it out
            </div>
          </Link>
        )}
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white uppercase dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute top-8 -right-40 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-[1.04] group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
      />
    </section>
  );
}
