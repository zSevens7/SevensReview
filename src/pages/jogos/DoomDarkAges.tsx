// src/pages/jogos/DoomDarkAges.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const DoomDarkAges: React.FC = () => {
  const gameData = {
    slug: "doom-dark-ages",
    title: "Doom: The Dark Ages",
    subtitle: "",
    rating: 90,
    coverImage: "/assets/25/DoomTDA/DoomFront.png",
    logo: "/assets/25/DoomTDA/frontpage.png",
    genre: "FPS/Arcade",
    releaseDate: "2025-05-15",
    developer: {
      name: "id Software",
      countryFlag: "/assets/flags/usa.png",
    },
    publisher: "Bethesda Softworks",
    platforms: ["PS5", "Xbox Series X/S", "PC"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Doom: The Dark Ages - a prequela dos aclamados DOOM (2016) e DOOM Eternal. Análise detalhada da jogabilidade frenética, gráficos e trilha sonora épica. Avaliação: 90/100.";
  const seoKeywords = "Doom The Dark Ages, Doom, id Software, Bethesda, FPS, first person shooter, review, análise, PS5, Xbox, PC, Doom Slayer";

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
    "datePublished": "2025-05-23T14:30:00-03:00"
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
              DOOM: The Dark Ages é a prequela dos aclamados DOOM (2016) e DOOM Eternal, trazendo uma história épica e cinematográfica, digna da lenda do DOOM Slayer. Neste terceiro título da série moderna, os jogadores assumem novamente o papel do Slayer em uma guerra medieval sombria e brutal contra as forças do Inferno.
            </p>
            <p>
              Esse foi meu primeiro DOOM jogado. Apesar de a franquia ser um clássico dos games, DOOM, junto de Half-Life, é considerado um dos pais dos jogos de tiro em primeira pessoa (FPS – First Person Shooter). Para quem não conhece essa franquia, essa é uma ótima oportunidade. Então, bora para a review!
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Aqui está, sem dúvida, o ponto forte do jogo. A mecânica é extremamente divertida e viciante. Atirar, correr e esmagar demônios nunca foi tão satisfatório. E o mais legal: o jogo tem aquele jeitão "arcade", ou seja, não foca em realismo extremo. É mirar, atirar e se divertir, sem complicações.
            </p>
            <p className="mb-4">
              O jogo também entrega sequências de ação bem variadas. Não sei como era nos outros DOOM, mas aqui fomos surpreendidos com uma batalha de mecha (robô gigante) e até uma missão de caça com um dragão caçando aeronaves dos demônios. Isso deixa a gameplay dinâmica, evitando que ela se torne repetitiva.
            </p>
            
            <GameImage 
              src="/assets/25/DoomTDA/Doom Mec 01.png" 
              alt="Doom mecânica" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              Outro ponto interessante é a nova mecânica de contra-ataque com o escudo, que não é obrigatória, mas é bem divertida de usar. Joguei na dificuldade 3 de 6 e consegui usar tranquilamente, deixando os combates mais estratégicos.
            </p>
            <p className="mb-4">
              Além disso, o sistema de dificuldade é extremamente personalizável. Você pode, por exemplo, deixar o jogo mais difícil, mas desabilitar certos recursos, ou torná-lo mais veloz. Isso agrada tanto quem busca desafio quanto quem só quer se divertir sem estresse. Falarei mais sobre os mapas na seção de gráficos.
            </p>
            
            <GameImage 
              src="/assets/25/DoomTDA/Doom Mec 02.png" 
              alt="Doom mecânica" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={85} ratingColor="bg-green-800">
            <p className="mb-4">
              Eu gostei muito da direção de arte do jogo. Os cenários são incríveis, seja no próprio Inferno, que realmente parece um inferno, ou em outras áreas que exploramos ao longo da campanha. Uma das cenas do início que me chamou atenção sobre esse assunto é quando foi mostrado para gente um templo de cultista secreto em uma vila de maykrs.
            </p>
            
            <GameImage 
              src="/assets/25/DoomTDA/Doom Gra 01.png" 
              alt="Doom gráficos" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              O motivo de não dar nota máxima aqui são os mapas. Alguns são bem lineares, com passagens secretas que rendem recompensas como arquivos de história, skins, bonecos colecionáveis e moedas para upgrades. Isso incentiva a exploração. O problema aparece nas fases abertas, que podem ser um pouco cansativas. Você precisa explorar cada canto se quiser pegar tudo, e às vezes, mesmo com o auxílio do mapa, isso se torna meio maçante.
            </p>
            
            <GameImage 
              src="/assets/25/DoomTDA/Doom Gra 02.png" 
              alt="Doom gráficos" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p>
              Por outro lado, os designs dos personagens e dos inimigos estão excelentes. Cada inimigo tem características bem distintas, não há sensação de repetição. Alguns são versões aprimoradas, como os que possuem escudos ou mais vida, mas continuam bem diferenciados.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={85} ratingColor="bg-green-800">
            <p className="mb-4">
              Apesar de não ser fã de rock pesado, preciso admitir: a trilha sonora é simplesmente perfeita para o clima do jogo. Ela dá aquele gás nas batalhas, deixando tudo mais frenético e empolgante.
            </p>
            <p className="mb-4">Recomendo muito escutar algumas faixas fora do jogo, como:</p>
            
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🔹</span>
                "From the Ashes"
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🔹</span>
                "When the Shadow First Lengthened"
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🔹</span>
                "Unchained Predator"
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">🔹</span>
                "Unholy Siege"
              </li>
            </ul>
            
            <p>Vale muito a pena!</p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80} ratingColor="bg-green-800">
            <p className="mb-4">
              Aqui está talvez o ponto mais fraco, mas é algo já esperado em jogos FPS focados em ação. Mesmo assim, DOOM: The Dark Ages consegue entregar uma narrativa sólida, que explica o motivo de estarmos naquele universo e qual é o propósito do DOOM Slayer nessa jornada.
            </p>
            
            <GameImage 
              src="/assets/25/DoomTDA/Doom Historia 01.png" 
              alt="Doom história" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p>
              E lembra das recompensas escondidas que citei na parte dos gráficos? Pois bem, elas são fundamentais para quem deseja entender melhor a lore do jogo. São os famosos "dossiês", que trazem informações detalhadas sobre locais, inimigos e personagens. Se você curte se aprofundar no universo dos jogos, não pode deixar passar esses coletáveis.
            </p>
            
            <GameImage 
              src="/assets/25/DoomTDA/Doom Historia 02.png" 
              alt="Doom história" 
              className="max-w-xs md:max-w-md lg:max-w-lg mt-4"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Preciso destacar o quanto o jogo é acessível. Além da já citada customização da dificuldade, ele oferece opções como aumento do tamanho dos textos, ajustes visuais e outros recursos de acessibilidade.
            </p>
            
            <GameImage 
              src="/assets/25/DoomTDA/Doom Acess 01.png" 
              alt="Doom otimização" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              Outro ponto muito positivo: o jogo conta com dublagem em português do Brasil (PT-BR), algo extremamente bem-vindo, especialmente em jogos frenéticos onde nem sempre dá tempo de ler legendas no meio da ação.
            </p>
            <p>
              Sobre bugs, encontrei apenas dois, relacionados a um inimigo voador que ficava preso em certos locais. Nada que estragasse a experiência. E caso precisasse recarregar, o jogo sempre retornava ao último checkpoint, nunca ao início da fase.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="DOOM: The Dark Ages me surpreendeu de forma muito positiva. É um jogo que entrega exatamente o que promete: ação insana, gameplay divertida e viciante, trilha sonora empolgante e um universo rico para quem quiser explorar além dos tiros. Mesmo sendo meu primeiro DOOM, foi impossível não me apaixonar pelo jogo. Ele consegue equilibrar muito bem combates intensos, mecânicas inovadoras e momentos épicos, como as batalhas de mecha e caçadas aéreas. Claro que tem alguns pontos que poderiam melhorar, como a questão dos mapas abertos que acabam sendo cansativos em certos momentos. A história também não é o ponto mais forte, mas cumpre seu papel. Se você gosta de jogos de ação, FPS ou simplesmente quer sentir a adrenalina de esmagar demônios com muita brutalidade, DOOM: The Dark Ages é mais do que recomendado."
            rating={90}
            date="23/05/2025 14:30"
          />
        </div>
      </div>
    </>
  );
};

export default DoomDarkAges;