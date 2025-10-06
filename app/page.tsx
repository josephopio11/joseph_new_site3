import AboutMe from "@/components/landing/about-me";
import Blog from "@/components/landing/blog";
import Contact from "@/components/landing/contact";
import Experience from "@/components/landing/experience";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Skills2 from "@/components/landing/skills2";

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
