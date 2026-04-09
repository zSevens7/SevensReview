// src/pages/jogos/PokemonLetsGoEevee.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const PokemonLetsGoEevee: React.FC = () => {

  const gameData = {
    slug: "pokemon-lets-go-eevee",
    title: "Pokémon Let's Go, Eevee!",
    subtitle: "Um dos jogos mais bonitos da era Switch 1 da franquia Pokémon, mas ao mesmo tempo um dos mais fracos mecanicamente.",
    rating: 71,
    coverImage: "/assets/26/PokemonLetsGoEevee/cover.png", 
    logo: "/assets/26/PokemonLetsGoEevee/frontpage.png",
    genre: "RPG",
    releaseDate: "2018-11-16",
    developer: {
        name: "Game Freak",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nintendo / The Pokémon Company",
    engine: "Proprietary",
    platforms: ["Nintendo Switch"]
  };

  // SEO
  const seoDescription = "Review de Pokémon Let's Go, Eevee!. Analisamos os belos gráficos 2.5D, mas também os problemas da mecânica de captura herdada do Pokémon GO.";
  const seoKeywords = "Pokémon Let's Go Eevee review, Pokemon Switch, Game Freak, análise Pokemon Lets Go, RPG, Kanto";

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
              Eu diria que esse jogo foi o primeiro da geração Switch da Nintendo. E não só isso: ele carregava um peso maior. Foi a primeira vez que a franquia Pokémon, nos tempos modernos, chegou ao console mais forte da Nintendo. Antes, tudo era focado em consoles portáteis, com um nível de hardware mais limitado. Mas enfim, vamos para a review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={25}>
            <GameImage 
              src="/assets/26/PokemonLetsGoEevee/mecanica.png" 
              alt="Mecânica de captura do jogo" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              Essa nota tem explicação. Desde que comecei, em 2025, a avaliar jogos, nunca dei uma nota tão baixa em “mecânica” quanto essa.
            </p>
            <p className="mb-4">
              Primeiro, o ponto positivo: a nova mecânica de capturar Pokémon usando movimento, como no Nintendo Wii, é legal. Lembra bastante o Pokémon GO (lançado em 2016 para mobile).
            </p>
            <p className="mb-4">
              Porém, aí nasce um dos maiores problemas do jogo. As batalhas continuam no estilo clássico, um RPG por turnos, onde você escolhe ações para o seu Pokémon. O problema está na captura de Pokémon selvagens: ela acontece exclusivamente nesse estilo “PokéGO”.
            </p>
            <p className="mb-4">
              Isso impacta diretamente a gameplay. A jogatina fica repetitiva, já que é basicamente só jogar Pokébola, sem o desafio de enfraquecer o Pokémon antes de capturar. Além disso, o sistema de XP é totalmente desbalanceado. No início, o jogo é extremamente fácil — tanto que nerfaram os níveis dos Pokémon do Brock e da Misty. Depois do 4º ginásio, o XP começa a ficar escasso.
            </p>
            <p className="mb-2">Você tem duas opções:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800 dark:text-gray-300">
              <li>Continuar com os Pokémon antigos e não precisar grindar.</li>
              <li>Capturar novos Pokémon (como eu fiz) e precisar upar eles separadamente, o que gera um time totalmente desbalanceado (ex: Eevee lvl 45 e Rhyhorn lvl 35).</li>
            </ul>
            <p className="mb-4">
              Outro problema: adicionaram tipos novos como o tipo Fada, o que é legal, mas removeram habilidades dos Pokémon. Por exemplo, Gengar não tem Levitate e Golem não tem Sturdy.
            </p>
            <p className="mb-4">
              Além disso, os Pokémon capturados podem virar “doces” que aumentam status — o que já é apelão. E piora: o sistema de amizade é exagerado. Se seu Pokémon estiver feliz, ele pode:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800 dark:text-gray-300">
              <li>Dar crítico com mais frequência</li>
              <li>Sobreviver com 1 HP</li>
              <li>Desviar de ataques</li>
              <li>Curar status negativos</li>
            </ul>
            <p className="mb-4 font-bold">
              É simplesmente quebrado.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <GameImage 
              src="/assets/26/PokemonLetsGoEevee/grafico.png" 
              alt="Gráficos 2.5D do jogo" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              Aqui eu diria que temos o melhor gráfico da era Nintendo Switch 1 da franquia Pokémon. O motivo é simples: o jogo usa um estilo 2.5D, diferente do 3D mais estranho dos outros jogos da época. Muita gente queria algo como um “Let’s Go Togepi”, e dá pra entender o porquê.
            </p>
            <p className="mb-4">
              A escolha de focar nos 151 Pokémon foi acertada, permitindo um acabamento gráfico melhor. A mecânica de andar com o Pokémon já existia antes, mas aqui foi aprimorada — embora nem todos tenham montaria. Mesmo assim, é muito legal, por exemplo, ser carregado por um Machamp.
            </p>
            <p className="mb-4">
              Acredito que esse cuidado gráfico fez com que muita gente sentisse falta desse estilo depois, principalmente quando vieram jogos como Sword/Shield, que têm partes visualmente mais fracas.
            </p>
            <p className="mb-4">
              Ponto negativo: o design do protagonista e do rival. Especialmente o protagonista, que pode usar roupas da Equipe Rocket sem qualquer reação dos NPCs — isso quebra um pouco a imersão.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={80}>
            <GameImage 
              src="/assets/26/PokemonLetsGoEevee/trilha sonora.png" 
              alt="Ambiente musical do jogo" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A trilha sonora é padrão Pokémon — nada muito marcante, mas também não é ruim.
            </p>
            <p className="mb-4">
              Sobre o meu time final (como mencionei antes): ele ficou bem desbalanceado. Meu Dragonair estava nível 54, enquanto o resto estava acima de 65. Isso aconteceu porque fui pegando Pokémon ao longo da jornada: comecei com Eevee, depois Psyduck, Rhyhorn e Machop no Rock Tunnel, Lapras em Saffron (montaria aquática é ele ou Gyarados), por fim, Dratini.
            </p>
            <p className="mb-4">
              Para enfrentar a Elite Four, você precisa de cerca de nível 60, e eu não quis farmar muito — preferi capturar o máximo de Pokémon possível para trocar com amigos.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={60}>
            <GameImage 
              src="/assets/26/PokemonLetsGoEevee/historia.png" 
              alt="Cenas da história do jogo" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A história não é fiel à primeira geração.
            </p>
            <p className="mb-4">
              Já começa com a mudança do rival, que agora é muito “bonzinho”. Ao mesmo tempo, o clássico Green/Gary ainda existe, mas não é seu rival principal — o que é estranho, já que ele era perfeito nesse papel.
            </p>
            <p className="mb-2">Outro ponto: o jogo facilita demais usando o Eevee/Pikachu. Eles aprendem golpes exclusivos absurdamente fortes, como:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800 dark:text-gray-300">
              <li>Um tipo de Leech Seed com 90 de dano</li>
              <li>Reflect ofensivo</li>
              <li>Light Screen ofensivo</li>
            </ul>
            <p className="mb-4">
              Isso desequilibra bastante o jogo.
            </p>
            <p className="mb-4">
              A Equipe Rocket também sofreu mudanças, com influência de Pokémon Yellow. Porém, Jessie e James usam sempre os mesmos Pokémon, o que fica repetitivo.
            </p>
            <p className="mb-2">Além disso, para enfrentar líderes de ginásio, existem “requisitos”, como:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-800 dark:text-gray-300">
              <li>Ter um Pokémon de determinado tipo</li>
              <li>Estar em certo nível</li>
              <li>Ter capturado uma quantidade específica de Pokémon</li>
            </ul>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
            <p className="mb-4">
              Aqui o jogo vai muito bem. Roda liso.
            </p>
            <p className="mb-4">
              Meu único problema é a falta de tradução para português. Hoje em dia, já não dá mais para ignorar isso.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="No fim, eu acho que Pokémon Let’s Go Eevee é um dos jogos mais desperdiçados da franquia. A ideia de trazer mecânicas do Pokémon GO para a franquia principal não funcionou tão bem. Isso acabou tornando o jogo desanimador em vários momentos. Por outro lado, o trabalho gráfico é excelente e salva bastante a experiência. Sem isso, a nota seria facilmente abaixo de 70. Se você não liga muito para mecânicas, pode gostar do jogo. Mas, no geral, eu ainda acho melhor dar uma chance para outros títulos da franquia."
            rating={71}
            date="09/04/2026"
          />

        </div>
      </div>
    </>
  );
};

export default PokemonLetsGoEevee;