import AboutMe from "@/components/about-me";
import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills2 from "@/components/skills2";

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

      {/* Blog Section */}
      <Blog />

      {/* Services Section */}
      {/* <Services /> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* Contact Section */}
      <Contact />
    </>
  );
}
