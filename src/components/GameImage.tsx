// src/components/GameImage.tsx
import React, { useState } from "react";

interface GameImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function GameImage({ src, alt, className }: GameImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Imagem centralizada no preview */}
      <div className="flex justify-center my-4">
        <img
          src={src}
          alt={alt}
          className={`max-w-xs md:max-w-md lg:max-w-lg rounded shadow hover:shadow-lg transition cursor-pointer ${className}`}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)} // fecha ao clicar fora da imagem
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // impede fechamento ao clicar na imagem
          >
            <img
              src={src}
              alt={alt}
              className="max-h-screen max-w-screen rounded shadow-lg"
            />
            {/* Botão fechar */}
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-80 transition"
              onClick={() => setIsOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
