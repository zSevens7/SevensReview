export interface Jogo {
  "Nome Do Jogo": string;
  Empresa: string;
  "Ano de Lançamento": number;
  Situação: string;
  Plataforma: string;
  Gen1?: string;
  Gen2?: string;
  Nacionalidade?: string;
  Mecanica?: number | string;
  "Grafico"?: number | string;
  "Grafico "?: number | string; // ← adiciona as duas formas para evitar erros de espaço
  "Trilha Sonora"?: number | string;
  Historia?: number | string;
  "Otimização"?: number | string;
  Media?: number | string;
}
