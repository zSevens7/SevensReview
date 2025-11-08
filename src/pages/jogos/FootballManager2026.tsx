// src/pages/jogos/FootballManager2026.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const FootballManager2026: React.FC = () => {
  const gameData = {
    slug: "football-manager-2026",
    title: "Football Manager 2026",
    subtitle: "Melhor FM tactico e o pior FM de interface",
    rating: 73,
    coverImage: "/assets/25/FM2026/coverpage.png",
    logo: "/assets/25/FM2026/frontpage.png",
    genre: "Esporte / Simulação",
    releaseDate: "2025-11-04",
    developer: {
        name: "Sports Interactive",
        countryFlag: "/assets/flags/uk.png",
    },
    publisher: "SEGA",
    engine: "Unity",
    platforms: ["PC", "Mac", "Playstation 5", "Xbox", "Nintendo Switch 2", "Mobile( via Netflix e Apple)"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Football Manager 2026 — o FM mais tático da franquia, mas com a pior interface até hoje. Análise detalhada das mecânicas, gráficos, trilha sonora e otimização. Nota final: 73/100.";
  const seoKeywords = "Football Manager 2026, FM26, Sports Interactive, SEGA, simulador de futebol, gestão esportiva, review, análise, PC, Mac";

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
        <meta property="og:image" content="https://sevensreview.com.br/assets/25/FM2026/fm grafico.png" />
        <meta name="twitter:image" content="https://sevensreview.com.br/assets/25/FM2026/fm grafico.png" />
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
              Assim como nos títulos anteriores, Football Manager 2026 desafia os jogadores a gerenciar um clube de futebol profissional, cuidando de táticas, transferências, treinamentos e finanças.[4] O jogo rodará no motor Unity, uma mudança em relação ao motor personalizado usado nos títulos anteriores. Fonte: Wikipédia – descrição do que é o Football Manager.
            </p>
            <p className="mb-4">
              Vamos começar a review. Antes de começar a falar dos aspectos da análise, é importante dizer que os desenvolvedores deste jogo tiveram cerca de 2 a 3 anos de desenvolvimento para lançá-lo, pois mudaram a engine da franquia e tiveram que cancelar o FM25. Enfim, vamos com a review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Em questão de mecânica, eu acho que podemos dizer que o jogo evoluiu muito taticamente. Por quê? Porque agora há estratégias com posse de bola e sem posse de bola. Isso é genial, pois as escalações agora aumentaram muito o nível tático — e isso é como se fosse o principal produto da franquia. Eu ainda esqueci de falar que o jogo introdiziu ligas femininas, porém eu não tive tempo para joga-las, mas pelo o que eu vi, acho que sao apenas 7 a 9 paises que tem liga feminina(Brasil não esta listado em relação liga feminina).
            </p>
            <p className="mb-4">
              Porém, o único defeito da mecânica é que, infelizmente, a questão gráfica do jogo acaba afetando a mecânica e outras partes do jogo. Irei abordar isso agora.
            </p>

            <GameImage 
              src="/assets/25/FM2026/fm mecanica.png" 
              alt="Imagem de Football Manager 2026" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={50} ratingColor="bg-red-800">
            <p className="mb-4">
              Enfim, chegamos ao polêmico gráfico. Eu diria que as partidas, os jogadores etc. melhoraram sim — o gráfico está bonito. Porém, por que essa nota tão negativa? É porque a nova interface ficou horrível, mas tão horrível que acabou afetando tanto a mecânica quanto a experiência geral do jogo.
            </p>
            <p className="mb-4">
              Eu tive a impressão de que fizeram o jogo baseado no FM Touch e só importaram para o PC, pois sinto muita semelhança com o Windows 8, que foi criado com intenção voltada para tablets (apps).
            </p>
            <p className="mb-4">
              A notícia boa é que a comunidade de Football Manager é muito forte, e tenho certeza de que daqui a algum tempo alguém vai fazer um mod que vai melhorar essa interface feia e grotesca.
            </p>

            <GameImage 
              src="/assets/25/FM2026/fm grafico.png" 
              alt="Imagem de Football Manager 2026" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={65} ratingColor="bg-red-300 text-black">
            <p>
              Em questão de trilha sonora, o jogo conseguiu melhorar um pouco em relação ao seu antecessor. Porém, ainda não há músicas — o que seria legal na hora do menu.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={75} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              A história do jogo é focada em gerenciar o seu clube, o que torna o jogo interessante. Porém, como citei lá em cima, a questão gráfica infelizmente afeta essa parte. Está muito chato ver como são os treinos, as mensagens de relatórios e as informações dos campeonatos.
            </p>

            <GameImage 
              src="/assets/25/FM2026/fm historia.png" 
              alt="Imagem de Football Manager 2026" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={80} ratingColor="bg-green-800">
            <p className="mb-4">
              Em questão de otimização, sempre vou criticar o fato de não ser possível comprar o FM oficialmente aqui no Brasil, sendo necessário sempre fazer um “malabarismo” para ter o produto em mãos.
            </p>
            <p className="mb-4">
              Outra parte importante é que, na minha jogatina, o jogo apresentou alguns bugs visuais na interface: às vezes não mostrava o Xg e, em outras ocasiões, crashava por causa disso.
            </p>
            <GameImage 
              src="/assets/25/FM2026/fm otimizacao.png" 
              alt="Imagem de Football Manager 2026" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Por fim, eu acho que o jogo evoluiu taticamente, mas infelizmente erraram na decisão da interface. Ela é o grande divisor deste jogo: se você gostou da interface, tenho certeza de que vai gostar do jogo; porém, se não gostou, vai ter que esperar algum mod que a deixe mais bonita e organizada para jogadores de PC."
            rating={73}
            date="04/11/2025 12:00"
          />
        </div>
      </div>
    </>
  );
};

export default FootballManager2026;
