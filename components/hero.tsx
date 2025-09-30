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
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto mt-10 px-4 py-20 md:mt-0 md:py-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-muted-foreground mb-4 flex items-center gap-2 text-sm">
            WELCOME TO MY WORLD <Sparkles className="h-4 w-4" />
          </p>
          <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">
            Hi, I'm <span className="text-primary">Joseph Opio</span>
          </h1>
          <p className="text-muted-foreground mb-8 text-lg text-pretty">
            I'm a seasoned Computer Science educator with over{" "}
            {new Date().getFullYear() - 2011}+ years of teaching experience.
            I've impacted countless students' lives through dynamic learning
            environments.
          </p>
          <p className="text-muted-foreground mb-8 text-lg text-pretty">
            Beyond teaching, I excel in freelance web and app development,
            creating innovative solutions with cutting-edge tech. My expertise
            covers front-end, back-end, mobile apps, databases, and UX.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Me
              <ArrowRight className="mr-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-card bg-transparent"
            >
              Download CV
              <Download className="mr-2 h-4 w-4" />
            </Button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 py-3 text-lg font-medium sm:pb-3 print:hidden"></div>

            <div className="ml-4 flex items-center gap-3">
              <a
                className="flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                href="https://www.linkedin.com/in/josephopio/"
                target="_linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                className="hover:bg-card flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                href={"https://converter.josephopio.com"}
                target="_converter"
              >
                <CameraIcon className="h-4 w-4" />
              </a>
              <a
                className="flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                href={"https://www.youtube.com/@josephopio/?sub_confirmation=1"}
                target="_youtube"
              >
                <Youtube className="h-4 w-4" />
              </a>

              <a
                className="flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
                href={"https://github.com/josephopio11"}
                target="_github"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                className="flex items-center gap-2 rounded-full bg-white p-4 text-gray-900 shadow-md shadow-gray-400 transition hover:scale-[1.02] hover:font-bold hover:shadow-lg hover:shadow-gray-900 focus:scale-[1.02] active:scale-[0.9] active:border-none active:bg-transparent active:shadow-none dark:border dark:border-slate-600 dark:bg-gray-900 dark:text-gray-300 dark:shadow-gray-600"
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

        <div className="relative order-1 overflow-hidden rounded-full md:order-2 md:overflow-auto md:rounded-none">
          <div className="border-border/50 flex aspect-square items-center justify-center rounded-3xl border bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm dark:from-blue-200/40 dark:to-purple-200/20">
            <Image
              src="/me.png"
              fill
              alt="3D Design Element"
              className="h-3/4 w-3/4 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
