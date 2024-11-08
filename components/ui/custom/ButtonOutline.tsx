import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card-button";

type buttonProps = {
  title: string;
};

export default function ButtonOutlineCustom({ title }: buttonProps) {
  return (
    <CardContainer className="text-[0.7em]">
      <CardBody>
        <CardItem translateZ="50">
          <button className="border w-max border-black dark:border-white rounded-full py-[0.5em] px-[2em] cursor-pointer">
            {title}
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
