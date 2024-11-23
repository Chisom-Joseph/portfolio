"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import profileImage from "@/public/images/profileImage.jpg";
import profileBackgroundImage from "@/public/images/profileBackgroundImage.png";

export default function ProfileImage() {
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

    // Easing to smooth out the timeline as a whole
    gsap.to(tlCan, { duration: 27, ease: "power1.inOut" });
  }, []);

  return (
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
              placeholder="blur"
              blurDataURL={"@/public/images/profileBackgroundImage.png"}
              priority
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
              placeholder="blur"
              blurDataURL={"@/public/images/profileImage.jpg"}
              priority
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
