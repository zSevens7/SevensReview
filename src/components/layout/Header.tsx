import { useState } from "react";
import SearchBar from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import homeIcon from "@/assets/header/home.png";
import guideIcon from "@/assets/header/guide.png";
import setupIcon from "@/assets/header/computer.png";
import calendarIcon from "@/assets/header/calendar.png";
import rankingAllIcon from "@/assets/header/rankingAll.png";

export const Header = () => {
  const [isSearching, setIsSearching] = useState(false);

  const menuItems = [
    { name: "Home", icon: homeIcon, href: "/" },
    { name: "Guia", icon: guideIcon, href: "/guia" },
    { name: "Setup", icon: setupIcon, href: "/setup" },
    { name: "Ranking Ano", icon: calendarIcon, href: "/ranking-ano" },
    { name: "Top Geral", icon: rankingAllIcon, href: "/ranking-geral" },
  ];

  return (
    <>
      {/* Header fixo */}
      <header className="fixed top-0 left-0 z-50 w-full bg-gray-900 text-white shadow-md transition-all dark:bg-gray-800">
        <div
          className={`container mx-auto flex items-center justify-between px-4 transition-all ${
            isSearching ? "h-20" : "h-16"
          }`}
        >
          {/* Logo */}
          {!isSearching && (
            <h1 className="text-xl font-bold select-none">Sevens Reviews</h1>
          )}

          {/* Menu desktop */}
          {!isSearching && (
            <nav className="hidden md:flex gap-6 flex-wrap items-center">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <img src={item.icon} alt={item.name} className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          )}

          {/* Lado direito: SearchBar + ThemeToggle */}
          <div className="flex items-center gap-4 transition-colors duration-300">
            <SearchBar isSearching={isSearching} setIsSearching={setIsSearching} />
            <ThemeToggle />
          </div>
        </div>

        {/* Menu mobile */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full bg-gray-900 dark:bg-gray-800 flex justify-around py-2 border-t border-gray-700 dark:border-gray-700">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col items-center text-xs text-gray-300 hover:text-white transition-colors duration-200"
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
              {item.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Espaço para o conteúdo principal */}
      <div className="pt-16 md:pt-16" />
    </>
  );
};

export default Header;
