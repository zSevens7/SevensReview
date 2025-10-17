// src/components/RankingGeral/TopGamesChart.tsx
import React, { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { Jogo } from "../RankingChart/types";

interface Props {
  jogos: Jogo[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CFF", "#FF4C4C", "#FF66CC", "#33CC99"];

export const TopGamesChart: React.FC<Props> = ({ jogos }) => {
  // Contar quantas vezes cada jogo aparece como “Zerado”
  const topGamesData = useMemo(() => {
    const counts: Record<string, number> = {};
    jogos.forEach((j) => {
      if (j.Situação?.trim() === "Zerado") {
        counts[j["Nome Do Jogo"]] = (counts[j["Nome Do Jogo"]] || 0) + 1;
      }
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 10); // Top 10
  }, [jogos]);

  return (
    <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">
        Top 10 Jogos Mais Zerados(Mudar no futuro)
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={topGamesData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="value" fill="#0088FE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
