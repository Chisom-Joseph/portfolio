"use client";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "@/components/ui/animated-modal";

export default function ContactSectionModal() {
  const { setOpen } = useModal();
  return (
    <ModalBody>
      <ModalContent>
        <h1 className="text-center text-2xl">Contact submitted!</h1>
        <p className="text-center">Thanks for contacting me!</p>
      </ModalContent>
      <ModalFooter className="justify-center">
        <button
          onClick={() => setOpen(false)}
          className="cursor-pointer px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
        >
          Cancel
        </button>
      </ModalFooter>
    </ModalBody>
  );
}
