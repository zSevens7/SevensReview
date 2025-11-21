// src/pages/jogos/yugiohFM.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const YugiohFM: React.FC = () => {

  const gameData = {
    slug: "yugioh-forbidden-memories",
    title: "Yu-Gi-Oh! Forbidden Memories",
    subtitle: "Fusões, duelos rápidos e um dos clássicos mais icônicos do PS1",
    rating: 90,
    coverImage: "/assets/25/yugiohFM/frontpage.png",
    logo: "/assets/25/yugiohFM/frontpage.png",
    genre: "Card Game / Estratégia",
    releaseDate: "1999-12-09",
    developer: {
        name: "Konami Computer Entertainment Japan",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Konami",
    engine: "Proprietary PS1 engine",
    platforms: ["PlayStation"]
  };

  // SEO
  const seoDescription = "Análise completa de Yu-Gi-Oh! Forbidden Memories, clássico do PS1 conhecido pelas fusões, dificuldade elevada, duelos acelerados e mecânica única no universo Yu-Gi-Oh. Veja gráficos, história, trilha sonora e veredito final.";
  const seoKeywords = "Yu-Gi-Oh Forbidden Memories análise, yugioh fm review, yugioh ps1, forbidden memories fusões, card game ps1, review yugioh clássico, estratégia, jogo de cartas, Konami";

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
    "datePublished": "2025-11-21T12:00:00-03:00"
  };

  return (
    <>
      <Helmet>
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link
          rel="canonical"
          href={`https://sevensreview.com.br/jogos/${gameData.slug}`}
        />

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
            <p className="mb-4">Esse foi o meu primeiro Yu-Gi-Oh jogado e, também, considero ele como um dos melhores da era Playstation 1. Irei explicar mais pra frente o que se trata o jogo.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={95}>
            <p className="mb-4">Bem, começando na mecânica, ele apresenta uma mecânica bem simples de batalha. Como assim? Não tem tantas regras de “sacrifícios”, etc. Então você pode invocar qualquer monstro na linha de frente, tornando cartas com ATK mais forte mais roubadas, mas isso também meio que “faz o jogo ser mais rápido”. Não sei como explicar; eu diria que o Forbidden Memories tem um estilo de gameplay único.</p>

            {/* Exemplo de imagem (pode excluir se quiser) */}
            <GameImage 
              src="/assets/25/yugiohFM/yugioh mecanica 01.png" 
              alt="Imagem do jogo"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">Outra mecânica boa é a mecânica de fusões, que pode fazer o jogador testar as novas fusões, anotar como faz a fusão certa ou fazer fusão na sorte — também ajuda. Eu acho que esse aqui é o principal ponto positivo do jogo; deixou o jogo muito “criativo” para o jogador, tornando infinitas possibilidades na hora do duelo. O único problema aqui é que, querendo ou não, o jogo tem uma maneira “exata” de zerar. Como assim? Eu diria que o sistema balanceia mais para as cartas Dragões, principalmente duas → Twin Headed Dragon (tem ATK de 2800 e é fácil fazer as fusões dele) e Meteor B. Dragon (é fácil* obtendo nos duelos). Outros tipos, não que sejam ruins, mas esses tipos são bem fortes.</p>

            <GameImage 
              src="/assets/25/yugiohFM/yugioh mecanica 02.png" 
              alt="Imagem do jogo"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">Falando do asterisco, eu diria que o jogo faz o jogador jogar um “free duel”, onde o jogador pode jogar contra os personagens e não dar game over. Como assim game over? Bem, na história, se o jogador perder uma batalha, é game over. Por isso, tem que lembrar de salvar sempre na campanha, mas no free duel não precisa. E lá existe uma forma de dropar mais cartas, com dois estilos: ganhar rápido ou ganhar com o inimigo sem cartas. Alguns podem achar isso chato; eu mesmo não usei mod nem nada e consegui dois Meteor com Jono 2nd em 300 wins. Algumas pessoas podem achar isso chato, mas hoje em dia a comunidade do FM é tão grande que existem vários “mods” de hackrom do Yu-Gi-Oh FM. Alguns aumentam os drops dos duelos — tipo, ao invés de uma carta, são 5 ou 15 — outros mudam qual inimigo pode dropar quais cartas, etc.</p>

          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <p className="mb-4">No quesito gráfico, eu diria que o jogo usou um background e as figuras dos personagens do anime bem legais, parecendo como se fosse um jogo “visual novel”. Ao mesmo tempo, as cartas são bonitas, tem um menu bem legal para um jogo de Playstation 1 feito em 1999, e digo mais ainda: tinha uma mecânica escondida onde, quando você batalha contra o inimigo apertando o quadrado, faz uma animação do monstro. Tudo bem que não é bonito, mas para aquela época, uma figura 3D era muito massa. E digo que tem uma “biblioteca” de cartas, onde o jogador pode colecionar e ver essas imagens sempre que quiser. Eram 720 cartas por aí.</p>

            {/* Exemplo de imagem */}
            <GameImage 
              src="/assets/25/yugiohFM/yugioh grafico 01.png" 
              alt="Imagem do jogo"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <GameImage 
              src="/assets/25/yugiohFM/yugioh grafico 02.png" 
              alt="Imagem do jogo"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={85}>
            <p className="mb-4">A trilha sonora é legal; talvez eu esteja sendo um pouco nostálgico, mas cada duelo na campanha tem uma música diferente. É uma música instrumental, e é bem legal.</p>
            <GameImage 
              src="/assets/25/yugiohFM/yugioh trilha sonora.png" 
              alt="Imagem do jogo"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80}>
            <p className="mb-4">A história do jogo é legal. O que eu gosto dela aqui é como ela se separa em 3 partes, e eu diria que cada parte tem um nível de dificuldade proposto ao jogador. Por exemplo, na 1ª parte, o jogador pode ir de boas com fusões aleatórias, mas na 2ª parte ele precisa já ter um conhecimento prévio de como cada fusão funciona. E na 3ª parte, precisa farmar no free duel as cartas de “booster” de ataque e cartas melhores para zerar o jogo. Isso é bem aplicado no jogo. Só não dou nota maior porque o jogo não é muito focado em história, e sim em mecânica.</p>
            <GameImage 
              src="/assets/25/yugiohFM/yugioh historia.png" 
              alt="Imagem do jogo"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
            <p className="mb-4">O jogo não é traduzido, mas pela época era normal isso, ainda mais que esse jogo demorou uns 2 anos para lançar no ocidente. Eu acho que o principal problema aqui é que no jogo tem um glitch que não foi intencional, mas é porque na época eles queriam que os jogadores pudessem trocar as cartas, sabe? Duelar entre si. Porém, a galera descobriu um glitch que você poderia meio que copiar um dado do memory card no outro, ou seja, você estaria clonando as cartas. Isso acaba facilitando o jogo, mas é opcional.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Por fim, o jogo é muito divertido. É um jogo sem muitas regras, que faz qualquer novato na franquia de Yu-Gi-Oh jogar e gostar. Eu acho que o principal ponto positivo do jogo são as fusões e descobrir qual monstro consegue fundir bem."
            rating={90}
            date="21/11/2025 22:00"
          />

        </div>
      </div>
    </>
  );
};

export default YugiohFM;
