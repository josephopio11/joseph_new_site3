import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/JosephOpio11",
    followers: "0",
  },
  // { name: "Facebook", icon: Facebook, href: "#", followers: "1.8M" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/josephopio/",
    followers: "127",
  },
  // { name: "Instagram", icon: Instagram, href: "#", followers: "1.2M" },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@josephopio/?sub_confirmation=1",
    followers: "231",
  },
];

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Follow Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.name}
                variant="ghost"
                className="h-auto w-full justify-start gap-3 py-3"
                asChild
              >
                <a href={social.href}>
                  <Icon className="h-5 w-5" />
                  <div className="flex-1 text-left">
                    <div className="font-medium">{social.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {social.followers} followers
                    </div>
                  </div>
                </a>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
