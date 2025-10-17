// src/pages/jogos/FootballLifeSimulator.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const FootballLifeSimulator: React.FC = () => {
  const gameData = {
    slug: "football-life-simulator",
    title: "Football Life Simulator",
    subtitle: "",
    rating: 73,
    coverImage: "/assets/25/FootballLSimulator/footballLSfront.png",
    logo: "/assets/25/FootballLSimulator/footballLSfront.png",
    genre: "Simulador/Esporte",
    releaseDate: "2025-04-11",
    developer: {
      name: "Ludu Arts",
      countryFlag: "/assets/flags/turkey.png",
    },
    publisher: "Devotion Interactive",
    engine: "",
    platforms: ["Microsoft Windows"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Football Life Simulator - jogo indie que simula a vida completa de um jogador de futebol. Análise da jogabilidade inovadora, gráficos e sistema de IA para conversas. Avaliação: 73/100.";
  const seoKeywords = "Football Life Simulator, Ludu Arts, jogo indie, simulador de futebol, futebol, esporte, simulador de vida, review, análise, Windows";

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
    "datePublished": "2025-04-16T22:24:00-03:00"
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

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        {/* Header */}
        <ReviewHeader {...gameData} />

        {/* Conteúdo da Review */}
        <div className="mt-8">
          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              <strong>Sinopse:</strong> Viva a vida de um jogador de futebol profissional tanto dentro quanto fora de campo. Treine, jogue partidas, gerencie sua vida social, suba na carreira e gaste o dinheiro que conquistar. Decore sua casa com luxo enquanto administra relacionamentos e finanças.
            </p>
            <p>
              Vale destacar que este é o primeiro jogo da Ludu Arts, um estúdio indie da Turquia. Isso já torna o projeto corajoso e interessante, especialmente por ser uma estreia com uma proposta tão ambiciosa.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={75} ratingColor="bg-yellow-300 text-black">
            <p className="mb-4">
              Football Life Simulator traz uma proposta que eu nunca tinha visto em outros jogos de futebol: o foco na vida fora das quatro linhas. E isso, ele entrega bem. É possível visitar locais da cidade, explorar a casa do jogador, treinar tanto em campo quanto na academia. E com a recente atualização, não é mais necessário repetir essas tarefas todo dia — agora é possível montar uma agenda e focar mais nas partidas.
            </p>
            <p className="mb-4">
              Por ser um jogo indie e ainda estar em desenvolvimento, há limitações. A gameplay é restrita à posição de atacante, com apenas quatro atributos disponíveis (chute, técnica, drible e posicionamento). Durante os jogos, você depende de quick time events e de certa sorte para que algo relevante aconteça na sua gameplay, o que pode ser frustrante às vezes. Ainda assim, como simulação da vida de um jogador, o jogo acerta.
            </p>
            <p className="mb-4">
              Outro ponto positivo foi a presença de clubes brasileiros, com nomes fictícios para evitar problemas com direitos autorais — joguei com o Volta Redonda. O único detalhe que achei confuso foi o sistema da Série B: são 16 times e apenas 3 sobem, o que talvez indique pouco conhecimento sobre o calendário brasileiro.
            </p>
            
            <GameImage 
              src="/assets/25/FootballLsimulator/footballLS01.png" 
              alt="Imagem do football life simulator" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={65} ratingColor="bg-red-300 text-black">
            <p className="mb-4">
              Os gráficos não são feios, mas também não impressionam. Estão no meio-termo, o que é compreensível para um estúdio indie. Um ponto que poderia ser melhorado é a repetição dos ambientes — estádios, centros de treino e afins acabam sendo os mesmos em várias situações, o que prejudica um pouco a imersão.
            </p>
            
            <GameImage 
              src="/assets/25/FootballLsimulator/footballLS02.png" 
              alt="Imagem de football life simulator" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={65} ratingColor="bg-red-300 text-black">
            <p className="mb-4">
              A trilha sonora é simples e pouco marcante, mas há um detalhe que merece elogio: os cantos da torcida foram dublados em português, com gritos bem característicos. Provavelmente foi usada inteligência artificial nessa parte, e o resultado ficou legal — especialmente para um jogo indie que busca se adaptar à cultura do país escolhido para o campeonato.
            </p>
            
            <GameImage 
              src="/assets/25/FootballLsimulator/footballLS03.png" 
              alt="Imagem de football life simulator" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80} ratingColor="bg-green-800">
            <p className="mb-4">
              A história tem potencial. O uso de IA nas conversas com NPCs é um diferencial interessante — você pode interagir livremente e até sugerir falas. Isso traz um nível de imersão que poucos jogos têm. No entanto, ainda faltam elementos para deixar tudo mais vivo: mais caminhos de carreira, notícias dinâmicas, repercussão das entrevistas após os jogos... A base está feita, mas precisa ser expandida.
            </p>
            
            <GameImage 
              src="/assets/25/FootballLsimulator/footballLS04.png" 
              alt="Imagem de football life simulator" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={80} ratingColor="bg-green-800">
            <p>
              O jogo é leve, tem tradução para o português e rodou sem problemas graves no meu PC. Porém, alguns bugs apareceram — o principal aconteceu após a última atualização, quando coloquei a semana para simular e acabei pulando o jogo da rodada. Como essa era a principal novidade da atualização, senti falta de testes mais rigorosos. Por estar aprendendo desenvolvimento de jogos, sei que esse tipo de bug pode ser evitado com mais atenção.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Football Life Simulator é uma estreia promissora da Ludu Arts, um estúdio indie da Turquia que se propôs a inovar na forma como jogamos futebol virtual. Ao invés de focar só nos 90 minutos em campo, ele traz a experiência completa da vida de um jogador — treinos, rotina, vida social e carreira. Apesar das limitações técnicas, bugs pontuais e gráficos medianos, a base é sólida. A mecânica diferenciada e o uso criativo de IA para simular interações e localização mostram que há paixão e boas ideias por trás do projeto. Se os desenvolvedores continuarem nesse ritmo, ouvindo o feedback da comunidade e expandindo as opções de carreira e gameplay, esse jogo pode se tornar um dos grandes nomes no gênero de simulação esportiva. Para um primeiro jogo indie, é um chute inicial muito bem dado."
            rating={73}
            date="16/04/2025 22:24"
          />
        </div>
      </div>
    </>
  );
};

export default FootballLifeSimulator;