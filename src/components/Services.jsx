import { service1, service2, service3, check, fernando } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Section from "./Section";
import { curve, joao } from "../assets";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const joaoRef = useRef(null);
  const fernandoRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".founder-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          rotateY: index % 2 === 0 ? -45 : 45,
          z: -200,
        },
        {
          opacity: 1,
          rotateY: 0,
          z: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  const { t, i18n } = useTranslation();
  const [keyJoao, setKeyJoao] = useState(0);
  const [keyFernando, setKeyFernando] = useState(0);
  useEffect(() => {
    setKeyJoao((prev) => prev + 1);
    setKeyFernando((prev) => prev + 1);
  }, [i18n.language]);
  return (
    <Section id="how-to-use">
      <div className="container perspective-1000">
        <Heading title={t("services.title")} />

        <div className="relative">
          <div
            className="founder-card relative z-1 flex flex-col md:flex-row h-auto md:h-[39rem] mb-10 p-6 md:p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
            ref={joaoRef}
          >
            <div className="relative w-full h-[22rem] md:w-3/5 md:h-auto md:absolute md:top-0 md:left-0 pointer-events-none select-none mb-6 md:mb-0">
              <img
                className="w-full h-full object-cover md:object-right rounded-2xl md:rounded-none"
                width={800}
                height={730}
                alt="Smartest AI"
                src={joao}
              />
            </div>

            <div className="relative z-1 w-full lg:max-w-[92rem] lg:mr-auto lg:pl-[calc(60%)]">
              <h4 className="h4 mb-4 text-white ">
                {t("services.joao.name")}{" "}
              </h4>
              <p className="body-2 mb-6 text-n-3">{t("services.joao.role")}</p>
              <p className="body-2 text-n-3">
                <Typewriter
                  key={keyJoao}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(t("services.joao.description"))
                      .start();
                  }}
                  options={{ autoStart: true, loop: false }}
                />
              </p>
            </div>
          </div>

          <div
            className="founder-card relative z-1 flex flex-col md:flex-row h-auto md:h-[39rem] mb-10 p-6 md:p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
            ref={fernandoRef}
          >
            <div className="relative w-full h-[22rem] md:w-3/5 md:h-auto mb-6 md:mb-0 md:absolute md:top-0 md:right-0 pointer-events-none select-none">
              <img
                className="w-full h-full object-cover md:object-right rounded-2xl md:rounded-none"
                width={800}
                height={730}
                alt="Smartest AI"
                src={fernando}
              />
            </div>

            <div className="relative z-1 w-full md:max-w-[92rem] md:mr-auto md:pr-[calc(60%)]">
              <h4 className="h4 mb-4">{t("services.fernando.name")} </h4>
              <p className="body-2 mb-6 text-n-3">
                {t("services.fernando.role")}
              </p>
              <p className="body-2  text-n-3">
                <Typewriter
                  key={keyFernando}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(t("services.fernando.description"))
                      .start();
                  }}
                  options={{ autoStart: true, loop: false }}
                />
              </p>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
