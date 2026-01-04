// src/pages/jogos/OctopathTraveler0.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const OctopathTraveler0: React.FC = () => {

  const gameData = {
    slug: "octopath-traveler-0",
    title: "Octopath Traveler 0",
    subtitle: "A prequela definitiva que aprimora tudo do original com batalhas em larga escala",
    rating: 97,
    coverImage: "/assets/26/OctopathTraveler0/cover.png",
    logo: "/assets/26/OctopathTraveler0/frontpage.png",
    genre: "JRPG / RPG de Turno",
    releaseDate: "2025-12-05",
    developer: {
        name: "Square Enix / Acquire",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Square Enix",
    engine: "Unreal Engine 4",
    platforms: ["Nintendo Switch", "PC (Steam)", "PlayStation 5", "Xbox Series X/S"]
  };

  // SEO
  const seoDescription = "Review de Octopath Traveler 0. A prequela traz batalhas com 8 personagens, construção de cidade e corrige todos os erros do original. Uma obra-prima moderna.";
  const seoKeywords = "Octopath Traveler 0 review, análise, Square Enix, JRPG, Herminia, HD-2D, Turn-based RPG, prequel";

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
    "datePublished": "2026-01-04T12:00:00-03:00"
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
              Confesso que joguei o primeiro jogo dessa franquia da Square Enix, mas ainda não tive tempo para jogar o Octopath Traveler II. Porém, como o lançamento de Octopath Traveler 0 ocorreu em dezembro passado, decidi jogá-lo antes do "2", até porque ele se passa em um local e tempo anteriores ao primeiro jogo.
            </p>
            <p className="mb-4">
              Preciso destacar dois fatores antes de entrar na review. Primeiro: a equipe responsável por esse jogo é nova dentro da Square Enix, com poucos trabalhos anteriores (focados na franquia Octopath e no Dragon Quest III HD-2D Remake). Segundo: o jogo tem, basicamente, duas partes. A primeira você consegue finalizar em cerca de 30 horas; já a segunda (que eu diria ser um conteúdo pós-game, mas que acrescenta muito à história) me levou umas 80 horas. Vale muito a pena.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/OctopathTraveler0/mecanica.png" 
              alt="Mecânicas de batalha e construção de cidade" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              O jogo mantém a base do sistema do primeiro, que eu gosto: um RPG de turno clássico, com o sistema de BP (Boost Points). A grande mudança aqui é que agora você tem <strong>8 jogadores na batalha</strong>: uma linha de frente e uma de retaguarda. Quem está atrás ainda possui várias funções, ou seja, estrategicamente o jogo evoluiu bastante só com essa adição.
            </p>
            <p className="mb-4">
              Outro ponto que reparei é a possibilidade de adicionar skills e passivas em cada personagem, permitindo combinações bem legais que não me lembro de existirem no primeiro. Sobre a dificuldade: zerei no modo normal. O único perrengue que enfrentei foram dois bosses do late game.
            </p>
            <p className="mb-4">
              Por fim, tenho que elogiar a nova mecânica de <strong>construir uma cidade</strong>. É muito legal! Dá para fazer várias decorações, evoluir construções, recrutar pessoas, cozinhar, plantar e criar animais. Isso gera alimentos que dão benefícios nas batalhas, um ponto muito positivo.
            </p>
            <p className="mb-4">
              Quase esqueci de mencionar as melhorias de qualidade de vida. Lembro que no primeiro jogo as pessoas criticavam a lentidão; aqui, colocaram um modo de velocidade x2. Além disso, graças à construção da cidade, você tem um local de treinamento para upar personagens que estão fora da sua party, resolvendo aquele problema chato de grind excessivo.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/OctopathTraveler0/grafico.png" 
              alt="Visual HD-2D e novos cenários" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              Sobre o gráfico, diria que mantiveram o padrão excelente do primeiro. É aquele estilo pixelado (HD-2D) muito bem servido, com vários detalhes e iluminação bem feita. Um detalhe crucial aqui é a adição do <strong>minimapa</strong> na tela. Antes era difícil achar locais "secretos", e agora ficou muito mais fácil se guiar.
            </p>
            <p className="mb-4">
              Os designs dos personagens nos menus são bonitos. Falando neles, você pode ter até 30 ajudantes na sua história; alguns retornam de jogos passados, mas a maioria é inédita.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90}>
            <GameImage 
              src="/assets/26/OctopathTraveler0/trilha sonora.png" 
              alt="Ambientação sonora" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              Eu diria que o jogo reaproveita algumas trilhas sonoras do primeiro (que já são boas), mas destaco as novas faixas. As músicas de batalhas e missões ficaram perfeitas. A minha preferida é o tema da história principal da vilã Herminia.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={100}>
            <GameImage 
              src="/assets/26/OctopathTraveler0/historia.png" 
              alt="Cenas da história e diálogos" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              A história do jogo é muito boa. Primeiro, vamos falar da fluidez: você pode dar Teleport para qualquer cidade visitada. O jogo consegue guiar o jogador para onde ele precisa ir, mas ao mesmo tempo dá liberdade. Cada fase tem um nível recomendado, então você pode ir para onde quiser — eu mesmo me arrisquei em locais perigosos só para pegar itens melhores.
            </p>
            <p className="mb-4">
              Um ponto legal na trama é que, neste jogo, <strong>você é o protagonista</strong>. O jogo entrega no início uma forma de definir quem você quer ser. Algumas escolhas iniciais podem mudar o rumo da sua jornada, garantindo itens que ajudam no early game ou que serão cruciais no late game.
            </p>
            <p className="mb-4">
              Falando da trama em si, é excelente. Gostei muito mais da história dos personagens aqui do que no primeiro. Além disso, entregaram vilões incríveis — e não estou falando de apenas um, são vários vilões bons.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
            <GameImage 
              src="/assets/26/OctopathTraveler0/otimizacao.png" 
              alt="Desempenho técnico" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              O grande problema aqui, infelizmente, é a falta de legendas em português. Acredito que no futuro podem surgir mods de tradução, assim como houve no Octopath Traveler 1. Sobre bugs, só tive um, que nem me fez tirar tantos pontos pois não atrapalhou muito: o jogo crashou uma vez quando tentei pular uma cena.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="É curioso pensar que, no ano passado, iniciei o ano zerando um excelente RPG (Kingdom Come: Deliverance) e aqui estou, zerando outro RPG excelente. Eu diria que esse jogo é como se fosse um Octopath Traveler 1 totalmente melhorado. Parece que os desenvolvedores conseguiram ler todas as críticas do jogo anterior e corrigir tudo. Isso é muito positivo. Acredito que a equipe que fez esse jogo (majoritariamente novatos na indústria) vai pegar projetos maiores na Square Enix no futuro."
            rating={97}
            date="04/01/2026"
          />

        </div>
      </div>
    </>
  );
};

export default OctopathTraveler0;