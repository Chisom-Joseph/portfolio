import { FaDownload } from "react-icons/fa6";
import Wrapper from "@/components/Wrapper";
import ButtonGradient from "@/components/ui/custom/ButtonGradient";

export default function AboutSection() {
  return (
    <section className="mt-[8em] xl:mt-[12em]">
      <Wrapper>
        <h1 className="font-powerGroteskUltraBold text-[3em] md:text-[4em] w-fit leading-[0.9em] md:leading-[1em] mb-[0.5em] mt-[0.2em] m-auto">
          About Me
        </h1>
        <p className="text-body text-center mb-[2.5em] m-auto">
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
        <ButtonGradient
          className="m-auto"
          title="Download Resume"
          icon={<FaDownload />}
        />
      </Wrapper>
    </section>
  );
}
