import { socialHandles } from "@/data";
import ButtonOutlineCustom from "@/components/ui/custom/ButtonGradientFull";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Wrapper from "@/components/Wrapper";
import Section from "@/components/Section";

export default function ContactSection() {
  return (
    <Section id="contact" className="mb-16 scroll-m-12">
      <Wrapper>
        <h1
          data-aos="fade-down"
          className="m-auto mb-[0.5em] mt-[0.2em] w-fit font-powerGroteskUltraBold text-[3em] leading-[0.9em] md:text-[4em] md:leading-[1em]"
        >
          Contact
        </h1>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-32">
          <div data-aos="fade-right" className="mb-10">
            <h2 data-aos="fade-up" className="text-gradient mb-4 w-fit">
              Write me a message
            </h2>
            <form
              className="flex flex-col items-start justify-center gap-7 rounded-2xl border-[1px] border-body p-6"
              action="POST"
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
                  placeholder="Name"
                />
              </div>
              <div
                data-aos="flip-up"
                data-aos-duration="5000"
                className="flex w-full flex-col items-start justify-center"
              >
                <label className="inline-bolock mb-1.5" htmlFor="message">
                  Email
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
                data-aos="flip-up"
                data-aos-duration="5000"
                className="flex w-full"
              >
                <ButtonOutlineCustom
                  className="w-full text-white"
                  title="Submit"
                />
              </div>
            </form>
          </div>

          <div data-aos="fade-left">
            <h2 data-aos="fade-up" className="text-gradient mb-4 w-fit">
              Social handles
            </h2>
            <div className="flex flex-col items-start justify-center gap-4">
              {socialHandles.map((socialHandle, index) => (
                <AnimatedTooltip
                  key={index}
                  item={{
                    id: index,
                    ...socialHandle,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
