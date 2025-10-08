"use client";

import { useActiveSectionContext } from "@/context/activeSectionContext";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navigation = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 print:hidden"
    >
      <div className="container mx-auto">
        <div className="fixed top-5 left-1/2 container mx-auto w-full -translate-x-1/2 rounded-full border bg-white/50 px-4 py-4 shadow-lg backdrop-blur-sm dark:bg-black/70">
          <nav className="mx-2 flex items-center justify-between">
            <Link href="/#" className="flex items-center gap-2">
              <Sparkles className="text-primary h-5 w-5" />
              <span className="text-lg font-semibold">Joseph Opio</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <motion.div
                  className="relative flex h-3/4 items-center justify-center"
                  key={link.href}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <a
                    href={link.href}
                    className={cn(
                      "hover:text-primary text-sm font-bold transition-colors",
                      activeSection === link.name && "text-primary",
                    )}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="border-b-primary/40 absolute inset-0 -z-10 rounded border-b-2 p-2 px-1 text-transparent transition-colors duration-300"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      >
                        {link.name}
                      </motion.span>
                    )}
                  </a>
                </motion.div>
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
    </motion.header>
  );
};

export default Navigation;
