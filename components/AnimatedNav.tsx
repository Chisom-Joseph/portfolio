"use client";
import { FC, useRef } from "react";
import gsap from "gsap";

type AnimatedNavProps = {
  items: string[];
  activeItem: string;
  onCategoryChange: (item: string) => void;
};

const AnimatedNav: FC<AnimatedNavProps> = ({
  items,
  activeItem,
  onCategoryChange,
}) => {
  const navListRef = useRef<HTMLDivElement | null>(null);
  const activeItemRef = useRef<HTMLDivElement | null>(null);

  const handleCategoryChange = (item: string, index: number) => {
    if (navListRef.current && activeItemRef.current) {
      const activeItem = navListRef.current.children[index] as HTMLElement;

      gsap.to(activeItemRef.current, {
        duration: 0.05,
        width: activeItem.offsetWidth,
        left: activeItem.offsetLeft,
        ease: "power2.inOut",
      });

      onCategoryChange(item);
    }
  };

  return (
    <div
      ref={navListRef}
      data-aos="flip-up"
      data-aos-duration="5000"
      className="relative m-auto mb-[4em] flex max-h-[4em] w-max items-center justify-around rounded-full border-[1px] font-bold dark:bg-white/5"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            activeItem === item && "text-white"
          } md:text-[1em] text-[0.7em] py-4 relative flex items-center px-[2em] h-full cursor-pointer transition-all duration-500 ease-in-out`}
          onClick={() => handleCategoryChange(item, index)}
        >
          {index === 0 && (
            <div
              ref={activeItemRef}
              className="categoryActive bg-gradient absolute left-0 top-0 -z-10 h-full w-full rounded-full transition-all duration-300 ease-in-out"
            />
          )}
          {item}
        </div>
      ))}
    </div>
  );
};

export default AnimatedNav;
