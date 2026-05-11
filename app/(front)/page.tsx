import AboutMe from "@/components/landing/about-me";
import Blog from "@/components/landing/blog";
import Contact from "@/components/landing/contact";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import ServicesCollector from "@/components/landing/services-collector";
import Skills from "@/components/landing/skills";

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      {/* <Skills /> */}
      <Skills />
      {/* <Experience /> */}
      <Blog />
      <ServicesCollector />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
