"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data";
import Wrapper from "./Wrapper";
import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  const [currentPage, setCurrentPage] = useState("/");
  return (
    <footer className="mb-16">
      <Wrapper className="flex items-center justify-between border-body gap-2 md:gap-[3em] border-t-[1px] pt-5">
        <div className="flex flex-1 flex-wrap items-center justify-center cmd:justify-between gap-7">
          <p className="text-center">
            &copy; 2024 Chisom Njoku Joseph, All rights reserved
          </p>
          <nav className="flex flex-wrap gap-5 md:gap-[3em]">
            {navLinks.map((navLink, index) => (
              <Link
                className={`
                hover:text-pink transition-all
                ${currentPage === navLink.path ? "text-pink" : ""}`}
                href={navLink.path}
                key={index}
                onClick={() => setCurrentPage(navLink.path)}
              >
                {navLink.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="text-white size-7em p-2 bg-gradient rounded-full hover:scale-105 transition-all cursor-pointer">
          <FaArrowUp />
        </div>
      </Wrapper>
    </footer>
  );
}
