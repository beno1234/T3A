import { brainwaveSymbol, check, curve, T3Red } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { useEffect, useRef } from "react";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./Section";
import gsap from "gsap";

const Collaboration = () => {
  const circleRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    // Animação do círculo girando
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });

    // Animação do título "Secretária Humanizada"
    const text = titleRef.current;
    const chars = text.innerText.split("");
    text.innerHTML = ""; // Limpa
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.opacity = 0;
      text.appendChild(span);
    });

    gsap.to(text.children, {
      opacity: 1,
      stagger: 0.05,
      delay: 0.5,
      duration: 0.2,
    });

    const titles = gsap.utils.toArray(".animate-title-letter");

    titles.forEach((el) => {
      const text = el.dataset.title;
      el.innerHTML = ""; // limpa o conteúdo
      [...text].forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.opacity = 0;
        el.appendChild(span);
      });

      gsap.to(el.children, {
        opacity: 1,
        stagger: 0.04,
        duration: 0.2,
        delay: 0.3,
      });
    });
  }, []);
  return (
    <Section crosses className="">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            <span ref={titleRef}>Secretária Humanizada</span>
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img
                    src={check}
                    width={24}
                    alt="check"
                    height={24}
                    className="pointer-events-none select-none"
                  />
                  <h6
                    className="body-2 ml-5 animate-title-letter"
                    data-title={item.title}
                  >
                    {item.title}
                  </h6>
                </div>

                {item.text && (
                  <p className="body-2 mt-3 text-white">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Adquirir liçenca da IA </Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p
            className="body-2 mb-4 text-white md:mb-16 lg:mb-32 lg:w-[32rem] lg:mx-auto"
            ref={titleRef}
          >
            {collabText}
          </p>

          <div
            className="relative left-1/2 flex w-[22rem] aspect-square border border-white rounded-full -translate-x-1/2 scale-75 md:scale-100"
            ref={circleRef}
          >
            <div className="flex w-60 aspect-square m-auto border border-white rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={T3Red} width={48} height={48} alt="T3A" />
                </div>
              </div>
            </div>

            <ul ref={circleRef}>
              {collabApps.map((app, i) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    i * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-white rounded-xl -rotate-${
                      i * 45
                    } animate-pulse`}
                  >
                    <img
                      src={app.icon}
                      alt={app.title}
                      width={app.height}
                      height={app.height}
                      className="m-auto"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
