// src/pages/jogos/PokemonX.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const PokemonX: React.FC = () => {

  const gameData = {
    slug: "pokemon-x",
  title: "Pokémon X",
  subtitle: "Aposta Da Mega Evolução deu certo no Pokemon X",
  rating: 91,
  coverImage: "/assets/25/PokemonX/frontpage.png",
  logo: "/assets/25/PokemonX/frontpage.png",
  genre: "RPG de turno / Aventura",
  releaseDate: "2013-10-12",
  developer: {
    name: "Game Freak",
    countryFlag: "/assets/flags/japan.png"
  },
  publisher: "Nintendo / The Pokémon Company",
  engine: "Proprietary 3DS engine",
  platforms: ["Nintendo 3DS"]
};

  // SEO
  const seoDescription = "Review completa de Pokémon X. Análise de mecânicas, gráficos, trilha sonora e muito mais.";
  const seoKeywords = "Pokémon X review, Pokemon X análise, 3DS, Game Freak, Kalos, Mega Evolution";

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
    "datePublished": "2025-11-20T12:00:00-03:00"
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
              Bem, na introdução desse game, ainda irei abordar Pokémon Omega Ruby e também Pokémon Sun. O motivo é simples: eu joguei a versão Pokémon X no 3DS original, e como no meu Pokémon OR eu tenho a Pokédex completa, não devo rejogar ele. O Sun também não devo rejogar. Eu até tenho uma história para esse Sun: comprei na época da pré-venda e me arrependi muito. O motivo é simples: gostei muito do Pokémon ORAS, mas ao mesmo tempo eles conseguiram destruir tudo na próxima geração.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <p className="mb-4">
              Vamos lá, começando a nossa review pela mecânica. Aqui tivemos a mecânica de batalha tripla removida, mas tudo bem, não iria fazer falta mesmo. Mas eu preciso falar: a mecânica introduzida de “mega evolução” foi literalmente uma aposta da franquia, e no fim das contas deu certo. Era muito legal ver o Pokémon evoluindo para algo a mais, e alguns Pokémon antigos foram lembrados (Pinsir e Kangaskhan).
            </p>
            <p className="mb-4">
              O único problema das mega evolutions, pelo que me lembro, é que a galera do competitivo não gostava muito, porque diziam que a pedra de evolução tirava um item útil que poderia ficar no Pokémon. Porém, eu não ligo para competitivo.
            </p>
            <p className="mb-4">
              O jogo também introduziu algumas mecânicas legais para o 3DS. A primeira é andar de patins por causa do analógico do Nintendo 3DS — era bem legal a animação. Além disso, também havia montarias em certos locais, que davam uma diversão de gameplay diferenciada.
            </p>
            <p className="mb-4">
              Meu ponto negativo na mecânica é que… foram introduzidos poucos Pokémon da nova geração, apenas 71, totalmente oposto da 5ª geração. E também preciso citar aqui o motivo de eu não gostar de Pokémon Sun. Lembra que falei que a aposta da mega evolução deu certo? Pois bem: no Pokémon Sun colocaram aquela parada de Golpe Z, algo assim. Era lento e chato, total oposto da mega evolução. Foi bizarro fazer algo novo e depois descartar. Me faz lembrar quando a 2ª geração lançou o dia e noite, e no Pokémon Ruby esqueceram completamente dessa mecânica.
            </p>            
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <p className="mb-4">
              Em questão de gráficos, Pokémon X ficou muito mais bonito comparado aos jogos do Nintendo DS. Além disso, os designs dos personagens ficaram muito bons, principalmente os protagonistas, com opção de trocar roupas e cor de cabelo.
            </p>
            <p className="mb-4">
              Sobre ambientação, diria que ficou bonita também. Os locais dos líderes de ginásio eram bem criativos usando o 3D do Nintendo 3DS — apesar de eu achar que poderiam ter usado isso mais, comparado com outros jogos do 3DS, como Super Mario, por exemplo, que aproveitaram essa mecânica melhor.
            </p>
            
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={80}>
            <p className="mb-4">
              Sobre trilha sonora, eu diria que é no padrão dos jogos Pokémon. Para mim nenhuma música se destaca, mas também não é ruim.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={90}>
            <p className="mb-4">
              A história do jogo é legal. O início é bem interessante; pela primeira vez deu para sentir uma aventura com seus amigos, pois era um grupo de cinco pessoas e eles interagiam bastante no começo. Além disso, também temos líderes de ginásio bons — destaque para a Korrina.
            </p>
            <p className="mb-4">
              O único detalhe ruim aqui é que não gostei dos vilões. Achei eles bem chatos e sem graça comparando com outros vilões do passado. E falando em coisa ruim, lembra que falei que os líderes de ginásio foram bons? Então, vou aproveitar para falar de outra coisa ruim que não gostei em Pokémon Sun: tiraram os líderes de ginásio. É como jogar Final Fantasy sem chocobos ou Dragon Quest sem o slime azul amigável.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              Em questão de otimização, é ok. Na época eu não posso culpar legenda ou coisas assim, porque o espaço do 3DS era pequeno mesmo.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Por fim, Pokémon X é um bom jogo da franquia. Conseguiu fazer uma aposta certa com a mega evolução, entrega uma história boa e gráficos lindos. Pena que na época era bem no início da vida do 3DS; acredito que poucas pessoas devem ter jogado aqui no Brasil, já que era difícil comprar jogos da Nintendo. A eShop era bem ruim, tinha que comprar com moedas convertidas para dólar. Mas hoje em dia dá para jogar no emulador, e acredito que existam hack roms que melhoram o jogo ainda mais."
            rating={91}
            date="14/11/2025 23:00"
          />

        </div>
      </div>
    </>
  );
};

export default PokemonX;
