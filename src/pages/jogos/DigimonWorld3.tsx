// src/pages/jogos/DigimonWorld3.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const DigimonWorld3: React.FC = () => {

  const gameData = {
    slug: "digimon-world-3",
    title: "Digimon World 3",
    subtitle: "O ápice visual da franquia no PS1 prejudicado por um ritmo excessivamente lento",
    rating: 83,
    coverImage: "/assets/26/DigimonWorld3/cover.png",
    logo: "/assets/26/DigimonWorld3/frontpage.png",
    genre: "RPG / Turno",
    releaseDate: "2002-06-06", // Data de lançamento NA baseada na Wikipedia
    developer: {
        name: "BEC / Boom Corp",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Bandai",
    engine: "Proprietary",
    platforms: ["PlayStation 1"]
  };

  // SEO
  const seoDescription = "Review de Digimon World 3. Analisamos os gráficos pré-renderizados, o sistema de batalha 1x1 e os problemas de ritmo deste clássico do PlayStation.";
  const seoKeywords = "Digimon World 3 review, Digimon PS1, RPG de turno, análise Digimon, Bandai, retro gaming, Digimon World 2003";

  // Estilo para manter o Pixel Art nítido e com borda elegante
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
        
        {/* Header com as infos da Wikipedia */}
        <ReviewHeader {...gameData} />

        <div className="mt-8">

          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              <strong>Digimon World 3</strong> foi o último jogo da franquia lançado para o console PlayStation. Sempre gostei muito dele, pois tinha um enorme potencial no quesito gráfico. Ao mesmo tempo, porém, o jogo apresenta alguns pequenos problemas que acabam se tornando grandes ao longo da jogatina.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={60}>
            <GameImage 
              src="/assets/26/DigimonWorld3/mecanica.png" 
              alt="Batalha 1x1 e interface do jogo" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A mecânica do jogo é até que boa. Talvez seja a que mais se aproxima dos RPGs de turno dentro da franquia. Em <em>Digimon World 2</em>, por exemplo, as batalhas eram em 3x3; aqui, o sistema de HP e MP é mais bem estruturado, porém as batalhas são estritamente <strong>1x1</strong>, sem a possibilidade de trocar de Digimon durante o combate.
            </p>
            <p className="mb-4">
              Além disso, é relativamente difícil obter novos Digimons. O jogo até permite acessar várias formas evoluídas, mas é necessário evoluir cada uma separadamente para aprender suas habilidades. Em resumo, o <strong>grind de XP</strong> é excessivamente necessário.
            </p>
            <p className="mb-4">
              O sistema de batalha segue o molde dos <em>Final Fantasy</em> antigos, com encontros aleatórios. É bom? Sim. Mas isso se torna bastante cansativo conforme a história avança.
            </p>
            <p className="mb-4">
              Por fim, o jogo também conta com um sistema de mini games de cartas, que é bem interessante. Comparado ao <em>Digimon World 1</em>, onde as cartas eram apenas colecionáveis, aqui elas realmente têm utilidade. No geral, é isso sobre as mecânicas do jogo.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/DigimonWorld3/grafico.png" 
              alt="Cenários isométricos detalhados do Digimon World 3" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              Em questão de gráficos, o jogo é muito bonito. O design do mundo também se destaca bastante. Nessa época, os desenvolvedores pareciam ter um prazer enorme em caprichar nos detalhes: todos os ataques possuem animações.
            </p>
            <p className="mb-4">
              Comento isso porque, mesmo em jogos mais recentes, nem sempre vemos tantas animações, principalmente em golpes menores. Porém, isso acaba se tornando uma espécie de “nêmesis” do próprio jogo. Como o grind de XP é necessário, e as batalhas possuem muitas animações, tudo acaba ficando lento demais.
            </p>
            <p className="mb-4">
              Se não fosse o modo rápido do emulador, eu provavelmente teria desistido muito antes.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90}>
            <GameImage 
              src="/assets/26/DigimonWorld3/trilha sonora.png" 
              alt="Atmosfera do jogo" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A trilha sonora do jogo é bastante agradável. Mesmo sem dublagem dos personagens, as músicas cumprem bem o papel de criar atmosfera e acompanhar a jornada.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={70}>
            <GameImage 
              src="/assets/26/DigimonWorld3/historia.png" 
              alt="Diálogos e eventos da história" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A história é interessante e tem um objetivo claro: se tornar o maior campeão do Mundo Digital enfrentando quatro líderes — lembra outro jogo, né? Sim, lembra Pokémon.
            </p>
            <p className="mb-4">
              Porém, existe uma trama por trás: nesse universo, Digimon é um jogo virtual no qual os jogadores podem entrar. Em determinado momento, algo dá errado e eles ficam presos lá dentro. O objetivo passa a ser lidar com essa situação e encontrar uma forma de sair do Mundo Digital.
            </p>
            <p className="mb-4">
              O problema está na forma como a história é conduzida. Os personagens mudam seus diálogos conforme o progresso do jogo, o que é legal. Porém, algumas missões exigem ir a um ponto extremo do mapa e depois voltar para o outro lado.
            </p>
            <p className="mb-4">
              Lembra que eu falei como as batalhas são lentas? Pois é: não existe um item tipo <strong>“Repel”</strong> para evitar encontros aleatórios. Isso torna a progressão cansativa e foi exatamente esse ponto que me desanimou. Eu estava na cidade principal e precisei voltar até o extremo sul do mapa para continuar a jornada.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
            
            <p className="mb-4">
              O jogo é todo em inglês, o que é compreensível para a época. O desconto na nota de otimização vai principalmente para a lentidão das batalhas, que prejudica bastante a experiência no longo prazo.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="No fim das contas, Digimon World 3 é um bom jogo, com muito potencial. Talvez ele não tenha sido ideal para o PlayStation 1; em um console mais potente, poderia ter rodado melhor. Vale lembrar que o PlayStation 2 já havia sido lançado há cerca de dois anos, mas aparentemente a franquia Digimon nunca recebeu um investimento tão alto. Por fim, fiquei sabendo da existência de uma hack rom que permite usar “teleporte” para se locomover mais rápido pelo mapa. Se você tiver curiosidade em experimentar o jogo hoje, recomendo procurar essa versão."
            rating={83}
            date="02/02/2026"
          />

        </div>
      </div>
    </>
  );
};

export default DigimonWorld3;