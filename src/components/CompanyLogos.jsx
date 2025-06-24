import { companyLogos } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const CompanyLogos = ({ className }) => {
  useEffect(() => {
    AOS.init({
      duration: 8000,
      once: false,
      easing: "ease-out-cubic",
      mirror: true,
    });
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`${className} overflow-hidden whitespace-nowrap`}
      data-aos="fade-up"
    >
      <h5 className="tagline mb-6 text-center text-n-1/50">
        {t("CompanyLogos.title")}
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
