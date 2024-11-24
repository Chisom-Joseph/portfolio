"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { socialHandleIcons, IconName } from "@/data";

export const AnimatedTooltip = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: IconName;
  };
}) => {
  const Icon = socialHandleIcons[item.icon];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const target = event.target as HTMLAnchorElement;
    const halfWidth = target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      <div
        className="group relative -mr-4"
        onMouseEnter={() => setHoveredIndex(item.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence mode="popLayout">
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
            >
              <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-pink to-transparent" />
              <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-blue to-transparent" />
              <div className="relative z-30 text-base font-bold text-white">
                Chisom Joseph Njoku
              </div>
              <div className="text-xs text-white">{item.title}</div>
            </motion.div>
          )}
        </AnimatePresence>
        <Link
          onMouseMove={handleMouseMove}
          href={item.link}
          target="_blank"
          data-aos="fade-left"
          className="flex cursor-pointer items-center justify-start gap-4 text-lg text-body"
        >
          <div className="flex items-center justify-start rounded-full border-[1px] border-body p-1.5 text-2xl">
            <Icon />
          </div>
          <p>{item.title}</p>
        </Link>
      </div>
    </>
  );
};
