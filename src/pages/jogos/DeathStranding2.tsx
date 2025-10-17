// src/pages/jogos/DeathStranding2.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const DeathStranding2: React.FC = () => {
  const gameData = {
    slug: "death-stranding-2",
    title: "Death Stranding 2: On The Beach",
    subtitle: "",
    rating: 96.8,
    coverImage: "/assets/25/DS2/Death-Strading-2-Frontpage.png",
    logo: "/assets/25/DS2/logo.png",
    genre: "Simulador/Aventura",
    releaseDate: "2025-06-26",
    developer: {
      name: "Kojima Productions",
      countryFlag: "/assets/flags/japan.png",
    },
    publisher: "Sony Interactive Entertainment",
    engine: "Decima Engine",
    platforms: ["PS5"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Death Stranding 2: On The Beach - a sequência do aclamado jogo de Hideo Kojima. Análise detalhada da jogabilidade, gráficos, história e trilha sonora. Avaliação: 96.8/100.";
  const seoKeywords = "Death Stranding 2, On The Beach, Kojima Productions, Hideo Kojima, review, análise, PS5, simulador, aventura, Norman Reedus, Léa Seydoux";

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
    "datePublished": "2025-07-06T20:43:00-03:00"
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
            <p>
              Death Stranding 2: On the Beach se passa onze meses após os eventos do primeiro jogo, com Sam Bridges levando uma vida tranquila ao lado de Lou — agora uma criança — após os acontecimentos que conectaram a UCA (Unidade de Comunicações Americanas) e impediram a extinção da humanidade. No entanto, essa paz é interrompida quando Sam é contatado por Fragile para uma nova missão, que o leva a uma jornada para reconectar partes do mundo e desvendar mais mistérios sobre o Death Stranding.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={94} ratingColor="bg-green-800">
            <p className="mb-4">
              Primeiramente, Death Stranding, para mim, é mais um jogo focado em simulação do que em batalhas. Talvez eu goste dele justamente por isso — por ser mais próximo de um simulador de entregas do que de um jogo de ação. Cerca de 85% do jogo gira em torno de entregar mercadorias entre pessoas, e não de combates. Claro, há momentos de batalha, mas você pode evitá-los, inclusive fugindo dos chefes, já que este segundo jogo introduziu uma opção de "pular" esses confrontos, considerados por muitos o ponto fraco do primeiro jogo.
            </p>
            <p className="mb-4">
              A mecânica de entrega funciona muito bem. Todas as ferramentas que um ser humano precisaria para escalar montanhas ou atravessar rios estão aqui, e funcionam de forma fluida. Diferente, por exemplo, do jogo PEAK, que até fez referência a Death Stranding, mas falhou na execução das suas mecânicas.
            </p>
            <p className="mb-4">
              Um destaque positivo é o sistema colaborativo entre jogadores: é possível deixar construções, como escadas e pontes, que facilitam a vida de quem vier depois. Você pode, por exemplo, encontrar uma ponte colocada por outro jogador sobre um rio difícil de atravessar, usá-la e depois deixar um "like". Essa ideia foi incrível no primeiro jogo e continua funcionando perfeitamente aqui.
            </p>
            <p className="mb-4">Duas novas mecânicas se destacam:</p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li className="mb-2">
                <strong>1.</strong> Um sistema de habilidades, que permite desbloquear "skills" e equipar melhorias no personagem, oferecendo uma personalização interessante e inédita em relação ao primeiro jogo.
              </li>
              
              <GameImage 
                src="/assets/25/DS2/Death Strading Mec 01.jpg" 
                alt="DS2 MEC 1" 
                className="max-w-xs md:max-w-md lg:max-w-lg my-4"
              />
              
              <li className="mb-2">
                <strong>2.</strong> Uma melhoria nos veículos. No primeiro jogo, eles eram praticamente inúteis fora da estrada. Aqui, estão muito mais versáteis, até mesmo em terrenos montanhosos, o que é ótimo para quem gostou de usá-los anteriormente.
              </li>
            </ul>
            
            <p className="mb-4">
              Agora, os pontos negativos. Ainda considero o sistema de batalhas o ponto mais fraco. Embora tenha havido melhorias (especialmente em uma mecânica única que prefiro não dar spoilers), as lutas contra os inimigos "fantasmas" — os chamados EPs — continuam sendo cansativas para mim. Eles tiveram melhorias na IA, agora conseguem nos detectar com mais eficiência, mas continuam aparecendo de forma meio previsível, sempre nos mesmos lugares, o que torna possível "quebrar o sistema" e ignorá-los facilmente. Eu, por exemplo, descobri um caminho alternativo que me evitava ter que passar por eles, o que deixou essa parte mais fácil.
            </p>
            
            <GameImage 
              src="/assets/25/DS2/Death Strading Mec 02.jpg" 
              alt="DS2 MEC 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Visualmente, o jogo está impressionante. Posso dizer que, até agora, é o jogo com os melhores gráficos de 2025. Os personagens têm expressões realistas, cenários incríveis e efeitos visuais de alto nível. É um espetáculo.
            </p>
            <p className="mb-4">
              Mas o que realmente me fez dar nota máxima aqui foi a introdução das mudanças climáticas dinâmicas, que afetam diretamente o gameplay. Por exemplo:
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Chuva pode aumentar o nível dos rios.</li>
              <li>Terremotos causam deslizamentos de pedras.</li>
              <li>Pode ocorrer avalanche ou até incêndio florestal.</li>
            </ul>
            
            <p className="mb-4">
              Tudo isso influencia as entregas. Lembro de um momento em que precisei correr para não ser pego por uma tromba d'água, e só consegui escapar porque tinha construído uma estrada anteriormente. Essa mecânica adiciona um elemento estratégico que torna cada entrega única.
            </p>
            
            <GameImage 
              src="/assets/25/DS2/Death Strading 2 GRA 01.jpg" 
              alt="DS2 Grafico 1" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <GameImage 
              src="/assets/25/DS2/Death Strading 2 GRA 02.jpg" 
              alt="DS2 Grafico 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={92} ratingColor="bg-green-800">
            <p className="mb-4">
              A trilha sonora é muito boa. No entanto, a maioria das músicas não foi feita exclusivamente para o jogo, e por isso tirei alguns pontos. Ainda assim, são músicas que combinam bem com o tom da narrativa.
            </p>
            <p className="mb-4">Algumas faixas que se destacam:</p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong>Woodkid:</strong> To the Wilder, Minus Sixty One, Any Love of Any Kind (feat. Bryce Dessner).</li>
              <li><strong>CHVRCHES:</strong> Nightmares, Death Stranding, Miracle.</li>
              <li><strong>Gen Hoshino:</strong> Sayonara.</li>
              <li><strong>Daichi Miura:</strong> Horizon Dreamer, Polytope.</li>
              <li><strong>Hania Rani & Patrick Watson:</strong> Dancing with Ghosts.</li>
            </ul>
            
            <p className="mb-4">
              Como no primeiro jogo, essas músicas são inseridas em momentos específicos durante as entregas, o que torna a experiência emocionalmente marcante. O Kojima realmente sabe a hora certa de tocar uma música.
            </p>
            
            <GameImage 
              src="/assets/25/DS2/Death Strading Trilha Sonora.jpg" 
              alt="DS2 TS 1" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={99} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              A narrativa é tão envolvente quanto a do primeiro jogo, repleta de suspense, mistério e um excelente desenvolvimento de personagens — inclusive dos NPCs. Mesmo aqueles que apenas recebem entregas têm suas histórias aprofundadas conforme você conquista 5 estrelas com eles. Um dos grandes destaques é o elenco, composto por nomes consagrados do cinema e da TV:
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong>Norman Reedus</strong> (conhecido por The Walking Dead) retorna como o protagonista Sam Bridges.</li>
              <li><strong>Léa Seydoux</strong> (007: Sem Tempo para Morrer, Azul é a Cor Mais Quente) interpreta Fragile, uma figura central na trama.</li>
              <li><strong>Troy Baker</strong> (The Last of Us, Bioshock Infinite) dá vida novamente ao enigmático Higgs.</li>
              <li><strong>Elle Fanning</strong> (O Estranho que Nós Amamos, Malévola) entra como uma personagem misteriosa e importante para os novos eventos.</li>
              <li><strong>Shioli Kutsuna</strong> (Deadpool 2) também integra o novo elenco.</li>
              <li><strong>Luca Marinelli</strong> (Martin Eden, The Old Guard) traz um novo rosto marcante para o universo da franquia.</li>
              <li><strong>Alastair Duncan</strong> (Westworld, dublador em diversos jogos como God of War) participa com um papel de suporte.</li>
              <li><strong>Alissa Jung, Debra Wilson</strong> (Star Wars Jedi: Fallen Order) e <strong>Tommie Earl Jenkins</strong> (How to Get Away with Murder) também contribuem com performances sólidas.</li>
            </ul>
            
            <p className="mb-4">
              O jogo ainda conta com participações especiais de grandes nomes do cinema como:
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li><strong>George Miller</strong>, diretor de Mad Max: Estrada da Fúria;</li>
              <li><strong>Fatih Akin</strong>, de Do Outro Lado;</li>
              <li><strong>Guillermo del Toro</strong> (O Labirinto do Fauno, A Forma da Água) e</li>
              <li><strong>Nicolas Winding Refn</strong> (Drive, Demono de Neon), que reprisam suas participações do primeiro jogo, ainda que como personagens interpretados por outros atores com a aparência deles.</li>
            </ul>
            
            <p className="mb-4">
              Essa mistura de talentos do cinema com a direção criativa de Hideo Kojima torna a experiência ainda mais cinematográfica e única dentro do mundo dos games.
            </p>
            <p className="mb-4">
              O jogo ainda conta com um glossário que ajuda o jogador a entender melhor o mundo. E o final? Simplesmente espetacular. Não posso dar detalhes, mas vale muito a pena.
            </p>
            <p className="mb-4">
              O único ponto negativo aqui vai para o marketing. A equipe da Kojima Productions revelou spoilers demais nos trailers. Várias cenas que poderiam ser surpreendentes já estavam anunciadas antes do lançamento. Eu tentei evitar assistir, mas não consegui escapar de tudo. Isso prejudicou um pouco o impacto.
            </p>
            
            <GameImage 
              src="/assets/25/DS2/Death Strading Historia.jpg" 
              alt="DS2 Historia 1" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={99} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              O jogo está muito bem otimizado no Brasil, com legendas e dublagem de qualidade. No PS5, roda tranquilo a 60 FPS, sem bugs ou quedas.
            </p>
            <p className="mb-4">
              O único problema técnico que enfrentei foi relacionado às conquistas, que às vezes apareciam fora de hora e acabavam entregando spoilers do que estava por vir no próximo capítulo. Isso aconteceu algumas vezes e tirou um pouco da imersão.
            </p>
            
            <GameImage 
              src="/assets/25/DS2/Death Strading Otimizacao.jpg" 
              alt="DS2 Otimizacao" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Death Stranding 2: On the Beach é, para mim, uma clara evolução em relação ao primeiro jogo. Melhorou os veículos, as mecânicas climáticas e adicionou novos sistemas interessantes. Mas continua sendo um jogo muito específico — ou seja, se você não gostou do primeiro, dificilmente vai gostar desse. Ainda assim, para mim, é um dos top 5 jogos de 2025 até agora. Sinto que foi um projeto bem trabalhado, polido e com muito carinho por parte da Kojima Productions."
            rating={96.8}
            date="06/07/2025 20:43"
          />
        </div>
      </div>
    </>
  );
};

export default DeathStranding2;