import Image from "next/image";
import backgroundOverlayImage from "@/public/images/backgroundOverlayImage.png";

export default function BackgroundOverlay() {
  return (
    <Image
      className="fixed left-[50%] top-[50%] -z-10 h-screen w-screen translate-x-[-50%] translate-y-[-50%] object-cover opacity-50 dark:opacity-85"
      src={backgroundOverlayImage}
      alt="Background Overlay"
      priority
    />
  );
}
