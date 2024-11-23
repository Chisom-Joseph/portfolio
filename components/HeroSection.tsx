import Link from "next/link";
import Section from "@/components/Section";
import ButtonGradient from "@/components/ui/custom/ButtonGradient";
import ProfileImage from "@/components/ProfileImage";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <Section
      id="/"
      className="flex flex-col-reverse items-stretch justify-center gap-[2em] md:flex-row md:items-center md:justify-between md:gap-[6em] lg:gap-[8em]"
    >
      <div>
        <span
          data-aos="fade-up"
          className="m-auto md:m-0 block w-fit text-gradient"
        >
          Hi, I am
        </span>
        <h1
          data-aos="fade-up"
          className="text-center md:text-left mb-[0.5em] mt-[0.2em] font-powerGroteskUltraBold text-[3em] leading-[0.9em] md:text-[3em] md:leading-[1em] lg:text-[4em]"
        >
          Chisom <br /> Joseph <br /> Njoku
        </h1>
        <p
          data-aos="fade-up"
          className="text-center md:text-left m-auto mb-[2em] max-w-[23em] tracking-wider text-body md:max-w-[30em]"
        >
          I create elegant and efficient web solutions with a focus on user
          experience and clean code.
        </p>
        <Link
          href="#projects"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="5000"
          className="m-auto block md:inline-block md:m-0"
        >
          <ButtonGradient title="Explore my works" icon={<FaArrowRight />} />
        </Link>
      </div>
      {/* Profile Image */}
      <ProfileImage />
    </Section>
  );
}
