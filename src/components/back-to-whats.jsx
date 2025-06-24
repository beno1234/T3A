import React from "react";

const BackTo = () => {
  return (
    <div>
      {/* Botões flutuantes */}
      <div>
        {/* WhatsApp - canto inferior esquerdo */}
        <a
          href="https://wa.me/5534999306776?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%2C%20quero%20saber%20mais%20sobre%20o%20trabalho%20do%20Grupo%20BMouse"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          title="Fale conosco no WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.72 13.06a4.53 4.53 0 01-2.3-.62 13.13 13.13 0 01-3.19-2.88 13.13 13.13 0 01-2.88-3.19 4.53 4.53 0 01-.62-2.3c0-.29.23-.53.52-.57l2.35-.29a.56.56 0 01.6.31l.8 1.65c.12.25.07.55-.13.74l-.74.73a10.84 10.84 0 003.19 3.19l.73-.74c.2-.2.5-.25.74-.13l1.65.8a.56.56 0 01.31.6l-.29 2.35c-.04.29-.28.52-.57.52z"
            />
          </svg>
        </a>

        {/* Back to Top - canto inferior direito */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-black hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          title="Voltar ao topo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
      ;
    </div>
  );
};

export default BackTo;
