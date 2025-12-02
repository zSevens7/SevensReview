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
  { name: "kingdom come: deliverance ii", path: "/jogos/kingdom-come-deliverance-2" },
  { name: "pokemon glazed", path: "/jogos/pokemon-glazed" },
  { name: "voice of cards: the beast of burden", path: "/jogos/voice-of-cards-the-beast-of-burden" },
  { name: "inzoi", path: "/jogos/inzoi" },
  { name: "assassin's creed: shadows", path: "/jogos/assassin-creed-shadow" },
  { name: "pokemon yellow legacy", path: "/jogos/pokemon-yellow-legacy" },
  { name: "football life simulator", path: "/jogos/football-life-simulator" },
  { name: "pokemon polished crystal", path: "/jogos/pokemon-polished-crystal" },
  { name: "runescape: dragonwilds", path: "/jogos/runescape-dragonwilds" },
  { name: "clair obscur: expedition 33", path: "/jogos/clair-obscur-expedition-33" },
  { name: "super mario 3d land", path: "/jogos/super-mario-3d-land" },
  { name: "doom: the dark ages", path: "/jogos/doom-the-dark-ages" },
  { name: "surroundead", path: "/jogos/surroundead" },
  { name: "f1 2025", path: "/jogos/f1-2025" },
  { name: "rune factory 4", path: "/jogos/rune-factory-4" },
  { name: "football manager 2024", path: "/jogos/football-manager-2024" },
  { name: "pokemon emerald legacy", path: "/jogos/pokemon-emerald-legacy" },
  { name: "peak", path: "/jogos/peak" },
  { name: "death stranding 2", path: "/jogos/death-stranding-2" },
  { name: "demon slayer 2", path: "/jogos/demon-slayer-2" },
  { name: "dokimon quest", path: "/jogos/dokimon-quest" },
  { name: "lost soul aside", path: "/jogos/lost-soul-aside" },
  { name: "octopath traveler 1", path: "/jogos/octopath-traveler-1" },
  { name: "digimon story time stranger", path: "/jogos/digimon-story-time-stranger" },
  { name: "ghost of yotei", path: "/jogos/Ghost-of-Yotei"},
  { name: "football manager 2026", path: "/jogos/football-manager-2026"},
  { name: "digimon world 1", path: "/jogos/digimon-world-1"},
  { name: "cities skylines 2", path: "/jogos/cities-skylines-2"},
  { name: "dispatch", path: "/jogos/dispatch"},
  { name: "pokemon x", path: "/jogos/pokemon-x"},
  { name: "digimon world 2", path: "/jogos/digimon-world-2"},
  { name: "pokemon legends z-a", path: "/jogos/pokemon-legends-z-a" },
];

// Log inicial para verificar o array de páginas
console.log("=== INITIAL PAGES ARRAY ===");
pages.forEach((page, index) => {
  if (page.name.includes("octopath")) {
    console.log(`Octopath entry - Index: ${index}, Name: "${page.name}", Path: "${page.path}"`);
    console.log(`Path characters:`, Array.from(page.path).map(char => `${char} (${char.charCodeAt(0)})`));
  }
});

const SearchBar: React.FC<SearchBarProps> = ({ isSearching, setIsSearching }) => {
  const [query, setQuery] = useState(""); 
  const [showResults, setShowResults] = useState(false);

  const filteredPages = pages.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // Log quando filteredPages muda
  React.useEffect(() => {
    if (query.includes("octopath")) {
      console.log("=== FILTERED PAGES UPDATE ===");
      console.log("Query:", query);
      console.log("Filtered pages:", filteredPages);
      filteredPages.forEach((page, index) => {
        console.log(`Result ${index}:`, {
          name: page.name,
          path: page.path,
          pathChars: Array.from(page.path).map(char => `${char} (${char.charCodeAt(0)})`)
        });
      });
    }
  }, [filteredPages, query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("=== FORM SUBMIT DEBUG ===");
    console.log("Query:", query);
    console.log("Filtered pages count:", filteredPages.length);
    
    filteredPages.forEach((page, index) => {
      console.log(`Page ${index}:`, {
        name: page.name,
        path: page.path,
        pathChars: Array.from(page.path).map(char => `${char} (${char.charCodeAt(0)})`)
      });
    });

    if (filteredPages.length === 1) {
      const targetPath = filteredPages[0].path;
      console.log("🚀 REDIRECTING TO:", targetPath);
      console.log("🔍 PATH ANALYSIS:", {
        original: targetPath,
        chars: Array.from(targetPath),
        charCodes: Array.from(targetPath).map(char => char.charCodeAt(0)),
        lastChar: targetPath[targetPath.length - 1],
        lastCharCode: targetPath.charCodeAt(targetPath.length - 1)
      });
      
      // Verificação extra antes do redirect
      if (targetPath.includes("I") && !targetPath.includes("1")) {
        console.error("❌ PROBLEMA DETECTADO: Path contém 'I' em vez de '1'");
        console.error("Path problemático:", targetPath);
      }
      
      window.location.href = targetPath;
    } else if (filteredPages.length === 0) {
      alert("Página não encontrada!");
    } else {
      console.log("Múltiplos resultados encontrados");
    }
  };

  const handleResultClick = (path: string, name: string) => {
    console.log("=== RESULT CLICK DEBUG ===");
    console.log("Clicked name:", name);
    console.log("Clicked path:", path);
    console.log("Path analysis:", {
      fullPath: path,
      characters: Array.from(path),
      charCodes: Array.from(path).map(char => char.charCodeAt(0)),
      endsWith: path[path.length - 1],
      endsWithCharCode: path.charCodeAt(path.length - 1)
    });

    // Verificação específica para Octopath
    if (name.includes("octopath")) {
      console.log("🕵️ OCTOPATH SPECIFIC CHECK:");
      console.log("Expected: /jogos/octopath-traveler-1");
      console.log("Actual:  ", path);
      console.log("Match:   ", path === "/jogos/octopath-traveler-1");
      
      if (path.includes("I") && !path.includes("1")) {
        console.error("❌ CRITICAL: Octopath path has 'I' instead of '1'");
      }
    }

    setShowResults(false);
    setQuery("");
    window.location.href = path;
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
            const newQuery = e.target.value;
            console.log("📝 INPUT CHANGE:", newQuery);
            setQuery(newQuery);
            setShowResults(true); 
            setIsSearching(newQuery.length > 0);
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
              <button
                key={p.name}
                onClick={() => handleResultClick(p.path, p.name)}
                className="block w-full text-left px-4 py-2 hover:bg-pink-100 dark:hover:bg-gray-700"
              >
                {p.name}
              </button>
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