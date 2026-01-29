// src/components/GameImage.tsx
import React, { useState, CSSProperties } from "react";

interface GameImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties; // Adicionamos isso aqui!
}

export default function GameImage({ src, alt, className, style }: GameImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Imagem centralizada no preview */}
      <div className="flex justify-center my-4">
        <img
          src={src}
          alt={alt}
          // Adicionamos o style={style} aqui
          style={style} 
          className={`cursor-pointer rounded shadow hover:shadow-lg transition ${className || "max-w-xs md:max-w-md lg:max-w-lg"}`}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              // Adicionamos o style={style} aqui também para o pixel art ficar nítido no zoom
              style={style}
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