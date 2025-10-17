import React, { useEffect, useState } from "react";
import { RankingTable } from "../components/RankingTable/RankingTable";
import { RankingChart } from "../components/RankingChart/RankingChart";
import { getAvailableYears } from "../utils/getAvailableYears";
import { Jogo } from "../components/RankingTable/types";


export default function RankingAno() {
  const years = getAvailableYears();
  const [ano, setAno] = useState(years[years.length - 1] || "todos");
  const [jogos, setJogos] = useState<Jogo[]>([]);

  // Carregar dados para gráficos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = ano === "todos" ? "/data/todos.json" : `/data/${ano}.json`;
        const res = await fetch(url);
        const json: Jogo[] = await res.json();
        setJogos(json.filter(j => j["Situação"]?.trim() === "Zerado"));
      } catch (err) {
        console.error("Erro ao carregar JSON:", err);
      }
    };
    fetchData();
  }, [ano]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-24 px-4">
      <div className="w-full max-w-[1500px] mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Ranking dos Anos
        </h1>

        {/* Filtro de ano */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <label className="text-gray-700 dark:text-gray-300">Selecione o ano:</label>
          <select
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            className="px-3 py-2 rounded border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <option value="todos">Todos os anos</option>
            {years.map((y: string) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        {/* Card da tabela */}
        <div className="w-full max-w-[1600px] mx-auto overflow-x-auto bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors mb-10">
          <RankingTable ano={ano} />
        </div>

        {/* Gráficos */}
        {jogos.length > 0 && (
          <div className="w-full max-w-[1600px]  mx-auto bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-colors mb-10">
            <RankingChart jogos={jogos} />
          </div>
        )}
      </div>
    </div>
  );
}
