"use client";

import { fadedColours, myServices } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import LinkTrigger from "./link-trigger";
import SectionTitle from "./section-title";

const Services = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);

  const services = useMemo(
    () =>
      myServices.flatMap((category) =>
        category.items
          .filter((item) => item.bookable === true)
          .map((item) => ({
            id: `${category.category}-${item.item}`,
            item: item.item,
            description: item.description,
            category: myServices.find((c) => c.category === category.category)
              ?.category,
            icon: category.icon,
          })),
      ),
    [],
  );

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextService = useCallback(() => {
    setCurrentService((prev) => (prev + 1) % services.length);
  }, [services.length]);

  // Auto scroll cards every 5 seconds when mouse is not hovering
  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      nextService();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextService, isHovering]);

  const visibleServices = useMemo(() => {
    return [0, 1, 2].map((offset) => {
      const index = (currentService + offset) % services.length;
      return { ...services[index], displayIndex: index };
    });
  }, [currentService, services]);

  return (
    <section
      id="services"
      className="container mx-auto scroll-mt-28 px-4 py-20"
    >
      <LinkTrigger section="Services" />
      <div className="mb-12 flex items-center justify-between">
        <SectionTitle
          title="Services"
          sometext="Transforming ideas into intuitive digital experiences"
        />
        <Button
          variant="outline"
          className="border-border hover:bg-card bg-transparent"
          asChild
        >
          <a href="/services">See All</a>
        </Button>
      </div>

      <div className="relative">
        <section
          className="mb-4 flex items-center gap-4"
          aria-label="Services carousel"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Button
            size="icon"
            variant="ghost"
            onClick={prevService}
            className="hover:bg-card shrink-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {visibleServices.map((service, offset) => {
              const isActive = offset === 1;
              const isHovered = hoveredCardIndex === service.displayIndex;
              const isAnyHovered = hoveredCardIndex !== null;

              return (
                <Card
                  key={service.id}
                  className={cn(
                    "border-border bg-card/50 hover:border-primary/50 transition-all duration-500 ease-in-out",
                    {
                      "border-primary/50 z-50 md:z-10 md:scale-120 md:shadow-lg":
                        isActive && !isAnyHovered,
                      "md:scale-95 md:opacity-80": !isActive && !isAnyHovered,
                      "border-primary/50 md:z-10 md:scale-110 md:shadow-lg":
                        isHovered,
                      "md:scale-90 md:opacity-60": isAnyHovered && !isHovered,
                    },
                    fadedColours[service.displayIndex % fadedColours.length],
                  )}
                  onMouseEnter={() => setHoveredCardIndex(service.displayIndex)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                >
                  <CardContent className="">
                    <div className="bg-background/50 mb-4 flex items-center justify-center gap-2 rounded-lg p-2">
                      <service.icon className="h-12 w-12" />
                      <h3 className="mb-2 font-semibold lg:text-lg">
                        {service.item}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Button>Learn More...</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={nextService}
            className="hover:bg-card shrink-0"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </section>

        <div className="mt-8 flex justify-center gap-3">
          {services.map((service, index) => (
            <Card
              key={service.id}
              // type="button"
              onClick={() => setCurrentService(index)}
              className={cn(
                "flex-1 rounded-xl p-2",
                //   "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all hover:border-primary/50",
                index === currentService
                  ? "border-primary/50 bg-primary/10 shadow-foreground/20 shadow-xl"
                  : "border-border bg-card/50 opacity-20",
              )}
            >
              <CardContent className="flex flex-col items-center justify-center gap-4 text-center">
                <service.icon className="h-8 w-8" />
                <span className="hidden md:inline">{service.item}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
