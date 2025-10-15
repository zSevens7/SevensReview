import React from "react";
import { Review } from "@/data/reviews";
import { Link } from "react-router-dom";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  // Define cor da nota
  const getNoteColor = (note: number) => {
    if (note >= 80) return "text-green-600 dark:text-green-400";
    if (note >= 50) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <Link to={review.path} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col
                      hover:ring-4 hover:ring-blue-400 hover:ring-opacity-40 cursor-pointer">
        <img
          src={review.assetPath}
          alt={review.name}
          className="w-full h-48 object-cover rounded mb-2 group-hover:scale-105 transition-transform duration-300"
        />
        <h2 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">
          {review.name}
        </h2>
        <p className={`text-sm mb-2 ${getNoteColor(review.note)}`}>
          Nota: {review.note} | {new Date(review.date).toLocaleDateString()}
        </p>
        <p className="text-gray-700 dark:text-gray-200 text-sm line-clamp-4">
          {review.description}
        </p>
      </div>
    </Link>
  );
}
