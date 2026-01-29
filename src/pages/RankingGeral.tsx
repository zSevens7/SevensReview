// src/routes/RankingGeral.tsx
import React, { useEffect, useState, useMemo } from "react";

// --- Imports dos Componentes de Gráfico ---
import { TopGenresChart } from "../components/RankingGeral/TopGenresChart";
import { TopFranchisesChart } from "../components/RankingGeral/TopFranchisesChart";
import { TopYearsChart } from "../components/RankingGeral/TopYearsChart";
import { HistoryChart } from "../components/RankingGeral/HistoryChart";
import { CriteriaRadarChart } from "../components/RankingGeral/CriteriaRadarChart";
import { HallOfFame } from "../components/RankingGeral/HallOfFame"; 
import { NationalityChart } from "../components/RankingGeral/NationalityChart"; 
import { ExpandableCard } from "../components/RankingGeral/ExpandableCard"; // Seu novo card expansível
import { AverageRatingByYearChart } from "../components/RankingGeral/AverageRatingByYearChart";

// --- Types e Ícones ---
import { JogoGeral } from "../components/RankingGeral/typesTopGeral";
import { Trophy, Gamepad2, Star, Calendar, TrendingUp, Globe } from "lucide-react";

export default function RankingGeral() {
  const [jogos, setJogos] = useState<JogoGeral[]>([]);

  // Carrega os dados
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/data/todos.json?t=${new Date().getTime()}`);
        const json: JogoGeral[] = await res.json();
        // Filtra apenas os zerados
        setJogos(json.filter(j => j.Situação?.trim().toLowerCase() === "zerado"));
      } catch (err) {
        console.error("Erro ao carregar JSON:", err);
      }
    };
    fetchData();
  }, []);

  // --- CÁLCULOS DOS KPIs (Resumo do Topo) ---
  const stats = useMemo(() => {
    if (jogos.length === 0) return null;
    const totalJogos = jogos.length;
    
    // Força conversão para Number para evitar erros de soma
    const mediaGeral = jogos.reduce((acc, cur) => acc + Number(cur.Media || 0), 0) / totalJogos;
    
    // Calcula gênero favorito
    const genres: Record<string, number> = {};
    jogos.forEach(j => { if (j.Gen1) genres[j.Gen1] = (genres[j.Gen1] || 0) + 1; });
    const topGenre = Object.entries(genres).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";

    // Calcula Top 1 (Maior Nota)
    const topGame = [...jogos].sort((a, b) => Number(b.Media || 0) - Number(a.Media || 0))[0];

    return { totalJogos, mediaGeral, topGenre, topGame };
  }, [jogos]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 px-4 pb-12 transition-colors duration-300">
      <div className="w-full max-w-[1500px] mx-auto space-y-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Ranking Geral dos Jogos
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
            Dashboard analítico completo do histórico de jogatinas
            </p>
        </div>

        {/* 1. SEÇÃO DE KPIs (Cards Animados) */}
        {stats && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KPICard 
                    title="Total Zerados" 
                    value={stats.totalJogos} 
                    icon={<Gamepad2 className="w-6 h-6 text-white" />} 
                    color="bg-blue-500"
                />
                <KPICard 
                    title="Média Geral" 
                    value={stats.mediaGeral.toFixed(1)} 
                    icon={<TrendingUp className="w-6 h-6 text-white" />} 
                    color="bg-green-500"
                />
                <KPICard 
                    title="Gênero Favorito" 
                    value={stats.topGenre} 
                    icon={<Star className="w-6 h-6 text-white" />} 
                    color="bg-purple-500"
                />
                <KPICard 
                    title="Top 1 Jogo" 
                    value={stats.topGame?.["Nome Do Jogo"] || "-"} 
                    subValue={`Nota: ${stats.topGame?.Media}`}
                    icon={<Trophy className="w-6 h-6 text-white" />} 
                    color="bg-yellow-500"
                />
            </div>
        )}

        {/* 2. GRID PRINCIPAL (Três Colunas com Expandable Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* COLUNA 1: Gênero e País */}
            <div className="space-y-8 flex flex-col h-full lg:col-span-1">
                <ExpandableCard 
                    title="Gêneros" 
                    icon={<Star className="w-5 h-5 text-yellow-500" />}
                >
                    <TopGenresChart jogos={jogos} />
                </ExpandableCard>

                <ExpandableCard 
                    title="Origem (País)" 
                    icon={<Globe className="w-5 h-5 text-blue-500" />}
                >
                    <NationalityChart jogos={jogos} />
                </ExpandableCard>
            </div>

            {/* COLUNA 2: Hall da Fama e Radar */}
            <div className="space-y-8 flex flex-col h-full lg:col-span-1">
                 {/* Hall da Fama (Geralmente não precisa expandir, mas mantive o padrão) */}
                 <ExpandableCard 
                    title="Hall da Fama (Top 5)" 
                    icon={<Trophy className="w-5 h-5 text-yellow-500" />}
                >
                    <HallOfFame jogos={jogos} />
                </ExpandableCard>

                <ExpandableCard 
                    title="Critérios (Radar)" 
                    icon={<TrendingUp className="w-5 h-5 text-purple-500" />}
                >
                    <CriteriaRadarChart jogos={jogos} />
                </ExpandableCard>
            </div>

            {/* COLUNA 3: Franquias e Anos */}
            <div className="space-y-8 flex flex-col h-full lg:col-span-1">
                <ExpandableCard 
                    title="Top Franquias" 
                    icon={<Trophy className="w-5 h-5 text-green-500" />}
                >
                    <TopFranchisesChart jogos={jogos} />
                </ExpandableCard>

                <ExpandableCard 
                    title="Por Ano de Lançamento" 
                    icon={<Calendar className="w-5 h-5 text-purple-500" />}
                >
                    <TopYearsChart jogos={jogos} />
                </ExpandableCard>
            </div>
        </div>

        {/* 3. SEÇÃO DE HISTÓRICO (Full Width) */}
        
        {/* Gráfico 1: Quantidade de Jogos (Já existia) */}
        <ExpandableCard 
            title="Volume de Jogos Zerados por Ano" 
            icon={<Calendar className="w-5 h-5 text-orange-500" />}
        >
            <HistoryChart jogos={jogos} />
        </ExpandableCard>

        {/* Gráfico 2: Média das Notas (NOVO) */}
        <ExpandableCard 
            title="Qualidade Média por Ano (Evolução das Notas)" 
            icon={<TrendingUp className="w-5 h-5 text-emerald-500" />}
        >
            <AverageRatingByYearChart jogos={jogos} />
        </ExpandableCard>

      </div>
    </div>
  );
}

// --- Componente KPICard com Borda Animada ---
const KPICard = ({ title, value, subValue, icon, color }: any) => (
    <div className="
        group relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 
        transition-all duration-300 ease-out
        border-2 border-transparent 
        hover:border-gray-900 dark:hover:border-white
        shadow-md hover:shadow-2xl hover:-translate-y-1
    ">
        {/* Conteúdo do Card */}
        <div className="flex items-center gap-4 relative z-10">
            {/* Ícone com fundo colorido */}
            <div className={`p-4 rounded-xl ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            
            {/* Textos */}
            <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                    {title}
                </p>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 line-clamp-1">
                    {value}
                </h4>
                {subValue && (
                    <p className="text-xs text-gray-400 mt-1 font-mono">
                        {subValue}
                    </p>
                )}
            </div>
        </div>
    </div>
);