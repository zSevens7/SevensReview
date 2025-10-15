import React, { useState } from "react";

interface Page {
  name: string;
  path: string;
}

// Props que o Header vai passar
interface SearchBarProps {
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const pages: Page[] = [
  { name: "voice of cards: the beast of burden", path: "/jogos/Voice-Of-Cards-The-Beast-Of-Burden" },
  { name: "inzoi", path: "/jogos/INZOI" },
  { name: "assassin's creed: shadows", path: "/jogos/Assassins-Creed-Shadows" },
  { name: "pokemon yellow", path: "/jogos/Pokemon-Yellow-Legacy" },
  { name: "football life simulator", path: "/jogos/Football-Life-Simulator" },
  { name: "pokemon crystal", path: "/jogos/Pokemon-Polished-Crystal" },
  { name: "runescape: dragonwilds", path: "/jogos/Runescape" },
  { name: "clair obscur: expedition 33", path: "/jogos/Expedition33" },
  { name: "super mario 3d land", path: "/jogos/Super-Mario-3D" },
  { name: "doom: the dark ages", path: "/jogos/Doom-The-Dark-Ages" },
  { name: "surroundead", path: "/jogos/SurrounDead" },
  { name: "f1 2025", path: "/jogos/F1-2025" },
  { name: "rune factory 4", path: "/jogos/Rune-Factory-4" },
  { name: "football manager 2024", path: "/jogos/FM-24" },
  { name: "pokemon emerald", path: "/jogos/Pokemon-Emerald" },
  { name: "peak", path: "/jogos/PEAK" },
  { name: "death stranding 2", path: "/jogos/Death-Stranding-2" },
  { name: "demon slayer 2", path: "/jogos/Demon-Slayer-2" },
  { name: "dokimon quest", path: "/jogos/Dokimon-Quest" },
  { name: "lost soul aside", path: "/jogos/Lost-Soul" },
  { name: "octopath traveler", path: "/jogos/Octopath-Traveler-1" },
  { name: "digimon story time stranger", path: "/jogos/Digimon-Story-Time-Stranger" },
];

const SearchBar: React.FC<SearchBarProps> = ({ isSearching, setIsSearching }) => {
  const [query, setQuery] = useState(""); 
  const [showResults, setShowResults] = useState(false);

  const filteredPages = pages.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (filteredPages.length === 1) {
      window.location.href = filteredPages[0].path;
    } else if (filteredPages.length === 0) {
      alert("Página não encontrada!");
    }
  };

  return (
    <div className="relative">
      <form
        className="flex items-center border rounded px-2 py-1 bg-white dark:bg-gray-800"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Pesquisar..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true); 
            setIsSearching(e.target.value.length > 0); // controla altura do header
          }}
          className="outline-none bg-transparent w-48 text-gray-900 dark:text-gray-200"
        />
        <button type="submit" className="ml-2 px-2 py-1 bg-gray-500 text-white rounded">
          🔍
        </button>
      </form>

      {showResults && query.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-gray-800 border rounded shadow z-50">
          {filteredPages.length > 0 ? (
            filteredPages.map((p) => (
              <a
                key={p.name}
                href={p.path}
                className="block px-4 py-2 hover:bg-pink-100 dark:hover:bg-gray-700"
                onClick={() => setShowResults(false)}
              >
                {p.name}
              </a>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
              Nenhum resultado
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
