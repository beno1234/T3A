import { useEffect, useState } from "react";

const AiLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const minDuration = 500;
    const start = performance.now();

    const finishLoading = () => {
      const elapsed = performance.now() - start;
      const delay = Math.max(minDuration - elapsed, 0);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setVisible(false), 700); // tempo da transição
      }, delay);
    };

    window.addEventListener("load", finishLoading);

    return () => window.removeEventListener("load", finishLoading);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="ai-loader"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#000d24] text-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Logo ou ícone */}
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-75" />
          <div className="relative z-10 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
            IA
          </div>
        </div>

        {/* Texto animado */}
        <div className="text-lg font-semibold tracking-widest uppercase animate-pulse mb-2">
          Carregando Inteligência
        </div>

        {/* Barra futurista */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-loader-bar" />
        </div>
      </div>
    </div>
  );
};

export default AiLoader;
