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
import { JogoGeral } from "./typesTopGeral";

// Função para remover acentos e normalizar nomes
const normalize = (str: string) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .trim()
    .toLowerCase();

interface Props {
  jogos: JogoGeral[];
}

export const TopFranchisesChart: React.FC<Props> = ({ jogos }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = useMemo(() => {
    const counts: Record<string, number> = {};
    const originalNames: Record<string, string> = {};

    jogos.forEach(j => {
      if (j.Situação?.trim() !== "Zerado" || !j.Franquia) return;

      const original = j.Franquia.trim();
      const norm = normalize(original);

      if (!originalNames[norm]) originalNames[norm] = original;

      counts[norm] = (counts[norm] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([normName, value]) => ({ name: originalNames[normName], value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, isMobile ? 5 : 10); // Top 5 no mobile
  }, [jogos, isMobile]);

  return (
    <div className="w-full bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md overflow-x-auto">
      <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">
        Top {isMobile ? 5 : 10} Franquias mais Zeradas
      </h2>

      <div style={{ minWidth: isMobile ? 600 : "100%", height: 380 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              interval={0}
              height={70}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
