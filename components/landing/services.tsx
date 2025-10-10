"use client";

import { fadedColours, myServices } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import LinkTrigger from "./link-trigger";
import SectionTitle from "./section-title";

const Services = () => {
  const [currentService, setCurrentService] = useState(0);

  // Auto scroll cards every 5 seconds when mouse if not hovering

  const services = myServices.flatMap((category) =>
    category.items
      .filter((item) => item.bookable === true)
      .map((item) => ({
        item: item.item,
        description: item.description,
        category: myServices.find((c) => c.category === category.category)
          ?.category,
        icon: category.icon,
      })),
  );

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextService = useCallback(() => {
    setCurrentService((prev) => (prev + 1) % services.length);
  }, [services.length]);

  // const nextService = () => {
  //   setCurrentService((prev) => (prev + 1) % services.length);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextService();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextService]);

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
        <div className="flex items-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={prevService}
            className="hover:bg-card shrink-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[0, 1, 2].map((offset) => {
              const index = (currentService + offset) % services.length;
              const service = services[index];
              return (
                <Card
                  key={index}
                  className={cn(
                    `bg-card/50 border-border hover:border-primary/50 transition-all ${
                      offset === 1 ? "border-primary/50 md:scale-105" : ""
                    }`,
                    fadedColours[index % fadedColours.length],
                  )}
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
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentService(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentService ? "bg-primary w-8" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
