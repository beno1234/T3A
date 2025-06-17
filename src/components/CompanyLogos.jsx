import { companyLogos } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className} overflow-hidden whitespace-nowrap`}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Algumas Empresas confiam na T3A
      </h5>
      <div className="flex scroll-linear w-max">
        {[...companyLogos, ...companyLogos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`Logo-${i}`}
            className="mx-6 h-[68px] object-contain"
            width={134}
            height={28}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
