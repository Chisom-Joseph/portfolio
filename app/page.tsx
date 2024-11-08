import Wrapper from "@/components/Wrapper";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <Wrapper className="pt-[1.5em] md:pt-[5em] text-center md:text-left">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </Wrapper>
  );
}
