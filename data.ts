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
    title: "Picture gallery",
    description:
      "I'm Chisom Joseph Njoku, a professional full-stack web developer with over 4 years of more...",
    image: project1,
    previewLink: "#",
    githubLink: "#",
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
