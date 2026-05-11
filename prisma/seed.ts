import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { subHours } from "date-fns";
import "dotenv/config";
import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...");

  // ─── Clean up existing data ───────────────────────────────────────────────
  await prisma.service.deleteMany();
  await prisma.serviceCategory.deleteMany();
  await prisma.navLink.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();
  // await prisma.post.deleteMany();
  await prisma.tags.deleteMany();
  await prisma.category.deleteMany();

  // ─── Nav Links ────────────────────────────────────────────────────────────
  console.log("📌 Seeding nav links...");
  await prisma.navLink.createMany({
    data: [
      { name: "Home", href: "/#home" },
      { name: "About", href: "/#about" },
      { name: "Projects", href: "/#projects" },
      { name: "Skills", href: "/#skills" },
      { name: "Experience", href: "/#experience" },
      { name: "Blog", href: "/#blog" },
      { name: "Services", href: "/#services" },
    ],
  });

  // ─── Tags ─────────────────────────────────────────────────────────────────
  console.log("🏷️  Seeding tags...");
  const tagNames = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind",
    "Prisma",
    "PostgreSQL",
    "Gemini",
    "Redux",
    "Wordpress",
    "MySQL",
    "CSS",
    "BeaverBuilder",
    "MongoDB",
    "SQL",
    "Framer",
  ];

  const createdTags = await Promise.all(
    tagNames.map((name) =>
      prisma.tags.create({
        data: {
          name,
          slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        },
      }),
    ),
  );

  const tagByName = Object.fromEntries(createdTags.map((t) => [t.name, t]));

  // ─── Categories ───────────────────────────────────────────────────────────
  console.log("📂 Seeding categories...");
  const categoryWebDev = await prisma.category.create({
    data: {
      name: "Web Development",
      slug: "web-development",
      description: "Articles about web development tools and technologies.",
    },
  });

  const categoryEdTech = await prisma.category.create({
    data: {
      name: "Education & Technology",
      slug: "education-technology",
      description:
        "Insights on teaching computer science and using tech in education.",
    },
  });

  // // ─── Posts ────────────────────────────────────────────────────────────────
  // console.log("📝 Seeding posts...");
  // await prisma.post.create({
  //   data: {
  //     title: "Getting Started with Next.js 14",
  //     slug: "getting-started-with-nextjs-14",
  //     subtitle: "A practical guide for educators and developers",
  //     date: new Date("2024-03-15"),
  //     categoryId: categoryWebDev.id,
  //     tags: {
  //       connect: [
  //         { id: tagByName["Next.js"].id },
  //         { id: tagByName["React"].id },
  //         { id: tagByName["TypeScript"].id },
  //       ],
  //     },
  //   },
  // });

  // await prisma.post.create({
  //   data: {
  //     title: "Teaching Python to Teenagers",
  //     slug: "teaching-python-to-teenagers",
  //     subtitle: "Tips and strategies that actually work in the classroom",
  //     date: new Date("2024-05-01"),
  //     categoryId: categoryEdTech.id,
  //     tags: {
  //       connect: [{ id: tagByName["React"].id }],
  //     },
  //   },
  // });

  // ─── Projects ─────────────────────────────────────────────────────────────
  console.log("🚀 Seeding projects...");
  const projectsData = [
    {
      title: "DevMgmt.msc",
      slug: "devmgmt-msc",
      description:
        "A straightforward way to track devices, equipment, and who has them. No complicated features. Just the essentials.",
      siteUrl: "https://items.josephopio.com/",
      tags: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Prisma",
        "PostgreSQL",
      ],
      githubUrl: null,
      imageUrl: "/images/projects/devmgmt.png",
      createdAt: new Date(),
    },
    {
      title: "Malaysia Eatery Finder",
      slug: "malaysia-eatery-finder",
      description:
        "Are you anywhere in Malaysia and want to find where to have some makan? This is the app for you.",
      siteUrl: "https://makan.josephopio.com/",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Gemini"],
      githubUrl: null,
      imageUrl: "/images/projects/makan.png",
      createdAt: subHours(new Date(), 1),
    },
    {
      title: "Free Media File Converter",
      slug: "free-media-file-converter",
      description:
        "This web app will help you convert between various media file types free. Just access and use free of charge.",
      siteUrl: "https://converter.josephopio.com/",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      githubUrl: null,
      imageUrl: "/images/projects/fileconv.png",
      createdAt: subHours(new Date(), 2),
    },
    {
      title: "GIA Website",
      slug: "gia-website",
      description:
        "Did this website for this school when I was employed with them. Still rocking on.",
      siteUrl: "https://www.gitegainternationalacademy.org/",
      tags: ["Wordpress", "MySQL", "CSS", "BeaverBuilder"],
      githubUrl: null,
      imageUrl: "/images/projects/gia.png",
      createdAt: subHours(new Date(), 3),
    },
    {
      title: "CorpComment",
      slug: "corpcomment",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      siteUrl: null,
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      githubUrl: null,
      imageUrl: "/images/projects/corpcomment.png",
      createdAt: subHours(new Date(), 4),
    },
    {
      title: "rmtDev",
      slug: "rmtdev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      siteUrl: null,
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      githubUrl: null,
      imageUrl: "/images/projects/rmtdev.png",
      createdAt: subHours(new Date(), 5),
    },
    {
      title: "Word Analytics",
      slug: "word-analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      siteUrl: null,
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      githubUrl: null,
      imageUrl: "/images/projects/wordanalytics.png",
      createdAt: subHours(new Date(), 6),
    },
  ];

  for (const project of projectsData) {
    const connectTags = project.tags
      .filter((t) => tagByName[t])
      .map((t) => ({ id: tagByName[t].id }));

    await prisma.project.create({
      data: {
        title: project.title,
        slug: `${project.slug}-${Math.random().toString(36).substring(2, 8)}`,
        description: project.description,
        siteUrl: project.siteUrl,
        tags: { connect: connectTags },
        imageUrl: project.imageUrl,
        githubUrl: project.githubUrl,
        createdAt: project.createdAt,
      },
    });
  }

  // ─── Experiences ──────────────────────────────────────────────────────────
  console.log("💼 Seeding experiences...");
  const experiencesData = [
    {
      title: "Secondary Associate Leadership Team",
      company: "XCL Education",
      location: "XCL Education",
      startDate: new Date("2025-01-01"),
      isCurrent: true,
      description:
        "I am part of the Secondary Associate Leadership Team. Call me the ingredient in the school SALT",
      icon: "FaArrowCircleUp",
    },
    {
      title: "Computer Science Teacher",
      company: "XCL Education",
      location: "XCL Education",
      startDate: new Date("2022-01-01"),
      isCurrent: true,
      description: "I am a teacher of Computer Science at XCL Education.",
      icon: "LuGraduationCap",
    },
    {
      title: "Head of Secondary",
      company: "Cubahiro International School",
      location: "Cubahiro International School",
      startDate: new Date("2021-01-01"),
      endDate: new Date("2022-12-31"),
      isCurrent: false,
      description: "I worked as the head of secondary school in this school.",
      icon: "CgWorkAlt",
    },
    {
      title: "Computer Science Teacher",
      company: "GEMS Education",
      location: "GEMS Education",
      startDate: new Date("2019-08-01"),
      endDate: new Date("2021-12-31"),
      isCurrent: false,
      description:
        "I was in this school all the way from August 2019 till the COVID-19 lockdown.",
      icon: "FaReact",
    },
    {
      title: "ICT Teacher",
      company: "Gitega International School",
      location: "Gitega International School",
      startDate: new Date("2017-08-01"),
      endDate: new Date("2019-12-31"),
      isCurrent: false,
      description:
        "I was in this school all the way from August 2017. It was a nice place to work in because the students were so disciplined.",
      icon: "FaChalkboardTeacher",
    },
    {
      title: "Systems Admin & ICT Teacher",
      company: "Horizon International School",
      location: "Horizon International School, Uganda",
      startDate: new Date("2014-01-01"),
      endDate: new Date("2017-12-31"),
      isCurrent: false,
      description:
        "This was the first international school I worked in. It was also my first experience managing enterprise servers for a school.",
      icon: "FaServer",
    },
    {
      title: "Computer Studies Teacher",
      company: "Ministry of Education and Sports, Uganda",
      location: "Uganda",
      startDate: new Date("2011-01-01"),
      endDate: new Date("2014-12-31"),
      isCurrent: false,
      description:
        "Served as a government secondary school computer studies teacher.",
      icon: "FaChargingStation",
    },
    {
      title: "Growing up and Schooling",
      company: "Mum and Dad Discipline Enterprise",
      location: "Home",
      endDate: new Date("2011-12-31"),
      isCurrent: false,
      description:
        "These guys brought me up as an obedient and hardworking child.",
      icon: "MdOutlineBabyChangingStation",
    },
  ];

  await prisma.experience.createMany({ data: experiencesData });

  // ─── Service Categories & Services ────────────────────────────────────────
  console.log("🛠️  Seeding services...");

  const myServices = [
    {
      name: "Education & Training",
      slug: "education-training",
      icon: "GraduationCap",
      services: [
        {
          title: "Private Tutoring",
          slug: "private-tutoring",
          bookable: true,
          icon: "LuGraduationCap",
          description:
            "Offer one-to-one or small group tutoring in Python, web development, or computer systems, supporting GCSE, IGCSE, and A-Level learners.",
        },
        {
          title: "Online Courses & Workshops",
          slug: "online-courses-workshops",
          bookable: false,
          description:
            "Create and sell online courses such as 'Python for Beginners', 'Intro to Game Design', or 'AI Made Simple'.",
        },
        {
          title: "Coding Bootcamps for Teens",
          slug: "coding-bootcamps-teens",
          bookable: true,
          description:
            "Run weekend or holiday coding camps focused on game design, app creation, or AI projects using Teachable Machine.",
        },
        {
          title: "Teacher Training",
          slug: "teacher-training",
          bookable: false,
          description:
            "Provide training sessions to help teachers integrate coding, computational thinking, or digital literacy into their lessons.",
        },
        {
          title: "Curriculum Design",
          slug: "curriculum-design",
          bookable: false,
          description:
            "Assist schools in developing or modernising their computer science curriculum to align with current standards and technologies.",
        },
      ],
    },
    {
      name: "Web & Digital",
      slug: "web-digital",
      icon: "Globe",
      services: [
        {
          title: "Web Design & Development",
          slug: "web-design-development",
          bookable: false,
          description:
            "Build responsive websites for schools, charities, and small businesses with a focus on usability and educational value.",
        },
        {
          title: "Educational Website Creation",
          slug: "educational-website-creation",
          bookable: false,
          description:
            "Design and develop interactive educational websites that include learning materials, quizzes, and tutorials.",
        },
        {
          title: "Technical Support & Maintenance",
          slug: "technical-support-maintenance",
          bookable: true,
          description:
            "Provide technical support, manage hosting, update content, and maintain websites for educational organisations.",
        },
      ],
    },
    {
      name: "Automation & Software",
      slug: "automation-software",
      icon: "Cpu",
      services: [
        {
          title: "Custom Automation Scripts",
          slug: "custom-automation-scripts",
          bookable: false,
          description:
            "Develop Python scripts or small programs to automate tasks such as grading, data entry, or report generation.",
        },
        {
          title: "Data Visualisation & Analysis",
          slug: "data-visualisation-analysis",
          bookable: false,
          description:
            "Help schools or small organisations understand their data through clear analysis and visualisation tools.",
        },
        {
          title: "Educational Software Development",
          slug: "educational-software-development",
          bookable: false,
          description:
            "Create educational tools, simulations, or simple software to help students learn computer science concepts.",
        },
      ],
    },
    {
      name: "Creative & Media",
      slug: "creative-media",
      icon: "Palette",
      services: [
        {
          title: "3D Animation Lessons or Freelance Work",
          slug: "3d-animation-lessons-freelance",
          bookable: false,
          description:
            "Teach 3D animation using Blender or offer freelance animation services for educational or promotional content.",
        },
        {
          title: "Video Editing & Educational Content Creation",
          slug: "video-editing-educational-content",
          bookable: false,
          description:
            "Produce explainer videos, tutorials, or school promotional content with high-quality visuals and sound.",
        },
        {
          title: "Digital Graphics & Vector Art",
          slug: "digital-graphics-vector-art",
          bookable: false,
          description:
            "Design educational illustrations and infographics using Inkscape or Adobe Illustrator.",
        },
      ],
    },
    {
      name: "Social Impact & Environmental Tech",
      slug: "social-impact-environmental-tech",
      icon: "Leaf",
      services: [
        {
          title: "STEM Outreach & Environmental Education",
          slug: "stem-outreach-environmental-education",
          bookable: false,
          description:
            "Lead workshops that show how technology and coding can be used to support environmental awareness and sustainability.",
        },
        {
          title: "Tech-for-Good Consultancy",
          slug: "tech-for-good-consultancy",
          bookable: true,
          description:
            "Advise schools and NGOs on adopting cleaner, greener, and more efficient technologies.",
        },
      ],
    },
    {
      name: "Consulting & Professional Services",
      slug: "consulting-professional-services",
      icon: "Briefcase",
      services: [
        {
          title: "Digital Transformation for Schools",
          slug: "digital-transformation-schools",
          bookable: false,
          description:
            "Consult with schools on implementing AI tools, digital literacy programmes, and efficient online collaboration systems.",
        },
        {
          title: "Cybersecurity Awareness Training",
          slug: "cybersecurity-awareness-training",
          bookable: true,
          description:
            "Deliver sessions on online safety, data privacy, and ethical computing practices.",
        },
        {
          title: "Assessment Design",
          slug: "assessment-design",
          bookable: false,
          description:
            "Help schools create engaging, fair, and practical computer science assessments and projects.",
        },
      ],
    },
  ];

  for (const cat of myServices) {
    const { services, ...categoryData } = cat;
    const createdCategory = await prisma.serviceCategory.create({
      data: categoryData,
    });

    await prisma.service.createMany({
      data: services.map((s) => ({
        ...s,
        serviceCategoryId: createdCategory.id,
      })),
    });
  }

  console.log("✅ Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
