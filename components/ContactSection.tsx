import { socialHandles } from "@/data";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Wrapper from "@/components/Wrapper";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

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
            <ContactForm />
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
