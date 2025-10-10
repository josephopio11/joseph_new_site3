"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AuthorBio() {
  const pathname = usePathname();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <User className="text-accent h-5 w-5" />
          About the Author
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/me2.png" alt="Joseph Opio" />
              <AvatarFallback>JO</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-base font-semibold">Joseph Opio</h3>
              <p className="text-muted-foreground text-xs">
                The Computer Science Guy
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I&apos;m a seasoned Computer Science educator with over 13 years of
            teaching experience. I&apos;ve impacted countless students&apos;
            lives through dynamic learning environments. Beyond teaching, I
            excel in freelance web and app development, creating innovative
            solutions with cutting-edge tech. My expertise covers front-end,
            back-end, mobile apps, databases, and UX.
          </p>

          {pathname !== "/posts" && (
            <Link
              href="/posts"
              className="text-primary text-sm font-medium hover:underline"
            >
              View all articles →
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
