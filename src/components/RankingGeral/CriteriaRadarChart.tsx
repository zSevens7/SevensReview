// src/components/RankingGeral/CriteriaRadarChart.tsx
import React, { useMemo } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Jogo } from "../RankingChart/types";

interface Props {
  jogos: Jogo[];
}

interface RadarData {
  subject: string;
  A: number;
}

export const CriteriaRadarChart: React.FC<Props> = ({ jogos }) => {
  const radarData: RadarData[] = useMemo(() => {
    const criterios = ["Mecanica", "Grafico", "Trilha Sonora", "Historia", "Otimização"] as const;
    return criterios.map((c) => {
      const soma = jogos.reduce((acc, j) => acc + Number(j[c] || 0), 0);
      const media = jogos.length > 0 ? soma / jogos.length : 0;
      return { subject: c, A: media };
    });
  }, [jogos]);

  return (
    <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">
        Média das Notas por Critério
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Nota Média" dataKey="A" stroke="#FF8042" fill="#FF8042" fillOpacity={0.6} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
