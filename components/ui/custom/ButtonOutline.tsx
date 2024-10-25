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
    <CardContainer>
      <CardBody>
        <CardItem translateZ="50">
          <button className="border border-black dark:border-white rounded-full py-[0.5em] px-[2em] cursor-pointer">
            {title}
          </button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
