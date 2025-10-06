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

export function NewsletterSignup() {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Mail className="h-5 w-5" />
          Newsletter
        </CardTitle>
        <CardDescription className="text-primary-foreground/80">
          I don't really do this kind of thing... but in case I need help can I
          trust you to be among the first people I can email?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
          />
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full">
            Subscribe
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
