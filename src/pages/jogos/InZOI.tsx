// src/pages/jogos/InZOI.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const InZOI: React.FC = () => {
  const gameData = {
    slug: "inzoi",
    title: "inZOI",
    subtitle: "",
    rating: 81,
    coverImage: "/assets/25/INZOI/inzoilogo2.png",
    logo: "/assets/25/INZOI/inzoilogo2.png",
    genre: "Simulador/Estratégia",
    releaseDate: "2025-03-28",
    developer: {
      name: "inZOI Studio",
      countryFlag: "/assets/flags/south-korea.png",
    },
    publisher: "Krafton",
    engine: "Unreal Engine 5",
    platforms: ["Microsoft Windows"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de inZOI - o simulador de vida da Krafton que compete com The Sims. Análise dos gráficos em Unreal Engine 5, mecânicas e potencial do jogo em acesso antecipado. Avaliação: 81/100.";
  const seoKeywords = "inZOI, Krafton, simulador de vida, The Sims, Unreal Engine 5, review, análise, acesso antecipado, simulador, PC";

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
    "datePublished": "2025-03-28T22:39:00-03:00"
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
              <strong>Sinopse:</strong> inZOI é um jogo de simulação da vida em que os jogadores assumem o papel de criadores, moldando o mundo conforme imaginam e testemunhando as diversas histórias que se desenrolam. Com essa experiência imersiva, queremos inspirar os jogadores a apreciar uma jornada cheia de significados a cada passo: a vida.
            </p>
            <p className="mb-4">
              Sou um grande fã de The Sims e seus simuladores. Joguei todas as edições e várias DLCs, e sempre quis melhorias para um possível The Sims 5 (afinal, The Sims 4 é um jogo de 2014). A partir de 2020, diversos projetos de simuladores de vida começaram a surgir, mas muitos foram cancelados. No entanto, pelo visto, o jogo da empresa coreana Krafton foi o primeiro a tentar competir diretamente com a EA Games.
            </p>
            <p className="mb-4">
              Atualmente, inZOI ainda está em acesso antecipado, e isso é perceptível em várias questões. Por exemplo, a imagem abaixo demonstra que ainda não há todas as refeições disponíveis. O jogo foi lançado antecipadamente para obter apoio do público e continuar seu desenvolvimento.
            </p>
            
            <GameImage 
              src="/assets/25/INZOI/inzoi3.png" 
              alt="Imagem do inZOI" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={80} ratingColor="bg-green-800">
            <p className="mb-4">
              As mecânicas de inZOI são boas, mas o jogo ainda está incompleto. Algumas novidades positivas em relação ao concorrente incluem a possibilidade de andar livremente com o próprio personagem e explorar o mundo aberto quando quiser. O jogo permite dirigir carros, utilizar ônibus/metrô ou simplesmente caminhar até o destino desejado.
            </p>
            <p className="mb-4">
              Outro ponto interessante é o design do personagem. O jogador pode criar suas próprias roupas e usar um sistema que combina IA + Canvas para gerar o próprio rosto no jogo (infelizmente, esse recurso está disponível apenas para dispositivos iOS). Caso tenha uma impressora 3D, também é possível importar objetos do mundo real para dentro do jogo.
            </p>
            <p className="mb-4">
              O sistema de karma é um diferencial: ele afeta a cidade com base nas ações do jogador. Se houver muito karma negativo, a criminalidade pode aumentar, por exemplo. No entanto, esse sistema ainda parece incompleto e poderia ser melhor explorado.
            </p>
            <p className="mb-4">
              Apesar desses aspectos positivos, há falta de conteúdo. Algumas questões precisam de melhorias, como:
            </p>
            
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Mais pratos na culinária;</li>
              <li>Um sistema aprimorado de comunicação entre os cidadãos;</li>
              <li>Possibilidade de acompanhar a rotina de trabalho dos NPCs;</li>
              <li>Melhorias na garagem;</li>
              <li>Mais objetos interativos.</li>
            </ul>
            
            <p>Ainda assim, o jogo é jogável e possui potencial para crescimento.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Este é, sem dúvida, um dos pontos fortes do jogo. inZOI utiliza a Unreal Engine 5 e apresenta visuais impressionantes. Os personagens são visualmente superiores ao concorrente. No entanto, esse motor gráfico também torna o jogo menos acessível, pois exige um hardware mais potente. Por exemplo, ele demanda no mínimo uma placa de vídeo da segunda geração da NVIDIA. No meu caso, com uma RTX 4060, consegui rodar o jogo a 60 FPS sem problemas.
            </p>
            
            <GameImage 
              src="/assets/25/INZOI/inzoi1.png" 
              alt="Imagem do inZOI" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={60} ratingColor="bg-red-300 text-black">
            <p>
              A trilha sonora é bem comum e não apresenta nada muito marcante. Há algumas músicas para tocar no rádio, mas os personagens falam apenas um dialeto fictício, sem uma linguagem compreensível.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={70} ratingColor="bg-yellow-300 text-black">
            <p className="mb-4">
              O jogo não possui uma história propriamente dita, mas podemos avaliar sua "quest" principal. Como mencionei anteriormente, ele ainda precisa de ajustes, principalmente no balanceamento do ritmo de vida. Atualmente, são apenas três dias de trabalho por semana, e nem todos os empregos exigem a presença do jogador no local, o que tira um pouco da imersão.
            </p>
            
            <GameImage 
              src="/assets/25/INZOI/inzoi2.png" 
              alt="Imagem do inZOI" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95} ratingColor="bg-yellow-400 text-black">
            <p>
              A otimização do jogo é razoável. Há suporte para legendas em português do Brasil, e ele roda de forma satisfatória na maior parte do tempo. O que reduz um pouco a nota é a incerteza sobre o futuro conteúdo do jogo. Haverá novas atualizações ou ele seguirá o modelo do The Sims, cobrando por DLCs? Os desenvolvedores garantiram que o primeiro ano de DLCs será gratuito, mas e depois?
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="inZOI é um simulador de vida promissor que tenta competir com The Sims. Seu grande diferencial são os gráficos impressionantes da Unreal Engine 5 e a maior liberdade de exploração no mundo aberto. As mecânicas trazem ideias inovadoras, como o sistema de karma e a customização avançada dos personagens. Entretanto, ele ainda está em acesso antecipado e carece de conteúdo. Aspectos como interações sociais, rotina de trabalho e variedade de itens precisam ser aprimorados para tornar a experiência mais completa. Se os desenvolvedores mantiverem o compromisso com atualizações frequentes e um modelo justo de monetização, inZOI pode se tornar um forte concorrente no gênero de simulação da vida."
            rating={81}
            date="28/03/2025 22:39"
          />
        </div>
      </div>
    </>
  );
};

export default InZOI;