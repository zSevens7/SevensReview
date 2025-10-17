// src/components/RankingGeral/typesTopGeral.ts
export interface JogoGeral {
  "Nome Do Jogo": string;
  Empresa: string;
  "Ano de Lançamento": number;
  Situação: string;
  Plataforma: string;
  Gen1?: string;
  Gen2?: string;
  Nacionalidade?: string;
  Mecanica?: number | string;
  Grafico?: number | string;
  "Trilha Sonora"?: number | string;
  Historia?: number | string;
  "Otimização"?: number | string;
  Media?: number | string;
}
