// src/components/ReviewSection.tsx
import React from "react";

interface ReviewSectionProps {
  title: string;
  rating?: number;
  ratingColor?: string;
  children: React.ReactNode;
}

export default function ReviewSection({ title, rating, ratingColor = "bg-blue-500", children }: ReviewSectionProps) {
  return (
    <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-3xl shadow border border-gray-200 dark:border-gray-600
                    mx-2 sm:mx-4 md:mx-8 lg:mx-12">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        {rating !== undefined && (
          <span className={`text-white text-lg md:text-xl px-3 py-1 rounded ${ratingColor}`}>
            {rating}
          </span>
        )}
      </div>
      <div className="text-gray-700 dark:text-gray-200">{children}</div>
    </div>
  );
}