import Wrapper from "./Wrapper";
import { FaArrowUp } from "react-icons/fa6";
import FooterNav from "@/components/FooterNav";

export default function Footer() {
  return (
    <footer
      data-aos="zoom-in-up"
      data-aos-offset="50"
      className="mb-16 overflow-x-hidden scrollbar-none"
    >
      <Wrapper className="flex items-center justify-between border-body gap-2 md:gap-[3em] border-t-[1px] pt-5">
        <div className="flex flex-1 flex-wrap items-center justify-center cmd:justify-between gap-7">
          <p
            data-aos="fade-right"
            data-aos-offset="50"
            data-aos-duration="600"
            className="text-center"
          >
            &copy; 2024 Chisom Njoku Joseph, All rights reserved
          </p>
          {/* Nav */}
          <FooterNav />
        </div>
        <a
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-duration="600"
          data-aos-delay="200"
          href="#"
          className="text-white size-7em p-2 bg-gradient rounded-full hover:scale-105 transition-all cursor-pointer"
        >
          <FaArrowUp />
        </a>
      </Wrapper>
    </footer>
  );
}
