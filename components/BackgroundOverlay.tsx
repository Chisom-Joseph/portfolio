import Image from "next/image";
import backgroundOverlayImage from "@/public/images/backgroundOverlayImage.png";

export default function BackgroundOverlay() {
  return (
    <Image
      className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen h-screen opacity-50 dark:opacity-85 object-cover -z-10"
      src={backgroundOverlayImage}
      alt="Background Overlay"
    />
  );
}
