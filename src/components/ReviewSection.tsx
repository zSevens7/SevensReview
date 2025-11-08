// src/components/ReviewSection.tsx
import React from "react";

interface ReviewSectionProps {
  title: string;
  rating?: number;
  ratingColor?: string;
  children: React.ReactNode;
}

// Função auxiliar — gera cor baseada na nota
function getRatingColor(rating: number): string {
  if (rating <= 10) return "bg-red-900";
  if (rating <= 20) return "bg-red-700";
  if (rating <= 30) return "bg-red-500";
  if (rating <= 40) return "bg-orange-500";
  if (rating <= 50) return "bg-orange-400";
  if (rating <= 60) return "bg-yellow-400 text-black";
  if (rating <= 65) return "bg-yellow-300 text-black";
  if (rating <= 70) return "bg-lime-300 text-black";
  if (rating <= 75) return "bg-lime-400 text-black";
  if (rating <= 80) return "bg-green-400 text-black";
  if (rating <= 85) return "bg-green-500 text-white";
  if (rating <= 90) return "bg-green-600 text-white";
  if (rating <= 95) return "bg-emerald-600 text-white";
  return "bg-emerald-700 text-white";
}

export default function ReviewSection({
  title,
  rating,
  ratingColor,
  children,
}: ReviewSectionProps) {
  // Se veio manualmente, usa; se não, calcula automático
  const effectiveColor =
    ratingColor || (rating !== undefined ? getRatingColor(rating) : "");

  return (
    <div
      className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-3xl shadow border border-gray-200 dark:border-gray-600
                 mx-2 sm:mx-4 md:mx-8 lg:mx-12"
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        {rating !== undefined && (
          <span
            className={`text-lg md:text-xl px-3 py-1 rounded font-bold ${effectiveColor}`}
          >
            {rating}
          </span>
        )}
      </div>
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </div>
  );
}
