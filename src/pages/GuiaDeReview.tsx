// src/pages/GuiaDeReview.tsx
import React from "react";
import { FaGamepad, FaImage, FaMusic, FaBook, FaCogs, FaStar } from "react-icons/fa";

export default function GuiaDeReview() {
  const criterios = [
    {
      title: "Mecânica",
      description:
        "A definição de uma mecânica de jogo refere-se aos elementos que estruturam a gameplay, como física, balanceamento, quebra-cabeças e integração com outros sistemas, sendo esses componentes essenciais para a experiência coesa e funcional do jogo.",
      icon: <FaGamepad className="text-pink-500 w-8 h-8" />,
      border: "border-pink-500",
    },
    {
      title: "Gráficos",
      description:
        "Os gráficos são avaliados pela forma como o desenvolvedor os utiliza no jogo. Não importa se o gráfico é feio ou bonito, mas sim se eles contribuem para o design do mundo e do personagem.",
      icon: <FaImage className="text-green-500 w-8 h-8" />,
      border: "border-green-500",
    },
    {
      title: "Trilha Sonora",
      description:
        "A trilha sonora é responsável por criar a atmosfera e ambientação do jogo, influenciando diretamente a experiência do jogador.",
      icon: <FaMusic className="text-blue-500 w-8 h-8" />,
      border: "border-blue-500",
    },
    {
      title: "Enredo",
      description:
        "O enredo é a história do jogo, a narrativa que guia o jogador. Um enredo bem construído prende a atenção do jogador e cria um vínculo emocional.",
      icon: <FaBook className="text-yellow-500 w-8 h-8" />,
      border: "border-yellow-500",
    },
    {
      title: "Otimização",
      description:
        "Avalia como o jogo roda na máquina: FPS, bugs, glitches. Também inclui localização de idioma e acessibilidade aos controles.",
      icon: <FaCogs className="text-red-500 w-8 h-8" />,
      border: "border-red-500",
    },
    {
      title: "Veredito Final",
      description:
        "No fim, calculo a média das pontuações das categorias acima, gerando a nota final do jogo. Comento também sobre os pontos fortes e fracos, fornecendo uma avaliação geral clara e objetiva.",
      icon: <FaStar className="text-purple-500 w-8 h-8" />,
      border: "border-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Espaço do header */}
      <div className="max-w-6xl mx-auto pt-20 p-6 sm:p-8 lg:p-12">
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900 dark:text-gray-100">
          Guia de Reviews
        </h1>
        <p className="mb-12 text-gray-700 dark:text-gray-300 text-center text-lg">
          Aqui você encontra os critérios que utilizo para avaliar cada jogo nas minhas reviews. Cada categoria recebe uma análise detalhada para fornecer uma avaliação justa e completa.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {criterios.map((c, index) => (
            <div
              key={index}
              className={`mt-6 flex flex-col items-start p-6 rounded-3xl shadow-lg border-l-4 ${c.border} 
                         bg-gray-100 dark:bg-blue-950 
                         text-gray-900 dark:text-gray-100 
                         hover:shadow-2xl transition-all`}
            >
              <div className="mb-4">{c.icon}</div>
              <h2 className="text-2xl font-bold mb-3">{c.title}</h2>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
