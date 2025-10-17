import React from "react";

interface ReviewHeaderProps {
  title: string;
  coverImage: string;
  logo?: string;
  subtitle?: string;
  rating: number;
  genre: string;
  releaseDate: string;
  developer?: {
    name: string;
    countryFlag?: string;
  };
  publisher?: string;
  engine?: string;
  platforms?: string[];
}

const getRatingColor = (rating: number) => {
  if (rating >= 90) return "bg-yellow-500 text-black";
  if (rating >= 80) return "bg-green-700 text-white";
  if (rating >= 70) return "bg-orange-100 text-black";
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
    <header
      className="mt-12 relative overflow-hidden rounded-e-3xl md:rounded-ee-3xl shadow-lg transition-all duration-500
                 bg-gradient-to-r from-gray-200 via-gray-100 to-white
                 dark:from-blue-950 dark:via-blue-900 dark:to-blue-700
                 p-4 md:p-6 mx-2 md:mx-8 text-gray-900 dark:text-white"
    >
      {/* Capa de fundo com opacidade e blur */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 z-10">
        {/* Logo / Imagem */}
        <div className="rounded-s-xl overflow-hidden shadow-lg bg-white/30 dark:bg-white/10 backdrop-blur-md">
          <img
            src={logo || coverImage}
            alt={title}
            className="w-36 h-36 md:w-40 md:h-56 object-contain"
          />
        </div>

        {/* Infos */}
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>

          <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base">
            <span className={`px-3 py-1 rounded-full font-semibold ${getRatingColor(rating)}`}>
              ⭐ {rating}/100
            </span>
            <span className="opacity-90">{genre}</span>
            <span className="opacity-80">Lançamento: {releaseDate}</span>
          </div>

          {developer && (
            <div className="flex items-center gap-2 mt-2 text-sm md:text-base">
              {developer.countryFlag && (
                <img src={developer.countryFlag} alt={developer.name} className="w-5 h-5 object-contain" />
              )}
              <span>Desenvolvedor(a): {developer.name}</span>
            </div>
          )}

          {publisher && <span className="text-sm md:text-base mt-1 opacity-90">Publicadora: {publisher}</span>}
          {engine && <span className="text-sm md:text-base mt-1 opacity-90">Engine: {engine}</span>}
          {platforms && (
            <span className="text-sm md:text-base mt-1 opacity-90">
              Plataformas: {platforms.join(", ")}
            </span>
          )}

          {subtitle && (
            <p className="mt-3 text-gray-700 dark:text-gray-300 italic hidden md:block">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Brilho sutil à direita */}
      <div className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-white/30 dark:from-blue-500/20 pointer-events-none" />
    </header>
  );
};

export default ReviewHeader;
