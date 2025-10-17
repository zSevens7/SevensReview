// src/pages/jogos/OctopathTraveler1.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const OctopathTraveler1: React.FC = () => {
  const gameData = {
    slug: "octopath-traveler-1",
    title: "Octopath Traveler I",
    subtitle: "",
    rating: 95,
    coverImage: "/assets/25/octopath1/frontpage.png",
    logo: "/assets/25/octopath1/frontpage.png",
    genre: "RPG de Turno/Aventura",
    releaseDate: "2018-07-13",
    developer: {
      name: "Square Enix / Acquire",
      countryFlag: "/assets/flags/japan.png",
    },
    publisher: "Square Enix",
    engine: "Unreal Engine 4",
    platforms: ["Nintendo Switch", "Windows", "Stadia", "Xbox One", "PlayStation 4", "PlayStation 5"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Octopath Traveler I - o aclamado RPG da Square Enix com estilo HD-2D. Análise das histórias dos 8 personagens, sistema de combate e trilha sonora premiada. Avaliação: 95/100.";
  const seoKeywords = "Octopath Traveler I, Square Enix, RPG, HD-2D, Nintendo Switch, review, análise, RPG de turno, 8 personagens, Orsterra";

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
              Oito viajantes. Oito aventuras. Oito personagens para jogar. Embarque em uma jornada épica pelo vasto e maravilhoso mundo de Orsterra e conheça as histórias cativantes de cada um dos oito viajantes.
            </p>
            <p className="mb-4">
              Eu sempre fiquei de olho nesse jogo esperando uma tradução feita por fãs, e finalmente ela chegou (agradecimentos à tradução PKG). Mas por que falar dele tanto tempo depois? Porque no lançamento, em 2018, no Nintendo Switch, o jogo recebeu três indicações ao The Game Awards: direção de arte, melhor RPG e melhor trilha sonora.
            </p>
            <p>
              Ele foi financiado pela Nintendo e, depois de um ano, lançado em outras plataformas. Inclusive, serviu de inspiração para a criação de outros jogos no mesmo estilo. Mais adiante, na conclusão, vou comentar sobre isso.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Se eu tivesse que citar qual jogo mais inspirou Octopath Traveler, diria sem dúvida que foi Final Fantasy VI. É um RPG de turno que apresenta 5 tipos de ataques físicos e 6 ataques mágicos. Os inimigos possuem um sistema de "break", que funciona como uma quebra de defesa: quando ativado, eles recebem mais dano por um turno. Isso torna o jogo bem estratégico. Além disso, há efeitos adversos que enriquecem as batalhas.
            </p>

            <GameImage 
              src="/assets/25/octopath1/octopath mecanica 01.png" 
              alt="octopath mecanica 01" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />

            <p className="mb-4">
              Falando em batalhas, elas são bastante interessantes, principalmente os chefes. Muitos trocam de fraqueza de repente, outros modificam o cenário, e todos têm sprites muito bonitas.
            </p>
            <p className="mb-4">
              Outro diferencial está nas habilidades únicas de cada personagem, que se conectam tanto com a jogabilidade quanto com a história. Exemplos: o mercador consegue ganhar mais dinheiro, o ladrão pode roubar itens, o caçador pode chamar NPCs para ajudar em combate, e há personagens que podem interrogar ou até desafiar NPCs. Essas mecânicas se entrelaçam muito bem com o enredo.
            </p>

            <GameImage 
              src="/assets/25/octopath1/octopath mecanica 02.png" 
              alt="octopath mecanica 02" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />

            <p>
              O ponto negativo é o grind de XP. Só quatro personagens podem estar no time, então é necessário revezar bastante para evoluir todos. Isso pode ser cansativo no início. Além disso, as batalhas poderiam ter modos de auto-battle e velocidade acelerada, como já existe nos remasters de Final Fantasy I a VI, o que facilitaria bastante o grind.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              A direção de arte é simplesmente maravilhosa. Os personagens são muito bem feitos e os "cards" de arte são belíssimos. Minha favorita é a da caçadora.
            </p>

            <GameImage 
              src="/assets/25/octopath1/octopath grafico 01.png" 
              alt="octopath graficos 01" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />

            <p className="mb-4">
              Os cenários também são incríveis: o uso de iluminação, profundidade de campo e detalhes mostra o cuidado dos designers. Não é à toa que o jogo foi indicado a melhor direção de arte em 2018.
            </p>
            <p className="mb-4">
              Infelizmente não tenho imagens dos chefes, mas deixo aqui outro ponto positivo: a forma como eles foram apresentados transmite grandiosidade e desafio. Isso funciona muito bem em um RPG. Se tiver dúvida, recomendo pesquisar o "Redeye" — um ótimo exemplo de design.
            </p>

            <GameImage 
              src="/assets/25/octopath1/octopath grafico 02.png" 
              alt="octopath graficos 02" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              No meu último review (de Lost Soul Aside), comentei como uma trilha sonora inicial pode prender o jogador e o Lost Soul Aside não conseguiu implementar isso, porém no Octopath Traveler isso foi diferente.
            </p>
            <p className="mb-4">
              Todas as músicas são instrumentais e muito bem compostas. Eu realmente gostei de todas — a trilha é memorável e eleva a experiência.
            </p>

            <GameImage 
              src="/assets/25/octopath1/octopath trilha sonora.png" 
              alt="octopath trilha 01" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={99} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Um dos pontos fortes do jogo é a liberdade. O jogador escolhe com qual personagem começar e para onde ir, o que é raro em RPGs.
            </p>
            <p className="mb-4">
              As mecânicas de cada personagem também se conectam ao enredo: às vezes você precisa roubar ou comprar itens, em outros momentos levar NPCs para determinado lugar ou até derrotá-los em desafios. Esse casamento entre mecânica e história é genial.
            </p>

            <GameImage 
              src="/assets/25/octopath1/octopath historia 01.png" 
              alt="octopath historia 01" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />

            <p className="mb-4">
              Após a primeira missão, os personagens começam a conversar entre si, criando laços de amizade. Isso aprofunda o desenvolvimento de cada um deles. Além disso, a mecânica de interagir com NPCs para descobrir suas histórias expande ainda mais o universo. Quase todos os NPCs têm algo a acrescentar, muitas vezes dando dicas para completar side quests.
            </p>
            <p className="mb-4">
              As missões principais são boas, mas algumas histórias se destacam mais que outras. Primrose e H'aanit, por exemplo, são muito elogiadas pela comunidade. Eu gostei de todas, e achei que todas fizeram sentido dentro da proposta do jogo.
            </p>
            <p className="mb-4">
              Outro ponto memorável: algumas side quests conseguem emocionar por causa da trilha sonora, algo que me lembrou a franquia Yakuza.
            </p>

            <GameImage 
              src="/assets/25/octopath1/octopath historia 02.png" 
              alt="octopath historia 02" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />

            <p>
              O ponto negativo é a falta de organização das quests secundárias: não há registro claro das concluídas ou pendentes, e como o jogo não possui "fast travel" no início, é fácil acabar ignorando algumas.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={96} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">O jogo é leve e roda bem. Mas tirei alguns pontos por dois motivos:</p>
            
            <ol className="list-decimal list-inside mb-4 space-y-2">
              <li className="ml-4">Falta de tradução oficial em PT-BR, o que atrapalha parte do público brasileiro.</li>
              <li className="ml-4">Um bug incômodo que fazia o jogo sempre abrir na segunda tela do meu PC, sem opção de configuração manual. Isso acabou irritando bastante.</li>
            </ol>
          </ReviewSection>

          {/* Veredito Final - Customizado */}
          <div className="my-6 p-6 rounded-lg shadow-md border-4 border-yellow-400 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mx-2 sm:mx-4 md:mx-8 lg:mx-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 border-b-2 pb-2">
              Veredito Final
            </h2>
            
            <div className="mb-4">
              <p className="mb-4">
                No geral, Octopath Traveler é um RPG excelente. O estilo pixel art em HD-2D o tornou acessível e, ao mesmo tempo, único. O sucesso foi tão grande que gerou uma nova franquia para a Square Enix (já existem dois jogos posteriores) e influenciou até o remake em pixel art de Dragon Quest I a III.
              </p>
              <p className="mb-4">
                Resumindo: é um jogo perfeito dentro da proposta, que soube se reinventar no hardware do Nintendo Switch e ainda impulsionou novas estratégias para a Square Enix.
              </p>
              <p>
                Eu recomendo para qualquer fã de RPG de turno que goste de uma boa história e de um universo imersivo. Para quem não gosta do ritmo mais lento das batalhas, existem mods que aceleram o combate. Também recomendo jogar com a tradução de fãs para aproveitar ao máximo a narrativa.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
              <div className="font-bold text-xl md:text-2xl mb-2 md:mb-0">
                Nota: <span>95</span>/100
              </div>
              <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-2 md:mb-0">
                ← Voltar para Home
              </a>
              <span>Escrito por Sevens - 29/09/2025 15:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OctopathTraveler1;