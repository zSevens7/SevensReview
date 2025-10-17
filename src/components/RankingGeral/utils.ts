// src/components/RankingGeral/utils.ts
import { JogoGeral } from "./typesTopGeral";

// Top 10 jogos por nota média
export const getTopGames = (jogos: JogoGeral[], top = 10) =>
  [...jogos]
    .sort((a, b) => (Number(b.Media) || 0) - (Number(a.Media) || 0))
    .slice(0, top);

// Top 10 gêneros
export const getTopGenres = (jogos: JogoGeral[], top = 10) => {
  const count: Record<string, number> = {};
  jogos.forEach((j) => {
    if (j.Gen1) count[j.Gen1] = (count[j.Gen1] || 0) + 1;
    if (j.Gen2) count[j.Gen2] = (count[j.Gen2] || 0) + 1;
  });
  return Object.entries(count)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, top);
};

// Top 10 anos com mais jogos
export const getTopYears = (jogos: JogoGeral[], top = 10) => {
  const count: Record<number, number> = {};
  jogos.forEach((j) => {
    const ano = j["Ano de Lançamento"];
    count[ano] = (count[ano] || 0) + 1;
  });
  return Object.entries(count)
    .map(([year, value]) => ({ year: Number(year), value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, top);
};

// Histórico de jogos por ano
export const getHistoryByYear = (jogos: JogoGeral[]) => {
  const count: Record<number, number> = {};
  jogos.forEach((j) => {
    const ano = j["Ano de Lançamento"];
    count[ano] = (count[ano] || 0) + 1;
  });
  return Object.entries(count).map(([year, value]) => ({ year: Number(year), value }));
};
