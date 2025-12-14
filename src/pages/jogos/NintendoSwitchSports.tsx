// src/pages/jogos/NintendoSwitchSports.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const NintendoSwitchSports: React.FC = () => {

  const gameData = {
    slug: "nintendo-switch-sports",
    title: "Nintendo Switch Sports",
    subtitle: "Diversão garantida em grupo, mas solitária no offline",
    rating: 79,
    coverImage: "/assets/25/NintendoSports/frontpage.png",
    logo: "/assets/25/NintendoSports/frontpage.png",
    genre: "Esporte / Simulação / Party Game",
    releaseDate: "2022-04-29",
    developer: {
        name: "Nintendo EPD",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nintendo",
    engine: "Proprietary Engine",
    platforms: ["Nintendo Switch"]
  };

  // SEO
  const seoDescription = "Review completa de Nintendo Switch Sports. Analisamos os novos esportes, a mecânica do Joy-Con, o modo online e a falta de progressão no single-player.";
  const seoKeywords = "Nintendo Switch Sports review, análise, Wii Sports, Joy-Con, Leg Strap, Futebol, Vôlei, Boliche, Party Game, Nintendo";

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
    "datePublished": "2025-12-14T12:00:00-03:00"
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
              Este jogo é uma “sequência” do clássico Wii Sports. São vários minigames de esportes que o jogador pode jogar tanto sozinho quanto com amigos.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <p className="mb-4">
              Falando em mecânicas, irei citar todos os esportes aqui. Alguns são novos, e vou começar listando do melhor até o pior.
            </p>
            <p className="mb-4">
              Primeiro, o meu favorito é o <strong>Tênis</strong>; ele funciona perfeitamente. Existe ainda uma versão de <strong>Badminton</strong>, que é parecida com o tênis. É importante destacar que, para muitos esportes, só é preciso usar um Joy-Con (que é como chamam os controles do Switch), ou seja, o jogo funciona perfeitamente para jogar com a galera e a família.
            </p>
            <p className="mb-4">
              O terceiro bom esporte é o <strong>Boliche</strong>. Ele funciona da mesma forma que o antigo, sem grandes mudanças.
            </p>

            <GameImage 
              src="/assets/25/NintendoSports/Mecanica.png" 
              alt="Gameplay dos diversos esportes disponíveis" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">
              Aí vêm os esportes coletivos. Como comprei a mídia física do jogo, veio um acessório chamado <em>Leg Strap</em> (cinta de perna), que serve para imitar o movimento de chutar a bola. Ou seja, o modo <strong>Futebol</strong> é bem legal e tem um estilo meio “Rocket League”. Pena que esse Leg Strap só tem uso no futebol.
            </p>
            <p className="mb-4">
              Ao mesmo tempo, temos o <strong>Vôlei</strong> e o <strong>Basquete</strong>. Desses dois, acho que o Vôlei é bem servido, porque os comandos de atacar e defender são bem feitos. Já o Basquete, acho que poderia ser melhor mecanicamente.
            </p>
            <p className="mb-4">
              Por fim, os últimos. Temos o <strong>Golfe</strong>, que é bem clássico da série — só não gostei de como é feita a progressão dele (explico melhor na parte de História). E o pior para mim é o <strong>Chambara</strong>. É um esporte que entrou no lugar do Boxe? Não sei, mas o Boxe era um dos meus favoritos no Nintendo Wii e, sinceramente, não gostei desse modo novo; o estilo de regra é meio chato.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90}>
            <p className="mb-4">
              Em questão de gráficos, acho o jogo bonito. Tem cenários bastante detalhados que criam uma atmosfera bem amigável. Além disso, você pode customizar o seu personagem com vários detalhes: qual raquete ou taco usar, a roupa, etc. Alguns dos itens você é obrigado a pegar jogando online, mas não é muito complicado para “farmar”.
            </p>
            <GameImage 
              src="/assets/25/NintendoSports/Grafico.png" 
              alt="Customização dos avatares no Nintendo Switch Sports" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={65}>
            <p className="mb-4">
              A trilha sonora do jogo é bem simples, nada a comentar aqui.
            </p>
            <GameImage 
              src="/assets/25/NintendoSports/Trilha Sonora.png" 
              alt="Customização dos avatares no Nintendo Switch Sports" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={50}>
            <p className="mb-4">
              Dei ponto negativo aqui, pois notei que muitas partidas são feitas para serem jogadas no “modo rápido”. Como assim? Por exemplo: a partida de futebol, se não me engano, dura 3 minutos; o vôlei é apenas até 5 pontos. Talvez os únicos que não foram tão alterados sejam o Boliche e o Tênis, mas o resto consiste em jogos muito rápidos.
            </p>
            <p className="mb-4">
              Sinceramente, não gostei disso; seria melhor se tivesse a opção de customizar a partida. Ao mesmo tempo, o modo offline é bem ruim. São apenas 3 dificuldades e, sendo que no Wii existia um sistema de “level de skill” onde você evoluía quanto mais jogava (ou seja, tinha progressão), aqui não tem nada disso. Acho que eles focaram muito no online com partidas rápidas, mas o modo offline/local poderia ser mais customizável.
            </p>
            <GameImage 
              src="/assets/25/NintendoSports/Historia.png" 
              alt="Customização dos avatares no Nintendo Switch Sports" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              O jogo é traduzido e dublado em português, o que é uma coisa rara para os jogos da Nintendo, mas deve ser porque o jogo tem pouco texto. Além disso, tem um tutorial muito bom, tanto explicativo via texto quanto visual.
            </p>
            <GameImage 
              src="/assets/25/NintendoSports/Otimizacao.png" 
              alt="Customização dos avatares no Nintendo Switch Sports" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Por fim, acho que o jogo é excelente para jogar de vez em quando, principalmente em família ou com amigos. O grande problema é a falta de progressão offline para propor ao jogador um desafio que o faça continuar jogando."
            rating={79}
            date="14/12/2025"
          />

        </div>
      </div>
    </>
  );
};

export default NintendoSwitchSports;