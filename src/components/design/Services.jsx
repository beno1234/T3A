import Typewriter from "typewriter-effect";

import {
  brainwaveWhiteSymbol,
  gradient,
  loading,
  pause,
  play,
} from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";
import { useEffect, useRef, useState } from "react";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  const [showIAResponse, setShowIAResponse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIAResponse(true), 6000); // 2.5 segundos de delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mensagem do usuário */}
      <div className="absolute top-16 right-8 w-[18rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base text-white">
        <Typewriter
          options={{
            strings: [
              "Oi T3A, responde esse lead pra mim?",
              "T3A, agenda uma reunião com esse contato.",
              "Pode qualificar esse cliente automaticamente?",
              "Responde dizendo que estamos analisando o pedido.",
              "T3A, fecha essa venda pra mim!",
            ],
            autoStart: true,
            loop: false, // mostra apenas uma vez
          }}
        />
        <ChatBubbleWing className="absolute left-full bottom-0" />
      </div>

      {/* Resposta da IA */}
      {showIAResponse && (
        <div className="absolute top-60 left-8 w-[18rem] py-6 px-8 bg-[#1F1F1F] rounded-t-xl rounded-br-xl font-code text-base text-white transition-opacity duration-500">
          <Typewriter
            options={{
              strings: [
                "Claro! Já respondi com uma mensagem personalizada.",
                "Reunião agendada para amanhã às 15h.",
                "Lead qualificado: alto potencial de conversão.",
                "Mensagem enviada: 'Estamos verificando seu pedido!'",
                "Venda concluída com sucesso. 🎉",
              ],
              autoStart: true,
              loop: false,
            }}
          />
          <ChatBubbleWing className="absolute right-full bottom-0" />
        </div>
      )}
    </>
  );
};

export const VideoChatMessage = ({ isPlaying }) => {
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
      <Typewriter
        options={{
          strings: isPlaying ? ["Video generating..."] : ["Video generated!"],
          cursor: isPlaying ? "|" : "",
          autoStart: true,
          deleteSpeed: isPlaying ? "natural" : Infinity,
          loop: isPlaying,
        }}
      />
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <div className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        {isPlaying ? (
          <img
            src={loading}
            alt="Loading"
            className="w-4 h-4 animate-spin pointer-events-none select-none"
          />
        ) : (
          <span>just now</span>
        )}
      </div>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = ({ isPlaying, setIsPlaying }) => {
  const [counter, setCounter] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter >= 100) setCounter(0);
      if (!isPlaying) return clearInterval(interval);

      progressRef.current.style.width = `${counter}%`;
      setCounter((oldCounter) => oldCounter + 0.5);
    }, 100);

    return () => clearInterval(interval);
  }, [counter, isPlaying]);

  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={isPlaying ? pause : play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3 cursor-pointer"
        onClick={() => setIsPlaying(!isPlaying)}
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div ref={progressRef} className="h-0.5 bg-color-1 transition-all" />
      </div>
    </div>
  );
};
