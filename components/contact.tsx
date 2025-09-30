import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <h2 className="mb-12 text-4xl font-bold md:text-5xl">Contact</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="from-primary/80 border-0 bg-gradient-to-br to-purple-600/80 dark:border dark:border-white/30 dark:from-black dark:shadow-lg dark:shadow-white/20">
          <CardContent className="p-8">
            <h3 className="mb-4 text-3xl font-bold text-balance text-white">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-white/80">I usually respond within 24 hours.</p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <Input
                  placeholder="Sara"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <Textarea
                  placeholder="Enter message"
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
