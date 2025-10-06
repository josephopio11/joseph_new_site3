import { User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AuthorBio() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <User className="h-5 w-5 text-accent" />
          About the Author
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Sarah Johnson</h3>
              <p className="text-sm text-muted-foreground">Senior Tech Reporter</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Sarah has been covering technology and innovation for over a decade. She specializes in AI, machine
            learning, and emerging technologies.
          </p>
          <a href="#" className="text-sm text-primary hover:underline font-medium">
            View all articles →
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
