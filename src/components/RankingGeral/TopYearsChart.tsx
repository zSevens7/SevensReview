// src/components/RankingGeral/TopYearsChart.tsx
import React, { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Jogo } from "../RankingChart/types";

interface Props {
  jogos: Jogo[];
}

export const TopYearsChart: React.FC<Props> = ({ jogos }) => {
  // Contar quantidade de jogos por ano
  const yearsData = useMemo(() => {
    const counts: Record<number, number> = {};
    jogos.forEach((j) => {
      const ano = j["Ano de Lançamento"];
      if (ano) {
        counts[ano] = (counts[ano] || 0) + 1;
      }
    });
    return Object.entries(counts)
      .map(([ano, value]) => ({ ano: Number(ano), value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10); // Top 10 anos
  }, [jogos]);

  return (
    <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">
        Top 10 Anos com Mais Jogos
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={yearsData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#00C49F" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
