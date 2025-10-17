// src/pages/jogos/DigimonStoryTimeStranger.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const DigimonStoryTimeStranger: React.FC = () => {
  const gameData = {
    slug: "digimon-story",
    title: "Digimon Story Time Stranger",
    subtitle: "",
    rating: 97,
    coverImage: "/assets/25/DigimonSTS/frontpage.png",
    logo: "/assets/25/DigimonSTS/logo.png",
    genre: "RPG de Turno/Aventura",
    releaseDate: "2025-10-02",
    developer: {
      name: "Media Vision Inc.",
      countryFlag: "/assets/flags/japan.png",
    },
    publisher: "Bandai",
    engine: "Media Vision Engine",
    platforms: ["PS5", "Xbox", "Windows"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Digimon Story Time Stranger - o mais novo RPG de Digimon da Bandai. Análise detalhada das mecânicas, gráficos, história e sistema de batalha. Avaliação: 97/100 - Excelente!";
  const seoKeywords = "Digimon Story Time Stranger, Digimon, RPG, Bandai, Media Vision, review, análise, PS5, Xbox, Windows, RPG de turno, monstros digitais";

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
    "datePublished": "2025-09-29T15:00:00-03:00"
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
              Eu já joguei vários Digimon single player, o único que não cheguei a jogar foi um lançado apenas no Japão para o Nintendo DS. Para mim, o Hacker's Memory era o meu favorito, porém a mesma empresa (acho que o produtor ou executivo saiu no meio da produção, mas a equipe vem do último Story) conseguiu entregar um jogo muito superior ao antecessor.
            </p>
            <p>
              Nesta review, irei explicar alguns pontos que considerei uma ótima melhoria. É bom dizer também que este jogo não tem nenhuma relação com outros Digimon — você pode começar por ele sem problemas.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Primeiro, explicando como funciona a gameplay: é a mesma base do anterior, um RPG de turno, com Digimons de atributos e tipos diferentes. Porém, a grande melhoria está no sistema de ganho de XP, o grande vilão de vários jogos da série. Aqui, todos os Digimon ganham XP ao mesmo tempo (até os que estão no Digibank). Além disso, o Digibank tem limite de 999 Digimon, algo que nunca era possível nos outros jogos.
            </p>
            <p className="mb-4">
              A DigiFarm também ficou bem útil para upar os Digimon, com sistemas que permitem subir de nível rapidamente usando dinheiro. E por falar em dinheiro, colocaram uma mecânica genial: se o seu Digimon for muito forte, a batalha nem começa — você vence automaticamente e ainda ganha o mesmo XP. Isso é fundamental para o grind, já que garante muito XP e dinheiro.
            </p>
            
            <GameImage 
              src="/assets/25/DigimonSTS/Digimon Mecanica 01.png" 
              alt="digimon mecanica 01" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              Outra dica legal: dá para acelerar o grind colocando o jogo na dificuldade fácil para upar mais rápido e depois voltar para o normal ou difícil. Eu fiz isso várias vezes. O sistema de talento agora vai até o nível 100 (antes era 200), o que deixou o balanceamento melhor. E o modo de velocidade vai de x1, x2, x3 até x5, tornando o jogo bem mais dinâmico.
            </p>
            <p className="mb-4">
              Além disso, o jogo trouxe algumas mecânicas legais nos mapas: em alguns momentos o estilo muda para 2D, em outros um Digimon específico sempre te acompanha nas batalhas. Também introduziram um minigame de cartas, que achei bem divertido. Ah, e quase ia esquecendo: a mecânica de montaria é perfeita! Acelera muito o farm e ainda entrega um ótimo fan service.
            </p>
            
            <GameImage 
              src="/assets/25/DigimonSTS/Digimon Mecanica 02.png" 
              alt="digimon mecanica 02" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={97} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              A primeira coisa que preciso destacar é como os gráficos dos Digimon ficaram lindos — muito detalhados mesmo. Comparando com o jogo anterior, a evolução é impressionante. Os designs dos personagens humanos também ficaram bonitos. Só tirei alguns pontos porque o design dos cenários ainda não é perfeito.
            </p>
            
            <GameImage 
              src="/assets/25/DigimonSTS/Digimon Grafico 01.png" 
              alt="Digimon grafico 01" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              Eles claramente melhoraram essa parte, mas ainda há potencial para mais. Falando em gráficos, o jogo introduziu para alguns Digimon novas animações de ataque "especiais" (acho que chamam de Super Golpe). Achei isso muito divertido e visualmente incrível.
            </p>
            
            <GameImage 
              src="/assets/25/DigimonSTS/Digimon Grafico 02.png" 
              alt="Digimon grafico 02" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={88} ratingColor="bg-green-800">
            <p className="mb-4">
              As trilhas sonoras sempre foram um ponto "fraco" nos jogos de Digimon, mas aqui foi uma ótima surpresa. Eu realmente gostei das músicas! Os desenvolvedores até conseguiram incluir músicas dos animes, o que é raríssimo — embora sejam pagas. Mesmo assim, vale a pena, porque essas músicas dificilmente aparecem em outras plataformas. E quando digo músicas dos animes, estou falando de todos os animes de Digimon, não só de um.
            </p>
            
            <GameImage 
              src="/assets/25/DigimonSTS/Digimon Trilha Sonora.png" 
              alt="digimon trilha sonora" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              A história do último Story já era boa, mas aqui eles conseguiram melhorar ainda mais a trama. Eu achei o enredo muito interessante, equilibrando bem o mundo digital e o mundo humano. Ficou perfeito.
            </p>
            <p className="mb-4">
              Outro detalhe positivo: o jogo conseguiu "limitar" o jogador de certas formas, como impedir que você use um Digimon campeão contra um vilão também campeão logo de início. Isso torna as primeiras batalhas contra chefes mais desafiadoras, diferente de outros jogos da franquia em que era fácil burlar o desafio.
            </p>
            
            <GameImage 
              src="/assets/25/DigimonSTS/Digimon Historia.png" 
              alt="digimon historia" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              As missões secundárias também foram bem-feitas. Não são cansativas e muitas delas ajudam a desenvolver a história dos personagens secundários. Além disso, o sistema é prático — você não precisa ficar andando até o local X ou Y, pois às vezes o jogo teleporta automaticamente para o ponto da missão. Isso agiliza muito a gameplay.
            </p>
            <p>
              O jogo também conta com dungeons especiais, que funcionam como missões secundárias adicionais. Ao completá-las, o jogador recebe recompensas, um Digimon e uma história para aprofundar o jogo por trás do desafio. Super recomendo fazer todas, especialmente se você gosta de desafios e quer expandir o conteúdo do jogo ao máximo.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
            <p>
              O jogo rodou perfeitamente comigo — sem travamentos, sem bugs — e ainda tem tradução em português do Brasil.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Se você procura um jogo de monstros com boa progressão e ótima história, este é perfeito para você — mesmo que não curta grind de XP ou batalhas em turno, porque ele oferece várias ferramentas para evitar o tédio do farm. Para mim, ele se tornou meu jogo favorito da série Digimon, e acredito que entrou no meu top 5 jogos do ano. Eu literalmente fiz tudo o que era possível no jogo — foram 59 horas muito bem aproveitadas. Pretendo platinar no futuro, mas minha agenda de jogos está meio cheia no momento."
            rating={97}
            date="29/09/2025 15:00"
          />
        </div>
      </div>
    </>
  );
};

export default DigimonStoryTimeStranger;