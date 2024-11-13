"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Section from "@/components/Section";
import profileImage from "@/public/images/profileImage.jpg";
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
    <Section
      id="/"
      className="flex flex-col-reverse items-stretch justify-center gap-[2em] md:flex-row md:items-center md:justify-between md:gap-[6em] lg:gap-[8em]"
    >
      <div>
        <span data-aos="fade-up" className="text-gradient">
          Hi, I am
        </span>
        <h1
          data-aos="fade-up"
          className="mb-[0.5em] mt-[0.2em] font-powerGroteskUltraBold text-[3em] leading-[0.9em] md:text-[3em] md:leading-[1em] lg:text-[4em]"
        >
          Chisom <br /> Joseph <br /> Njoku
        </h1>
        <p
          data-aos="fade-up"
          className="m-auto mb-[2em] max-w-[23em] tracking-wider text-body md:max-w-[30em]"
        >
          Creating elegant and efficient web solutions with a focus on user
          experience and clean code.
        </p>
        <Link
          href="#projects"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="5000"
          className="m-auto inline-block md:m-0"
        >
          <ButtonGradient title="Explore my works" icon={<FaArrowRight />} />
        </Link>
      </div>
      {/* Profile Image */}
      <div ref={profileRef}>
        <CardContainer>
          <CardBody className="relative m-auto h-[17em] w-[17em] md:m-0 md:h-[22em] md:w-[22em] md:min-w-[22em] lg:h-[25em] lg:w-[25em] lg:min-w-[25em]">
            <CardItem
              translateZ="50"
              className="absolute left-[-0.5%] top-[-4.4%] -z-10 h-[100%] w-[100%] object-cover"
            >
              <Image
                src={profileBackgroundImage}
                alt="Profile Image Background"
              />
            </CardItem>

            <CardItem
              translateZ="70"
              className="h-[100%] w-[100%] overflow-hidden rounded-[2em]"
            >
              <Image
                className="h-[100%] w-[100%] object-cover transition-[transform] hover:scale-105"
                src={profileImage}
                alt="Profile Image"
                loading="eager"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </Section>
  );
}
