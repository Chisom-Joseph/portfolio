"use client";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { HiOutlineViewGrid } from "react-icons/hi";
import ThemeToggle from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Wrapper from "@/components/Wrapper";
import ButtonOutlineCustom from "./ui/custom/ButtonOutline";
import { navLinks } from "@/data";
import { ActiveNavContext } from "@/providers/ActiveNavProvider";

export default function Header() {
  const activeNavContext = useContext(ActiveNavContext);
  const activeSection = activeNavContext?.activeSection;
  const updateActiveSection = activeNavContext?.updateActiveSection;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="max-w-[100vw]">
      <Wrapper className="flex items-center justify-between py-[1em] font-bold md:py-[0.4em]">
        {/* Desktop Menu */}
        <nav className="hidden gap-[4em] md:flex">
          {navLinks.map((navLink, index) => (
            <Link
              className={`
                hover:text-blue dark:hover:text-pink transition-all
                ${
                  navLink.path === (activeSection as string)
                    ? "text-blue dark:text-pink"
                    : ""
                }`}
              href={navLink.path}
              rel="noopener noreferrer"
              prefetch={true}
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

        {/* Mobile Menue */}
        <Sheet>
          <SheetTrigger>
            <HiOutlineViewGrid className="text-[1.4em] md:hidden" />
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="align-left text-bold mt-[4.3em] flex flex-col justify-center font-bold">
              {navLinks.map((navLink, index) => (
                <Link
                  className={`
                hover:text-blue dark:hover:text-pink transition-all border-b-[1px] px-[1.3em] py-[1em]
                ${index === 0 ? "border-t-[1px]" : ""}
                ${
                  navLink.path === (activeSection as string)
                    ? "text-blue dark:text-pink"
                    : ""
                }`}
                  href={navLink.path}
                  rel="noopener noreferrer"
                  prefetch={true}
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
            {mounted && <ThemeToggle />}
          </SheetContent>
        </Sheet>

        <div className="flex items-center justify-between gap-[1.7em]">
          {mounted && <ThemeToggle className="hidden md:block" />}
          <Link href="#contact">
            <ButtonOutlineCustom title="Contact" />
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}
