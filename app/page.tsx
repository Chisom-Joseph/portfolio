import Wrapper from "@/components/Wrapper";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 7000)); // Wait for 5 second
  return (
    <Wrapper className="-mt-20 pt-28">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Wrapper>
  );
}
