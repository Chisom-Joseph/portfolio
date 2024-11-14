"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";

interface ActiveNavContextType {
  activeSection: string | null;
  registerSection: (id: string, ref: HTMLElement) => void;
  updateActiveSection: (activeSection: string) => void;
}

export const ActiveNavContext = createContext<ActiveNavContextType | null>(
  null
);

interface ActiveNavProviderProps {
  children: ReactNode;
}

export const ActiveNavProvider: React.FC<ActiveNavProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const registerSection = (id: string, ref: HTMLElement) => {
    sectionsRef.current[id] = ref;
  };

  const updateActiveSection = (activeSection: string) => {
    setActiveSection(activeSection);
  };

  return (
    <ActiveNavContext.Provider
      value={{ activeSection, registerSection, updateActiveSection }}
    >
      {children}
    </ActiveNavContext.Provider>
  );
};
