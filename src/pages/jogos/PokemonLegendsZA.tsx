// src/pages/jogos/PokemonLegendsZA.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const PokemonLegendsZA: React.FC = () => {

  const gameData = {
    slug: "pokemon-legends-z-a",
    title: "Pokémon Legends: Z-A",
    subtitle: "Apesar do jogo ser apenas em uma cidade, é um jogo muito divertido",
    rating: 88,
    coverImage: "/assets/25/PokemonLegendsZA/frontpage.png",
    logo: "/assets/25/PokemonLegendsZA/logo.png", // Assumi que existe um logo.png, se for o mesmo da capa, só repetir
    genre: "Rpg de Turno por Tempo Real / Aventura",
    releaseDate: "2025-10-16", // Data aproximada baseada na sua info
    developer: {
        name: "Game Freak",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nintendo / The Pokémon Company",
    engine: "Proprietary Engine",
    platforms: ["Nintendo Switch 1", "Nintendo Switch 2"]
  };

  // SEO
  const seoDescription = "Review completa de Pokémon Legends: Z-A. Analisamos o retorno das Mega Evoluções, o combate dinâmico em Lumiose City e o desempenho técnico no fim da era Switch.";
  const seoKeywords = "Pokémon Legends Z-A review, Pokémon Z-A análise, Nintendo Switch, Mega Evolução, Lumiose City, Game Freak, RPG de Ação";

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
    "datePublished": "2025-12-02T12:00:00-03:00"
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
              Este é o segundo spin-off da série Pokémon Legends, que nasceu com Pokémon Legends: Arceus. Foi, literalmente, uma nova aposta arriscada da Pokémon Company que deu certo para colocar a franquia de volta nos trilhos.
            </p>
            <p className="mb-4">
              Digo isso porque ainda acho que a geração do Switch foi uma das piores de Pokémon, sendo o Arceus o único jogo verdadeiramente excelente da franquia nessa geração. Eu ainda devo jogar os restantes, mas lembro que o Arceus foi o único que tive paciência para jogar (dando meu jeito no “Switch Pro”), enquanto o resto nem consegui terminar. Mas não estou aqui para falar disso, e sim de Pokémon Legends: Z-A, que é, de certa forma, o último jogo lançado da geração Switch.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <p className="mb-4">
              No quesito mecânica, a de Arceus já era boa, mas dessa vez diria que fizeram algo ainda melhor. Vou tentar explicar como funciona: ainda é um RPG de turno, mas essas gameplays podem ser chamadas de "combate por turno em tempo real". Já vi empresas fazendo isso, como em Final Fantasy XII e XIII. É quando o jogador tem o "tempo do mundo" e não precisa esperar o inimigo fazer uma ação estática, tornando o combate mais rápido e estratégico.
            </p>
            
            <GameImage 
              src="/assets/25/PokemonLegendsZA/pokemon mecanica.png" 
              alt="Combate dinâmico em Pokémon Legends Z-A" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">
              Com essa função, alguns golpes mudaram totalmente. Alguns se tornaram golpes de área — nos MMORPGs chamamos de AoE (Area of Effect) — e outros são ataques Single Target (focados em um único alvo). Isso trouxe mudanças na execução dos golpes, o que foi uma ótima adição.
            </p>

            <p className="mb-4">
              Também preciso comentar que a gameplay de Pokémon Legends: Arceus retorna aqui: os pokémons estão sempre nos ambientes e podem ser capturados fora da batalha. Acho que essa mecânica deveria ser permanente na franquia, pois aumenta muito o brilho do jogo. Além disso, a volta das Mega Evoluções foi muito bem-vinda, adicionando novos pokémons que mega evoluem e que combinam com a história.
            </p>

            <p className="mb-4">
              O jogo entrega dois objetivos simultâneos: capturar pokémons para ganhar EXP e Technical Machines (TMs), e vencer batalhas para se tornar mais competitivo na história. A mecânica de dia e noite também é legal: de dia, tudo funciona normalmente com as pessoas em suas rotinas; à noite, o foco muda para batalhas em certas áreas onde você pode ser desafiado, lembrando um período de "cidade sem lei".
            </p>

            <p className="mb-4">
              Por fim, a customização do personagem ficou muito legal. Havia também mecânicas de parkour para pegar certos itens e um sistema de café para tirar fotos e aumentar a felicidade do pokémon. São pequenos detalhes, mas o principal é o que citei acima, que faz o jogo ser divertido.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={80}>
            <p className="mb-4">
              Na questão gráfica, preciso elaborar melhor. Primeiro, tenho que elogiar as pessoas que fazem o design, tanto dos pokémons quanto dos personagens. Este último ponto entregou muitos personagens legais, e estou doido para ver como ficarão as artes das cartas TCG da franquia, que são sempre bonitas.
            </p>

            <GameImage 
              src="/assets/25/PokemonLegendsZA/pokemon grafico 01.png" 
              alt="Visual de Lumiose City e os novos designs" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">
              Porém, esses são os únicos pontos positivos, infelizmente. Como falei, esse jogo é literalmente o canto do cisne da versão Nintendo Switch. Se você notar a diferença dele rodando no Switch 2, muda apenas o FPS e a resolução. Tiveram que “capar” muita coisa para o jogo rodar bem nos dois consoles da Nintendo.
            </p>

            <p className="mb-4">
              Como assim “capar”? Eu diria que, primeiro, reduziram a história do jogo a apenas uma cidade, que é totalmente pré-carregada para evitar problemas de otimização. Além disso, foi adicionada apenas uma dungeon (que envolve esgoto), e os Centros Pokémon são bem curtos. Outros lugares só servem para entrar em áreas bem pequenas.
            </p>

            <p className="mb-4">
              Você nota isso porque usaram uma técnica famosa da era do PlayStation 1: quando precisavam “camuflar” algo, usavam uma imagem pré-renderizada (como um PNG) no cenário para mostrar detalhes que deveriam ser 3D, mas são estáticos. Isso torna o jogo mais feio no quesito ambiente, mas entendo que foi uma medida para tornar o jogo JOGÁVEL. Não ficou ruim, diria que ficou mediano.
            </p>
            <GameImage 
              src="/assets/25/PokemonLegendsZA/pokemon grafico 02.png" 
              alt="Visual de Lumiose City e os novos designs" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={80}>
            <p className="mb-4">
              A trilha sonora do jogo é legal, mas não é grande coisa. Eu diria que, para o padrão da franquia Pokémon, é "ok". Nota 80 mesmo.
            </p>
            <GameImage 
              src="/assets/25/PokemonLegendsZA/pokemon trilha sonora.png" 
              alt="Visual de Lumiose City e os novos designs" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={85}>
            <p className="mb-4">
              Tenho algumas ressalvas sobre a história. Começando pelo ponto negativo: o jogo tem um tutorial muito chato, que prende o jogador com aquelas famosas “paredes invisíveis”, impedindo a exploração até que você siga as instruções. Isso irrita, mas o jogo se torna tão divertido depois que você acaba esquecendo.
            </p>
            <p className="mb-4">
              O segundo ponto negativo é a falta de dublagem. Faz as cenas de animação parecerem meio toscas. Entendo que dublar um jogo é caro, mas muitas empresas dublam pelo menos a parte principal; não entendo por que isso não funciona até hoje em Pokémon. Senti falta também de um grupo de vilões claros. Eu já achava o Team Flare meio fraco, mas a ausência de um vilão aqui me fez até sentir saudade deles.
            </p>
            <p className="mb-4">
              Falando dos pontos positivos: o jogo tem bastante quest secundária legal. Além disso, conseguiram fazer uma relação interessante no ranking de Z até A, que se assemelha aos Líderes de Ginásio. Quem joga a franquia nota isso, pois conforme o nível aumenta, o número de pokémons dos oponentes cresce na ordem clássica (2, 2, 3, 3, 4, 4, 4, 5). Isso dá um objetivo claro ao jogador sem tirar as definições clássicas da franquia.
            </p>
            <GameImage 
              src="/assets/25/PokemonLegendsZA/pokemon historia.png" 
              alt="Visual de Lumiose City e os novos designs" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
            <p className="mb-4">
              Em questão de otimização, o jogo rodou bem para mim no Nintendo Switch 2. Mas tenho que tirar pontos aqui. Por quê? Porque essa versão não vem traduzida em português, e ainda entregam de bandeja uma tradução em Espanhol focada para a AMÉRICA LATINA.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Por fim, acho que o jogo é excelente no quesito diversão. Me fez lembrar muito de Legends: Arceus. Claro, é uma sequência, mas conseguiu ser tão divertido quanto, e eu diria que até melhor, pois o combate evoluiu. O Arceus foi a ideia, e aqui conseguiram melhorar. É uma pena que seja só uma cidade e que o visual do ambiente possa frustrar alguns usuários, mas acho que o brilho da mecânica faz esquecer esses pequenos detalhes."
            rating={88}
            date="02/12/2025 18:00"
          />

        </div>
      </div>
    </>
  );
};

export default PokemonLegendsZA;