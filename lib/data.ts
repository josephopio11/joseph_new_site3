import corpcommentImg from "@/public/corpcomment.png";
import fileconvImg from "@/public/fileconv.png";
import giaImg from "@/public/gia.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { FaReact } from "react-icons/fa";

import { LuGraduationCap } from "react-icons/lu";

import { MdOutlineBabyChangingStation } from "react-icons/md";

export const projects = [
  {
    title: "Smile App",
    description:
      "Intuitive and visually appealing designs that enhance user experience.",
    image: "/colorful-mobile-app-interface-with-neon-lights.jpg",
    tag: "App Design",
    tagColor: "bg-emerald-500",
  },
  {
    title: "Homy App",
    description: "Elegant mobile banking flows focused on trust and clarity.",
    image: "/mobile-banking-app-on-desk-with-laptop.jpg",
    tag: "UI/UX Design",
    tagColor: "bg-rose-500",
  },
  {
    title: "B-Roll Media",
    description: "Designing engaging websites that elevate user experiences.",
    image: "/website-design-mockup-on-laptop-screen.jpg",
    tag: "Web Design",
    tagColor: "bg-primary",
  },
];

export const testimonials = [
  {
    quote:
      "Sara created a user-friendly and beautiful interface for our product. Her attention to detail made a huge difference.",
    name: "Huda Samer",
    role: "CEO",
    avatar: "/professional-woman-avatar.png",
  },
  {
    quote:
      "Amazing collaboration and clear communication. The prototypes were spot-on and accelerated our development.",
    name: "Liam Carter",
    role: "Product Manager",
    avatar: "/professional-man-avatar.png",
  },
  {
    quote:
      "From discovery to delivery, Sara brought clarity and polish. Our users love the new experience.",
    name: "Maya Patel",
    role: "Founder",
    avatar: "/professional-woman-avatar-smiling.jpg",
  },
];

export const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

export const skillsRow1 = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "GraphQL",
];

export const skillsRow2 = [
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Git",
  "CI/CD",
];

export const skillsRow3 = [
  "UI/UX Design",
  "Figma",
  "REST APIs",
  "WebSockets",
  "Testing",
  "Agile",
  "System Design",
  "Performance",
];

export const projectsData = [
  {
    title: "Free Media File Converter",
    description:
      "This web app will help you convert between various media file types free. Just access and use free of charge.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    siteUrl: "https://converter.josephopio.com/",
    imageUrl: fileconvImg,
  },
  {
    title: "GIA Website",
    description:
      "Did this website for this school when I was employed with them. Still rocking on.",
    tags: ["Wordpress", "MySQL", "CSS", "BeaverBuilder"],
    siteUrl: "https://www.gitegainternationalacademy.org/",
    imageUrl: giaImg,
  },
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    siteUrl: "",
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    siteUrl: "",
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    siteUrl: "",
    imageUrl: wordanalyticsImg,
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Teacher",
    location: "XCL Education",
    description: "I am a teacher of Computer Science at XCL Education.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 to date",
  },
  {
    title: "Head of Secondary",
    location: "Cubahiro International School",
    description: "I worked as the head of secondary school in this school..",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Computer Science Teacher",
    location: "GEMS Education",
    description:
      "I was in this school all the way from August 2019 till the COVID-19 lockdown.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "ICT Teacher",
    location: "Gitega International School",
    description:
      "I was in this school all the way from August 2017. It was a nice place to work in because the students were so disciplined.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2019",
  },
  {
    title: "Systems Admin & ICT Teacher",
    location: "Horizon International School, Uganda",
    description:
      "This was the first international school I worked in. It was also my first experience managing enterprise servers for a school.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2017",
  },
  {
    title: "Computer Studies Teacher",
    location: "Ministry of Education and Sports, Uganda",
    description:
      "This was the first international school I worked in. It was also my first experience managing enterprise servers for a school.",
    icon: React.createElement(CgWorkAlt),
    date: "2011 - 2014",
  },
  {
    title: "Growing up and Schooling",
    location: "Mum and Dad Dispcipline Enterprise",
    description:
      "These guys brought me up as an obedient and hardworking child.",
    icon: React.createElement(MdOutlineBabyChangingStation),
    date: "from birth - 2011",
  },
] as const;

export const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "My Works", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Blog", href: "/#blog" },
  // { name: "Reviews", href: "#testimonials" },
  // { name: "Contact", href: "#contact" },
] as const;
