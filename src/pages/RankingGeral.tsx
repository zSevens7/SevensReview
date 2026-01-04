// src/routes/RankingGeral.tsx
import React, { useEffect, useState } from "react";
import { TopGenresChart } from "../components/RankingGeral/TopGenresChart";
import { TopFranchisesChart } from "../components/RankingGeral/TopFranchisesChart";
import { TopYearsChart } from "../components/RankingGeral/TopYearsChart";
import { HistoryChart } from "../components/RankingGeral/HistoryChart";
import { CriteriaRadarChart } from "../components/RankingGeral/CriteriaRadarChart";
import { JogoGeral } from "../components/RankingGeral/typesTopGeral";

export default function RankingGeral() {
  const [jogos, setJogos] = useState<JogoGeral[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adicionei o timestamp (?t=...) para forçar o navegador a não usar cache antigo
        const res = await fetch(`/data/todos.json?t=${new Date().getTime()}`); 
        const json: JogoGeral[] = await res.json();

        // CORREÇÃO AQUI:
        // Converte para minúsculo antes de comparar. 
        // Assim ele aceita "Zerado", "ZERADO", "zerado", etc.
        setJogos(json.filter(j => j.Situação?.trim().toLowerCase() === "zerado"));
        
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

        {/* Top 10 Franquias */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
          <TopFranchisesChart jogos={jogos} />
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