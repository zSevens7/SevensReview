// src/components/RankingGeral/AverageRatingByYearChart.tsx
import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { JogoGeral } from './typesTopGeral';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Props {
  jogos: JogoGeral[];
}

export function AverageRatingByYearChart({ jogos }: Props) {
  const chartData = useMemo(() => {
    // 1. Agrupar notas por ano
    const yearGroups: Record<string, number[]> = {};

    jogos.forEach(game => {
      const year = game["Ano de Lançamento"];
      const nota = Number(game.Media || 0);

      if (year && nota > 0) {
        if (!yearGroups[year]) {
          yearGroups[year] = [];
        }
        yearGroups[year].push(nota);
      }
    });

    // 2. Calcular a média de cada ano e ordenar cronologicamente
    const sortedYears = Object.keys(yearGroups).sort((a, b) => Number(a) - Number(b));
    
    const averages = sortedYears.map(year => {
      const notas = yearGroups[year];
      const soma = notas.reduce((acc, curr) => acc + curr, 0);
      return (soma / notas.length).toFixed(1); // Média com 1 casa decimal
    });

    return {
      labels: sortedYears,
      datasets: [
        {
          label: 'Média das Notas',
          data: averages,
          borderColor: '#10B981', // Verde Esmeralda
          backgroundColor: 'rgba(16, 185, 129, 0.2)', // Fundo transparente verde
          tension: 0.4, // Curva suave
          fill: true,
          pointBackgroundColor: '#fff',
          pointBorderColor: '#10B981',
          pointHoverBackgroundColor: '#10B981',
          pointHoverBorderColor: '#fff',
        },
      ],
    };
  }, [jogos]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 0,   // Opcional: Se quiser focar nas notas altas, mude para 50 ou 60
        max: 100,
        grid: {
            color: 'rgba(200, 200, 200, 0.1)',
        }
      },
      x: {
        grid: {
            display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false, // Esconde a legenda se quiser um visual mais limpo
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
  };

  return (
    <div className="h-[300px] w-full">
      <Line data={chartData} options={options} />
    </div>
  );
}