import React, { useState } from "react";
import { reviews, Review } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";

const QUANTITIES = [3, 6, 9, 12];
const SORT_TYPES = [
  { label: "Mais recentes", value: "date" },
  { label: "Melhor nota", value: "note" },
  { label: "Ordem alfabética", value: "name" },
];

export default function HomePage() {
  const [quantity, setQuantity] = useState(6);
  const [sortType, setSortType] = useState<"date" | "note" | "name">("date");
  const [page, setPage] = useState(1);

  // Ordena reviews
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortType === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortType === "note") return b.note - a.note;
    if (sortType === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  // Paginação
  const totalPages = Math.ceil(sortedReviews.length / quantity);
  const paginatedReviews = sortedReviews.slice((page - 1) * quantity, page * quantity);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Últimas Reviews</h1>

      {/* Filtro e Ordenação */}
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        {/* Quantidade */}
        <select
          className="border rounded px-3 py-2"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {QUANTITIES.map((q) => (
            <option key={q} value={q}>
              {q} por página
            </option>
          ))}
        </select>

        {/* Tipo de ordenação */}
        <select
          className="border rounded px-3 py-2"
          value={sortType}
          onChange={(e) => setSortType(e.target.value as "date" | "note" | "name")}
        >
          {SORT_TYPES.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>

        {/* Botão confirmar */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => setPage(1)} // Resetar para a primeira página ao mudar filtro
        >
          Aplicar
        </button>
      </div>

      {/* Grid de reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedReviews.map((review: Review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>

      {/* Paginação */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          &lt; Anterior
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-800"
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Próxima &gt;
        </button>
      </div>
    </div>
  );
}
