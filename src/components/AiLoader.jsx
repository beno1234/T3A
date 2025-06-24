import { useEffect, useState } from "react";

const AiLoader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 300); // fade-out mais suave
    }, 1000); // simula carregamento por 1s

    return () => clearTimeout(timeout);
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
        {/* Ícone simples e leve */}
        <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-2xl font-bold">
          IA
        </div>

        {/* Texto leve */}
        <div className="text-lg font-semibold tracking-widest uppercase mb-3">
          Carregando IA
        </div>

        {/* Barra animada simplificada */}
        <div className="w-48 h-1.5 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-blue-400 to-indigo-400 animate-loader-bar-smooth" />
        </div>
      </div>
    </div>
  );
};

export default AiLoader;
