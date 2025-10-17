// src/components/RankingGeral/HistoryChart.tsx
import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Jogo } from "../RankingChart/types";

interface Props {
  jogos: Jogo[];
}

export const HistoryChart: React.FC<Props> = ({ jogos }) => {
  // Calcular quantidade de jogos por ano
  const historyData = useMemo(() => {
    const counts: Record<number, number> = {};
    jogos.forEach((j) => {
      const ano = j["Ano de Lançamento"];
      if (ano) {
        counts[ano] = (counts[ano] || 0) + 1;
      }
    });
    // Ordenar por ano
    return Object.entries(counts)
      .map(([ano, value]) => ({ ano: Number(ano), value }))
      .sort((a, b) => a.ano - b.ano);
  }, [jogos]);

  return (
    <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">
        Histórico de Jogos por Ano
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={historyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#FF8042" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
