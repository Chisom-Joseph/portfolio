import clsx from "clsx";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "next-themes";

interface WrapperProps {
  className?: string;
}

export default function ThemeToggle({ className }: WrapperProps) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      className={clsx("m-auto max-w-[75em] p-[1.5em]", className)}
      onClick={() =>
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      {resolvedTheme === "dark" ? (
        <IoSunnySharp className="text-[1.4em]" />
      ) : (
        <IoMoonOutline className="text-[1.4em]" />
      )}
    </button>
  );
}
