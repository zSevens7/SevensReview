// src/pages/jogos/DemonSlayer2.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const DemonSlayer2: React.FC = () => {
  const gameData = {
    slug: "demon-slayer-2",
    title: "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles 2",
    subtitle: "",
    rating: 87,
    coverImage: "/assets/25/DemonSlayer2/DS2 CAPA.png",
    logo: "/assets/25/DemonSlayer2/frontpage.png",
    genre: "Luta/Aventura",
    releaseDate: "2025-08-05",
    developer: {
      name: "CyberConnect2",
      countryFlag: "/assets/flags/japan.png",
    },
    publisher: "Sega",
    engine: "Unreal Engine",
    platforms: ["PS4", "PS5", "Xbox One", "Xbox X/S", "Nintendo Switch", "Steam"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles 2. Análise detalhada do jogo de luta baseado no anime, com avaliação de mecânicas, gráficos, história e otimização. Nota: 87/100.";
  const seoKeywords = "Demon Slayer 2, Kimetsu no Yaiba, Hinokami Chronicles 2, CyberConnect2, Sega, review, jogo de luta, anime, Tanjiro Kamado, PS5, Xbox, Nintendo Switch";

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
    "datePublished": "2025-08-02T16:00:00-03:00"
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
              "Destrua demônios com o poder dos laços forjados! A batalha de Tanjiro Kamado se repete..." Na Steam; só um detalhe: joguei esse jogo porque dei ele de presente para um amigo(que faz parte da minha família na steam), e como ele não pôde jogar na estreia, decidi dar uma chance para experimentar. Gostei do jogo, e vou falar mais sobre ele.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={88} ratingColor="bg-green-800">
            <p className="mb-4">
              O jogo apresenta uma mecânica legal de batalha, nada complicada, e a engine funciona bem. O que quero dizer com isso? As movimentações dos personagens fluem bem. Só acho que faltou mais variedade nos poderes especiais dos personagens.
            </p>
            <p className="mb-4">
              Meu único ponto negativo é mais relacionado à franquia, que vou abordar na seção de história. Também senti falta de mais modos de gameplay. O jogo traz um modo história que conta a trama principal, algumas partes extras do primeiro jogo, um modo de batalha contra máquina ou player local, e o modo online, que não é minha área e eu não testei. Tem ainda um modo de resistência para batalhar até perder, mas senti falta de um modo torneio.
            </p>
            
            <GameImage 
              src="/assets/25/DemonSlayer2/DS2 MECANICA.png" 
              alt="DS2 Mecanica" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={94} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Esse é o ponto forte do anime Demon Slayer ou Kimetsu no Yaiba. Na verdade, ele fez sucesso principalmente pela animação, e o jogo consegue entregar um visual muito bonito. Algumas cenas do modo história são realmente lindas. O único problema é que o foco gráfico está totalmente nos personagens e batalhas, enquanto o mundo em si ficou meio aquém. Mesmo assim, dou uma nota alta, porque o brilho intenso das batalhas ofusca essa parte ruim, e na imagem abaixo é um exemplo.
            </p>
            
            <GameImage 
              src="/assets/25/DemonSlayer2/DS2 GRAFICO.png" 
              alt="DS2 Grafico" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={75} ratingColor="bg-yellow-300 text-black">
            <p>
              Inicialmente, eu daria nota 70, mas no modo história tem umas trilhas legais, aparecendo no momento certo. Não é nada demais, mas também não é ruim. Fiquei até surpreso, pois esperava algo pior.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={83} ratingColor="bg-green-800">
            <p className="mb-4">
              Aqui vem uma crítica pesada, mas ao mesmo tempo dou nota 83. O ponto positivo é que o modo história é legal e mantém você focado na trama. Porém, existe uma sidequest secundária bastante chata, que parece existir só para quem quer platinar o jogo.
            </p>
            <p className="mb-4">
              Minha crítica maior é para a obra original: o grande problema do Demon Slayer é que ela é muito curta, o que gera poucos personagens, principalmente vilões. Algumas sidequests precisam usar personagens figurantes (a imagem abaixo mostra o número total de personagens — só 30, e o resto são versões do mesmo personagem com estilos diferentes).
            </p>
            
            <GameImage 
              src="/assets/25/DemonSlayer2/DS2 HISTORIA.png" 
              alt="DS2 Historia" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p>
              Nem sei quem são algumas pessoas, o que mostra a falta de personagens no universo da franquia — e isso é culpa do autor. Resumindo, o jogo cobre só dois arcos e um "bônus". Os arcos são legais e bem feitos, mas senti falta de mais conteúdo. Para você ter uma ideia, conheço toda a história do Demon Slayer porque li o mangá, e sei que só faltam dois arcos para o fim da trama. Fico me perguntando: será que vão lançar DLCs? Ou outro jogo, tipo Demon Slayer 3? Não sei, porque não sou fã da franquia, só joguei porque o jogo estava na biblioteca da família na Steam.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95} ratingColor="bg-yellow-400 text-black">
            <p>
              Por fim, a otimização está ótima: o jogo não tem bugs e roda liso. Mas tem um ponto negativo: não entendo por que ele não tem legenda em português do Brasil, ainda mais que a distribuidora é a SEGA e o anime fez sucesso no Brasil.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="O jogo é ótimo. Fiquei com inveja porque queria um jogo 'mecanicamente' bom e 'bonito' assim para One Piece e nunca vejo (só vejo aqueles de hack 'n' slash com vários bonecos ao mesmo tempo ou com história nada inventiva — só uma curiosidade, meu jogo favorito de One Piece é o One Piece Grand Battle do DS). O que quero dizer é que a CyberConnect2 colocou muito carinho nesse jogo. Se você é fã da franquia, vale a pena comprar. Se não é, não sei se vale — zerei o modo história em 7 horas, e o jogo, neste exato momento, custa 270 reais. Faltam personagens (são uns 30, e outros são versões diferentes do mesmo personagem). Como disse na parte da história, o problema não é do jogo, mas da franquia, que tem um universo limitado."
            rating={87}
            date="02/08/2025 16:00"
          />
        </div>
      </div>
    </>
  );
};

export default DemonSlayer2;