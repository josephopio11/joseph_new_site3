"use client";

import { skillsRow1, skillsRow2, skillsRow3 } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";

interface MarqueeRowProps {
  skills: string[];
  speed: "fast" | "medium" | "slow";
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
  reverse?: boolean;
  place?: "back" | "middle" | "front";
}

const Skills2 = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative container mx-auto overflow-hidden py-20"
    >
      {/* Top blur */}
      <div className="from-background via-background/80 to-background/0 absolute -top-2 -left-1 -z-10 h-1/4 w-full bg-gradient-to-b dark:h-1/2" />

      {/* bottom blur */}
      <div className="from-background via-background/80 to-background/0 absolute -bottom-2 -left-1 -z-10 h-1/4 w-full bg-gradient-to-t" />

      {/* left blur */}
      <div className="from-background to-background/0 absolute -top-2 -left-1 -z-10 h-[130%] w-1/6 bg-gradient-to-r" />

      {/* right blur */}
      <div className="from-background to-background/0 absolute -top-2 -right-1 -z-10 h-[130%] w-1/6 bg-gradient-to-l" />

      <div />
      <Image
        src="/bg.jpg"
        alt="wave"
        fill
        className="absolute inset-0 -z-30 h-56 object-cover opacity-20"
        priority
      />
      <div className="px-4">
        <h2 className="z-20 mb-4 text-4xl font-bold md:text-5xl">Skills</h2>
        <p className="text-muted-foreground mb-12">
          Transforming ideas into intuitive digital experiences
        </p>
      </div>
      <div className="relative -z-20 my-10 md:my-0">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="h-52">
          <div className="w-full space-y-6 overflow-hidden py-8">
            {/* Row 1 - Fast */}
            <MarqueeRow
              skills={skillsRow3}
              speed="slow"
              place="back"
              isHovered={hoveredRow === 1}
              onHoverChange={(hovered) => setHoveredRow(hovered ? 1 : null)}
            />

            {/* Row 2 - Medium */}
            <MarqueeRow
              skills={skillsRow2}
              speed="medium"
              place="middle"
              isHovered={hoveredRow === 2}
              onHoverChange={(hovered) => setHoveredRow(hovered ? 2 : null)}
              reverse
            />

            {/* Row 3 - Slow */}
            <MarqueeRow
              skills={skillsRow1}
              speed="fast"
              place="front"
              isHovered={hoveredRow === 3}
              onHoverChange={(hovered) => setHoveredRow(hovered ? 3 : null)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills2;

function MarqueeRow({
  skills,
  speed,
  isHovered,
  onHoverChange,
  reverse = false,
  place = "middle",
}: MarqueeRowProps) {
  const [isReversed, setIsReversed] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  const duplicatedSkills = [...skills, ...skills, ...skills];

  const shouldReverse = reverse ? !isReversed : isReversed;

  const speedDuration = {
    fast: "20s",
    medium: "30s",
    slow: "40s",
  }[speed];

  const handleMouseLeave = () => {
    onHoverChange(false);
    setIsReversed((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "relative overflow-visible",
        place === "back" && "z-0 -mb-4 scale-70",
        place === "middle" && "z-10 my-0 scale-100",
        place === "front" && "z-20 -mt-1 scale-130",
      )}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={animationRef}
        className={`flex gap-6 overflow-visible ${isHovered ? "paused" : ""}`}
        style={{
          width: "max-content",
          animation: `marquee ${speedDuration} linear infinite`,
          animationDirection: shouldReverse ? "reverse" : "normal",
          animationPlayState: isHovered ? "paused" : "running",
          transition: "animation-play-state 0.8s ease-out",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="relative flex-shrink-0 overflow-visible rounded-full border border-purple-100 bg-white/90 px-8 py-4 shadow-lg shadow-blue-950/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 hover:shadow-xl dark:border-purple-200/20 dark:bg-black dark:from-blue-950/50 dark:to-purple-950/50"
          >
            {/* Cloud shape decorations */}
            <div className="absolute -top-2 -left-2 h-6 w-6 rounded-full bg-white/80 blur-sm dark:bg-purple-200/10" />
            <div className="absolute -top-1 -right-2 h-8 w-8 rounded-full bg-white/70 blur-sm dark:bg-purple-200/10" />
            <div className="absolute -bottom-2 left-1/4 h-7 w-7 rounded-full bg-white/75 blur-sm dark:bg-purple-200/10" />
            <span className="relative z-10 text-sm font-medium whitespace-nowrap text-purple-950 dark:text-white">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
