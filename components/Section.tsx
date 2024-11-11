"use client";
import React, { useContext, useRef, useEffect } from "react";
import { ActiveNavContext } from "@/providers/ActiveNavProvider";

interface SectionProps {
  id: string;
  className: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  const ref = useRef<HTMLElement>(null);
  const activeNavContext = useContext(ActiveNavContext);

  // Ensure activeNavContext is not null before using registerSection
  useEffect(() => {
    if (ref.current && activeNavContext?.registerSection) {
      activeNavContext.registerSection(id, ref.current);
    }
  }, [id, activeNavContext]);

  return (
    <section className={className} id={id} ref={ref}>
      {children}
    </section>
  );
};

export default Section;
