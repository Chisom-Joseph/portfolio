import Image from "next/image";

type projectProps = {
  title: string;
  description: string;
  image: any;
};

export default function ProjectCard({
  title,
  description,
  image,
}: projectProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image src={image} alt={title} />
    </div>
  );
}
