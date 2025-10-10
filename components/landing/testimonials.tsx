"use client";

import { testimonials } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="container mx-auto px-4 py-20">
      <h2 className="mb-12 text-4xl font-bold md:text-5xl">Testimonials</h2>

      <div className="relative mx-auto max-w-4xl">
        <Card className="bg-card/50 border-border">
          <CardContent className="p-8">
            <p className="mb-6 text-lg leading-relaxed italic">
              &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={
                  testimonials[currentTestimonial].avatar || "/placeholder.svg"
                }
                alt={testimonials[currentTestimonial].name}
                className="h-12 w-12 rounded-full"
              />
              <div>
                <p className="font-semibold">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            onClick={prevTestimonial}
            className="hover:bg-card"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-primary w-8" : "bg-muted"
                }`}
              />
            ))}
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={nextTestimonial}
            className="hover:bg-card"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
