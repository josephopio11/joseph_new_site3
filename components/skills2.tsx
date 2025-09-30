"use client";

import { skillsRow1, skillsRow2, skillsRow3 } from "@/lib/data";
import Image from "next/image";
import { useRef, useState } from "react";

interface MarqueeRowProps {
  skills: string[];
  speed: "fast" | "medium" | "slow";
  isHovered: boolean;
  onHoverChange: (hovered: boolean) => void;
  reverse?: boolean;
}

const Skills2 = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative container mx-auto overflow-hidden px-4 py-20"
    >
      <Image
        src="/bg.jpg"
        alt="wave"
        fill
        className="absolute inset-0 -z-10 h-56 object-cover opacity-20"
        priority
      />
      <h2 className="mb-4 text-4xl font-bold md:text-5xl">Skills</h2>
      <p className="text-muted-foreground mb-12">
        Transforming ideas into intuitive digital experiences
      </p>
      <div className="relative my-10 md:my-20">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="h-52">
          <div className="w-full space-y-6 overflow-hidden py-8">
            {/* Row 1 - Fast */}
            <MarqueeRow
              skills={skillsRow1}
              speed="slow"
              isHovered={hoveredRow === 1}
              onHoverChange={(hovered) => setHoveredRow(hovered ? 1 : null)}
            />

            {/* Row 2 - Medium */}
            <MarqueeRow
              skills={skillsRow2}
              speed="medium"
              isHovered={hoveredRow === 2}
              onHoverChange={(hovered) => setHoveredRow(hovered ? 2 : null)}
              reverse
            />

            {/* Row 3 - Slow */}
            <MarqueeRow
              skills={skillsRow3}
              speed="fast"
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
      className="relative overflow-visible"
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
            className="flex-shrink-0 overflow-visible rounded-lg border border-white bg-gradient-to-r from-blue-100 to-purple-100 px-8 py-4 shadow-lg shadow-blue-950/50 dark:from-blue-950/50 dark:to-purple-950/50"
          >
            <span className="text-muted-foreground overflow-visible text-lg font-semibold whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
