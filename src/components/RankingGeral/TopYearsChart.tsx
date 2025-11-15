// src/components/RankingGeral/TopYearsChart.tsx
import React, { useMemo, useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { Jogo } from "../RankingChart/types";

interface Props {
  jogos: Jogo[];
}

export const TopYearsChart: React.FC<Props> = ({ jogos }) => {
  const [topN, setTopN] = useState(10);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  // Responsividade: ajustar topN
  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
      setTopN(window.innerWidth < 768 ? 5 : 10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Contar quantidade de jogos por ano
  const yearsData = useMemo(() => {
    const counts: Record<number, number> = {};
    jogos.forEach((j) => {
      const ano = j["Ano de Lançamento"];
      if (ano) counts[ano] = (counts[ano] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([ano, value]) => ({ ano: Number(ano), value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, topN);
  }, [jogos, topN]);

  // Largura mínima do gráfico para evitar barras apertadas
  const chartWidth = Math.max(containerWidth, yearsData.length * 80);

  return (
    <div className="w-full overflow-x-auto"> {/* só horizontal */}
      <div className="h-96 min-w-[600px] bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
        <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">
          Top 10 Anos com Mais Jogos
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={yearsData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="ano" angle={-45} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
};
