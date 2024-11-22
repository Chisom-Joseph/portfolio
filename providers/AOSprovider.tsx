"use client";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
    });
    AOS.refresh();
  }, []);
  return <>{children}</>;
};
