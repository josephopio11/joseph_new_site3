import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <h2 className="mb-12 text-4xl font-bold md:text-5xl">About me</h2>

      <div className="grid items-start gap-12 md:grid-cols-5">
        <div className="relative md:col-span-2">
          <div className="aspect-video overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-br from-purple-300 to-pink-300 shadow-xl shadow-purple-950/50 md:aspect-[3/7] lg:aspect-[3/5] xl:aspect-[7/12] 2xl:aspect-[4/5]">
            <img
              src="/3d-illustration-person-working-at-desk-with-laptop.jpg"
              alt="Designer at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="columns-1 sm:columns-2 md:columns-1 lg:columns-2 xl:columns-2">
            <p
              className={cn(
                "text-muted-foreground dark:text-foreground mb-4 text-sm leading-relaxed lg:text-base",
                "first-letter:float-left first-letter:pr-4 first-letter:text-7xl first-letter:font-bold",
              )}
            >
              Welcome to my online profile! I am Joseph Opio, a dedicated
              Computer Science teacher with more than{" "}
              {new Date().getFullYear() - 2011 + 1} years of experience in the
              education field. Throughout my career, I have had the privilege of
              making a significant impact on the lives of numerous students,
              fostering a dynamic and engaging learning environment to nurture
              their potential.
            </p>
            <p className="text-muted-foreground dark:text-foreground mb-4 text-sm leading-relaxed lg:text-base">
              My passion for technology led me to delve into the world of
              freelance web and app development. With a strong command of
              programming languages and cutting-edge technologies, I take pride
              in crafting creative and innovative solutions for clients seeking
              to enhance their online presence. From responsive and
              user-friendly websites to intuitive mobile applications, I am
              committed to delivering high-quality work that aligns with the
              latest industry trends.
            </p>
            <p className="text-muted-foreground dark:text-foreground mb-4 text-sm leading-relaxed lg:text-base">
              My expertise spans various fields, including front-end and
              back-end web development, mobile app development, database design,
              and user experience (UX) optimization. To stay ahead in this
              ever-evolving tech landscape, I am continuously learning and
              seeking out new opportunities for personal and professional
              growth.
            </p>
            <p className="text-muted-foreground dark:text-foreground mb-4 text-sm leading-relaxed lg:text-base">
              I thrive in collaborative environments, valuing teamwork and
              effective communication. Whether I am guiding students on their
              educational journey or collaborating with clients on their
              projects, I approach each endeavor with enthusiasm and dedication.
            </p>
            <p className="text-muted-foreground dark:text-foreground mb-4 text-sm leading-relaxed lg:text-base">
              Join me on this exciting journey as I continue to inspire and
              innovate in the realms of education and technology. If you are
              looking for a passionate and knowledgeable educator or a skilled
              web and app developer, I am here to help you achieve your goals.
            </p>
          </div>

          <Card className="from-primary/70 my-8 border-0 bg-gradient-to-r to-purple-600/80 dark:from-black dark:shadow-lg dark:shadow-white/20">
            <CardContent className="p-6">
              <p className="leading-relaxed text-white italic">
                Feel free to{" "}
                <a href="#contact" className="underline">
                  reach out to me
                </a>{" "}
                for any inquiries or collaboration opportunities. Let&apos;s
                explore the limitless possibilities that technology offers
                together!
              </p>
            </CardContent>
          </Card>

          {/* <div>
            <h3 className="mb-4 font-semibold">Skills</h3>
            <div className="flex gap-3">
              <div className="bg-card border-border flex h-12 w-12 items-center justify-center rounded-lg border">
                <span className="font-mono text-xs">Fg</span>
              </div>
              <div className="bg-card border-border flex h-12 w-12 items-center justify-center rounded-lg border">
                <span className="font-mono text-xs">Ai</span>
              </div>
              <div className="bg-card border-border flex h-12 w-12 items-center justify-center rounded-lg border">
                <span className="font-mono text-xs">Ps</span>
              </div>
              <div className="bg-card border-border flex h-12 w-12 items-center justify-center rounded-lg border">
                <span className="font-mono text-xs">Sk</span>
              </div>
              <div className="bg-card border-border flex h-12 w-12 items-center justify-center rounded-lg border">
                <span className="font-mono text-xs">Xd</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
