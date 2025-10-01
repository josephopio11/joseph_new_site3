"use client";

import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Pencil,
  Smartphone,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "UI/UX",
      description:
        "Creating intuitive and visually appealing user experiences.",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Web Design",
      description:
        "Designing responsive, engaging websites tailored to user needs.",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "UI/UX",
      description:
        "Creating intuitive and visually appealing user experiences.",
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Web Design",
      description:
        "Designing responsive, engaging websites tailored to user needs.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "App Design",
      description: "Crafting seamless and user-friendly mobile app interfaces.",
    },
    {
      icon: <Pencil className="h-6 w-6" />,
      title: "Prototyping & Wireframing",
      description: "Interactive prototypes and wireframes for better flow.",
    },
  ];

  const [currentService, setCurrentService] = useState(0);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto scroll cards every 5 seconds when mouse if not hovering
  useEffect(() => {
    const interval = setInterval(() => {
      nextService();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="services" className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-4xl font-bold md:text-5xl">Services</h2>
      <p className="text-muted-foreground mb-12">
        Transforming ideas into intuitive digital experiences
      </p>

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

          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {[0, 1, 2].map((offset) => {
              const index = (currentService + offset) % services.length;
              const service = services[index];
              return (
                <Card
                  key={index}
                  className={`bg-card/50 border-border hover:border-primary/50 transition-all ${
                    offset === 1 ? "border-primary/50 md:scale-105" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="bg-background/50 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
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
