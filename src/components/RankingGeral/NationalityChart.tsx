// src/components/RankingGeral/NationalityChart.tsx
import React, { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { JogoGeral } from './typesTopGeral';

// Registra os elementos necessários para o gráfico de Pizza
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  jogos: JogoGeral[];
}

export function NationalityChart({ jogos }: Props) {
  const chartData = useMemo(() => {
    const counts: Record<string, number> = {};
    
    jogos.forEach(j => {
        // Normaliza para maiúsculo e trata nulos
        const pais = j.Nacionalidade ? j.Nacionalidade.toUpperCase().trim() : "OUTROS";
        counts[pais] = (counts[pais] || 0) + 1;
    });

    // Ordena do maior para o menor
    const sortedEntries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    return {
        labels: sortedEntries.map(e => e[0]),
        datasets: [{
            data: sortedEntries.map(e => e[1]),
            backgroundColor: [
                '#3B82F6', // Azul
                '#EF4444', // Vermelho
                '#10B981', // Verde
                '#F59E0B', // Amarelo
                '#8B5CF6', // Roxo
                '#EC4899', // Rosa
                '#6366F1', // Indigo
                '#9CA3AF'  // Cinza (Outros)
            ],
            borderWidth: 1,
            borderColor: '#ffffff'
        }]
    };
  }, [jogos]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const, // Legenda na direita para economizar altura
        labels: {
            boxWidth: 10,
            font: { size: 10 }
        }
      }
    }
  };

  return (
    <div className="h-64 w-full flex justify-center items-center">
        <Pie data={chartData} options={options} />
    </div>
  );
}