// src/components/RankingGeral/RankingGeral.tsx
import React, { useEffect, useState } from "react";
import { TopFranchisesChart as TopGamesChart } from "./TopFranchisesChart";
import { TopGenresChart } from "./TopGenresChart";
import { TopYearsChart } from "./TopYearsChart";
import { CriteriaRadarChart } from "./CriteriaRadarChart";
import { HistoryChart } from "./HistoryChart";
import { Jogo } from "../RankingChart/types";

export const RankingGeral: React.FC = () => {
  const [jogos, setJogos] = useState<Jogo[]>([]);

  // Carregar todos os jogos zerados
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adicionei ?t=... para garantir que não pegue cache velho do navegador
        const res = await fetch(`/data/todos.json?t=${new Date().getTime()}`);
        const json: Jogo[] = await res.json();

        // CORREÇÃO AQUI:
        // Converte para minúsculo antes de comparar. Aceita "Zerado", "ZERADO", "zerado".
        setJogos(json.filter(j => j.Situação?.trim().toLowerCase() === "zerado"));
        
      } catch (err) {
        console.error("Erro ao carregar JSON:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-24 px-4">
      <div className="w-full max-w-[1500px] mx-auto space-y-8">

        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Ranking Geral
        </h1>

        {/* Top 10 Franquias (TopGamesChart) */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <TopGamesChart jogos={jogos} />
        </div>

        {/* Top 10 Gêneros mais jogados */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <TopGenresChart jogos={jogos} />
        </div>

        {/* Top 10 Anos com mais jogos zerados */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <TopYearsChart jogos={jogos} />
        </div>

        {/* Radar de notas médias por critério */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <CriteriaRadarChart jogos={jogos} />
        </div>

        {/* Histórico geral de jogos zerados */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <HistoryChart jogos={jogos} />
        </div>

      </div>
    </div>
  );
};