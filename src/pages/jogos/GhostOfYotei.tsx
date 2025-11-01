// src/pages/jogos/GhostOfYotei.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const GhostOfYotei: React.FC = () => {
  const gameData = {
    slug: "ghost-of-yotei",
    title: "Ghost of Yōtei",
    subtitle: "O sucessor espiritual de Tsushima chega com força total",
    rating: 96,
    coverImage: "/assets/25/GhostOfYotei/yotei grafico 01.jpg",
    backgroundImage:"/assets/25/GhostOfYotei/frontpage.png",
    logo: "/assets/25/GhostOfYotei/frontpage.png",
    genre: "Hack and Slash / Aventura",
    releaseDate: "2025-10-02",
    developer: {
      name: "Sucker Punch Productions",
      countryFlag: "/assets/flags/usa.png",
    },
    publisher: "Sony Interactive Entertainment",
    engine: "Sucker Punch Engine",
    platforms: ["PlayStation 5"],
  };

  const seoDescription = "Ghost of Yōtei é um hack and slash incrível, sucessor espiritual de Ghost of Tsushima. Confira nossa análise completa, mecânicas, gráficos, trilha sonora e veredito final.";
  const seoKeywords = "Ghost of Yōtei, Ghost of Tsushima, review, PS5, Atsu, hack and slash, Hokkaido";

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
    "datePublished": "2025-10-31T15:00:00-03:00"
  };

  return (
    <>
      <Helmet>
        <title>{gameData.title} - Review Completa | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gameData.title} - Review Completa | Sevens Review`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
        <meta property="og:url" content={`https://sevensreview.com.br/jogos/${gameData.slug}`} />
        <meta property="og:site_name" content="Sevens Review" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameData.title} - Review Completa | Sevens Review`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />

        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <ReviewHeader {...gameData} />

        <div className="mt-8">
          {/* INTRODUÇÃO */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              Este jogo não exige que você tenha jogado Ghost of Tsushima. Aqui temos novos personagens e uma nova era completamente diferente. A história se passa entre 1550 e 1590, no mesmo período de Assassin’s Creed Shadows, mas em regiões diferentes — Hokkaido (Yōtei) e Kyoto (Shadows).
            </p>
          </ReviewSection>

          {/* MECÂNICA */}
          <ReviewSection title="Mecânica" rating={90} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Começando pela mecânica: o jogo mantém o mesmo estilo incrível de combate visto em Ghost of Tsushima. É um hack and slash empolgante com espadas, mas agora temos mais armas brancas e até a introdução das primeiras armas de fogo.Além disso, o protagonista conta com um companheiro lobo que ajuda nas batalhas. Algumas pessoas podem não gostar do sistema de combate sem mira travada, mas, sinceramente, isso não me incomodou — o jogo anterior também era assim.

            </p>
            <GameImage src="/assets/25/GhostOfYotei/yotei mecanica 01.jpg" alt="yotei mecânica 01" className="max-w-xs md:max-w-md lg:max-w-lg mb-4" />
            <p className="mb-4">
              Outro detalhe legal: como o jogo é para PlayStation 5, o touchpad do controle foi muito bem aproveitado. Algumas ações exigem o uso dele, como acender fogueiras ou comer algo. Claro, existe a opção de pular essas interações depois da primeira vez, o que é ótimo.
            
                </p>
                <p className="mb-4">O sucesso do Tsushima também está presente aqui: há várias missões secundárias espalhadas pelo mapa, que fortalecem o personagem e são, em geral, bem interessantes.</p>
            <GameImage src="/assets/25/GhostOfYotei/yotei mecanica 02.jpg" alt="yotei mecânica 02" className="max-w-xs md:max-w-md lg:max-w-lg mb-4" />
            <p className="mb-4">
              O único ponto negativo está no stealth, que deixa a desejar se comparado ao jogo anterior e ao AC Shadows. O sistema é bem simples — há grama alta (que você pode cortar ou incendiar), mas falta um sistema de alerta mais realista. Às vezes, você é detectado em uma área, e o resto do mapa parece não reagir. Além disso, em certas missões de resgate, é possível sair lutando contra todo mundo e o refém ainda sobrevive — ou seja, não há missões que exigem furtividade real. O jogo anterior tinha mecânicas melhores nesse aspecto, como venenos ou formas de induzir o sono nos inimigos. Aqui, temos apenas uma arma de ataque à distância.
            </p>
            <p className="mb-4">Por fim, há uma mecânica de jogo secundário, algo como Zen Coins (não lembro o nome exato). É um mini-jogo de moedas simples, mas divertido — às vezes, jogos tentam complicar demais, e aqui isso foi equilibrado de forma legal.</p>
          </ReviewSection>

          {/* GRÁFICOS */}
          <ReviewSection title="Gráficos" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              A direção de arte é fantástica. Dá pra sentir que os artistas realmente entenderam a história que estavam ajudando a contar.
Há momentos que parecem cenas roteirizadas, mas na verdade são apenas o resultado do trabalho visual impecável da equipe. Um exemplo é a imagem abaixo, ela é apresentada quando entra numa area nova do jogo.

            </p>
            <GameImage src="/assets/25/GhostOfYotei/yotei grafico 01.jpg" alt="yotei gráfico 01" className="max-w-xs md:max-w-md lg:max-w-lg mb-4" />
            <p className="mb-4">Outro ponto que merece destaque é como o jogo representa Hokkaido.
A grande diferença aqui é o tamanho e a diversidade: a ilha de Tsushima já era linda no jogo anterior, mas é bem menor em comparação com Hokkaido.
</p>
            <p className="mb-4">Mesmo assim, os desenvolvedores souberam aproveitar as áreas certas para contar a história, variando cores, biomas e temas de forma impressionante.
O resultado é um mundo visualmente rico, que mantém a beleza do jogo anterior e ainda eleva o nível artístico da série.
</p>
            <GameImage src="/assets/25/GhostOfYotei/yotei grafico 02.jpg" alt="yotei gráfico 02" className="max-w-xs md:max-w-md lg:max-w-lg mb-4" />
          </ReviewSection>

          {/* TRILHA SONORA */}
          <ReviewSection title="Trilha Sonora" rating={90} ratingColor="bg-green-800">
            <p className="mb-4">
              Confesso que não sou fã do estilo musical do jogo, mas preciso reconhecer: a trilha é excelente. Ela é bem sincronizada com os duelos, e o controle vibra conforme as batidas — um toque imersivo. Além disso, algumas músicas têm legendas, especialmente aquelas relacionadas à trama principal, o que achei um detalhe muito legal.
            </p>
            <GameImage src="/assets/25/GhostOfYotei/yotei trilha sonora.jpg" alt="yotei sonora" className="max-w-xs md:max-w-md lg:max-w-lg mb-4" />
          </ReviewSection>

          {/* HISTÓRIA */}
          <ReviewSection title="História" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Aqui está o ponto alto. Diferente de AC Shadows, que tem dois protagonistas e divide o foco entre eles, em Ghost of Yotei temos apenas um personagem principal novo — uma decisão corajosa dos desenvolvedores, já que Jin era um ótimo protagonista no jogo anterior.
            </p>
            <p className="mb-4">O novo personagem tem uma introdução muito boa, com uma história parecida com a da personagem feminina de AC Shadows (esqueci o nome dela).
A Atsu, de Yotei, é uma figura bem desenvolvida, movida por vingança e solidão. Essa narrativa mais focada torna o desenvolvimento da história muito melhor do que em AC Shadows.
</p>
            <GameImage src="/assets/25/GhostOfYotei/yotei historia.jpg" alt="yotei historia" className="max-w-xs md:max-w-md lg:max-w-lg mb-4" />
            <p className="mb-4">Até o sistema de treinamento de novas armas é bem integrado às missões secundárias, o que dá um ótimo ritmo ao jogo.</p>
            <p className="mb-4">Outro aspecto interessante: ao explorar o mapa, inimigos podem fornecer informações sobre missões principais, enquanto aliados civis indicam novas quests secundárias.
Se existisse um “terceiro gênero” para classificar o jogo, seria RPG, pois ele traz vários elementos típicos do gênero, ainda que a base continue sendo hack and slash e aventura.
</p>
            
          </ReviewSection>

          {/* OTIMIZAÇÃO */}
          <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">A otimização é excelente.
O jogo tem textos em português, nenhum bug grave e ótima performance.
Além disso, adorei o fato de as músicas com letras terem legendas grandes e visíveis.
A transição entre atos da história também é bem feita — o jogo flui naturalmente durante as caminhadas de mudança de capítulo.
</p>

          </ReviewSection>

          {/* VEREDITO FINAL */}
          <ReviewVeredito
            text="Ghost of Yotei é um jogo excelente e um sucessor à altura.
Ele entrega uma história de vingança envolvente, uma protagonista carismática (Atsu) e a mesma qualidade artística e jogabilidade que fizeram o antecessor brilhar.
Um prato cheio para quem gosta de histórias samurais, direção de arte caprichada e combate hack and slash de qualidade.
"
            rating={96}
            date="31/10/2025 15:00"
          />
        </div>
      </div>
    </>
  );
};

export default GhostOfYotei;
