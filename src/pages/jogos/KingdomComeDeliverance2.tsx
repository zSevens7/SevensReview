// src/pages/jogos/KingdomComeDeliverance2.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const KingdomComeDeliverance2: React.FC = () => {
  const gameData = {
    slug: "kingdom-come-deliverance-2",
    title: "Kingdom Come: Deliverance II",
    subtitle: "",
    rating: 96,
    coverImage: "/assets/25/KingdomComeImagem/KingdomComeLogo2.png",
    logo: "/assets/25/KingdomComeImagem/KingdomComeLogo2.png",
    genre: "RPG/Aventura",
    releaseDate: "2025-02-04",
    developer: {
      name: "Warhorse Studios",
      countryFlag: "/assets/flags/czech-republic.png",
    },
    publisher: "Deep Silver",
    engine: "CryEngine",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Kingdom Come: Deliverance II - a sequência do aclamado RPG histórico. Análise das melhorias no combate, gráficos e continuação da história de Henry. Avaliação: 96/100 - Excelente!";
  const seoKeywords = "Kingdom Come Deliverance 2, RPG histórico, Warhorse Studios, Deep Silver, CryEngine, Henry, Boêmia, Idade Média, review, análise, PC, PS5, Xbox";

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
    "datePublished": "2025-03-13T15:30:00-03:00"
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
            <p>
              Assim como em Kingdom Come: Deliverance, o protagonista é Henry, filho de um ferreiro, que vive na Boêmia Central durante a Idade Média, no início do século XV. O enredo segue diretamente do final do jogo anterior, e se passa na "turbulência de uma guerra civil", onde Henry lutará contra o Sacro Imperador Romano Sigismundo e seus aliados. Isso concluirá sua história.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={95} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Quando diz o ditado quando ta bom um jogo, não precisa mudar nada, apenas melhorar, o Kingdom Come: Deliverance 2 é sobre esse ditado. Apresentou uma melhoria no combate, o qual era um grande desafio para jogos novatos fazendo o tempo de resposta mais rápido para contra ataque.
            </p>
            <p className="mb-4">
              Além disso o jogo ainda apresenta novas armas, como por exemplo <em>crossbow</em>, uma bombarda e uma haste, fazendo a mecânica de batalha ser diferente e com mais opção ao jogador para escolher. Também adicionou novos minigames que serve para o cotidiano ao jogador, para um dos melhores minigames foi fazer <em>blacksmithing</em> (ferraria em português) era uma coisa muito relaxante de fazer, e tinha varias opção.
            </p>
            <p className="mb-4">
              A ultima mecânica que mais gostei foi de como a sua jogabilidade aumentava os pontos nas sua habilidades, se você utilizar mais espada você vai ganhar mais ponto na skill espada, resumindo quando descobri que poderia ganhar skill ate em cervejaria para fazer algumas quest sair mais facil, foi um upgrade comparado ao jogo anterior.
            </p>
            
            <GameImage 
              src="/assets/25/KingdomComeImagem/KINGDOMCOME1.png" 
              alt="Kingdom come introdução" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Para mim os gráficos do jogo apresentou uma excelente melhoria comparado com a sequência anterior, e além disso um critério que sempre acho legal nos jogos da Warhorse Studios é que a escala do mapa é sempre igual no mundo real, ou seja, a distância das vilas é igual e isso traz uma sensação muito boa ao jogar.
            </p>
            <p className="mb-4">
              Um outro fator é como fazer design das cidades e dos quartos, sempre foi muito, uma imagem abaixo que tirei foto jogando o jogo é a cidade <strong>Kuttenberg</strong>(Kutná Hora atual), que ficou muito bonita, sempre andava nela e assistia bastante design em local certo.
            </p>
            
            <GameImage 
              src="/assets/25/KingdomComeImagem/KingdomCome2.png" 
              alt="Kingdom come introdução" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90} ratingColor="bg-yellow-400 text-black">
            <p>
              A trilha sonora foi bem colocada no jogo, conseguiu utilizar eles na cena exata, como por exemplo em um plot twist tocava uma trilha sonora de grandeza quando um personagem importante chegava, nas cenas de diversão/bares sempre tinha aquela musica legal de festa bem tocada.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={100} ratingColor="bg-yellow-400 text-black">
            <p>
              A historia do jogo segue sendo perfeito, as quest secundarias são divertidas e bem recompensadas, já a principal conseguiram me prender do inicio ao fim, a minha sorte que no 2 ato consegui fazer todas quest secundarias, porque a quest principal me prendeu depois de um certo acontecimento no jogo.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
            <p>
              Por fim a engine CryEngine funcionou muito bem, eu não tive problemas de perfomance no jogo rodando com uma 4060, eu só tive um bug pequeno, que quando lavei o meu cavalo, os aldeões perto acabaram falecendo e tive que voltar no save, porém voltar o save foi algo bem curto e não fez eu perder muito tempo de jogatina.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Kingdom Come: Deliverance II é uma evolução do primeiro jogo, trazendo melhorias em todos os aspectos sem perder sua identidade única."
            rating={96}
            date="13/03/2025 15:30"
          />
        </div>
      </div>
    </>
  );
};

export default KingdomComeDeliverance2;