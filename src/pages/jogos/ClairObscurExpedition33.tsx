// src/pages/jogos/ClairObscurExpedition33.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const ClairObscurExpedition33: React.FC = () => {
  
  const gameData = {
    slug: "clair-obscur",
    title: "Clair Obscur: Expedition 33",
    subtitle: "",
    rating: 97,
    coverImage: "/assets/25/Expedition33/ExpFront.png",
    logo: "/assets/25/Expedition33/logo.png",
    genre: "RPG de Turno/Aventura",
    releaseDate: "2025-04-21",
    developer: {
      name: "Sandfall Interactive",
      countryFlag: "/assets/flags/france.png",
    },
    publisher: "Kepler Interactive",
    engine: "Unreal Engine 5",
    platforms: ["Microsoft Windows", "PS5", "Xbox X/S"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Clair Obscur: Expedition 33 - um RPG de turno inovador com mecânicas em tempo real, gráficos impressionantes na Unreal Engine 5 e trilha sonora cativante. Avaliação: 97/100.";
  const seoKeywords = "Clair Obscur: Expedition 33, review, RPG, turn-based, Sandfall Interactive, Kepler Interactive, Unreal Engine 5, Xbox Game Pass, análise, jogos 2025";

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
    "datePublished": "2025-05-01T18:43:00-03:00"
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
      

    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-8">
      {/* Header */}
      <ReviewHeader {...gameData} />

      {/* Conteúdo da Review */}
      <div className="mt-8">
        {/* Introdução */}
        <ReviewSection title="Introdução">
          <p className="mb-4">
            <strong>Sinopse:</strong> Conduza os membros da Expedição 33 em uma missão para destruir a Artífice para que ela nunca mais possa pintar a morte. Explore um mundo inspirado na Belle Époque da França e enfrente inimigos únicos neste RPG em turnos com mecânicas em tempo real.
          </p>
          <p>
            Confesso que fiquei interessado nesse jogo desde a primeira vez que o vi em um trailer na Gamescom da Microsoft. É um estúdio indie francês que fez parceria com o Game Pass e conseguiu lançar um excelente jogo. Vou comentar aqui quais são as qualidades deste jogo.
          </p>
        </ReviewSection>

        {/* Mecânica */}
        <ReviewSection title="Mecânica" rating={95} ratingColor="bg-green-800">
          <p className="mb-4">
            O jogo é, literalmente, um RPG de batalhas por turno. Acredito que a principal inovação, pelo menos para mim, foi o sistema de "bloquear" ou "escapar" dos ataques: o próprio jogador realiza essa ação em tempo real, diferente de outros RPGs de turno em que esquivar depende apenas da sorte. Isso torna o jogo um pouco mais difícil, mas também mais justo — se você defende no momento certo, evita dano e ainda contra-ataque ao inimigo e ganha ainda um PA(Pontos de Ação, já que o jogo não usa sistema de mana).Lendo isso faz parecer que o jogo obriga o jogador a bloquear, e sim é verdade, porem na batalha o jogo te dá algumas dicas no momento certo para bloquear e não é tão difícil, algum monstro só tem dois ou três tipos de ataques e fica fácil de decora.
          </p>
          <p className="mb-4">
            Gostei bastante dessa proposta. Também me diverti grindando XP — e sim, o jogo permite grindar para ficar mais forte. A cada nível que você sobe, ganha 3 pontos para distribuir nos atributos do personagem, o que facilita bastante a evolução.
          </p>
          
          <GameImage 
            src="/assets/25/Expedition33/ExpMec01.png" 
            alt="EXP MEC 1" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
          
          <p className="mb-4 mt-4">
            Outro detalhe legal é que o jogo possui minigames divertidos. A imagem abaixo mostra aquele que, provavelmente, será o minigame mais famoso: uma versão "Only Up" dentro de Expedition 33.
          </p>
          
          <GameImage 
            src="/assets/25/Expedition33/ExpMec02.png" 
            alt="EXP MEC 2" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
          
          <p className="mb-4 mt-4">
            Sobre a nota: inicialmente pensei em dar 100, mas acabei reduzindo um pouco. Senti falta de uma opção de batalha automática, especialmente para quem só quer grindar XP ou focar na história. O jogo é bastante acessível, então uma função assim ajudaria ainda mais.
          </p>
          <p className="mb-4">
            Outro ponto: algumas batalhas contra bosses secundários foram frustrantes. Vou destacar um exemplo na imagem abaixo. Parecia mais uma batalha de resistência do que de estratégia — o padrão de ataque era fácil de identificar, mas a vida do inimigo era praticamente infinita, e demorei mais de uma hora para vencê-lo. No geral, os bosses secundários são mais fortes que os da história principal, o que é algo positivo: quem quer desafio vai atrás deles.
          </p>
          
          <GameImage 
            src="/assets/25/Expedition33/ExpMec03.png" 
            alt="EXP MEC 3" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
        </ReviewSection>

        {/* Gráficos */}
        <ReviewSection title="Gráficos" rating={95} ratingColor="bg-green-800">
          <p className="mb-4">
            Utilizando a Unreal Engine 5, o jogo ficou belíssimo. Os cenários são de tirar o fôlego, e os personagens também — ainda mais com a possibilidade de customizar o visual.
          </p>
          
          <GameImage 
            src="/assets/25/Expedition33/ExpGra01.png" 
            alt="EXP GRA 1" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
          
          <p className="mb-4 mt-4">
            O único problema gráfico, para mim, foi o design dos monstros do capítulo inicial, que achei muito simples. Nos capítulos seguintes, os designs melhoram bastante. As animações durante o uso das habilidades também estão muito bem-feitas, diferente de alguns RPGs de turno em que os personagens quase não se movem.
          </p>
          
          <GameImage 
            src="/assets/25/Expedition33/ExpGra02.png" 
            alt="EXP GRA 2" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
        </ReviewSection>

        {/* Trilha Sonora */}
        <ReviewSection title="Trilha Sonora" rating={100} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            Achei a trilha sonora fantástica. Procurei saber quem era o compositor: Lorien Testard. Se não me engano, este é o primeiro grande trabalho dele — e ele conseguiu criar uma atmosfera perfeita para o jogo. A música de abertura, "Lumière", é incrível e me fez sentir como se estivesse numa peça de teatro francesa.
          </p>
          <p className="mb-4">
            Outras músicas que gostei e já adicionei no Spotify: "Taking Down the Paintress" e "Déchire la Toile" (ambas do World Map), além de "Spring Meadows – Get Up! For Lumière". Ainda preciso explorar melhor as trilhas do Ato 2 e 3, já que são cerca de 8 horas de música no total.
          </p>
          
          <GameImage 
            src="/assets/25/Expedition33/ExpTrilha01.png" 
            alt="EXP trilha sonora" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
        </ReviewSection>

        {/* História */}
        <ReviewSection title="História" rating={95} ratingColor="bg-green-800">
          <p className="mb-4">
            Na parte da história, evitarei spoilers. O que posso dizer é que a narrativa é muito boa. Não traz grandes novidades no mundo dos games, mas é uma história que vale a pena conhecer — ainda mais com a participação de dois atores famosos: Charlie Cox (Demolidor) e Ben Starr (Clive em Final Fantasy XVI — atuação que o levou a ser indicado a melhor ator no GOTY 2023).
          </p>
          <p className="mb-4">
            As atuações dos personagens estão ótimas. Um ponto que achei muito legal foi o estilo do mundo: me lembrou os Final Fantasy do I ao IX, com um mapa semiaberto e dungeons separadas em ambientes maiores.
          </p>
          
          <GameImage 
            src="/assets/25/Expedition33/ExpHist01.png" 
            alt="EXP HIST 1" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
          
          <p className="mt-4">
            Uma coisa que senti falta foi de uma enciclopédia de inimigos e personagens, com informações sobre suas histórias, fraquezas e resistências. Muitos nomes são inspirados na cultura francesa, e seria interessante ter um glossário para entender melhor. Talvez adicionem isso em uma futura DLC ou atualização gratuita.
          </p>
        </ReviewSection>

        {/* Otimização */}
        <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            A otimização do jogo é excelente. Rodou liso, sem quedas de FPS, e ainda vem localizado em português. O jogo também oferece três níveis de dificuldade, o que o torna ainda mais acessível para diferentes perfis de jogadores.
          </p>
          <p className="mb-4">
            Sobre bugs: encontrei apenas dois glitches, mas nenhum afetou a experiência. Ambos ocorreram em locais onde o jogador nem deveria acessar. Em um dos casos, precisei recarregar o save (perdi só uns 2 minutos), e no outro consegui sair normalmente.
          </p>
          
          <GameImage 
            src="/assets/25/Expedition33/ExpOti01.png" 
            alt="EXP OTI 1" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
          
          <GameImage 
            src="/assets/25/Expedition33/ExpOti02.png" 
            alt="EXP OTI 2" 
            className="max-w-xs md:max-w-md lg:max-w-lg"
          />
        </ReviewSection>

        {/* Veredito Final */}
        <ReviewVeredito
          text="Clair Obscur: Expedition 33 entrega uma experiência sólida em todas as áreas essenciais de um RPG de turno moderno. Com mecânicas bem implementadas, gráficos de alta qualidade na Unreal Engine 5, trilha sonora imersiva e otimização eficiente, o jogo demonstra um alto nível de execução técnica. Pequenas melhorias poderiam ser feitas para ampliar a acessibilidade(batalha automatica e enciclopédia dos inimigos), mas o conjunto final é extremamente consistente e recomendável para fãs do gênero."
          rating={97}
          date="01/05/2025 18:43"
        />
      </div>
    </div>
    </>
  );
};

export default ClairObscurExpedition33;