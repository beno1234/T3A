import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { curve, heroBackground, robot, video } from "../assets";
import { heroIcons } from "../constants";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div
        ref={parallaxRef}
        data-scroll
        data-scroll-speed="2"
        className="container relative"
      >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Automatize suas vendas
            <br />
            <Typewriter
              options={{
                strings: [
                  "IA no WhatsApp.",
                  "Leads qualificados.",
                  "Ganhe tempo.",
                  "Foque na gestão.",
                  "Cresça com liberdade.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Somos a T3A — um movimento para PMEs que buscam liberdade, escala e
            vendas no piloto automático com inteligência artificial.
          </p>

          <Button href="#pricing" white>
            Entre em contato conosco
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <video
                  className="w-full  pointer-events-none select-none"
                  width={1024}
                  height={490}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={video} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-white backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Gerando leads"
                  />
                </ScrollParallax> */}
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
