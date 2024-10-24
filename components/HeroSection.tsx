import Link from "next/link";
import Image from "next/image";
import profileImage from "@/public/images/profileImage.png";
import profileBackgroundImage from "@/public/images/profileBackgroundImage.png";
import ButtonGradient from "@/components/ui/custom/ButtonGradient";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse gap-[2em] md:gap-[3em] md:flex-row items-stretch justify-center md:items-center md:justify-between">
      <div>
        <span className="text-gradient">Hi, I am</span>
        <h1 className="font-powerGroteskUltraBold text-[3em] md:text-[4em] leading-[0.9em] md:leading-[1em] mb-[0.5em] mt-[0.2em]">
          Chisom <br /> Joseph <br /> Njoku
        </h1>
        <p className="text-body max-w-[25em] md:max-w-[30em] mb-[2em] m-auto">
          Creating elegant and efficient web solutions with a focus on user
          experience and clean code.
        </p>
        <Link href="#works">
          <ButtonGradient
            className="m-auto md:m-0"
            title="Explore my works"
            icon={<FaArrowRight />}
          />
        </Link>
      </div>
      <div className="relative w-[17em] h-[17em] md:w-[25em] md:h-[25em] md:min-w-[25em] m-auto md:m-0">
        <Image
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[110%] h-[110%] object-cover -z-10"
          src={profileBackgroundImage}
          alt="Profile Image"
        />
        <div className="overflow-hidden w-[100%] h-[100%] rounded-[2em]">
          <Image
            className="w-[100%] h-[100%] object-cover"
            src={profileImage}
            alt="Profile Image"
          />
        </div>
      </div>
    </section>
  );
}
