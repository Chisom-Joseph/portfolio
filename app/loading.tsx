import Image from "next/image";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import loadingImage from "@/public/gifs/loading.gif";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-white dark:bg-darkPurple text-darkPurple dark:text-white pt-[1.5em] md:pt-[5em] text-center md:text-left z-50 gap-4">
      <div className="bg-black size-48 rounded-full overflow-hidden">
        <Image
          className="size-full object-cover"
          src={loadingImage}
          alt="Loading..."
        />
      </div>
      <h1 className="font-bold md:text-lg">Loading...</h1>

      <BackgroundOverlay />
    </div>
  );
}
