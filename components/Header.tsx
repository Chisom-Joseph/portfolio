"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineViewGrid } from "react-icons/hi";
import ThemeToggle from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Wrapper from "@/components/Wrapper";
import ButtonOutlineCustom from "./ui/custom/ButtonOutline";
import { navLinks } from "@/data";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("/");

  return (
    <header>
      <Wrapper className="font-bold flex items-center justify-between py-[1em] md:py-[0.4em]">
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-[4em]">
          {navLinks.map((navLink, index) => (
            <Link
              className={`
                hover:text-blue transition-all
                ${currentPage === navLink.path ? "text-blue" : ""}`}
              href={navLink.path}
              key={index}
              onClick={() => setCurrentPage(navLink.path)}
            >
              {navLink.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menue */}
        <Sheet>
          <SheetTrigger>
            <HiOutlineViewGrid className="text-[1.4em] md:hidden" />
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col align-left justify-center font-bold text-bold mt-[4.3em]">
              {navLinks.map((navLink, index) => (
                <Link
                  className={`
                hover:text-blue transition-all border-b-[1px] px-[1.3em] py-[1em]
                ${index === 0 ? "border-t-[1px]" : ""}
                ${currentPage === navLink.path ? "text-blue" : ""}`}
                  href={navLink.path}
                  key={index}
                  onClick={() => setCurrentPage(navLink.path)}
                >
                  {navLink.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </SheetContent>
        </Sheet>

        <div className="flex items-center justify-between gap-[1.7em]">
          <ThemeToggle className="hidden md:block" />
          <Link href="#contact">
            <ButtonOutlineCustom title="Contact" />
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}
