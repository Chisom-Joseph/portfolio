"use client";

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { skills } from "@/data";
import Wrapper from "./Wrapper";

export default function SkillsSection() {
  const navListRef = useRef<HTMLDivElement | null>(null);
  const activeSkillRef = useRef<HTMLDivElement | null>(null);
  const [skillCategories, setSkillCategories] = useState<Set<string>>(
    new Set(["All"])
  );
  const [activeSkill, setActiveSkill] = useState<string>("All");

  useLayoutEffect(() => {
    skills.forEach((skill) => {
      setSkillCategories((previousCategories) =>
        new Set(previousCategories).add(skill.category)
      );
    });
  }, []);

  const handleCategoryChange = ({
    skill,
    index,
  }: {
    skill: string;
    index: number;
  }) => {
    if (navListRef.current && activeSkillRef.current) {
      const activeItem = navListRef.current.children[index] as HTMLElement;

      gsap.to(activeSkillRef.current, {
        duration: 0.05,
        width: activeItem.offsetWidth,
        left: activeItem.offsetLeft,
        ease: "power2.inOut",
      });

      setActiveSkill(skill);
    }
  };

  return (
    <section className="mb-[8em]">
      <Wrapper>
        <h1 className="font-powerGroteskUltraBold text-[3em] md:text-[4em] w-fit leading-[0.9em] md:leading-[1em] mb-[0.5em] mt-[0.2em] m-auto">
          Skills
        </h1>

        <div
          ref={navListRef}
          className="relative font-bold flex max-h-[4em] first-child:text-red-300 items-center justify-around w-max m-auto mb-[4em] rounded-full border-[1px] dark:bg-white/5"
        >
          {Array.from(skillCategories).map((skill, index) => (
            <div
              key={index}
              className={`${
                activeSkill === skill && "text-white"
              } md:text-[1em] text-[0.7em] py-4 relative flex items-center px-[2em] h-full cursor-pointer transition-all duration-500 ease-in-out`}
              onClick={() => handleCategoryChange({ skill, index })}
            >
              {index == 0 && (
                <div
                  ref={activeSkillRef}
                  className="categoryActive h-full w-full absolute top-0 left-0 bg-gradient rounded-full -z-10 transition-all duration-300 ease-in-out"
                />
              )}
              {skill}
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-16 flex items-center justify-center flex-wrap gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${
                skill.category === activeSkill || activeSkill === "All"
                  ? ""
                  : "hidden"
              } text-body text-center`}
            >
              <div className="text-6xl p-4 border-[1px] border-body rounded-[0.55em] w-fit mb-4">
                <skill.icon />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
