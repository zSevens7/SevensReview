// src/components/RankingGeral/HallOfFame.tsx
import React from 'react';
import { Trophy, Medal } from 'lucide-react';
import { JogoGeral } from './typesTopGeral';

interface HallOfFameProps {
  jogos: JogoGeral[];
}

export function HallOfFame({ jogos }: HallOfFameProps) {
  // Ordena por média (decrescente) e pega os top 5
  const top5 = [...jogos]
    .sort((a, b) => Number(b.Media || 0) - Number(a.Media || 0))
    .slice(0, 5);

  const getMedalColor = (index: number) => {
    switch (index) {
      case 0: return "text-yellow-500"; // Ouro
      case 1: return "text-gray-400";   // Prata
      case 2: return "text-amber-600";  // Bronze
      default: return "text-blue-500";
    }
  };

  return (
    <div className="space-y-4">
      {top5.map((jogo, index) => (
        <div 
          key={index} 
          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600 hover:scale-[1.02] transition-transform"
        >
          <div className="flex items-center gap-4">
            <div className={`font-bold text-2xl w-8 text-center ${getMedalColor(index)}`}>
              {index === 0 ? <Trophy className="w-6 h-6 mx-auto" /> : `#${index + 1}`}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                {jogo["Nome Do Jogo"]}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {jogo.Empresa} • {jogo.Gen1} • {jogo["Ano de Lançamento"]}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <span className="block text-2xl font-black text-blue-600 dark:text-blue-400">
              {Number(jogo.Media).toFixed(1)}
            </span>
            <span className="text-xs text-gray-400">Média</span>
          </div>
        </div>
      ))}
    </div>
  );
}