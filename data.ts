import dynamic from "next/dynamic";
import project1 from "@/public/images/projects/project1.png";
import project2 from "@/public/images/projects/project2.png";
import project3 from "@/public/images/projects/project3.png";
import project4 from "@/public/images/projects/project4.png";
import project5 from "@/public/images/projects/project5.png";
import project6 from "@/public/images/projects/project6.png";

const FaHtml5 = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaHtml5),
  { ssr: false }
);
const FaCss3Alt = dynamic(
  () => import("react-icons/fa6").then((mod) => mod.FaCss3Alt),
  { ssr: false }
);
const FaJs = dynamic(() => import("react-icons/fa").then((mod) => mod.FaJs), {
  ssr: false,
});
const SiJquery = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiJquery),
  { ssr: false }
);
const FaBootstrap = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaBootstrap),
  { ssr: false }
);
const RiTailwindCssFill = dynamic(
  () => import("react-icons/ri").then((mod) => mod.RiTailwindCssFill),
  { ssr: false }
);
const SiTypescript = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiTypescript),
  { ssr: false }
);
const FaNodeJs = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaNodeJs),
  { ssr: false }
);
const SiExpress = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiExpress),
  { ssr: false }
);
const FaReact = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaReact),
  { ssr: false }
);
const RiNextjsFill = dynamic(
  () => import("react-icons/ri").then((mod) => mod.RiNextjsFill),
  { ssr: false }
);
const SiMysql = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiMysql),
  { ssr: false }
);
const SiMongodb = dynamic(
  () => import("react-icons/si").then((mod) => mod.SiMongodb),
  { ssr: false }
);

const FaGithub = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaGithub),
  { ssr: false }
);
const FaLinkedin = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaLinkedin),
  { ssr: false }
);
const AiFillTikTok = dynamic(
  () => import("react-icons/ai").then((mod) => mod.AiFillTikTok),
  { ssr: false }
);
const RiInstagramFill = dynamic(
  () => import("react-icons/ri").then((mod) => mod.RiInstagramFill),
  { ssr: false }
);
const FaFacebookSquare = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaFacebookSquare),
  { ssr: false }
);
const FaXTwitter = dynamic(
  () => import("react-icons/fa6").then((mod) => mod.FaXTwitter),
  { ssr: false }
);
const FaYoutube = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaYoutube),
  { ssr: false }
);
const MdEmail = dynamic(
  () => import("react-icons/md").then((mod) => mod.MdEmail),
  { ssr: false }
);
const FaSquareWhatsapp = dynamic(
  () => import("react-icons/fa6").then((mod) => mod.FaSquareWhatsapp),
  { ssr: false }
);

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
