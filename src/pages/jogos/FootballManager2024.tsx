// src/pages/jogos/FootballManager2024.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const FootballManager2024: React.FC = () => {
  const gameData = {
    slug: "football-manager-2024",
    title: "Football Manager 2024",
    subtitle: "",
    rating: 84,
    coverImage: "/assets/25/FM24/FM 24 FRONT.png",
    logo: "/assets/25/FM24/FM 24 FRONT.png",
    genre: "Esporte/Simulador",
    releaseDate: "2023-12-07",
    developer: {
      name: "Sports Interactive",
      countryFlag: "/assets/flags/uk.png",
    },
    publisher: "SEGA",
    engine: "Match Engine",
    platforms: ["Microsoft Windows", "macOS", "iOS", "Android", "Xbox One", "Xbox Series X/S", "PlayStation 5", "iPad", "Apple Arcade", "Nintendo Switch"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Football Manager 2024 - o simulador de futebol mais realista do mercado. Análise detalhada das mecânicas de gestão, táticas e sistema de carreira. Avaliação: 84/100.";
  const seoKeywords = "Football Manager 2024, FM24, Sports Interactive, SEGA, simulador de futebol, gestão esportiva, review, análise, PC, Xbox, PlayStation, Nintendo Switch";

  // Schema structured data
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
        "@type": "Organization",
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
    "datePublished": "2025-06-10T17:47:00-03:00"
  };

  return (
    <>
      <Helmet>
        {/* Meta Tags Básicas */}
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
        <meta property="og:url" content={`https://sevensreview.com.br/jogos/${gameData.slug}`} />
        <meta property="og:site_name" content="Sevens Review" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        {/* Header */}
        <ReviewHeader {...gameData} />

        {/* Conteúdo da Review */}
        <div className="mt-8">
          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              <strong>Sinopse:</strong> Monte um time de alto nível pronto para dominar seus rivais nas competições mais prestigiadas do futebol. O progresso nunca para quando você busca a grandeza no futebol.
            </p>
            <p>
              Antes de começar esta review, é importante destacar que Football Manager (FM) é a única franquia de futebol que ainda está viva sem o uso de "gacha" — ou seja, sem moedas/sistemas de compra presentes em jogos feitos exclusivamente para partidas online. Tanto o Pro Evolution Soccer (PES) quanto o FIFA (atualmente EA FC) "morreram" porque abandonaram o modo singleplayer e mergulharam nesse sistema de gacha insuportável. Além disso, a qualidade desses jogos caiu muito, pois muitos nem consideram o FM como um rival direto. Explicarei melhor isso mais adiante.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Aqui já começa a separação entre FM e os outros jogos. A principal diferença é que você é o treinador, e não controla os jogadores em campo. Ou seja, a tática é extremamente importante. Mas não é só isso: existe também o fator de gestão de pessoas, que afeta a moral do time, a contratação de uma boa equipe técnica e a criação de estratégias tanto com a bola quanto sem ela. Resumindo: taticamente, o jogo representa bem o futebol moderno, além de seguir as regras atuais do esporte.
            </p>
            <p className="mb-4">
              Outro ponto importante é que o FM sempre renova a geração de jogadores. Lembro que no modo Master League do PES 2021 isso não existia: havia apenas um sistema em que jogadores aposentados viravam jovens do nada. No caso do FIFA, não posso comentar muito, porque só joguei o FIFA 14 (há mais de 10 anos) e nunca gostei dele.
            </p>
            <p className="mb-4">
              Além disso, a experiência dos jogadores também influencia na partida, o que torna o ato de emprestar ou contratar atletas ainda mais estratégico.
            </p>
            <p className="mb-4">
              Por fim, algo que diferencia o FM de qualquer outro jogo é a pressão realista: você pode ser demitido a qualquer momento. Lembro que uma vez fui demitido por estar negociando com outro clube, e isso acabou vazando para a mídia. O presidente não gostou e me mandou embora. Resumindo: o jogo é muito fiel à vida real.
            </p>
            
            <GameImage 
              src="/assets/25/FM24/FM 24 MECANICA.png" 
              alt="Imagem de Football Manager 2024" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={81} ratingColor="bg-green-800">
            <p className="mb-4">
              Os gráficos são ok. Aqui, os jogadores e técnicos não são a estrela do jogo — o foco está nas mecânicas e na história. No entanto, percebi uma melhora em relação ao FM 23, principalmente nos gramados e tipos de estádio.
            </p>
            <p className="mb-4">
              Em termos de interface (HUD), o jogo é bem funcional e permite personalização. Uso, por exemplo, o OPZ View, que mostra mais dados durante as partidas ao vivo e análises detalhadas.
            </p>
            
            <GameImage 
              src="/assets/25/FM24/FM 24 GRAFICO.png" 
              alt="Imagem de Football Manager 2024" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={60} ratingColor="bg-red-300 text-black">
            <p>
              A trilha sonora do jogo é mediana. Há sons de torcida, toques de bola, etc., mas não há músicas fora das partidas. Seria interessante incluir alguma trilha musical nos menus ou no modo carreira, por exemplo. No geral, o jogo tem som ambiente, mas falta uma trilha sonora musical mais marcante.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={93} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Como mencionei na parte de mecânicas, o jogo traz muitas situações interessantes que ajudam a construir uma narrativa própria em cada save. Rivalidades entre clubes, renovações contratuais, conflitos com jogadores, decisões de transferências... tudo isso faz parte de um sistema de história dinâmico que os outros jogos de futebol abandonaram. Isso é um ponto muito positivo e combina perfeitamente com a proposta do FM.
            </p>
            
            <GameImage 
              src="/assets/25/FM24/FM 24 HISTORIA.png" 
              alt="Imagem de Football Manager 2024" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={86} ratingColor="bg-green-800">
            <p className="mb-4">
              O jogo roda bem no meu PC e não exige uma máquina muito potente. Então, por que não dei 100? Porque o FM 24 não está oficialmente disponível no Brasil em 2025, por causa de problemas legais — principalmente devido à famosa Lei Pelé — e também por uma certa birra da empresa responsável pelo jogo.
            </p>
            <p className="mb-4">
              Seria simples lançar jogadores fictícios e permitir a compra oficial aqui, mas a empresa não demonstra interesse, e o cenário legal no Brasil é muito burocrático. Felizmente, o jogo tem tradução em português de Portugal, o que ajuda bastante na compreensão dos diálogos e decisões, algo crucial para a gameplay.
            </p>
            <p>
              Para quem não sabe, a Lei Pelé exige que os direitos de imagem sejam negociados individualmente com jogadores, clubes e treinadores, e não por meio de uma única organização. Isso torna tudo mais difícil e caro, especialmente em comparação com a compra dos direitos de uma liga inteira.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="No fim das contas, Football Manager 2024 é excelente em termos de mecânica. É um jogo profundo, inteligente e realista. Porém, fico triste com a ausência de trilha sonora musical e o fato de não estar disponível oficialmente no Brasil, o que limita o acesso de muitos jogadores ao título. É frustrante ver uma obra tão boa ser sabotada por falta de vontade tanto da empresa quanto da legislação brasileira."
            rating={84}
            date="10/06/2025 17:47"
          />
        </div>
      </div>
    </>
  );
};

export default FootballManager2024;