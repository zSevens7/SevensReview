// src/components/RankingGeral/TopGenresChart.tsx
import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { Jogo } from "../RankingChart/types";

interface Props {
  jogos: Jogo[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CFF", "#FF4C4C", "#FF66CC", "#33CC99"];

export const TopGenresChart: React.FC<Props> = ({ jogos }) => {
  const [hiddenGenres, setHiddenGenres] = useState<Set<string>>(new Set());

  // Agrupar gêneros (Gen1 + Gen2)
  const genreData = useMemo(() => {
    const counts: Record<string, number> = {};
    jogos.forEach((j) => {
      if (j.Gen1) counts[j.Gen1] = (counts[j.Gen1] || 0) + 1;
      if (j.Gen2) counts[j.Gen2] = (counts[j.Gen2] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value) // ordenar do mais jogado
      .slice(0, 10); // top 10 gêneros
  }, [jogos]);

  // Renderizar legenda personalizada
  const renderLegend = () => (
    <div className="flex flex-wrap justify-center gap-3 mt-2">
      {genreData.map((entry, index) => (
        <button
          key={entry.name}
          onClick={() => {
            const newSet = new Set(hiddenGenres);
            if (hiddenGenres.has(entry.name)) newSet.delete(entry.name);
            else newSet.add(entry.name);
            setHiddenGenres(newSet);
          }}
          className={`px-2 py-1 rounded text-white text-sm`}
          style={{
            backgroundColor: hiddenGenres.has(entry.name)
              ? "#ccc"
              : COLORS[index % COLORS.length],
          }}
        >
          {entry.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full h-96">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-2">
        Top 10 Gêneros Mais Jogados
      </h2>
      <div className="flex flex-col items-center">
        <PieChart width={300} height={250}>
          <Pie
            data={genreData.filter(d => !hiddenGenres.has(d.name))}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {genreData.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        {renderLegend()}
      </div>
    </div>
  );
};
