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
import { Button } from "../ui/button";

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const tl2 = gsap.timeline();

      tl.fromTo(
        ".name-animation",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
          scale: 8,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          scale: 1,
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
          duration: 1,
          stagger: 0.1,
          ease: "elastic.inOut(1, 0.3)",
        },
        "-=0.5",
      );
      tl2.fromTo(
        ".profile-image",
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          stagger: 0.1,
          ease: "elastic.inOut(1, 0.3)",
          direction: "alternate",
        },
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
            Computer Science educator with {new Date().getFullYear() - 2011 + 1}
            + years experience
          </p>

          <div className="flex flex-wrap items-center justify-start gap-4">
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

            <div className="flex items-center justify-start gap-3">
              <Button
                className="social-icon flex h-12 w-12 items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/josephopio/"
                  target="_linkedin"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>

              <Button
                className="social-icon flex h-12 w-12 items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                asChild
              >
                <a
                  href={"https://converter.josephopio.com"}
                  target="_converter"
                >
                  <CameraIcon className="h-6 w-6" />
                </a>
              </Button>
              <Button
                className="social-icon flex h-12 w-12 items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                asChild
              >
                <a
                  href={
                    "https://www.youtube.com/@josephopio/?sub_confirmation=1"
                  }
                  target="_youtube"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </Button>
              <Button
                className="social-icon flex h-12 w-12 items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                asChild
              >
                <a href={"https://github.com/josephopio11"} target="_github">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                className="social-icon flex h-12 w-12 items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                asChild
              >
                <a href={"https://lms.josephopio.com"} target="_school">
                  <GraduationCap className="h-6 w-6" />
                </a>
              </Button>
              {/* <Button
                className="social-icon flex h-12 w-12 items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                asChild
              >
                <a
                  href={
                    "https://www.redbubble.com/people/josephopio/shop?asc=u"
                  }
                  target="_shop"
                >
                  <FaShoppingBag />
                </a>
              </Button> */}
            </div>
          </div>
        </div>

        <div className="profile-image relative order-1 overflow-hidden rounded-full opacity-0 shadow-xl shadow-purple-950/50 md:order-2 md:overflow-auto md:rounded-3xl">
          <div className="border-border/50 flex aspect-square items-center justify-center overflow-hidden border bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm md:aspect-[11/16] lg:aspect-square dark:from-blue-200/40 dark:to-purple-200/20">
            <Image
              src="/me.png"
              fill
              alt="3D Design Element"
              className="profile-image h-3/4 w-3/4 translate-y-4 object-contain opacity-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
