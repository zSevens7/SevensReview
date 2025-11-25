// src/pages/jogos/TemplateReview.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const AILA: React.FC = () => {

  const gameData = {
  slug: "aila",
  title: "A.I.L.A.",
  subtitle: "Terror psicológico futurista moldado por uma IA perturbadora",
  rating: 80,
  coverImage: "/assets/25/AILA/frontpage.png",
  logo: "/assets/25/AILA/frontpage.png",
  genre: "Terror / Survival Horror / Ficção Científica",
  releaseDate: "2025-11-25",
  developer: {
    name: "Pulsatrix Studios",
    countryFlag: "/assets/flags/brazil.png"
  },
  publisher: "Fireshine Games",
  engine: "Unreal Engine 5",  
  platforms: ["PC (Steam)", "PlayStation 5", "Xbox Series X/S"],
  description: "Em A.I.L.A., você é Samuel, um testador beta encarregado de experimentar jogos gerados por uma IA denominada A.I.L.A., que cria cenários de terror adaptados aos seus medos mais profundos. Conforme o virtual e o real começam a se misturar, a experiência se torna perturbadora e imprevisível."  
};

  // SEO — deixe em branco para editar facilmente
  const seoDescription = "Review completo de A.I.L.A., o novo jogo de terror psicológico da Pulsatrix Studios. Explore a mistura entre realidade e simulação criada pela IA A.I.L.A., gráficos impressionantes em Unreal Engine 5, história envolvente e análise sincera sobre mecânicas, combate, puzzles e desempenho.";

  const seoKeywords = "aila, aila review, aila analise, aila jogo, pulsatrix studios, jogo de terror brasileiro, terror psicologico, survival horror, unreal engine 5, review aila, sevens review, aila gameplay, aila historia, aila mecanica";


  // Schema Data estruturado para Google
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
    "datePublished": "2025-01-01T12:00:00-03:00"
  };

  return (
    <>
      <Helmet>
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

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
            <p className="mb-4">
              Eu fui uma das pessoas que ajudou na “meta” desse jogo e, por causa disso, tive acesso antecipado — diria que um dia antes. Testei o jogo e, sendo sincero, eu não sou fã de jogos de terror, mas mesmo assim dei uma chance. Joguei cerca de 30% do jogo; no momento em que a parte tensa de terror apareceu, envolvendo se esconder, eu acabei desistindo, porque realmente não gosto desse estilo. O que, por sinal, acaba sendo um ponto positivo: afinal, é um jogo de terror.
            </p>
            <p className="mb-4">
            O principal motivo de eu ter ajudado é que eu acreditava no potencial da Pulsatrix, e eu diria que conseguiu melhorar um pouco em relação ao jogo anterior.
                </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={40}>
            <p className="mb-4">
              Como falei, não sou fã de jogos de terror, e talvez por isso a nota seja baixa. Os elementos de puzzle e algumas interações são bem básicas, mas o que mais me deixou chateado foi o combate.
            </p>

            {/* Exemplo de imagem */}
            <GameImage 
              src="/assets/25/AILA/aila mecanica.png"
              alt="imagem de AILA"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">
              O jogo tem muitos aspectos influenciados por Resident Evil — até a HUD lembra bastante —, porém mecanicamente não conseguiram “copiar”. Sinceramente, eu tive ódio nos momentos de combate. Para mim, a progressão do jogo foi assim: primeiro, interações básicas de apertar botão; depois você dirige um carro que, na verdade, você não pode dirigir (isso mesmo: você fica sentado e pode pegar água, o que tirou totalmente a imersão). Em seguida vêm os combates com armas de fogo e armas brancas, e aqui a coisa fica bem ruim.
            </p>
            <p className="mb-4">
              Na última parte que joguei antes de parar, apareceu o clássico combo de terror: puzzle + se esconder + boss que te persegue.
            </p>
            <p className="mb-4">
              No fim, é um tipo de jogo que não é minha praia, mas mesmo assim eu decidi apoiar porque acredito que os caras têm potencial. No próximo tópico explico o porquê.
            </p>
            <p className="mb-4">
              Ah, e quase esqueci: senti falta de um seletor de dificuldade. Se o jogo é influenciado por Resident Evil, isso deveria estar presente — ainda mais porque incentiva novas runs.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={98}>
            <p className="mb-4">
              Aqui está o ponto mais positivo do jogo. Os devs conseguem entregar gráficos bonitos e cenários muito bem detalhados, o que é ótimo para um jogo de terror. Meu único ponto negativo é o design de um inimigo específico, que ficou muito feio — e olha que os humanos ficaram muito bem feitos, realmente bonitos.
            </p>

            <GameImage 
              src="/assets/25/AILA/aila grafico.png"
              alt="imagem gráfica"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={70}>
            <p className="mb-4">
              A trilha sonora — digo, as músicas — não é grande coisa. O ponto positivo são os sons ambientes, que para um jogo de terror são extremamente importantes.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={92}>
            <p className="mb-4">
              A trama é bem legal, abordando IA e como ela pode manipular o jogador. Além disso, o fato de o jogador poder responder algumas questões deixa a experiência mais livre. Talvez meu único ponto negativo seja que alguns puzzles podem se tornar irritantes.
            </p>
            <GameImage 
              src="/assets/25/AILA/aila historia.png"
              alt="imagem historia"
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              O jogo não apresentou bugs ou problemas para mim. Ele também vem legendado e dublado em PT-BR.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="No fim, eu acho AILA um bom jogo de terror. Ele falha bastante nos aspectos de mecânica — lembro que o antecessor tinha o mesmo problema. Se você é uma pessoa que não liga muito para mecânica, provavelmente vai gostar. Mas, se você gosta de algo no nível dos Resident Evil, pode se decepcionar.
Eu, pessoalmente, fiquei um pouco decepcionado. Acreditei que nesse aspecto eles iriam melhorar. Os gráficos estão no mesmo nível (excelentes), a história evoluiu e a trama está melhor, mas mecanicamente eu sinceramente não gostei.
"
            rating={80}
            date="25/11/2025 11:00"
          />

        </div>
      </div>
    </>
  );
};

export default AILA;
