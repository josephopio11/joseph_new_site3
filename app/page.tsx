import AboutMe from "@/components/landing/about-me";
import Blog from "@/components/landing/blog";
import Contact from "@/components/landing/contact";
import Experience from "@/components/landing/experience";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Services from "@/components/landing/services";
import Skills from "@/components/landing/skills";

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      {/* <Skills /> */}
      <Skills />
      <Experience />
      <Blog />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
}
