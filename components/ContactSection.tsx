import { socialHandles } from "@/data";
import ButtonOutlineCustom from "./ui/custom/ButtonGradientFull";
import Wrapper from "./Wrapper";

export default function ContactSection() {
  return (
    <section className="mb-16">
      <Wrapper>
        <h1 className="font-powerGroteskUltraBold text-[3em] md:text-[4em] w-fit leading-[0.9em] md:leading-[1em] mb-[0.5em] mt-[0.2em] m-auto">
          Contact
        </h1>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-32">
          <div className="mb-10">
            <h2 className="text-gradient w-fit mb-4">Write me a message</h2>
            <form
              className="flex flex-col items-start justify-center gap-7 border-body border-[1px] rounded-2xl p-6"
              action="POST"
            >
              <div className="flex flex-col items-start justify-center w-full">
                <label className="inline-bolock mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-transparent border-body border-[1px] rounded-xl p-2 w-full"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <label className="inline-bolock mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  className="bg-transparent border-body border-[1px] rounded-xl p-2 w-full"
                  id="email"
                  type="email"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <label className="inline-bolock mb-1.5" htmlFor="message">
                  Email
                </label>
                <textarea
                  rows={4}
                  className="bg-transparent border-body border-[1px] rounded-xl p-2 w-full"
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex w-full">
                <ButtonOutlineCustom
                  className="text-white w-full"
                  title="Submit"
                />
              </div>
            </form>
          </div>

          <div>
            <h2 className="text-gradient w-fit mb-4">Social handles</h2>
            <div className="flex flex-col items-start justify-center gap-4">
              {socialHandles.map((socialHandle, index) => (
                <div
                  key={index}
                  className="text-body text-lg flex items-center justify-start gap-4"
                >
                  <div className="flex items-center justify-start text-2xl p-1.5 border-[1px] border-body rounded-full">
                    <socialHandle.icon />
                  </div>
                  <p>{socialHandle.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
