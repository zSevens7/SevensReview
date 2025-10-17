# 🎮 SevensReview (Refatoração)

Este projeto é uma **refatoração completa** do site original [SevensReview](https://sevensreview.com.br),  
inicialmente desenvolvido em **HTML, CSS e JavaScript puros**, agora refeito com tecnologias modernas para  
melhor organização, desempenho e manutenção.

---

## 🚀 Objetivo

Transformar o antigo código estático em uma **Single Page Application (SPA)** utilizando:
- ⚛️ **React** → para componentização e rotas dinâmicas  
- 🌀 **TypeScript** → para maior segurança e clareza no código  
- 🎨 **Tailwind CSS** → para estilização rápida e consistente  

O foco é manter o mesmo propósito do site original — **reviews pessoais de jogos e análises curtas** —  
porém com uma base mais sólida e escalável para o futuro.

---

## 🧩 Tecnologias Utilizadas

| Tecnologia | Função |
|-------------|--------|
| ⚛️ **React 18** | Base da SPA, com componentes reutilizáveis |
| 🌀 **TypeScript** | Tipagem e segurança no código |
| 🎨 **Tailwind CSS** | Estilização moderna e responsiva |
| ⚙️ **Vite** | Empacotador rápido e moderno |
| 🧭 **React Router DOM** | Gerenciamento de rotas |
| 🧠 **Recharts** | Criação de gráficos dinâmicos |
| 🪶 **Lucide React / Heroicons** | Ícones leves e otimizados |
| 🪞 **React Helmet Async** | SEO e meta tags dinâmicas |

---

## 📁 Estrutura do Projeto

| Diretório / Arquivo | Descrição |
|----------------------|------------|
| **src/** | Pasta principal do código-fonte |
| ┣ 📁 **components/** | Componentes reutilizáveis |
| ┃ ┣ 📁 **layout/** | Estrutura geral da interface (Header, ThemeToggle, SearchBar) |
| ┃ ┃ ┣ 🧩 `Header.tsx` | Cabeçalho principal do site |
| ┃ ┃ ┣ 🧩 `SearchBar.tsx` | Barra de pesquisa das reviews |
| ┃ ┃ ┣ 🧩 `ThemeToggle.tsx` | Alternância entre tema claro e escuro |
| ┃ ┃ ┣ 📊 `RankingChart.tsx` | Gráficos interativos com Recharts |
| ┃ ┃ ┣ 📊 `RankingTable.tsx` | Tabela de rankings de jogos |
| ┃ ┃ ┣ 📜 `types.ts` | Tipagens específicas dos rankings |
| ┃ ┃ ┗ ⚙️ `utils.ts` | Funções auxiliares dos gráficos |
| ┃ ┣ 🧩 `GameImage.tsx` | Renderiza imagens dos jogos |
| ┃ ┣ 🧩 `ReviewCard.tsx` | Card individual das análises |
| ┃ ┣ 🧩 `ReviewHeader.tsx` | Cabeçalho de cada página de review |
| ┃ ┣ 🧩 `ReviewSection.tsx` | Seções de texto e imagens da review |
| ┃ ┗ 🧩 `ReviewVeredito.tsx` | Veredito final de cada análise |
| ┣ 📁 **data/** | Arquivos e dados mock (JSONs, listas, etc.) |
| ┣ 📁 **features/** | Módulos e funcionalidades adicionais |
| ┣ 📁 **pages/** | Páginas principais do site |
| ┃ ┣ 📄 `Homepage.tsx` | Página inicial com destaques e últimas reviews |
| ┃ ┣ 📄 `GuiaDeReview.tsx` | Página de guia explicativo |
| ┃ ┣ 📄 `RankingAno.tsx` | Ranking de jogos por ano |
| ┃ ┣ 📄 `RankingGeral.tsx` | Ranking geral de jogos |
| ┃ ┗ 📄 `Setup.tsx` | Página de setup pessoal |
| ┣ 📁 **review/** | Estrutura e lógica das páginas de review |
| ┣ 📁 **routes/** | Configuração de rotas React Router |
| ┃ ┗ 🧭 `ListReview.routes.tsx` | Roteamento entre as páginas de jogos |
| ┣ 📁 **types/** | Tipos e interfaces TypeScript globais |
| ┣ 📁 **ui/** | Componentes genéricos de interface |
| ┣ 📁 **utils/** | Funções auxiliares e helpers globais |
| ┃ ┗ ⚙️ `getAvailableYears.ts` | Retorna lista de anos disponíveis |
| ┣ ⚛️ `App.tsx` | Componente raiz do aplicativo |
| ┣ ⚡ `main.tsx` | Ponto de entrada da aplicação |
| ┣ 🎨 `index.css` | Estilos globais (Tailwind) |
| ┗ ⚙️ `vite-env.d.ts` | Tipagens automáticas do ambiente Vite |

---

## 🧱 Status do Projeto

| Status | Descrição |
|--------|------------|
| 🟢 **Concluído** | Todas as páginas e seções principais finalizadas |
| 🔵 **Layout & UI** | Header mais bonito, tema escuro/claro implementado |
| 🟢 **Ranking & Estatísticas** | Páginas de estatísticas e tops funcionais com gráficos Recharts |
| 🟢 **Novas Páginas** | Guia e Setup refeitos com design aprimorado |
| 🟢 **SEO e URLs** | URLs limpas e amigáveis (`/jogos/nome_do_jogo`) |
| 🟡 **Melhorias Futuras** | Ajustes de responsividade e novos componentes UI |
| 🟡 **Testes** | Unitários e de integração pendentes |

---

## ✨ Melhorias da Nova Versão (React + TypeScript + Tailwind)

- 🔹 **Header mais moderno e limpo**
- 🔹 **Tema noturno e claro totalmente funcionais**
- 🔹 **Gráficos interativos com Recharts**
- 🔹 **Ranking Geral e por Ano com dados dinâmicos**
- 🔹 **Guia e Setup redesenhados com melhor UX**
- 🔹 **URLs otimizadas (sem .html no final)**
- 🔹 **Código totalmente componentizado e tipado**

---

## 📜 Autor

**Gabriel Teperino Percegoni Figueira**  
💻 Desenvolvedor Frontend | React + TypeScript  
🔗 [GitHub @zSevens7](https://github.com/zSevens7)

---

## ⚙️ Dependências Principais

| Pacote | Função |
|---------|--------|
| `react`, `react-dom` | Estrutura principal da SPA |
| `react-router-dom` | Navegação entre páginas |
| `tailwindcss`, `postcss`, `autoprefixer` | Estilização moderna |
| `recharts` | Exibição de gráficos interativos |
| `react-helmet-async` | Controle de `<head>` e SEO |
| `lucide-react`, `@heroicons/react` | Ícones vetoriais leves |
| `@tanstack/react-table` | Tabelas dinâmicas e responsivas |
| `vite` | Build rápido e otimizado |
| `typescript` | Tipagem estática |
| `eslint`, `typescript-eslint` | Padrões e linting de código |

---

> 🧠 **Resumo Final:**  
> O **SevensReview** passou de um site estático para uma **SPA moderna**, com tema escuro, gráficos dinâmicos,  
> rotas limpas e código organizado em componentes, tornando a manutenção e expansão muito mais fácil.

