import { Card, CardContent } from "./ui/card";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <h2 className="mb-12 text-4xl font-bold md:text-5xl">About me</h2>

      <div className="grid items-start gap-12 md:grid-cols-2">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-purple-300 to-pink-300">
            <img
              src="/3d-illustration-person-working-at-desk-with-laptop.jpg"
              alt="Designer at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I'm Sara Howard, a passionate UI/UX designer with 2+ years of
            experience designing intuitive interfaces for web and mobile. I love
            wireframing, prototyping, and user research, always focusing on
            user-centered solutions that drive engagement.
          </p>

          <Card className="from-primary/70 mb-8 border-0 bg-gradient-to-r to-purple-600/80 dark:from-black dark:shadow-lg dark:shadow-white/20">
            <CardContent className="p-6">
              <p className="leading-relaxed text-white italic">
                I am deeply committed to my work—investing creativity and
                precision into every project to ensure a unique and effective
                user experience.
              </p>
            </CardContent>
          </Card>

          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
