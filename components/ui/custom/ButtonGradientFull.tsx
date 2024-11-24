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
  disabled?: boolean;
};

export default function ButtonOutlineCustom({
  title,
  icon,
  className,
  disabled,
}: buttonProps) {
  return (
    <CardContainer className={clsx(className)}>
      <CardBody>
        <CardItem translateZ="50">
          <button
            disabled={disabled}
            className="w-full flex items-center justify-center gap-[0.7em] font-bold bg-gradient border rounded-full py-[0.8em] px-[2em] cursor-pointer"
          >
            {title}
            {icon ? icon : ""}
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
