"use client";

import { experiencesData } from "@/lib/data";
import { useTheme } from "next-themes";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <div>
      <section
        id="experience"
        // ref={ref}
        className="container mx-auto mb-28 scroll-mt-28 px-4 py-20 sm:mb-40"
      >
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">Experience</h2>
        <VerticalTimeline
          lineColor={
            theme === "light"
              ? "rgba(156, 163, 175, 0.3)"
              : "rgba(255, 255, 255, 0.05)"
          }
        >
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "rgba(255, 255, 255, 0.25)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="text-lg font-semibold uppercase">
                  {item.title}
                </h3>
                <p className="!mt-0 font-normal">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Experience;
