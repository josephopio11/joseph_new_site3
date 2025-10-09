import corpcommentImg from "@/public/corpcomment.png";
import fileconvImg from "@/public/fileconv.png";
import giaImg from "@/public/gia.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import {
  Briefcase,
  Cpu,
  Globe,
  GraduationCap,
  Leaf,
  Palette,
} from "lucide-react";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaArrowCircleUp,
  FaChalkboardTeacher,
  FaReact,
  FaServer,
} from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineBabyChangingStation } from "react-icons/md";

// Site configuration
export const SITE_CONFIG = {
  name: "Joseph Opio",
  title: "Joseph Opio | Computer Science Teacher",
  description:
    "Computer Science Teacher at XCL Education, Malaysia. Teaching A Level, O Level, IGCSE, AP, IB, and GCSE Computer Science. Sharing insights about education and technology.",
  url: "https://www.josephopio.com",
  image: "/images/me.png",
  twitter: "@josephopio", // Replace with actual Twitter handle
} as const;

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
    title: "Secondary Associate Leadership Team",
    location: "XCL Education",
    description:
      "I am part of the Secondary Associate Leadership Team. Call me the ingredient in the school SALT",
    icon: React.createElement(FaArrowCircleUp),
    date: "2025 to date",
  },
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
    icon: React.createElement(FaChalkboardTeacher),
    date: "2017 - 2019",
  },
  {
    title: "Systems Admin & ICT Teacher",
    location: "Horizon International School, Uganda",
    description:
      "This was the first international school I worked in. It was also my first experience managing enterprise servers for a school.",
    icon: React.createElement(FaServer),
    date: "2014 - 2017",
  },
  {
    title: "Computer Studies Teacher",
    location: "Ministry of Education and Sports, Uganda",
    description:
      "This was the first international school I worked in. It was also my first experience managing enterprise servers for a school.",
    icon: React.createElement(FaChargingStation),
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
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Experience", href: "/#experience" },
  { name: "Blog", href: "/#blog" },
  { name: "Services", href: "/#services" },
  // { name: "Contact", href: "/#contact" },
] as const;

export const myServices = [
  {
    category: "Education & Training",
    icon: GraduationCap,
    items: [
      {
        item: "Private Tutoring",
        bookable: true,
        description:
          "Offer one-to-one or small group tutoring in Python, web development, or computer systems, supporting GCSE, IGCSE, and A-Level learners.",
      },
      {
        item: "Online Courses & Workshops",
        description:
          "Create and sell online courses such as 'Python for Beginners', 'Intro to Game Design', or 'AI Made Simple'.",
      },
      {
        item: "Coding Bootcamps for Teens",
        bookable: true,
        description:
          "Run weekend or holiday coding camps focused on game design, app creation, or AI projects using Teachable Machine.",
      },
      {
        item: "Teacher Training",
        description:
          "Provide training sessions to help teachers integrate coding, computational thinking, or digital literacy into their lessons.",
      },
      {
        item: "Curriculum Design",
        description:
          "Assist schools in developing or modernising their computer science curriculum to align with current standards and technologies.",
      },
    ],
  },
  {
    category: "Web & Digital",
    icon: Globe,
    items: [
      {
        item: "Web Design & Development",
        description:
          "Build responsive websites for schools, charities, and small businesses with a focus on usability and educational value.",
      },
      {
        item: "Educational Website Creation",
        description:
          "Design and develop interactive educational websites that include learning materials, quizzes, and tutorials.",
      },
      {
        item: "Technical Support & Maintenance",
        bookable: true,
        description:
          "Provide technical support, manage hosting, update content, and maintain websites for educational organisations.",
      },
    ],
  },
  {
    category: "Automation & Software",
    icon: Cpu,
    items: [
      {
        item: "Custom Automation Scripts",
        description:
          "Develop Python scripts or small programs to automate tasks such as grading, data entry, or report generation.",
      },
      {
        item: "Data Visualisation & Analysis",
        description:
          "Help schools or small organisations understand their data through clear analysis and visualisation tools.",
      },
      {
        item: "Educational Software Development",
        description:
          "Create educational tools, simulations, or simple software to help students learn computer science concepts.",
      },
    ],
  },
  {
    category: "Creative & Media",
    icon: Palette,
    items: [
      {
        item: "3D Animation Lessons or Freelance Work",
        description:
          "Teach 3D animation using Blender or offer freelance animation services for educational or promotional content.",
      },
      {
        item: "Video Editing & Educational Content Creation",
        description:
          "Produce explainer videos, tutorials, or school promotional content with high-quality visuals and sound.",
      },
      {
        item: "Digital Graphics & Vector Art",
        description:
          "Design educational illustrations and infographics using Inkscape or Adobe Illustrator.",
      },
    ],
  },
  {
    category: "Social Impact & Environmental Tech",
    icon: Leaf,
    items: [
      {
        item: "STEM Outreach & Environmental Education",
        description:
          "Lead workshops that show how technology and coding can be used to support environmental awareness and sustainability.",
      },
      {
        item: "Tech-for-Good Consultancy",
        bookable: true,
        description:
          "Advise schools and NGOs on adopting cleaner, greener, and more efficient technologies.",
      },
    ],
  },
  {
    category: "Consulting & Professional Services",
    icon: Briefcase,
    items: [
      {
        item: "Digital Transformation for Schools",
        description:
          "Consult with schools on implementing AI tools, digital literacy programmes, and efficient online collaboration systems.",
      },
      {
        item: "Cybersecurity Awareness Training",
        bookable: true,
        description:
          "Deliver sessions on online safety, data privacy, and ethical computing practices.",
      },
      {
        item: "Assessment Design",
        description:
          "Help schools create engaging, fair, and practical computer science assessments and projects.",
      },
    ],
  },
];

const josepn = {};
