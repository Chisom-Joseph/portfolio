"use client";
import { useContext } from "react";
import Link from "next/link";
import { navLinks } from "@/data";
import { ActiveNavContext } from "@/providers/ActiveNavProvider";

export default function FooterNav() {
  const activeNavContext = useContext(ActiveNavContext);
  const activeSection = activeNavContext?.activeSection;
  const updateActiveSection = activeNavContext?.updateActiveSection;

  return (
    <nav
      data-aos="fade-left"
      data-aos-offset="50"
      data-aos-duration="600"
      className="flex flex-wrap gap-5 md:gap-[3em]"
    >
      {navLinks.map((navLink, index) => (
        <Link
          rel="noopener noreferrer"
          prefetch={true}
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-duration="600"
          className={`
                hover:text-blue dark:hover:text-pink transition-all
                ${
                  navLink.path === (activeSection as string)
                    ? "text-blue dark:text-pink"
                    : ""
                }`}
          href={navLink.path}
          key={index}
          onClick={() => {
            if (updateActiveSection) return updateActiveSection(navLink.path);
          }}
        >
          {navLink.name}
        </Link>
      ))}
    </nav>
  );
}
