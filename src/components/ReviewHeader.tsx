// src/components/ReviewHeader.tsx
import React from "react";

interface ReviewHeaderProps {
  title: string;
  coverImage: string; // capa de fundo
  logo?: string;      // logo frontal opcional
  subtitle?: string;  // tagline opcional
  rating: number;
  genre: string;
  releaseDate: string;
  developer?: {
    name: string;
    countryFlag?: string; // caminho da bandeira
  };
  publisher?: string;
  engine?: string;
  platforms?: string[];
}

// Função que retorna as classes de cor do rating
const getRatingColor = (rating: number) => {
  if (rating >= 90) return "bg-yellow-400 text-black";      
  if (rating >= 80) return "bg-green-800 text-white";       
  if (rating >= 70) return "bg-yellow-300 text-black";      
  if (rating >= 50) return "bg-red-300 text-black";         
  return "bg-red-600 text-white";                           
};

const ReviewHeader: React.FC<ReviewHeaderProps> = ({
  title,
  coverImage,
  logo,
  subtitle,
  rating,
  genre,
  releaseDate,
  developer,
  publisher,
  engine,
  platforms,
}) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-md transition-colors duration-300 p-4 md:p-6 mx-2 md:mx-8">
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        
        {/* Logo ou Capa */}
        <img
          src={logo || coverImage}
          alt={title}
          className="w-36 h-36 md:w-40 md:h-56 object-contain rounded-lg shadow-lg"
        />

        {/* Informações do jogo */}
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 text-sm md:text-base">
            <span className={`px-3 py-1 rounded-full font-semibold ${getRatingColor(rating)}`}>
              ⭐ {rating}/100
            </span>
            <span>{genre}</span>
            <span>Lançamento: {releaseDate}</span>
          </div>

          {developer && (
            <div className="flex items-center gap-2 mt-2 text-sm md:text-base">
              {developer.countryFlag && (
                <img src={developer.countryFlag} alt={developer.name} className="w-5 h-5 object-contain" />
              )}
              <span>Desenvolvedor(a): {developer.name}</span>
            </div>
          )}

          {publisher && <span className="text-sm md:text-base mt-1">Publicadora: {publisher}</span>}
          {engine && <span className="text-sm md:text-base mt-1">Engine: {engine}</span>}
          {platforms && <span className="text-sm md:text-base mt-1">Plataformas: {platforms.join(", ")}</span>}

          {subtitle && (
            <p className="mt-2 text-gray-600 dark:text-gray-300 hidden md:block">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default ReviewHeader;
