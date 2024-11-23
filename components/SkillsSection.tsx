"use client";
import { useState, useLayoutEffect } from "react";
import { skills } from "@/data";
import Wrapper from "./Wrapper";
import AOS from "aos";
import AnimatedNav from "@/components/AnimatedNav";
import Section from "@/components/Section";

export default function SkillsSection() {
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

  useLayoutEffect(() => {
    AOS.refresh();
  }, [activeSkill]);

  return (
    <Section
      id="skills"
      className="mb-[8em] scroll-m-12 overflow-x-hidden scrollbar-none"
    >
      <Wrapper>
        <h1
          data-aos="fade-down"
          className="m-auto mb-[0.5em] mt-[0.2em] w-fit font-powerGroteskUltraBold text-[3em] leading-[0.9em] md:text-[4em] md:leading-[1em]"
        >
          Skills
        </h1>

        <AnimatedNav
          items={Array.from(skillCategories)}
          activeItem={activeSkill}
          onCategoryChange={setActiveSkill}
        />

        <div
          data-aos="zoom-out-up"
          className="mx-auto mb-16 flex max-w-4xl flex-wrap items-center justify-center gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className={`${
                skill.category === activeSkill || activeSkill === "All"
                  ? ""
                  : "hidden"
              } hover:scale-110 transition-all cursor-pointer text-body text-center`}
            >
              <div className="mb-4 w-fit rounded-[0.55em] border-[1px] border-body p-4 text-6xl">
                <skill.icon />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </Section>
  );
}
