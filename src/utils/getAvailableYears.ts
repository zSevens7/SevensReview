// src/utils/getAvailableYears.ts
export function getAvailableYears(): string[] {
  // Importa todos os JSONs da pasta data
  const modules = import.meta.glob('../data/*.json', { eager: true });

  // Pega só os nomes que são anos (ex: 2025.json → 2025)
  const years = Object.keys(modules)
    .map((path) => {
      const match = path.match(/(\d{4})\.json$/);
      return match ? match[1] : null;
    })
    .filter((y): y is string => y !== null) // filtra só strings válidas

  return years.sort(); // opcional: ordena em ordem crescente
}
