// src/pages/Setup.tsx
import React from "react";
import { FaDesktop, FaGamepad, FaMemory, FaMicrochip, FaHdd, FaMouse, FaKeyboard, FaHeadphones, FaMicrophone } from "react-icons/fa";

export default function Setup() {
  const pcParts = [
    { name: "Placa Mãe", value: "Asus", icon: <FaMicrochip className="w-6 h-6 text-pink-500" /> },
    { name: "Processador", value: "Intel Core i5-11400F 2.60 GHz", icon: <FaMicrochip className="w-6 h-6 text-blue-500" /> },
    { name: "Placa de Vídeo", value: "NVIDIA GeForce RTX 4060", icon: <FaDesktop className="w-6 h-6 text-green-500" /> },
    { name: "Memória RAM", value: "(2x16GB) Corsair Vengeance LPX, DDR4, 2666 MHz", icon: <FaMemory className="w-6 h-6 text-purple-500" /> },
    { name: "Armazenamento", value: "SSD Kingston Fury Renegade, 2 TB", icon: <FaHdd className="w-6 h-6 text-yellow-500" /> },
    { name: "Monitor", value: "Husky 23.8' LED, Wide, 148 Hz (Principal) e LG 23° HDMI (Secundário)", icon: <FaDesktop className="w-6 h-6 text-indigo-500" /> },
    { name: "Mouse", value: "Logitech G403 HERO", icon: <FaMouse className="w-6 h-6 text-red-500" /> },
    { name: "Teclado", value: "Teclado Gamer Mecânico Fallen Falcão-Peregrino V3 - Switch Blue", icon: <FaKeyboard className="w-6 h-6 text-gray-700" /> },
    { name: "Headset", value: "Headset Gamer Fallen Morcego", icon: <FaHeadphones className="w-6 h-6 text-blue-700" /> },
    { name: "Microfone", value: "Fifine Microphone", icon: <FaMicrophone className="w-6 h-6 text-green-700" /> },
  ];

  const consoles = [
    {
      name: "PlayStation 5",
      description: "Sempre gostei de usar os consoles da Sony, só não tive o PlayStation 3; nele eu sempre jogarei os jogos exclusivos da Sony e outros jogos singleplayer com foco em gráficos pesados.",
      icon: <FaGamepad className="w-8 h-8 text-blue-500" />,
    },
    {
      name: "Nintendo 3DS",
      description: "O Nintendo 3DS é um console que eu uso de vez em quando quando viajo. Sempre usei consoles da Nintendo, e tenho alguns antigos, como Nintendo DS modelo Palkia e Dialga, Gameboy Color e Nintendo Wii (esses dois últimos só de enfeite).",
      icon: <FaGamepad className="w-8 h-8 text-red-500" />,
    },
    {
      name: "Nintendo Switch 2",
      description: "Eu decidi comprar o Nintendo Switch 2 por ser um console híbrido, perfeito para levar em viagens. Nele, devo jogar a maioria dos exclusivos da Nintendo.",
      icon: <FaGamepad className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-900 dark:text-gray-100">
          Meu Setup
        </h1>

        {/* PC */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3">
            <FaDesktop /> Computador
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {pcParts.map((part, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-100 dark:bg-blue-900 rounded-xl shadow-lg border-l-4 border-pink-500 hover:shadow-2xl transition-all"
              >
                <div>{part.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">{part.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{part.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consoles */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 flex items-center gap-3">
            <FaGamepad /> Consoles
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {consoles.map((console, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-blue-900 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3">{console.icon}<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{console.name}</h3></div>
                <p className="text-gray-700 dark:text-gray-300">{console.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
