import clsx from "clsx";

type buttonProps = {
  title: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function ButtonOutlineCustom({
  title,
  icon,
  className,
}: buttonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-between gap-[0.7em] text-white font-bold bg-gradient border rounded-full py-[0.8em] px-[2em] cursor-pointer",
        className
      )}
    >
      {title}
      {icon ? icon : ""}
    </button>
  );
}
