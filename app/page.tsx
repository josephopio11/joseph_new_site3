import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills2 from "@/components/skills2";
import Testimonials from "@/components/testimonials";

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* My Projects Section */}
      <Projects />

      {/* Services Section */}
      {/* <Skills /> */}
      <Skills2 />

      {/* My Experience Section */}
      <Experience />

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      {/* <Contact /> */}
    </>
  );
}
