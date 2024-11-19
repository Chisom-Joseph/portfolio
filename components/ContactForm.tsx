"use client";
import dynamic from "next/dynamic";
import { useState, FormEvent } from "react";
const AiOutlineLoading3Quarters = dynamic(
  () => import("react-icons/ai").then((mod) => mod.AiOutlineLoading3Quarters),
  { ssr: false }
);
import submitContactForm from "@/app/actions/submitContactForm";
import ButtonOutlineCustom from "@/components/ui/custom/ButtonGradientFull";
import AnimatedModal from "@/components/ui/custom/Modal";

export default function ContactForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async function (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);

    // Call the server action
    const result = await submitContactForm(formData);

    // Update response state
    setResponse(result);
    setLoading(false);
  };
  return (
    <form
      className="flex flex-col items-start justify-center gap-7 rounded-2xl border-[1px] border-body p-6"
      onSubmit={handleSubmit}
    >
      <div
        data-aos="flip-up"
        data-aos-duration="5000"
        className="flex w-full flex-col items-start justify-center"
      >
        <label className="inline-bolock mb-1.5" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded-xl border-[1px] border-body bg-transparent p-2"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>
      <div
        data-aos="flip-up"
        data-aos-duration="5000"
        className="flex w-full flex-col items-start justify-center"
      >
        <label className="inline-bolock mb-1.5" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded-xl border-[1px] border-body bg-transparent p-2"
          id="email"
          type="email"
          name="email"
          placeholder="Name"
        />
      </div>
      <div
        data-aos="flip-up"
        data-aos-duration="5000"
        className="flex w-full flex-col items-start justify-center"
      >
        <label className="inline-bolock mb-1.5" htmlFor="message">
          Message
        </label>
        <textarea
          rows={4}
          className="w-full rounded-xl border-[1px] border-body bg-transparent p-2"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
      </div>
      <div
        className={`flex w-full ${
          loading && "pointer-events-none cursor-progress opacity-75"
        }`}
      >
        <ButtonOutlineCustom
          className="w-full text-white"
          title={loading ? "Submitting..." : "Submit"}
          {...(loading && {
            icon: <AiOutlineLoading3Quarters className="animate-spin" />,
            disabled: loading,
          })}
        />
      </div>
      <AnimatedModal />
    </form>
  );
}
