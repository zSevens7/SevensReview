// src/pages/jogos/TopShop.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const TopShop: React.FC = () => {

  const gameData = {
    slug: "top-shop",
    title: "Top Shop (Board Game)",
    subtitle: "Um 'Monopoly' vertical esquecido no tempo que merecia mais reconhecimento",
    rating: 75,
    coverImage: "/assets/26/TopShop/frontpage.png", 
    logo: "/assets/26/TopShop/frontpage.png",
    genre: "Tabuleiro / Estratégia",
    releaseDate: "1998-02-26", // Data original (JP - Tenant Wars)
    developer: {
        name: "KID",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "KID (JP) / Agetec (NA)",
    engine: "Proprietary",
    platforms: ["PlayStation 1", "Sega Saturn"]
  };

  // SEO
  const seoDescription = "Review de Top Shop (Tenant Wars). Um jogo de tabuleiro estilo Monopoly para PS1 lançado em 1998 que divertiu gerações com sua mecânica de lojas.";
  const seoKeywords = "Top Shop review, Tenant Wars, PlayStation 1, PS1, Board Game, Monopoly, KID, Retro Gaming";

  // Estilo para manter o Pixel Art nítido
  const pixelatedStyle = { imageRendering: 'pixelated' as const };
  const imageClass = "w-4/5 max-w-3xl h-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-md mb-6";

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
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        
        <ReviewHeader {...gameData} />

        <div className="mt-8">

          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              Este é um jogo super desconhecido pelo qual tenho um carinho especial. Lembro-me de quando ganhei meu PlayStation 1: ele veio acompanhado de apenas 5 jogos, entre eles um <em>Winning Eleven</em>, <em>Digimon World 1</em> e este <strong>Top Shop</strong>.
            </p>
            <p className="mb-4">
              Na época, não dei muita importância para ele e só fui descobrir a verdadeira diversão que ele proporcionava já no final da vida útil do console. Nesta análise, vou relembrar essa pérola escondida.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={85}>
            <GameImage 
              src="/assets/26/TopShop/mecanica.png" 
              alt="Tabuleiro vertical do Top Shop" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              Se tivesse que descrever esse jogo, diria que ele nasceu na época errada. O conceito é literalmente um tabuleiro de "Monopoly" (Banco Imobiliário), só que vertical em vez de quadrado. Ele possui um sistema excelente de fundir lojas e evoluir os produtos, tornando o aluguel mais caro para os adversários.
            </p>
            <p className="mb-4">
              Digo que ele nasceu na época errada porque, hoje em dia, com a facilidade do multiplayer online, esse jogo faria muito mais sucesso. Na era do PS1, reunir 4 pessoas era difícil (exigia o acessório <em>Multitap</em>), e o multiplayer local era dominado por futebol ou luta. Já os jogos de tabuleiro físicos ainda eram os reis da estratégia econômica, deixando o <em>Top Shop</em> meio sem lugar.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={70}>
            <GameImage 
              src="/assets/26/TopShop/grafico.png" 
              alt="Evolução visual das lojas" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              O estilo visual é mediano: não é feio, mas também não impressiona. O charme ficava por conta das artes das lojas. Eu achava muito legal o detalhe visual de ver a ilustração da loja mudando conforme você fazia os <em>upgrades</em> e expandia seu negócio.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={70}>
            <p className="mb-4">
              Cada mapa possui sua própria música tema. Não são trilhas ruins ou chatas, na verdade têm boa qualidade. Podem até ficar um pouco repetitivas depois de muitas rodadas, mas cumprem bem o papel de ambientar a partida.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={50}>
            <GameImage 
              src="/assets/26/TopShop/historia.png" 
              alt="Tabuleiro vertical do Top Shop" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A história é bem fraca e, sinceramente, não faz muito sentido, servindo apenas de pretexto para jogar com os amigos.
            </p>
            <p className="mb-4">
              O ponto que realmente me incomodou foi a falta de variedade nas condições de vitória. O jogo termina sempre quando alguém atinge uma quantia específica de dinheiro. Poderia haver modos diferentes, como vitória por dominação de área (conquistar uma parte inteira do shopping) ou por limite de rodadas, o que daria mais dinâmica às partidas.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              Jogos dessa época costumavam vir bem finalizados. Não presenciei bugs visuais ou travamentos. Claro, não podemos exigir legendas em PT-BR para um jogo de nicho dos anos 90, então a nota é máxima pela estabilidade e polimento técnico.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Esta análise foi uma forma de relembrar meus tempos de infância. É um jogo divertido com uma ideia que, até hoje, não entendo por que nenhuma grande empresa tentou modernizar. Talvez tenham medo de que os jogadores atuais não gostem de gerenciamento de economia? Não sei, mas acredito que se uma versão moderna fosse lançada hoje, faria muito mais sucesso do que antigamente."
            rating={75}
            date="04/02/2026"
          />

        </div>
      </div>
    </>
  );
};

export default TopShop;