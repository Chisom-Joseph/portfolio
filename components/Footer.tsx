"use client";
import { useContext } from "react";
import Link from "next/link";
import { navLinks } from "@/data";
import Wrapper from "./Wrapper";
import { FaArrowUp } from "react-icons/fa6";
import { ActiveNavContext } from "@/providers/ActiveNavProvider";

export default function Footer() {
  const activeNavContext = useContext(ActiveNavContext);
  const activeSection = activeNavContext?.activeSection;
  const updateActiveSection = activeNavContext?.updateActiveSection;

  return (
    <footer data-aos="zoom-in-up" data-aos-offset="50" className="mb-16">
      <Wrapper className="flex items-center justify-between border-body gap-2 md:gap-[3em] border-t-[1px] pt-5">
        <div className="flex flex-1 flex-wrap items-center justify-center cmd:justify-between gap-7">
          <p
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-duration="600"
            className="text-center"
          >
            &copy; 2024 Chisom Njoku Joseph, All rights reserved
          </p>
          <nav
            data-aos="fade-left"
            data-aos-offset="50"
            data-aos-duration="600"
            className="flex flex-wrap gap-5 md:gap-[3em]"
          >
            {navLinks.map((navLink, index) => (
              <Link
                data-aos="zoom-in"
                data-aos-offset="50"
                data-aos-duration="600"
                className={`
                hover:text-blue dark:hover:text-pink transition-all
                ${
                  navLink.path.includes(activeSection as string)
                    ? "text-blue dark:text-pink"
                    : ""
                }`}
                href={navLink.path}
                key={index}
                onClick={() => {
                  if (updateActiveSection)
                    return updateActiveSection(navLink.path);
                }}
              >
                {navLink.name}
              </Link>
            ))}
          </nav>
        </div>
        <a
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-duration="600"
          data-aos-delay="200"
          href="#"
          className="text-white size-7em p-2 bg-gradient rounded-full hover:scale-105 transition-all cursor-pointer"
        >
          <FaArrowUp />
        </a>
      </Wrapper>
    </footer>
  );
}
