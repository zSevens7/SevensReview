// src/pages/jogos/DigimonWorld2.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const DigimonWorld2: React.FC = () => {

  const gameData = {
    slug: "digimon-world-2",
    title: "Digimon World 2",
    subtitle: "O inicio de Digimon de RPG por Turno, não foi bem recebido",
    rating: 70,
    coverImage: "/assets/25/DigimonWorld2/frontpage.png",
    logo: "/assets/25/DigimonWorld2/frontpage.png",
    genre: "RPG de Turno / Dungeon Crawler",
    releaseDate: "2000-07-27",
    developer: {
        name: "BEC",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Bandai",
    engine: "Proprietary PS1 engine",
    platforms: ["PlayStation"]
    };

  // SEO
  const seoDescription = "";
  const seoKeywords = "";

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
              O segundo jogo da franquia Digimon foi o Digimon World 2. Diferente do World 1, que era no estilo tamagotchi, aqui fizeram uma mistura de RPG por turno com um estilo de dungeons roguelite. Era uma ideia nova, e querendo ou não, os próximos jogos iriam seguir mais esse estilo de RPG por turno. Porém, era algo bem precário — e irei dizer o porquê.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={45}>
            <p className="mb-4">
              Começando pela mecânica: lembro que, quando era criança, nunca gostei desse jogo. O motivo? Bem, se eu já falei que Digimon World 1 era bem ruim em tutorial e explicações, este aqui consegue ser ainda pior. É muito confuso e exige um bom inglês para entender para onde ir.
            </p>

            <GameImage 
            src="/assets/25/DigimonWorld2/digimon mecanica.png" 
            alt="Imagem de Digimon " 
            className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Primeiro, ao invés de o personagem andar pelo mapa, você controla um robozinho que explora as dungeons. Ele tem sistemas de bateria, HP, míssil, etc., mas com um menu tão feio que fica difícil de entender. Eu mesmo, jogando agora, tive dificuldade para compreender como essas mecânicas funcionam. A ideia até é legal, mas muito mal executada. Um exemplo: quando você fica sem bateria, o jogo poderia dar uma dica, tipo “vá em tal NPC para aumentar a capacidade da bateria”.
            </p>

            <p className="mb-4">
              Mas o que realmente me fez dropar o jogo foram dois sistemas. O primeiro é a captura de Digimon, que é muito estranha — mas muito mesmo. Funciona por meio de “presentes” no meio da dungeon, e como você tem espaço limitado no inventário, nem sempre pode levar tudo. Além disso, só pode comprar itens do tipo da sua “gangue”; às vezes aparece um “all types”, mas você precisa de sorte para achar na dungeon.
            </p>

            <p className="mb-4">
              Isso é um problema porque o grind de XP é horrível. Alguns jogos de Digimon têm limite de level, mas você pode apenas “re-digivolver” para versão anterior. Aqui, não. Você é obrigado a fazer fusões, ou seja, sempre perder um Digimon e capturar outro de novo, tudo numa sequência repetitiva. Jogando no emulador tive que colocar 200% de velocidade, porque o jogo é muito lento. Por causa de tudo isso, dropei. Acho que fui até a 5ª ou 6ª dungeon.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={75}>
            <p className="mb-4">
              Os gráficos são até melhores que os de Digimon World 1, principalmente os modelos dos Digimon. O design dos personagens lembra aqueles gráficos de Final Fantasy VII — quem já viu sabe do que estou falando. Tirando isso, é só isso que é bonito no jogo, porque os cenários e ambientes são bem fracos comparados aos do Digimon World 1.
            </p>
            <GameImage 
            src="/assets/25/DigimonWorld2/digimon grafico.png" 
            alt="Imagem de Digimon " 
            className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={60}>
            <p className="mb-4">
              A trilha sonora do jogo é bem mediana.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={70}>
            <p className="mb-4">
              A história se concentra em explorar dungeons no estilo roguelike. Você enfrenta armadilhas, tem o custo de bateria para andar, inimigos no meio do caminho, além das dungeons mudarem a cada tentativa. A única novidade boa e ruim ao mesmo tempo é que existem 3 “gangues”, cada uma focada em um tipo de Digimon: vírus, vacina e data.
            </p>
            <p className="mb-4">
              O problema disso é que não era possível dar presentes para tipos diferentes, o que aumenta a chance de você ter só Digimon do estilo da sua gangue. Existem até personagens rivais e líderes, mas nada que realmente prenda o jogador no início da trama.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              O jogo não tem PT-BR, mas também não encontrei bugs. Deve ter vários glitches já descobertos, mas não vi nada. Porém, como o jogo é de 2000, não posso criticar muito.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Acho que o jogo tinha um potencial enorme, mas foi mal executado. Hoje em dia, eu não recomendaria para ninguém jogar. Talvez existam hackroms que melhorem a experiência, mas no fim acho que é desperdício — você precisa ter muita paciência para grindar XP. Claro que no emulador dá para aumentar a velocidade, mas mesmo assim, eu desisti."
            rating={70}
            date="16/11/2025 14:00"
          />

        </div>
      </div>
    </>
  );
};

export default DigimonWorld2;
