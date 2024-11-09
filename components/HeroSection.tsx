"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import profileImage from "@/public/images/profileImage.png";
import profileBackgroundImage from "@/public/images/profileBackgroundImage.png";
import ButtonGradient from "@/components/ui/custom/ButtonGradient";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSection() {
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tlCan = gsap.timeline({ repeat: -1, ease: "power1.inOut" });

    // Floating animation sequence
    tlCan
      .to(profileRef.current, {
        y: "-=30",
        x: "+=20",
        rotation: "-=5",
        duration: 3,
      })
      .to(profileRef.current, {
        y: "+=30",
        x: "-=20",
        rotation: "-=5",
        duration: 2,
      })
      .to(profileRef.current, { y: "-=20", rotation: "+=5", duration: 3 })
      .to(profileRef.current, { y: "+=20", rotation: "+=5", duration: 3 })
      .to(profileRef.current, { y: "-=50", duration: 3 })
      .to(profileRef.current, { y: "+=50", duration: 3 })
      .to(profileRef.current, { y: "-=30", duration: 3 })
      .to(profileRef.current, { y: "+=30", duration: 3 })
      .to(profileRef.current, { y: "-=30", duration: 2 })
      .to(profileRef.current, { y: "+=30", duration: 2 });

    // Optional easing to smooth out the timeline as a whole
    gsap.to(tlCan, { duration: 27, ease: "power1.inOut" });
  }, []);

  return (
    <section className="flex flex-col-reverse gap-[2em] md:gap-[6em] lg:gap-[8em] md:flex-row items-stretch justify-center md:items-center md:justify-between">
      <div>
        <span data-aos="fade-up" className="text-gradient">
          Hi, I am
        </span>
        <h1
          data-aos="fade-up"
          className="font-powerGroteskUltraBold text-[3em] md:text-[3em] lg:text-[4em] leading-[0.9em] md:leading-[1em] mb-[0.5em] mt-[0.2em]"
        >
          Chisom <br /> Joseph <br /> Njoku
        </h1>
        <p
          data-aos="fade-up"
          className="text-body tracking-wider max-w-[23em] md:max-w-[30em] mb-[2em] m-auto"
        >
          Creating elegant and efficient web solutions with a focus on user
          experience and clean code.
        </p>
        <Link className="m-auto md:m-0 inline-block" href="#works">
          <ButtonGradient title="Explore my works" icon={<FaArrowRight />} />
        </Link>
      </div>
      {/* Profile Image */}
      <div ref={profileRef}>
        <CardContainer>
          <CardBody className="relative w-[17em] h-[17em] md:w-[22em] md:h-[22em] md:min-w-[22em] lg:w-[25em] lg:h-[25em] lg:min-w-[25em] m-auto md:m-0">
            <CardItem
              translateZ="50"
              className="absolute top-[-4.4%] left-[-0.5%] w-[100%] h-[100%] object-cover -z-10"
            >
              <Image
                src={profileBackgroundImage}
                alt="Profile Image Background"
              />
            </CardItem>

            <CardItem
              translateZ="70"
              className="overflow-hidden w-[100%] h-[100%] rounded-[2em]"
            >
              <Image
                className="w-[100%] h-[100%] hover:scale-105 transition-[transform] object-cover"
                src={profileImage}
                alt="Profile Image"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
}
