import Image from "next/image";
import { cn } from "@/lib/utils";
import ButtonOutlineCustom from "./custom/ButtonOutline";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2em] max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  ...props
}: {
  className?: string;
  image: any;
  title: string;
  description?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-[25em] md:max-w-full m-auto row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-white/5 dark:border-white/[0.2] bg-transparent border border-lightBorder justify-between flex flex-col space-y-4",
        className
      )}
      {...props}
    >
      <div className="rounded-xl overflow-hidden">
        <Image className="lg:max-w-full" src={image} alt={title} />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-powerGroteskUltraBold font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-body text-xs mb-[1.5em]">
          {description}
        </div>
        <div className="flex items-center md:justify-start justify-center gap-[0.7em]">
          <ButtonOutlineCustom title="Live Preview" />
          <ButtonOutlineCustom title="Github" />
        </div>
      </div>
    </div>
  );
};
