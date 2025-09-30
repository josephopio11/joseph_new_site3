import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
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

      {/* Services Section */}
      {/* <Skills /> */}
      <Skills2 />

      {/* Services Section */}
      <Services />

      {/* My Projects Section */}
      <Projects />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
