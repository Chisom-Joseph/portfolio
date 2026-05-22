import project1 from "@/public/images/projects/project1.png";
import project2 from "@/public/images/projects/project2.png";
import project3 from "@/public/images/projects/project3.png";
import project4 from "@/public/images/projects/project4.png";
import project5 from "@/public/images/projects/project5.png";
import project6 from "@/public/images/projects/project6.png";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

// Advanced Stack Additions
import { SiLaravel } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { SiSolana } from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "#aboutMe",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Skills",
    path: "#skills",
  },
];

export const projects = [
  {
    title: "LecNote (AI Dictation Web App)",
    description:
      "A fully client-side AI dictation web app that transcribes audio directly in the browser using local Hugging Face Whisper AI models and saves data to IndexedDB.",
    image: project3,
    previewLink: "#",
    githubLink: "https://github.com/Chisom-Joseph/lecnote",
    category: "Web",
    recent: true,
  },
  {
    title: "3D Food Visualisation App",
    description:
      "An immersive 3D culinary catalog built with React Three Fiber, Three.js, and GSAP, offering interactive product rendering, fluid camera animations, and custom shaders.",
    image: project2,
    previewLink: "#",
    githubLink: "https://github.com/Chisom-Joseph/3d-food-app",
    category: "Web",
    recent: true,
  },
  {
    title: "Diamond Schools Suite",
    description:
      "An enterprise educational portal including comprehensive web systems for teachers, student dashboards, online CBT platforms, database models, and administrative controls.",
    image: project1,
    previewLink: "https://diamondschools.com.ng/",
    githubLink: "https://github.com/Chisom-Joseph/diamondschools",
    category: "Web",
    recent: true,
  },
  {
    title: "Seren Space",
    description:
      "A supportive mental health community portal enabling custom self-care wellness assessments and localized zip-code therapist matching systems.",
    image: project4,
    previewLink: "https://github.com/Chisom-Joseph/seren-space",
    githubLink: "https://github.com/Chisom-Joseph/seren-space",
    category: "Web",
    recent: true,
  },
  {
    title: "Generate Commit CLI",
    description:
      "An interactive developer CLI tool that automates Git commit history construction with backdated metadata, custom messages, and randomized scheduling capabilities.",
    image: project5,
    previewLink: "https://github.com/Chisom-Joseph/generate-commit",
    githubLink: "https://github.com/Chisom-Joseph/generate-commit",
    category: "Developer Tool",
    recent: true,
  },
];

export const skills = [
  {
    title: "HTML",
    icon: FaHtml5,
    category: "Frontend",
  },
  {
    title: "CSS",
    icon: FaCss3Alt,
    category: "Frontend",
  },
  {
    title: "JavaScript",
    icon: FaJs,
    category: "Frontend",
  },
  {
    title: "jQuery",
    icon: SiJquery,
    category: "Frontend",
  },
  {
    title: "Bootstrap",
    icon: FaBootstrap,
    category: "Frontend",
  },
  {
    title: "Tailwind",
    icon: RiTailwindCssFill,
    category: "Frontend",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
  },
  {
    title: "ReactJS",
    icon: FaReact,
    category: "Frontend",
  },
  {
    title: "NextJS",
    icon: RiNextjsFill,
    category: "Frontend",
  },
  {
    title: "React Native",
    icon: FaReact,
    category: "Mobile",
  },
  {
    title: "Flutter",
    icon: SiFlutter,
    category: "Mobile",
  },
  {
    title: "NodeJS",
    icon: FaNodeJs,
    category: "Backend",
  },
  {
    title: "ExpressJS",
    icon: SiExpress,
    category: "Backend",
  },
  {
    title: "NestJS",
    icon: SiNestjs,
    category: "Backend",
  },
  {
    title: "Laravel",
    icon: SiLaravel,
    category: "Backend",
  },
  {
    title: "MySQL",
    icon: SiMysql,
    category: "Backend",
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
    category: "Backend",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    category: "Backend",
  },
  {
    title: "Supabase",
    icon: SiSupabase,
    category: "Backend",
  },
  {
    title: "Firebase",
    icon: SiFirebase,
    category: "Backend",
  },
  {
    title: "Solidity",
    icon: SiSolidity,
    category: "Web3",
  },
  {
    title: "Solana",
    icon: SiSolana,
    category: "Web3",
  },
];

export const socialHandleIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  tiktok: AiFillTikTok,
  instagram: RiInstagramFill,
  facebook: FaFacebookSquare,
  x: FaXTwitter,
  youtube: FaYoutube,
  email: MdEmail,
  whatsapp: FaSquareWhatsapp,
};

export type IconName = keyof typeof socialHandleIcons;

export const socialHandles = [
  {
    title: "Chisom-Joseph",
    icon: "github" as IconName,
    description: "",
    link: "https://github.com/Chisom-Joseph",
  },
  {
    title: "@njokuchisomjoseph",
    icon: "linkedin" as IconName,
    description: "",
    link: "https://linkedin.com/in/njokuchisomjoseph/",
  },
  {
    title: "@chisomnjokujoseph",
    icon: "tiktok" as IconName,
    description: "",
    link: "https://www.tiktok.com/@chisomnjokujoseph",
  },
  {
    title: "@chisomnjokujoseph",
    icon: "instagram" as IconName,
    description: "",
    link: "https://www.instagram.com/chisomjosephnjoku",
  },
  {
    title: "@chisomjosephnjoku",
    icon: "facebook" as IconName,
    description: "",
    link: "https://web.facebook.com/chisomjosephnjoku/",
  },
  {
    title: "@nj_chisomjoseph",
    icon: "x" as IconName,
    description: "",
    link: "https://x.com/nj_chisomjoseph",
  },
  {
    title: "@njokuchisomjoseph",
    icon: "youtube" as IconName,
    description: "",
    link: "https://www.youtube.com/@njokuchisomjoseph",
  },
  {
    title: "njokuchisomjoseph@gmail.com",
    icon: "email" as IconName,
    description: "",
    link: "mailto:njokuchisomjoseph@gmail.com",
  },
  {
    title: "+234(0)8058600003",
    icon: "whatsapp" as IconName,
    description: "",
    link: "https://wa.me/2348058600003",
  },
];

export const defaultMetaData = {
  title: "Portfolio | Chisom Joseph Njoku",
  description:
    "I am Chisom Joseph Njoku, a Full-Stack Web & Mobile Engineer with over 6 years of experience building scalable and dynamic web applications, cross-platform mobile apps, and Web3 solutions with clean architecture.",
  url: "https://chisomnjoku.com.ng",
  ogImages: [
    {
      url: "/images/ogImages/og1348x650.png",
      width: 1348,
      height: 650,
      alt: "Chisom Joseph Njoku Portfolio screenshot",
    },
  ],
};
