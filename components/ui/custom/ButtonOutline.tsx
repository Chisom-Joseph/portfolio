type buttonProps = {
  title: string;
};

export default function ButtonOutlineCustom({ title }: buttonProps) {
  return (
    <button className="border border-black dark:border-white rounded-full py-[0.5em] px-[2em] cursor-pointer">
      {title}
    </button>
  );
}
