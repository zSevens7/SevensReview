import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import { Jogo } from "./types";

interface Props {
  jogos: Jogo[];
}

interface RadarData {
  subject: string;
  A: number;
}

interface CriteriaDistribution {
  faixa: string;
  Mecanica: number;
  Grafico: number;
  "Trilha Sonora": number;
  Historia: number;
  Otimização: number;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CFF", "#FF4C4C"];

export const RankingChart: React.FC<Props> = ({ jogos }) => {
  const [barData, setBarData] = useState<{ ano: string; count: number }[]>([]);
  const [countryData, setCountryData] = useState<{ name: string; value: number }[]>([]);
  const [platformData, setPlatformData] = useState<{ name: string; value: number }[]>([]);
  const [genreData, setGenreData] = useState<{ name: string; value: number }[]>([]);
  const [radarData, setRadarData] = useState<RadarData[]>([]);
  const [criteriaDistributionData, setCriteriaDistributionData] = useState<CriteriaDistribution[]>([]);

  const [hiddenCountries, setHiddenCountries] = useState<Set<string>>(new Set());
  const [hiddenPlatforms, setHiddenPlatforms] = useState<Set<string>>(new Set());
  const [hiddenGenres, setHiddenGenres] = useState<Set<string>>(new Set());

  const toggleHidden = (type: "country" | "platform" | "genre", name: string) => {
    const map = type === "country" ? new Set(hiddenCountries) :
      type === "platform" ? new Set(hiddenPlatforms) :
      new Set(hiddenGenres);

    if (map.has(name)) map.delete(name);
    else map.add(name);

    if (type === "country") setHiddenCountries(map);
    else if (type === "platform") setHiddenPlatforms(map);
    else setHiddenGenres(map);
  };

  const renderLegend = (type: "country" | "platform" | "genre") => {
    const data = type === "country" ? countryData :
                   type === "platform" ? platformData :
                   genreData;
    return (
      <div className="flex flex-wrap justify-center mt-2 gap-2">
        {data.map((entry, index) => {
          const isHidden = type === "country" ? hiddenCountries.has(entry.name) :
                           type === "platform" ? hiddenPlatforms.has(entry.name) :
                           hiddenGenres.has(entry.name);

          // Classes para o fundo:
          // bg-gray-100 para o modo claro (light)
          // dark:bg-white para o modo escuro (dark)
          const backgroundClasses = "bg-gray-100 dark:bg-white";

          return (
            <span
              key={index}
              onClick={() => toggleHidden(type, entry.name)}
              className={`cursor-pointer text-sm px-2 py-1 rounded border ${backgroundClasses}`}
              style={{
                // Usamos a cor primária (do COLORS) para a cor do texto e da borda.
                borderColor: COLORS[index % COLORS.length],
                color: COLORS[index % COLORS.length],
                opacity: isHidden ? 0.3 : 1,
              }}
            >
              {entry.name} ({entry.value})
            </span>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    if (!jogos.length) return;

    // 1️⃣ BarChart - Jogos por ano
    const jogosAno: Record<string, number> = {};
    jogos.forEach(j => {
      const ano = j["Ano de Lançamento"];
      jogosAno[ano] = (jogosAno[ano] || 0) + 1;
    });
    setBarData(Object.entries(jogosAno).map(([ano, count]) => ({ ano, count })));

    // 2️⃣ PieChart - Jogos por país
    const jogosPais: Record<string, number> = {};
    jogos.forEach(j => {
      const pais = j.Nacionalidade || "Outro";
      jogosPais[pais] = (jogosPais[pais] || 0) + 1;
    });
    setCountryData(Object.entries(jogosPais).map(([name, value]) => ({ name, value })));

    // 3️⃣ PieChart - Jogos por plataforma
    const jogosPlat: Record<string, number> = {};
    jogos.forEach(j => {
      const plat = j.Plataforma || "Outro";
      jogosPlat[plat] = (jogosPlat[plat] || 0) + 1;
    });
    setPlatformData(Object.entries(jogosPlat).map(([name, value]) => ({ name, value })));

    // 4️⃣ PieChart - Jogos por gênero/mecânica
    const jogosGen: Record<string, number> = {};
    jogos.forEach(j => {
      const gens = [j.Gen1, j.Gen2].filter(Boolean) as string[];
      gens.forEach(g => {
        jogosGen[g] = (jogosGen[g] || 0) + 1;
      });
    });
    setGenreData(Object.entries(jogosGen).map(([name, value]) => ({ name, value })));

    // 5️⃣ RadarChart - Notas médias
    const criterios: (keyof Jogo)[] = ["Mecanica", "Grafico", "Trilha Sonora", "Historia", "Otimização"];
    const radar: RadarData[] = criterios.map(c => {
      const soma = jogos.reduce((acc, j) => acc + Number(j[c] || 0), 0);
      const media = soma / jogos.length;
      return { subject: c, A: media };
    });
    setRadarData(radar);

    // 6️⃣ Distribuição de notas por critério
    const distributionBuckets: string[] = [];
    for (let i = 0; i <= 100; i += 10) {
      distributionBuckets.push(`${i}-${i + 9}`);
    }

    const criteriaData: CriteriaDistribution[] = distributionBuckets.map(bucket => {
      const [min, max] = bucket.split("-").map(Number);
      const obj: CriteriaDistribution = {
        faixa: bucket,
        Mecanica: jogos.filter(j => j.Mecanica && Number(j.Mecanica) >= min && Number(j.Mecanica) <= max).length,
        Grafico: jogos.filter(j => j.Grafico && Number(j.Grafico) >= min && Number(j.Grafico) <= max).length,
        "Trilha Sonora": jogos.filter(j => j["Trilha Sonora"] && Number(j["Trilha Sonora"]) >= min && Number(j["Trilha Sonora"]) <= max).length,
        Historia: jogos.filter(j => j.Historia && Number(j.Historia) >= min && Number(j.Historia) <= max).length,
        Otimização: jogos.filter(j => j["Otimização"] && Number(j["Otimização"]) >= min && Number(j["Otimização"]) <= max).length,
      };
      return obj;
    });
    setCriteriaDistributionData(criteriaData);

  }, [jogos]);

  return (
    <div className="space-y-6">
      {/* 1️⃣ BarChart - Jogos por ano */}
      <div className="w-full h-64 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border-2 border-blue-400 dark:border-cyan-200">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Jogos por Ano</h2>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={barData}>
            <XAxis dataKey="ano" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2️⃣ PieChart - País */}
      <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border-4 border-blue-400 dark:border-cyan-200">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Distribuição por País</h2>
        <ResponsiveContainer width="100%" height="70%">
          <PieChart>
            <Pie
              data={countryData.filter(d => !hiddenCountries.has(d.name))}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {countryData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {renderLegend("country")}
      </div>

      {/* 3️⃣ PieChart - Plataforma */}
      <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border-2 border-blue-400 dark:border-cyan-200">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Distribuição por Plataforma</h2>
        <ResponsiveContainer width="100%" height="70%">
          <PieChart>
            <Pie
              data={platformData.filter(d => !hiddenPlatforms.has(d.name))}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {platformData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {renderLegend("platform")}
      </div>

      {/* 4️⃣ PieChart - Gênero/Mecânica */}
      <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border-4 border-blue-400 dark:border-cyan-200">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Distribuição por Gênero/Mecânica</h2>
        <ResponsiveContainer width="100%" height="70%">
          <PieChart>
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
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {renderLegend("genre")}
      </div>

      {/* 5️⃣ RadarChart - Média dos Critérios */}
      <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border-2 border-blue-400 dark:border-cyan-200">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
          Média dos Critérios de Avaliação
        </h2>
        <ResponsiveContainer width="100%" height="90%">
          <RadarChart data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Nota Média" dataKey="A" stroke="#FF8042" fill="#FF8042" fillOpacity={0.5} />
            <Tooltip />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* 6️⃣ Distribuição de notas por critério */}
      <div className="w-full h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md border-4 border-blue-400 dark:border-cyan-200">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
          Distribuição de Notas por Critério
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={criteriaDistributionData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
            <XAxis dataKey="faixa" angle={-30} textAnchor="end" height={60} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Mecanica" fill="#0088FE" />
            <Bar dataKey="Grafico" fill="#00C49F" />
            <Bar dataKey="Trilha Sonora" fill="#FFBB28" />
            <Bar dataKey="Historia" fill="#FF8042" />
            <Bar dataKey="Otimização" fill="#A28CFF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};