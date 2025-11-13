// src/pages/jogos/DigimonWorld1.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const Dispatch: React.FC = () => {
  const gameData = {
  slug: "dispatch",
  title: "Dispatch",
  subtitle: "Um jogo de heroi interativo muito divertido.",
  rating: 93,
  coverImage: "/assets/25/Dispatch/frontpage.png",
  logo: "/assets/25/Dispatch/frontpage.png",
  genre: "Interativo / Estratégia",
  releaseDate: "2025-10-22",
  developer: {
    name: "AdHoc Studio",
    countryFlag: "/assets/flags/usa.png"
  },
  publisher: "AdHoc Studio",
  engine: "Unreal Engine 4",
  platforms: ["Windows", "PlayStation 5"]
};

  
  // Textos para SEO
    const seoDescription = "Review completo de Dispatch, o jogo interativo de super-heróis da AdHoc Studio. Analisamos mecânica, história, gráficos, trilha sonora e mais com nota final 93/100.";
    const seoKeywords = "Dispatch review, Dispatch jogo, Dispatch análise, Dispatch game, AdHoc Studio, jogo interativo, super-heróis, análise de jogos, Sevens Review";


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
              “Dispatch é uma comédia sobre o ambiente de trabalho de super-heróis onde suas escolhas importam. Gerencie uma equipe de heróis e planeje quem enviar para as emergências, tudo enquanto equilibra a política do escritório, os relacionamentos pessoais e sua própria jornada para se tornar um herói.” (Descrição da Steam) 
            </p>
            
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={87} >
            <p className="mb-4">
               Em questão de mecânicas, eu acho que o principal ponto negativo do jogo é que as interações são muito básicas. Como assim básicas? Bem, é apenas clicar ou arrastar o mouse. Eu não sou um jogador experiente em jogos interativos, mas senti falta de um pouco mais de criatividade nessas partes — e também de consequências mais marcantes para o jogador.
            </p>

            <GameImage 
              src="/assets/25/Dispatch/dispatch mecanica 01.png" 
              alt="Imagem de Dispatch " 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
               Tirando isso, o ponto principal de mecânica do jogo, que eu mais gostei, é o sistema de estratégia: enviar os heróis para os locais certos, levando em conta sorte e pontos de atributos (elementos típicos de RPG de mesa). Eu curti muito essa mecânica! É uma pena que não exista um modo infinito disso, sabe? Sinto que há um potencial enorme para uma minigameplay fora da história principal, que seria bem divertida de jogar.
            </p>
            <GameImage 
              src="/assets/25/Dispatch/dispatch mecanica 02.png" 
              alt="Imagem de Dispatch " 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
               Além disso, o jogo também possui uma mecânica de “hackear”, e eu acho bem legal como ela é aplicada — dá um toque de desafio a mais para o jogador.
            </p>

          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100} >
            <p className="mb-4">
               Em questão de gráficos, o jogo está muito bonito. As artes são bem-feitas e visualmente agradáveis. Quem comprou a versão Deluxe ainda tem acesso aos rascunhos de design dos desenvolvedores e a algumas HQs que exploram mais a história dos personagens. Os menus de gameplay também são bem caprichados.
            </p>
            <GameImage 
              src="/assets/25/Dispatch/dispatch grafico.png" 
              alt="Imagem de Dispatch" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            
            
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={85} >
            
            <p className="mb-4">
             A trilha sonora é boa. Em certos momentos, a equipe de desenvolvimento consegue encontrar a música “exata” para cada cena. Eu diria que o ponto forte são as faixas mais divertidas, com um tom alegre ou de festa — elas realmente se destacam. As outras músicas, no entanto, acabam ficando um pouco atrás em comparação.
            </p>
            
              
           
             </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={95} >
            <p className="mb-4">
             A história é o ponto forte desses desenvolvedores, que são veteranos da Telltale Games (se não me engano). A narrativa consegue prender bem o jogador na trama. Não posso dar spoilers, mas diria que, por conta das poucas opções de interação, o jogo acaba perdendo um pouco de impacto narrativo — principalmente na punição por escolhas erradas, que quase não existe.
            </p>

            <GameImage 
              src="/assets/25/Dispatch/dispatch historia.png" 
              alt="Imagem de Dispatch " 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
             Por exemplo, em Detroit: Become Human, um erro pode levar à morte de um personagem. É desse tipo de consequência que estou falando: aqui, senti falta disso.
            </p>

          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={98} >
            <p className="mb-4">
             O jogo veio legendado em português do Brasil, mas percebi que em algumas partes — especialmente no minigame de despachante de heróis — uma dublagem faria diferença. Nessas cenas, os personagens conversam entre si enquanto você precisa focar no minigame, e ler as legendas acaba poluindo a tela (a HUD fica feia).
            </p>
            <GameImage 
              src="/assets/25/Dispatch/dispatch otimizacao.png" 
              alt="Imagem de Dispatch" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
             Fora isso, o jogo é bem acessível e permite ajustar o tamanho das legendas, o que é um ponto positivo.
            </p>
            
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="No meu veredito final, eu acho que Dispatch é um excelente jogo — e possivelmente o início de uma nova franquia. Acredito que no futuro possa surgir até um minigame independente focado na parte de despachante de heróis.
O jogo entrega uma história envolvente e gráficos muito bons. É uma ótima pedida para quem gosta de jogos interativos, e mesmo que você não seja muito fã do gênero, como eu, pode acabar se surpreendendo positivamente.
"
            rating={93}
            date="13/11/2025 19:00"
          />
        </div>
      </div>
    </>
  );
};

export default Dispatch;
