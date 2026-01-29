// src/pages/jogos/PokemonLazarus.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const PokemonLazarus: React.FC = () => {

  const gameData = {
    slug: "pokemon-lazarus",
    title: "Pokémon Lazarus",
    subtitle: "Uma jornada pela Grécia Antiga com mecânicas modernas e desafios de navegação",
    rating: 84,
    coverImage: "/assets/26/PokemonLazarus/frontpage.png",
    logo: "/assets/26/PokemonLazarus/cover.png",
    genre: "ROM Hack / RPG",
    releaseDate: "2024-01-01",
    developer: {
        name: "Nemo622",
        countryFlag: "/assets/flags/japan.png" // Usando Japão pois a base é Emerald
    },
    publisher: "Fan Made (Base: Emerald)",
    engine: "GBA (Decomp)",
    platforms: ["GBA (Emulador)", "PC", "Android"]
  };

  // SEO
  const seoDescription = "Review de Pokémon Lazarus. Uma ROM Hack de Emerald inspirada na Grécia Antiga, com encontros no overworld e mega evoluções.";
  const seoKeywords = "Pokémon Lazarus review, ROM Hack, Pokemon Emerald, Nemo622, GBA, Hackrom, Grécia";

  // Schema Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "VideoGame",
      "name": gameData.title,
      "description": seoDescription,
      "genre": gameData.genre,
      "platform": gameData.platforms,
      "releaseDate": gameData.releaseDate,
      "developer": {
        "@type": "Person",
        "name": gameData.developer.name
      },
      "publisher": {
        "@type": "Organization",
        "name": gameData.publisher
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Sevens Review"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": gameData.rating,
      "bestRating": 100
    },
    "datePublished": "2026-01-29T12:00:00-03:00"
  };

  return (
    <>
      <Helmet>
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
        <meta property="og:site_name" content="Sevens Review" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        
        {/* Header */}
        <ReviewHeader {...gameData} />

        {/* Conteúdo */}
        <div className="mt-8">

          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              <strong>Pokémon Lazarus</strong> é uma <em>ROM Hack</em> desenvolvida por Nemo622, baseada na engine de <em>Pokémon Emerald</em>. A proposta é criar uma nova história e uma nova região inspirada na Grécia Antiga, trazendo uma experiência fresca para quem curte a terceira geração.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            {/* AQUI ESTÁ A CORREÇÃO DA IMAGEM: max-w-4xl (Grande) ao invés de max-w-xs (Pequena) */}
            <GameImage 
            src="/assets/26/PokemonLazarus/mecanica.png" 
            alt="Sistema de batalha e overworld" 
            // USE ESTA NOVA LINHA DE CLASSES:
            className="w-4/5 max-w-3xl h-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-md mb-6"
            // MANTENHA O PIXELATED:
            style={{ imageRendering: 'pixelated' }} 
        />
            <p className="mb-4">
              A base é o clássico RPG de turnos, mas o criador conseguiu modernizar a <em>engine</em> antiga com mecânicas de gerações atuais. As principais mudanças positivas são:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Encontros no Overworld:</strong> Os Pokémon selvagens aparecem andando pelo mapa (estilo Sword/Shield), permitindo que você escolha suas batalhas.</li>
              <li><strong>Novidades:</strong> Inclusão de formas regionais e Pokémon de outras gerações. Vale citar que as <strong>Mega Evoluções</strong> existem no jogo, mas funcionam mais como um desafio para você enfrentar; é muito difícil o jogador conseguir acesso a elas, sendo um recurso quase exclusivo dos inimigos.</li>
              <li><strong>Sistema de Tempo Customizado:</strong> O jogo tem um sistema próprio de dia/noite que avança conforme você joga ou descansa.</li>
            </ul>
            <p className="mb-4">
              A única coisa que não gostei foi o sistema de <strong>"Soft Level Cap"</strong>. Funciona assim: quando você atinge o nível esperado para aquela área, a experiência ganha cai drasticamente (de 480xp para 60xp, por exemplo) para impedir que você fique muito forte. Entendo a intenção de balancear, mas acho frustrante ver o ganho de XP sumir do nada.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <GameImage 
              src="/assets/26/PokemonLazarus/grafico.png" 
              alt="Sprites customizados e ambiente grego" 
              className="w-4/5 max-w-3xl h-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-md mb-6"
                // MANTENHA O PIXELATED:
                style={{ imageRendering: 'pixelated' }} 
            />
            <p className="mb-4">
              O jogo é visualmente lindo dentro das limitações do GBA. O criador fez sprites e artes customizadas para os cenários de batalha e para os novos Pokémon (regionais), mantendo a estética pixelada da 3ª geração. Isso traz um frescor visual muito bem-vindo.
            </p>
            <p className="mb-4">
              O ponto negativo fica para o design dos Líderes de Ginásio. Achei todos muito parecidos entre si, sem aquela identidade visual única que costumamos ver na franquia oficial.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={80}>
            <GameImage 
              src="/assets/26/PokemonLazarus/trilha sonora.png" 
              alt="Música e ambientação" 
              className="w-4/5 max-w-3xl h-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-md mb-6"
                // MANTENHA O PIXELATED:
                style={{ imageRendering: 'pixelated' }} 
            />
            <p className="mb-4">
              A trilha sonora é uma fusão de músicas da 2ª e 3ª gerações. Como sou fã dessas trilhas clássicas, achei a experiência sonora muito agradável e nostálgica.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={60}>
            <GameImage 
              src="/assets/26/PokemonLazarus/historia.png" 
              alt="Diálogos e eventos da história" 
              className="w-4/5 max-w-3xl h-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-md mb-6"
                // MANTENHA O PIXELATED:
                style={{ imageRendering: 'pixelated' }} 
            />
            <p className="mb-4">
              A trama tem pontos altos, como uma boa equipe vilã e um sistema de Quests com log (diário) que ajuda a organizar as missões secundárias. O início e o meio do jogo fluem bem.
            </p>
            <p className="mb-4">
              O problema grave é o final (endgame). O mapa se torna confuso e o jogo falha em guiar o jogador. Eu mesmo fiquei travado antes do 8º ginásio, sem saber para onde ir, mesmo com viagem rápida. Falta clareza no design de level.
            </p>
            <p className="mb-4">
              Outro ponto fraco são os Ginásios em si: eles são apenas "corredores de batalha". Não existe nenhum puzzle ou desafio de lógica. Além disso, o criador tentou inovar fazendo Líderes com "Tipagem Dupla", mas a execução não ficou tão legal; preferia o foco tradicional em um tipo só.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
            <GameImage 
              src="/assets/26/PokemonLazarus/otimizacao.png" 
              alt="Interface do mapa com glitch" 
              className="w-4/5 max-w-3xl h-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-md mb-6"
                // MANTENHA O PIXELATED:
                style={{ imageRendering: 'pixelated' }} 
            />
            <p className="mb-4">
              O jogo está em inglês (padrão para ROM Hacks), o que é aceitável. O desempenho é bom, mas encontrei um bug visual na interface do mapa: uma caixa branca ou glitch gráfico atrapalha a leitura dos nomes dos locais. Isso só melhora quando você pega o HM Fly lá pelo 7º ginásio, o que é bem irritante.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Apesar dos problemas de navegação no final e da falta de puzzles nos ginásios, Pokémon Lazarus é uma ótima ROM Hack. Para quem busca 'algo novo' com a nostalgia do Emerald e mecânicas modernas, vale muito a pena conferir."
            rating={84}
            date="29/01/2026"
          />

        </div>
      </div>
    </>
  );
};

export default PokemonLazarus;