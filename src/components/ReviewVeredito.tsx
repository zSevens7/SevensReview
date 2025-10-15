// src/components/ReviewVeredito.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ReviewVereditoProps {
  text: string;          // Texto do veredito
  rating?: number;       // Nota
  date: string;          // Data da edição do autor
}

const getBorderColor = (rating?: number) => {
  if (!rating) return "border-gray-400";
  if (rating >= 90) return "border-yellow-400";   // Ouro
  if (rating >= 80) return "border-green-800";    // Verde escuro
  if (rating >= 70) return "border-yellow-300";   // Amarelo claro
  if (rating >= 50) return "border-red-300";      // Vermelho claro
  return "border-red-600";                        // Vermelho forte
};

export default function ReviewVeredito({ text, rating, date }: ReviewVereditoProps) {
  const borderColor = getBorderColor(rating);

  return (
    <div className={`my-6 p-6 rounded-lg shadow-md border-4 ${borderColor} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                    mx-2 sm:mx-4 md:mx-8 lg:mx-12`}>
      
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 border-b-2 pb-2">
        Veredito Final
      </h2>
      
      <p className="mb-4">{text}</p>
      
      {rating !== undefined && (
        <p className="font-bold text-xl md:text-2xl mb-4">Nota: <span>{rating}/100</span></p>
      )}

      <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-2 md:mb-0">
          ← Voltar para Home
        </Link>
        <span>Data da edição do autor: {date}</span>
      </div>
    </div>
  );
}
