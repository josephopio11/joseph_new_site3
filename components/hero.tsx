"use client";

import { cn } from "@/lib/utils";
import gsap from "gsap";
import {
  ArrowRight,
  CameraIcon,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Sparkles,
  Youtube,
} from "lucide-react";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          transformOrigin: "left top",
          ease: "elastic.inOut(1, 0.3)",
          stagger: { each: 0.1, from: "random" },
        },
      );

      tl.fromTo(
        ".my-experience",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "elastic.inOut(1, 0.3)" },
        "-=0.5",
      );
      tl.fromTo(
        ".cta-button",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: { each: 0.1, from: "random" },
          ease: "elastic.inOut(1, 0.3)",
        },
        "-=0.5",
      );
      tl.fromTo(
        ".social-icon",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "elastic.inOut(1, 0.3)",
        },
        "-=0.5",
      );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={cn(
          `name-animation name-animation-${key} inline-block opacity-0 text-shadow-lg`,
          key === "first"
            ? "text-shadow-purple-500/50"
            : "text-shadow-foreground/50",
        )}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return (
    <section
      ref={component}
      id="home"
      className="container mx-auto mt-10 px-4 py-20 md:mt-0 md:py-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-foreground mb-4 flex items-center gap-2 text-xs font-light lg:text-sm">
            WELCOME TO MY WORLD <Sparkles className="h-4 w-4" />
          </p>
          <h1
            className={cn(
              "text-muted-foreground mb-6 text-3xl font-bold text-balance lg:text-5xl",
              urbanist.className,
            )}
          >
            Hi, I'm
            <div className="block text-[clamp(1.5rem,16vmin,5rem)] leading-none font-extrabold tracking-tighter sm:text-[clamp(2rem,12vmin,8rem)] md:text-[clamp(2rem,12vmin,12rem)] lg:text-[clamp(2rem,16vmin,16rem)]">
              <span className="dark:text-primary-foreground text-gray-600 md:block">
                {renderLetters("Joseph", "first")}
              </span>{" "}
              <span className="text-primary md:block">
                {renderLetters("Opio", "last")}
              </span>
            </div>
          </h1>
          <p className="text-muted-foreground dark:text-foreground my-experience mt-10 mb-8 text-sm text-pretty md:text-base lg:text-lg">
            Computer Science educator with over{" "}
            {new Date().getFullYear() - 2011}+ years experience
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground cta-button"
                type="button"
              >
                Contact Me
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-border hover:bg-card cta-button bg-transparent"
            >
              Download CV
              <Download className="mr-2 h-4 w-4" />
            </Button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 py-3 text-lg font-medium sm:pb-3 print:hidden"></div>

            <div className="ml-4 flex items-center gap-3">
              <a
                className="social-icon flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                href="https://www.linkedin.com/in/josephopio/"
                target="_linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                className="social-icon hover:bg-card flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                href={"https://converter.josephopio.com"}
                target="_converter"
              >
                <CameraIcon className="h-4 w-4" />
              </a>
              <a
                className="social-icon flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                href={"https://www.youtube.com/@josephopio/?sub_confirmation=1"}
                target="_youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>

              <a
                className="social-icon flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                href={"https://github.com/josephopio11"}
                target="_github"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                className="social-icon flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                // href={"https://www.redbubble.com/people/josephopio/shop?asc=u"}
                href={"https://lms.josephopio.com"}
                // target="_shop"
                target="_school"
              >
                {/* <FaShoppingBag /> */}
                <GraduationCap className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative order-1 overflow-hidden rounded-full shadow-xl shadow-purple-950/50 md:order-2 md:overflow-auto md:rounded-3xl">
          <div className="border-border/50 flex aspect-square items-center justify-center overflow-hidden border bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm md:aspect-[11/16] lg:aspect-square dark:from-blue-200/40 dark:to-purple-200/20">
            <Image
              src="/me.png"
              fill
              alt="3D Design Element"
              className="h-3/4 w-3/4 translate-y-4 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
