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

  return (
    <Section id="how-to-use">
      <div className="container perspective-1000">
        <Heading title={<>As Mentes por Trás da Tecnologia </>} />

        <div className="relative">
          {/* Service 1 */}
          <div
            className="founder-card relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
            ref={joaoRef}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
                src={joao}
              />
            </div>

            <div className="relative z-1 max-w-[32rem] ml-auto">
              <h4 className="h4 mb-4">João Victor Trindade </h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Co-Fundador e desenvolvedor da T3A.
              </p>
              <p className="body-2 mb-[3rem] text-n-3">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Une a sua mentalidade inovadora e ampla criatividade para desenvolver soluções por IA que beneficiarão a vida de milhares de brasileiros nos próximos 10 anos."
                      )
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                  }}
                />
              </p>
            </div>
          </div>

          <div
            className="founder-card relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
            ref={fernandoRef}
          >
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none select-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
                src={fernando}
              />
            </div>

            <div className="relative z-1 max-w-[32rem] mr-auto">
              <h4 className="h4 mb-4">Fernando Gusmão </h4>
              <p className="body-2 mb-[3rem] text-n-3">
                é Co-Fundador e CFO da T3A.
              </p>
              <p className="body-2 mb-[3rem] text-n-3">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "Sua expertise em gestão e liderança é um dos pilares que sustenta o crescimento do Movimento, garantindo que as entregas da T3A sejam escaláveis e ofereçam valor duradouro aos nossos clientes."
                      )
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                  }}
                />
              </p>
            </div>
          </div>

          {/* Service 2 & 3 */}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
