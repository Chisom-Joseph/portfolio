"use client";
import { useState, useLayoutEffect } from "react";
import AOS from "aos";
import Wrapper from "@/components/Wrapper";
import { projects } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import ButtonOutlineCustom from "./ui/custom/ButtonGradient";
import { FaArrowRight } from "react-icons/fa6";
import AnimatedNav from "@/components/ui/custom/AnimatedNav";
import Section from "@/components/Section";

export default function ProjectsSection() {
  const [projectCategories, setProjectCategories] = useState<Set<string>>(
    new Set(["All"])
  );
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useLayoutEffect(() => {
    projects.forEach((project) => {
      setProjectCategories((previousCategories) =>
        new Set(previousCategories).add(project.category)
      );
    });
  }, []);

  useLayoutEffect(() => {
    AOS.refresh();
  }, [activeCategory]);

  return (
    <Section
      id="projects"
      className="mb-[8em] mt-[8em] xl:mt-[12em] scroll-m-12"
    >
      <Wrapper>
        <h1
          data-aos="fade-down"
          className="m-auto mb-[0.5em] mt-[0.2em] w-fit font-powerGroteskUltraBold text-[3em] leading-[0.9em] md:text-[4em] md:leading-[1em]"
        >
          Projects
        </h1>

        <AnimatedNav
          items={Array.from(projectCategories)}
          activeItem={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div data-aos="zoom-in-up">
          <BentoGrid className="mx-auto mb-16 max-w-4xl">
            {projects.map((project, index) => (
              <BentoGridItem
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                data-aos="flip-up"
                className={`${
                  project.category === activeCategory ||
                  activeCategory === "All"
                    ? ""
                    : "hidden"
                }`}
              />
            ))}
          </BentoGrid>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="5000"
          className="m-auto w-fit"
        >
          <ButtonOutlineCustom title="More" icon={<FaArrowRight />} />
        </div>
      </Wrapper>
    </Section>
  );
}
