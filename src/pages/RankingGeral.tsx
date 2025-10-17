// src/pages/RankingGeral.tsx
import React, { useEffect, useState } from "react";
import { TopGenresChart } from "../components/RankingGeral/TopGenresChart";
import { TopGamesChart } from "../components/RankingGeral/TopGamesChart";
import { TopYearsChart } from "../components/RankingGeral/TopYearsChart";
import { HistoryChart } from "../components/RankingGeral/HistoryChart";
import { CriteriaRadarChart } from "../components/RankingGeral/CriteriaRadarChart";
import { JogoGeral } from "../components/RankingGeral/typesTopGeral";

export default function RankingGeral() {
  const [jogos, setJogos] = useState<JogoGeral[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/todos.json"); // ou seu endpoint de dados
        const json: JogoGeral[] = await res.json();
        setJogos(json.filter(j => j.Situação?.trim() === "Zerado"));
      } catch (err) {
        console.error("Erro ao carregar JSON:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-4 transition-colors duration-300">
      <div className="w-full max-w-[1500px] mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Ranking Geral dos Jogos
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Página Beta — conteúdo em desenvolvimento
            </p>

        {/* Top 10 Gêneros */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <TopGenresChart jogos={jogos} />
        </div>

        {/* Top 10 Jogos */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <TopGamesChart jogos={jogos} />
        </div>

        {/* Top 10 Anos */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <TopYearsChart jogos={jogos} />
        </div>

        {/* Histórico de Jogos por Ano */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <HistoryChart jogos={jogos} />
        </div>

        {/* Radar de Critérios */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <CriteriaRadarChart jogos={jogos} />
        </div>
      </div>
    </div>
  );
}
