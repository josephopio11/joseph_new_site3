import { Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="fixed top-5 left-1/2 container mx-auto w-full -translate-x-1/2 rounded-full border bg-white/50 px-4 py-4 shadow-lg backdrop-blur-sm dark:bg-black/70">
          <nav className="mx-2 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="text-primary h-5 w-5" />
              <span className="text-lg font-semibold">Joseph Opio</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#home"
                className="hover:text-primary text-sm transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="hover:text-primary text-sm transition-colors"
              >
                Services
              </a>
              <a
                href="#projects"
                className="hover:text-primary text-sm transition-colors"
              >
                Our Works
              </a>
              <a
                href="#testimonials"
                className="hover:text-primary text-sm transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="hover:text-primary text-sm transition-colors"
              >
                Contact Us
              </a>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
              <Mail className="mr-1 h-4 w-4" />
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
