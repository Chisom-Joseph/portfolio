"use client";
import { useLayoutEffect } from "react";
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
          I'm Chisom Joseph Njoku, a professional full-stack web developer with
          over 4 years of experience. I specialize in building dynamic and
          responsive websites and applications using HTML, CSS, JavaScript,
          Node.js, MySQL, MongoDB, React.js, Next.js, TypeScript, and
          TailwindCSS. With a passion for technology and a keen eye for detail,
          I strive to create seamless user experiences and robust backend
          systems. I am dedicated to continuous learning and staying updated
          with the latest industry trends and best practices. When I'm not
          coding, I enjoy sharing my knowledge through educational content on
          TikTok, targeting Nigerian programmers and tech enthusiasts.
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
