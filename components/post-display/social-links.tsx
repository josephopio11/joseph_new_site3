import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#", followers: "2.4M" },
  { name: "Facebook", icon: Facebook, href: "#", followers: "1.8M" },
  { name: "LinkedIn", icon: Linkedin, href: "#", followers: "890K" },
  { name: "Instagram", icon: Instagram, href: "#", followers: "1.2M" },
  { name: "YouTube", icon: Youtube, href: "#", followers: "650K" },
]

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Follow Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Button key={social.name} variant="ghost" className="w-full justify-start gap-3 h-auto py-3" asChild>
                <a href={social.href}>
                  <Icon className="h-5 w-5" />
                  <div className="flex-1 text-left">
                    <div className="font-medium">{social.name}</div>
                    <div className="text-xs text-muted-foreground">{social.followers} followers</div>
                  </div>
                </a>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
