// src/pages/jogos/TrailsInTheSky1st.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const TrailsInTheSky1: React.FC = () => {

  const gameData = {
    slug: "trails-in-the-sky-1st",
    title: "Trails in the Sky the 1st",
    subtitle: "A jornada de Estelle e Joshua reimaginada com estratégia e carisma inigualáveis",
    rating: 92,
    coverImage: "/assets/26/TrailsInTheSky1/cover.png",
    logo: "/assets/26/TrailsInTheSky1/frontpage.png",
    genre: "JRPG / RPG de Turno",
    releaseDate: "2025-11-20",
    developer: {
        name: "Nihon Falcom",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nihon Falcom / NIS America",
    engine: "Falcom Proprietary Engine",
    platforms: ["Nintendo Switch", "PC (Steam)", "PlayStation 5"]
  };

  // SEO
  const seoDescription = "Review de Trails in the Sky the 1st. O remake traz Estelle e Joshua de volta com gráficos 3D e combate refinado. Uma joia da Falcom.";
  const seoKeywords = "Trails in the Sky review, remake, The 1st, Estelle Bright, Nihon Falcom, JRPG, RPG de turno, Liberl, pt brasileiro, análise de jogo";

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
    "datePublished": "2026-01-12T12:00:00-03:00"
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
              <strong>Trails in the Sky the 1st</strong> reimagina o primeiro capítulo de uma série amada, trazendo visuais aprimorados e uma jogabilidade refinada. Junte-se a Estelle e Joshua, parceiros unidos pelo destino, enquanto desvendam conspirações sombrias que ameaçam a paz do Reino de Liberl.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={95}>
            <GameImage 
              src="/assets/26/TrailsInTheSky1/mecanica.png" 
              alt="Sistema de batalha e movimentação" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              O jogo funciona num estilo de batalha por turno, mas com um diferencial: você pode se movimentar pelo espaço da batalha. Não é um “RPG de ação” total como <em>Final Fantasy XII</em> ou o recente <em>Pokémon Legends Z-A</em>, mas essa liberdade de movimento adiciona uma camada estratégica enorme: onde posicionar cada personagem, como evitar ataques em área, etc. Todas as batalhas contra chefes foram bem legais.
            </p>
            <p className="mb-4">
              Talvez a única coisa que não gostei muito foi o sistema de <strong>Arts</strong> (magias). Para explicar melhor: lembrando <em>Final Fantasy VII</em>, lá existem as Materias; aqui é quase a mesma coisa, os personagens usam orbes para lançar magias. O problema chato é que usar Arts exige "concentração" (Cast Time), ou seja, o personagem precisa esperar um turno para conjurar. Isso muda o ritmo da batalha e, por isso, preferi focar no uso de Skills (Crafts) do que nas Arts.
            </p>
            <p className="mb-4">
              A última coisa que preciso destacar é o sistema de escalonamento de nível (anti-grind): o jogo reduz o XP ganho se você estiver muito forte, impedindo que você fique muito acima do nível da área (no máximo uns 2 níveis), o que mantém o desafio equilibrado.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90}>
            <GameImage 
              src="/assets/26/TrailsInTheSky1/grafico.png" 
              alt="Visual do mundo de Liberl e personagens" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              O gráfico não busca o fotorrealismo de produções AAA, já que é um jogo de nicho com orçamento menor, mas mesmo assim a Falcom conseguiu entregar uma ótima qualidade. Os ambientes são muito bonitos e passam uma sensação de "mundo vivo". Além disso, o design dos personagens (modelos e ilustrações) é excelente.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={80}>
            <GameImage 
              src="/assets/26/TrailsInTheSky1/trilha sonora.png" 
              alt="Ambientação sonora e diálogos" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              Gostei bastante da trilha sonora. Ela é simples, mas viciante e combina perfeitamente com o clima de aventura. Sobre a dublagem, o jogo tem atuação de voz parcial. Nem todas as cenas são dubladas; às vezes, um personagem secundário tem voz numa cena e o protagonista não, ou vice-versa. Algumas pessoas podem achar essa inconsistência chata, mas sinceramente, não me incomodou.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={100}>
            <GameImage 
              src="/assets/26/TrailsInTheSky1/historia.png" 
              alt="Estelle e Joshua em cena da história" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              A história é, sem dúvida, o ponto alto do jogo. Primeiro, a protagonista <strong>Estelle</strong> é genial. A dinâmica dela fazendo dupla com o <strong>Joshua</strong> é incrível; eles são extremamente carismáticos e conquistam o jogador desde o início.
            </p>
            <p className="mb-4">
              A trama começa leve e feliz, com um ar de aventura descompromissada, mas aos poucos vai introduzindo questões políticas pesadas, mistérios de civilizações antigas e tecnologias perdidas.
            </p>
            <p className="mb-4">
              Outro destaque é o sistema da <strong>Bracer Guild</strong>. Funciona como uma "Guilda de Aventureiros", onde você realiza missões (quests) para ajudar a população. Para mim, foi a parte mais legal do jogo. Além disso, os NPCs são muito bem escritos e suas falas mudam conforme os eventos do mundo avançam. Por fim, há sistemas extras legais, como livros e culinária, onde as comidas dão bônus de status ao grupo.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
            <GameImage 
              src="/assets/26/TrailsInTheSky1/otimizacao.png" 
              alt="Menus e interface do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              O único problema do jogo, para nós brasileiros, é a falta de legendas em PT-BR. Como é um JRPG com uma quantidade massiva de texto e focado em narrativa, uma localização faria muita falta para quem não domina o inglês.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="O jogo me divertiu muito. O principal ponto positivo é a dupla Estelle e Joshua; eles são personagens excelentes com um carisma enorme que carrega a trama. Além disso, o mundo de Liberl e o conteúdo da história são fascinantes. Estou bastante ansioso para jogar o 2º Capítulo (SC)."
            rating={92}
            date="12/01/2026"
          />

        </div>
      </div>
    </>
  );
};

export default TrailsInTheSky1;