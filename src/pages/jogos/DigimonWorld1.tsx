// src/pages/jogos/DigimonWorld1.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const DigimonWorld1: React.FC = () => {
  const gameData = {
  slug:"digimon-world-1",
  title:"Digimon World 1",
  subtitle: "Digimon World 1 é divertido, mas é possivel enjoar facilmente",
  rating: 87,
  coverImage: "/assets/25/DigimonWorld1/frontpage.png",
  logo: "/assets/25/DigimonWorld1/frontpage.png",
  genre: "RPG/Aventura",
  releaseDate: "1999-01-28",
  developer:{
    name:"Bandai",
    countryFlag:"/assets/flags/japan.png",
  },
  publisher: "Bandai",
  engine: "Não sei",
  platforms: ["PlayStation 1"],
};

  
  // Textos para SEO
    const seoDescription = "Review completo de Digimon World 1 para PlayStation 1. Um clássico da Bandai que mistura RPG e mecânica de cuidar do seu Digimon como um Tamagotchi. Descubra seus pontos fortes, falhas e curiosidades neste review detalhado.";
    const seoKeywords = "Digimon World 1, Review Digimon, PlayStation 1, Bandai, RPG, Aventura, Tamagotchi, Digimon PS1, Digimon Review, Sevens Review";


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
               Este Digimon foi um dos 5 primeiros jogos que recebi quando tive o meu primeiro PlayStation 1. Na época, era um dia muito especial: eu era criança e era Natal. Lembro que já tinha o Super Nintendo, mas não lembrava como ganhei o SN. Enfim, esse jogo também marca como o primeiro da franquia. Eu quis rejogar ele por causa do Digimon Story Time Stranger, que me deu vontade de reviver a experiência. Joguei uma versão hack de Digimon, feita para melhorar o grind de XP.
            </p>
            
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={80} >
            <p className="mb-4">
             Primeiro, vamos lá: o jogo se baseia em uma mecânica que podemos chamar de “tamagochi”, onde o jogador cuida, alimenta e treina o seu monstro — nesse caso, o seu Digimon. Na época, não existiam as versões de Digimon “Mega”. Resumindo: só é possível ir até o nível Ultimate, ou seja, seria como ter um MetalGreymon.
            </p>
            <p className="mb-4">
              Essa mecânica de cuidar do Digimon no início é muito legal mesmo e deixa o jogador bem imerso no jogo. Porém, ele apresenta um grande problema depois de cerca de 10 horas de gameplay. Que problema? Os Digimon morrem e renascem, ou seja, é um ciclo infinito que o jogador precisa enfrentar. Alguns podem achar legal, mas outros não, e isso acaba afetando a progressão do jogo.
            </p>

            <GameImage 
              src="/assets/25/DigimonWorld1/digimon mecanica.png" 
              alt="Imagem de Digimon World 1" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Se fosse igual ao Digimon Next Order, onde cada subida de nível do Tamer dava uma skill que aumentava os status de cada ovo, seria mais fácil. Mas não acontece isso. O jogo é mais cruel, e os status ganhos são bem pequenos. Além disso, há limite de tempo, então é preciso saber aproveitar quando é a hora certa de seguir a história ou não.
            </p>
            <p className="mb-4">
              No fim das contas, eu acho que a mecânica é legal, mas existe uma chance enorme de o jogador acabar enjoando por causa dos vários ciclos de Digimon nascendo e morrendo.
            </p>
            <GameImage 
              src="/assets/25/DigimonWorld1/digimon mecanica 2.png" 
              alt="Imagem de Digimon World 1" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95} >
            <p className="mb-4">
              Eu acho que, em questão de direção de arte, eu gostei muito — do cenário, dos Digimon… Tudo bem que eles têm aquele gráfico meio “hexagonal”, se não me engano, mas isso é por causa do hardware da época. Só tiro alguns pontos porque certos cenários ficaram meio ruins devido à posição da câmera. Existem até mods que arrumam isso. Quando falo da posição, é tipo um local escondido de propósito ou muito próximo, mas, pra mim, isso não tira o brilho do jogo.
            </p>
            
            <GameImage 
              src="/assets/25/DigimonWorld1/digimon grafico.png" 
              alt="Imagem de Digimon World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={85} >
            <p>
              Eu gostei muito da trilha sonora do jogo. Todos os Digimon fazem sons nas horas das vitórias, e o som do ambiente também é muito bom. Acho que é só isso — tipo, não é uma música que vou ouvir para sempre, sabe? Mas se tocar em algum lugar, vou reconhecer na hora e curtir o momento.
            </p>
            <GameImage 
              src="/assets/25/DigimonWorld1/digimon trilha sonora.png" 
              alt="Imagem de Digimon World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />         
             </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80} >
            <p className="mb-4">
              Aqui, a história é bem legal: fazer uma cidade crescer recrutando os Digimon. Porém, o único problema é que, devido à mecânica do jogo ter um grind de XP difícil, e ainda por cima vários Digimon exigirem ações específicas, é preciso saber muitos detalhes. Como assim? Tipo locais escondidos, ou fazer certas ações específicas. Sem um guia, é bem difícil zerar a história do jogo. Mas também não é obrigatório recrutar todos os Digimon. Cada vez que você recruta um, ganha algo para a cidade que pode ser bem útil para sua gameplay.
            </p>

            <GameImage 
              src="/assets/25/DigimonWorld1/digimon historia.png" 
              alt="Imagem de Digimon World 1" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95} >
            <p className="mb-4">
              O jogo é em inglês. Claro que existe versão em português, mas apenas por hack rom. Tirei alguns pontos porque, em certos locais, o personagem pode bugar durante as batalhas — tipo ficar preso no meio, e o Digimon acabar errando ataques à toa.
            </p>
            
            
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Digimon World 1 é uma ideia excelente, porém foi totalmente mal executada. Eu confirmo isso comparando com Digimon Next Order, mas esse jogo demorou muito tempo para ser lançado. Por causa das críticas ao 1, os outros jogos de Digimon mudaram de estilo — de tamagochi para RPG de turno. World 1 é divertido, mas é possível enjoar facilmente."
            rating={87}
            date="07/11/2025 22:00"
          />
        </div>
      </div>
    </>
  );
};

export default DigimonWorld1;
