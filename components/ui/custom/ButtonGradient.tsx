import clsx from "clsx";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card-button";

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
    <CardContainer className={clsx(className)}>
      <CardBody>
        <CardItem translateZ="50">
          <button className="flex items-center justify-between gap-[0.7em] text-white font-bold bg-gradient border rounded-full py-[0.8em] px-[2em] cursor-pointer">
            {title}
            {icon ? icon : ""}
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
