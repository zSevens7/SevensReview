// src/pages/jogos/DigimonWorld1.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const CitiesSkylanes2: React.FC = () => {
  const gameData = {
  slug: "cities-skylines-2",
  title: "Cities: Skylines 2",
  subtitle: "Cities: Skylines 2 apesenta melhorias significativas em relação ao seu antecessor, porém teve um lançamento desatroso.",
  rating: 80,
  coverImage: "/assets/25/CitiesSkylanes2/frontpage.png",
  logo: "/assets/25/CitiesSkylanes2/frontpage.png",
  genre: "Simulação/ Estratégia",
  releaseDate: "2023-10-24",
  developer: {
    name: "Colossal Order",
    countryFlag: "/assets/flags/finland.png"
  },
  publisher: "Paradox Interactive",
  engine: "Unity",
  platforms: ["Windows", "PlayStation 5", "Xbox Series X/S"]
};

  
  // Textos para SEO
    const seoDescription = "Review completa de Cities: Skylines 2, analisando mecânicas, gráficos, trilha sonora e otimização. Veja como o jogo evoluiu em relação ao primeiro, mas ainda sofre com problemas de desempenho.";
    const seoKeywords = "Cities Skylines 2 review, análise Cities Skylines 2, desempenho Cities Skylines 2, otimização, simulação de cidades, Colossal Order, Paradox Interactive, Cities Skylines 2 mecânicas";



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
    "datePublished": "2025-11-20T12:00:00-03:00"
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
        <meta property="og:image" content="https://sevensreview.com.br/assets/25/DigimonWorld1/digimon mecanica.png" />
        <meta name="twitter:image" content="https://sevensreview.com.br/assets/25/DigimonWorld1/digimon mecanica.png" />
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
               Eu sou grande fã de Cities Skylines, porque no passado eu gostava muito do SimCity da EA Games. Se não me engano, acho que era assim que chamava a franquia. Porém, a EA deixou essa franquia de lado, e em 2015 uma empresa fez o Cities Skylines, que foi um jogo muito bom de simulação de cidades. A empresa foi evoluindo aquele jogo com DLCs bem legais, porém, ao mesmo tempo, precisava renovar a engine do jogo, e fazer um Cities Skylines 2 não é uma má ideia. Porém, os devs tiveram muita dificuldade para lançar o jogo. Eu só quis lançar a review no fim de 2025, porque no início esse jogo era bem bugado — eu irei focar até na parte de otimização no fim.
            </p>
             <p className="mb-4">
               Por enquanto essa review é do jogo base, sem DLC, apesar de que para mim a única DLC que compensaria é uma nova de porto, mas ainda acho ela meio cara (custa 150 reais por aí).
            </p>
            
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90} >
            <p className="mb-4">
             Em questão de mecânicas, eu consigo citar umas melhorias vindo do 1. Eu diria que a principal é que as coisas… como posso chamar… tipo hospital, bombeiros, energia, têm certos pré-requisitos e você pode dar upgrade, melhorar a eficiência deles e ao mesmo tempo aumentar a manutenção. E isso pode ajudar no meio ambiente, eficiência, outros fatores como turismo etc. Além disso, antigamente no 1, o jogo tinha progressão linear. Como assim? Diria que ela era focada em cada avanço da mesma tecnologia. Aqui o jogador pode escolher qual tecnologia quer seguir e o caminho dela.
            </p>
            <p className="mb-4">
              A única coisa que eu tiro uns pontos é que no início do jogo é meio complicado. Até fizeram um mod para facilitar isso, dando mais dinheiro ao jogador (na versão inicial do jogo não tinha isso). O motivo disso é que a manutenção e o lucro nesse jogo são mais cruéis. Mas ao mesmo tempo que o início é difícil, eu diria que depois de um tempo o jogo se torna absurdamente fácil. Não sei por quê, não sei se é alguma coisa que eu faço, mas notei isso nas duas gameplays em que fui mais longe no jogo. Uma das formas que eu fiz para evitar isso era literalmente assim: eu ganhei a pesquisa de hospital/médicos? Então eu não construía nada para não pagar nenhuma taxa e ganhar dinheiro. Mesmo que minha população estivesse morrendo, eu estava guardando dinheiro para projetar mais propriedades e gerar mais lucro.
            </p>

            <GameImage 
              src="/assets/25/CitiesSkylanes2/cities mecanica 01.png" 
              alt="Imagem de Cities Skylines 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Por fim, a única mudança que pode ser um pequeno detalhe é que… o sistema de energia elétrica melhorou muito. Tem sistema de venda e compra de energia, além disso todas as ruas já vêm com cano de esgoto (água) e energia, tornando mais fácil a vida do jogador. Para mim essa foi a grande mudança que eu admirei muito, porque no primeiro jogo eu achava super chato isso.
            </p>
            <GameImage 
              src="/assets/25/CitiesSkylanes2/cities mecanica 02.png" 
              alt="Imagem de Cities Skylines 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90} >
            <p className="mb-4">
               Em questão de gráficos, eles deram uma melhorada, mas o ponto forte do jogo é a mecânica mesmo. Só tenho que comentar que o jogo teve umas melhorias mesmo sendo jogo base. Diria que fiquei surpreso já ter desastres naturais, mas o que foi surpresa mesmo foi ter clima de estação no jogo. A única coisa que não gostei foi como as partículas de água funcionam no rio. Não gostei da simulação: quando eu fazia uma usina hidrelétrica, parecia que nem tinha efeito em segurar a água, sabe? Acredito que essa parte está meio ruim.
            </p>
            
            <GameImage 
              src="/assets/25/CitiesSkylanes2/cities grafico.png" 
              alt="Imagem de Cities Skylines 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={60} >
            <p>
              O jogo apresenta uma trilha sonora e um rádio que fala das coisas do jogo. Infelizmente não tem dublagem disso, e também a música não é lá essas coisas. É melhor você ligar a sua própria música e curtir o jogo.
            </p>
            <GameImage 
              src="/assets/25/CitiesSkylanes2/cities trilha sonora.png" 
              alt="Imagem de Cities Skylines 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />         
             </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={70} >
            <p className="mb-4">
              O jogo não tem história fixa, já que é focado em simulação e estratégia, mas diria que pelo menos tem um objetivo claro de realizar tarefas para ter mais recursos e o jogador não enjoar facilmente.
            </p>

            <GameImage 
              src="/assets/25/CitiesSkylanes2/cities historia 01.png" 
              alt="Imagem de Cities Skylines 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={90} >
            <p className="mb-4">
              Quando este jogo lançou, a otimização dele estava muito ruim, bem ruim mesmo. Eu até tenho uma foto antiga de um bug visual na mecânica. Eu diria que hoje ele está bem melhor e, por causa disso, eu preferi esperar para fazer uma review melhor. Acredito que o único bug que me incomoda é um crash do nada, e ao mesmo tempo não existe um “save automático”.
            </p>
            <GameImage 
              src="/assets/25/CitiesSkylanes2/cities otimizacao.png" 
              alt="Imagem de Cities Skylines 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Eu acho que Cities Skylines 2 é um jogo “jogável”, apesar de ter feito um lançamento muito ruim. Ainda acho que ele é excelente para um jogo de simulação de cidades, sendo bom tanto para players casuais quanto para os mais “hardcores”."
            rating={80}
            date="09/11/2025 22:00"
          />
        </div>
      </div>
    </>
  );
};

export default CitiesSkylanes2;
