import { navLinks } from "@/lib/data";
import { Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 print:hidden">
      <div className="container mx-auto">
        <div className="fixed top-5 left-1/2 container mx-auto w-full -translate-x-1/2 rounded-full border bg-white/50 px-4 py-4 shadow-lg backdrop-blur-sm dark:bg-black/70">
          <nav className="mx-2 flex items-center justify-between">
            <Link href="/#" className="flex items-center gap-2">
              <Sparkles className="text-primary h-5 w-5" />
              <span className="text-lg font-semibold">Joseph Opio</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary text-sm font-bold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a href="/#contact">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                type="button"
              >
                <Mail className="mr-1 h-4 w-4" />
                Contact
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
