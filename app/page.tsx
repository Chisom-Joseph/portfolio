import dynamic from "next/dynamic";
import Wrapper from "@/components/Wrapper";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  ssr: false,
});
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: false,
});

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 7000)); // Wait for 5 second
  return (
    <Wrapper className="pt-28 -mt-20 md:pt-28 text-center md:text-left overflow-y-auto overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Wrapper>
  );
}
