import clsx from "clsx";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={clsx("m-auto max-w-[75em] px-[1em] md:px-[2.5em]", className)}
    >
      {children}
    </div>
  );
}
