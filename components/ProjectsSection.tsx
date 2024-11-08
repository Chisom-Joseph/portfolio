"use client";
import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Wrapper from "@/components/Wrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import ButtonOutlineCustom from "./ui/custom/ButtonGradient";
import { FaArrowRight } from "react-icons/fa6";

export default function ProjectsSection() {
  const navListRef = useRef<HTMLDivElement | null>(null);
  const activeCategoryRef = useRef<HTMLDivElement | null>(null);
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

  useGSAP(
    () => {
      gsap.to(navListRef.current, { opacity: 1, duration: 1 });
    },
    { scope: navListRef }
  );

  const handleCategoryChange = ({
    category,
    index,
  }: {
    category: string;
    index: number;
  }) => {
    if (navListRef.current && activeCategoryRef.current) {
      const activeItem = navListRef.current.children[index] as HTMLElement;

      gsap.to(activeCategoryRef.current, {
        duration: 0.05,
        width: activeItem.offsetWidth,
        left: activeItem.offsetLeft,
        ease: "power2.inOut",
      });

      setActiveCategory(category);
    }
  };

  return (
    <section id="about" className="mt-[8em] xl:mt-[12em] mb-[8em]">
      <Wrapper>
        <h1 className="font-powerGroteskUltraBold text-[3em] md:text-[4em] w-fit leading-[0.9em] md:leading-[1em] mb-[0.5em] mt-[0.2em] m-auto">
          Projects
        </h1>

        <div
          ref={navListRef}
          className="relative font-bold flex max-h-[4em] first-child:text-red-300 items-center justify-around w-max m-auto mb-[4em] rounded-full border-[1px] dark:bg-white/5"
        >
          {Array.from(projectCategories).map((category, index) => (
            <div
              key={index}
              className={`${
                activeCategory === category && "text-white"
              } md:text-[1em] text-[0.7em] py-4 relative flex items-center px-[2em] h-full cursor-pointer transition-all duration-500 ease-in-out`}
              onClick={() => handleCategoryChange({ category, index })}
            >
              {index == 0 && (
                <div
                  ref={activeCategoryRef}
                  className="categoryActive h-full w-full absolute top-0 left-0 bg-gradient rounded-full -z-10 transition-all duration-300 ease-in-out"
                />
              )}
              {category}
            </div>
          ))}
        </div>

        <BentoGrid className="max-w-4xl mx-auto mb-16">
          {projects.map((project, index) => (
            <BentoGridItem
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              className={`${
                project.category === activeCategory || activeCategory === "All"
                  ? ""
                  : "hidden"
              }`}
            />
          ))}
        </BentoGrid>

        <div className="m-auto w-fit">
          <ButtonOutlineCustom title="More" icon={<FaArrowRight />} />
        </div>
      </Wrapper>
    </section>
  );
}
