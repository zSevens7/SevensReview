// src/pages/jogos/PokemonPokopia.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const PokemonPokopia: React.FC = () => {

  const gameData = {
    slug: "pokemon-pokopia",
    title: "Pokémon Pokopia",
    subtitle: "Construção de cidade e simulação de vida em um charmoso universo Pokémon no Switch 2",
    rating: 91,
    coverImage: "/assets/26/Pokopia/cover.png", 
    logo: "/assets/26/Pokopia/frontpage.png",
    genre: "Simulação de Vida / Sandbox",
    releaseDate: "2026-03-05", // Data fictícia de lançamento comemorativo
    developer: {
        name: "Koei Tecmo / Game Freak",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nintendo / The Pokémon Company",
    engine: "Proprietary",
    platforms: ["Nintendo Switch 2"]
  };

  // SEO
  const seoDescription = "Review de Pokémon Pokopia. Um jogo estilo Animal Crossing e Dragon Quest Builders para o Nintendo Switch 2. Construa sua cidade e conviva com Pokémon.";
  const seoKeywords = "Pokémon Pokopia review, Animal Crossing Pokémon, Switch 2, Koei Tecmo, jogo cozy Pokémon, simulação, Nintendo Switch 2";

  // Estilo para manter as imagens nítidas
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
              Antes de começar a review, acho importante contextualizar a obra. A equipe responsável por <strong>Pokémon Pokopia</strong> é a mesma da Koei Tecmo que criou <em>Dragon Quest Builders 1 e 2</em>. Ou seja, eles já tinham bastante experiência em criar jogos de construção com blocos (no estilo <em>Minecraft</em>) e integrá-los perfeitamente ao universo de uma franquia clássica.
            </p>
            <p className="mb-4">
              Porém, aqui em Pokopia, o resultado final ficou muito mais próximo da estrutura de um <em>Animal Crossing</em>. Outro ponto fundamental: este é o primeiro jogo da franquia desenvolvido exclusivamente para o <strong>Nintendo Switch 2</strong>, tirando proveito total dos recursos do novo hardware.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/Pokopia/mecanica.png" 
              alt="Construção de cidade e ciclo de tempo" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              O jogo é extremamente divertido dentro da sua proposta <em>cozy</em> (termo usado para jogos relaxantes e acolhedores). Após um tutorial curto com os conceitos básicos, você fica livre para explorar. O sistema de construção e restauração da cidade é muito gratificante e não é difícil de aprender.
            </p>
            <p className="mb-4">
              O grande destaque para mim foi o retorno do <strong>ciclo de tempo real</strong> (o relógio do jogo acompanha o horário do mundo real). Essa mecânica clássica havia sido deixada de lado em títulos recentes como <em>Pokémon Scarlet</em> e <em>Legends: Z-A</em>, e faz toda a diferença aqui, pois certos Pokémon só aparecem em horários específicos, o que incentiva muito a exploração diária.
            </p>
            <p className="mb-4">
              É um jogo mecanicamente excelente, mas deixo o aviso: foi feito para quem curte tranquilidade. Fãs de ação frenética podem não se identificar tanto.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/Pokopia/grafico.png" 
              alt="Visualização aprimorada no Nintendo Switch 2" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              Como mencionei, o ganho de usar o Switch 2 não se resume apenas aos <strong>60 FPS</strong> e aos carregamentos ultrarrápidos, mas sim ao enorme salto visual. O jogo é lindíssimo e super caprichado.
            </p>
            <p className="mb-4">
              O mundo possui locais muito interessantes; você pode construir e personalizar sua própria casa, além de erguer mercados, piscinas e diversas instalações públicas. O <em>character design</em> do protagonista é super carismático e os modelos dos Pokémon continuam belíssimos, combinando perfeitamente com a estética do jogo.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80}>
            <GameImage 
              src="/assets/26/Pokopia/historia.png" 
              alt="Interação com NPCs e rotina dos Pokémon" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A narrativa claramente não é o foco principal, mas a Koei Tecmo entregou um mundo rico. O brilho da história está nas <em>quests</em> (missões secundárias) que conectam os moradores e os Pokémon.
            </p>
            <p className="mb-4">
              O mais incrível é que os NPCs — que aqui são os próprios Pokémon — possuem rotinas próprias: eles têm hora para dormir, interagem uns com os outros e até criam pequenas rivalidades. Isso dá uma sensação maravilhosa de que a cidade é viva. A nota não é maior porque a trama central é simples, mas a construção de mundo é muito competente.
            </p>
          </ReviewSection>

          {/* Trilha Sonora (Sem Imagem) */}
          <ReviewSection title="Trilha Sonora" rating={80}>
            <p className="mb-4">
              A parte sonora é uma delícia. A maior parte das músicas vem de títulos clássicos da franquia, mescladas com algumas faixas inéditas. Um detalhe muito legal é o sistema de colecionáveis sonoros: você pode explorar o mapa para encontrar "faixas perdidas" de diferentes épocas de Pokémon e tocá-las na sua cidade.
            </p>
          </ReviewSection>

          {/* Otimização (Sem Imagem) */}
          <ReviewSection title="Otimização" rating={95}>
            <p className="mb-4">
              O desempenho no Switch 2 é impecável e estável. O único grande defeito — e o motivo do desconto na nota — é a <strong>falta de localização em PT-BR</strong>. Para um jogo focado em simulação de vida, onde conversar com NPCs e entender as missões é crucial para desbloquear habilidades e criar projetos melhores, a ausência do nosso idioma faz muita falta.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Pokémon Pokopia é uma excelente aposta e traz um frescor para a franquia. Funciona quase como um Animal Crossing inserido no universo Pokémon, entregando uma experiência relaxante inesquecível. Não é à toa que, no momento desta review, o jogo já ultrapassou a impressionante marca de 2 milhões de cópias vendidas. Recomendo fortemente para quem busca um jogo casual e acolhedor; mas se você procura batalhas e ação tradicionais, talvez não seja a melhor escolha."
            rating={91}
            date="15/03/2026"
          />

        </div>
      </div>
    </>
  );
};

export default PokemonPokopia;