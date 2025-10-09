import { ServicesSidebar } from "@/components/post-display/services-sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { myServices, SITE_CONFIG } from "@/lib/data";
import { cn, getRandomColour } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Services",
  keywords: [
    "posts",
    "blog",
    "joseph",
    "opio",
    "computer",
    "science",
    "teacher",
    "gems",
    "xcl",
    "igcse",
    "cambridge",
    "programming",
  ],
  description:
    "Discover a wide range of professional computer science services by Joseph Opio — a passionate educator and technology expert. From private Python tutoring, coding workshops, and curriculum design to web development, 3D animation, automation scripts, and digital transformation for schools, Joseph helps learners, educators, and organisations harness the power of computing. Whether you need engaging lessons, technical guidance, or innovative digital solutions, these services make technology accessible, creative, and impactful.",
  robots: "index, follow",
  openGraph: {
    url: "/services",
    title: "Services",
    description:
      "Discover a wide range of professional computer science services by Joseph Opio — a passionate educator and technology expert. From private Python tutoring, coding workshops, and curriculum design to web development, 3D animation, automation scripts, and digital transformation for schools, Joseph helps learners, educators, and organisations harness the power of computing. Whether you need engaging lessons, technical guidance, or innovative digital solutions, these services make technology accessible, creative, and impactful.",
    images: [
      {
        url: "/images/posts/bg.jpg",
        width: 800,
        height: 800,
        alt: "Joseph Opio",
      },
    ],
    locale: "en_US",
    type: "website",
    siteName: "Joseph Opio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "/images/posts/bg.jpg",
    description:
      "Discover a wide range of professional computer science services by Joseph Opio — a passionate educator and technology expert. From private Python tutoring, coding workshops, and curriculum design to web development, 3D animation, automation scripts, and digital transformation for schools, Joseph helps learners, educators, and organisations harness the power of computing. Whether you need engaging lessons, technical guidance, or innovative digital solutions, these services make technology accessible, creative, and impactful.",
  },
};

export default async function PostsPage() {
  return (
    <div className="pt-10 print:pt-0">
      <div className="my-16 print:hidden">{/* Just a spacer */}</div>
      <div className="container mx-auto px-4 py-8 print:p-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:gap-12">
          <article className="max-w-7xl space-y-20">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl leading-tight font-bold text-balance md:text-5xl print:text-black">
                  Services
                </h1>

                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                  Comprehensive education technology and digital services for
                  schools, educators, and organisations. From curriculum design
                  to web development, I help bridge the gap between technology
                  and learning.{" "}
                  <Link href="/#contact" className="underline">
                    Click here
                  </Link>{" "}
                  to contact me directly.
                </p>
              </div>
            </div>

            <div className="space-y-20">
              {myServices.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div key={categoryIndex} className="space-y-8">
                    {/* Category Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="bg-accent/10 rounded-lg p-2">
                          <Icon className="text-primary h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                          {category.category}
                        </h2>
                      </div>
                      <div className="bg-accent h-1 w-16 rounded-full" />
                    </div>

                    {/* Services Grid */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {category.items.map((service, serviceIndex) => (
                        <Card
                          key={serviceIndex}
                          className={cn(
                            "group hover:border-accent/50 transition-colors duration-300",
                            getRandomColour("90"),
                          )}
                        >
                          <CardHeader>
                            <CardTitle className="group-hover:text-accent text-xl transition-colors duration-300">
                              {service.item}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-base leading-relaxed">
                              {service.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <section className="border-border border-t">
              <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
                <div className="space-y-6 text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                    Ready to get started?
                  </h2>
                  <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
                    Whether you need tutoring, web development, or consultancy
                    services, I'm here to help bring your educational technology
                    vision to life.
                  </p>
                  <div className="pt-4">
                    <a
                      href="mailto:contact@example.com"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-base font-medium transition-colors duration-200"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <p className="mt-12 hidden border-2 border-slate-500 pt-2 text-center text-sm text-slate-500 italic print:static print:mt-0 print:block print:border-0 print:pt-6 print:text-xs">
              This content was printed from Joseph Opio's site.
              (www.josephopio.com)
            </p>
          </article>
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <ServicesSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
