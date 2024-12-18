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
    title: "Diamond Schools web app",
    description:
      "This is a fully functional school management system for Diamond Schools Nigeria.",
    image: project1,
    previewLink: "https://diamondschools.com.ng/",
    githubLink: "https://github.com/Chisom-Joseph/diamondschools",
    category: "Web Apps",
    recent: true,
  },
  {
    title: "Food web app",
    description:
      "I'm Chisom Joseph Njoku, a professional full-stack web developer with over 4 years of more...",
    image: project2,
    previewLink: "#",
    githubLink: "#",
    category: "Mobile Apps",
    recent: true,
  },
  {
    title: "X authentication pages",
    description:
      "I'm Chisom Joseph Njoku, a professional full-stack web developer with over 4 years of more...",
    image: project3,
    previewLink: "#",
    githubLink: "#",
    category: "Web Apps",
    recent: true,
  },
  {
    title: "Npm detail page",
    description:
      "I'm Chisom Joseph Njoku, a professional full-stack web developer with over 4 years of more...",
    image: project4,
    previewLink: "#",
    githubLink: "#",
    category: "Web Apps",
    recent: true,
  },
  {
    title: "Tiktok profile page",
    description:
      "I'm Chisom Joseph Njoku, a professional full-stack web developer with over 4 years of more...",
    image: project5,
    previewLink: "#",
    githubLink: "#",
    category: "Web Apps",
    recent: true,
  },
  {
    title: "Facebook algorithm design",
    description:
      "I'm Chisom Joseph Njoku, a professional full-stack web developer with over 4 years of more...",
    image: project6,
    previewLink: "#",
    githubLink: "#",
    category: "Web Apps",
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
    title: "MySQL",
    icon: SiMysql,
    category: "Backend",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    category: "Backend",
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
    link: "",
  },
];

export const defaultMetaData = {
  title: "Portfolio | Chisom Joseph Njoku",
  description:
    "I am: Chisom Joseph Njoku a full-stack web developer with over 5 years of experience building scalable and dynamic web applications. My expertise spans frontend and backend technologies.",
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
