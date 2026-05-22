import { FaDownload } from "react-icons/fa6";
import Wrapper from "@/components/Wrapper";
import ButtonGradient from "@/components/ui/custom/ButtonGradient";
import Section from "@/components/Section";

export default function AboutSection() {
  return (
    <Section id="aboutMe" className="mt-[8em] xl:mt-[12em] scroll-m-12">
      <Wrapper>
        <h1
          data-aos="fade-down"
          data-aos-offset="50"
          className="aboutTitle m-auto mb-[0.5em] mt-[0.2em] w-fit font-powerGroteskUltraBold text-[3em] leading-[0.9em] md:text-[4em] md:leading-[1em]"
        >
          About Me
        </h1>

        <p
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-duration="5000"
          className="m-auto mb-[2.5em] scale-0 text-center leading-loose tracking-wider text-body opacity-0 transition-all"
        >
          I&apos;m Chisom Joseph Njoku — a Full-Stack Web &amp; Mobile Engineer
          with over 6 years of professional experience building scalable,
          production-grade applications. My expertise spans the modern web
          stack: React, Next.js, TypeScript, Node.js, NestJS, and Laravel on
          the backend, with MySQL, PostgreSQL, MongoDB, Supabase, and Firebase
          for data. I also build cross-platform mobile apps with Flutter and
          React Native, and I explore Web3 frontiers with Solidity and Solana.
          I care deeply about clean architecture, performance, and
          pixel-perfect user experiences. Beyond coding, I create educational
          tech content on TikTok, helping Nigerian developers grow their skills
          and break into the global tech industry.
        </p>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="5000"
          className="m-auto w-fit"
        >
          <ButtonGradient title="Download Resume" icon={<FaDownload />} />
        </div>
      </Wrapper>
    </Section>
  );
}
