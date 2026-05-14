"use client";

import { subscribeToNewsletter } from "@/actions/newsletter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { Spinner } from "../ui/spinner";

export function NewsletterSignup() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    await subscribeToNewsletter({ email, name });

    setLoading(false);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {loading && (
        <div className="bg-background/50 absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <Spinner className="text-muted-foreground h-8 w-8" />
        </div>
      )}
      <Card className="bg-primary dark:bg-primary/50 text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Mail className="h-5 w-5" />
            Newsletter
          </CardTitle>
          <CardDescription className="text-primary-foreground/80">
            I don&apos;t really do this kind of thing... but in case I need help
            can I trust you to be among the first people I can email?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Peter Cute Dude"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="iamcute@me.com"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              required
            />
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
