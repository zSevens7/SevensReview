// src/pages/jogos/SuperBattleGolf.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const SuperBattleGolf: React.FC = () => {

  const gameData = {
    slug: "super-battle-golf",
    title: "Super Battle Golf",
    subtitle: "Um Mario Kart de golfe multiplayer que dá certo e é muito divertido.",
    rating: 81,
    coverImage: "/assets/26/SuperBattleGolf/cover.png", 
    logo: "/assets/26/SuperBattleGolf/frontpage.png",
    genre: "Esportes / Arcade",
    releaseDate: "2026-02-19", 
    developer: {
        name: "Brimstone",
        countryFlag: "/assets/flags/sweden.png"
    },
    publisher: "Oro Interactive",
    engine: "Unity",
    platforms: ["Windows", "Nintendo Switch 2", "PlayStation 5", "Xbox Series X/S"]
  };

  // SEO
  const seoDescription = "Review de Super Battle Golf. Avaliamos a mistura caótica e divertida de golfe com elementos de Mario Kart, ideal para jogar com os amigos.";
  const seoKeywords = "Super Battle Golf review, análise Super Battle Golf, Brimstone, Oro Interactive, jogo multiplayer, Mario Kart de golfe";

  // Estilo padrão para imagens de jogos modernos (sem o pixelated)
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
              Vou ser bem sincero: só joguei esse jogo por causa dos lobbies do Sinxplaysbr, um streamer que faz live na Twitch/Kick todo dia.
            </p>
            <p className="mb-4">
              Bem, geralmente eu não gosto de fazer review desse tipo de jogo porque fico com preguiça, já que o foco deles é puramente multiplayer. Mas decidi fazer um review deste aqui.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={95}>
            <GameImage 
              src="/assets/26/SuperBattleGolf/mecanica.png" 
              alt="Mecânicas caóticas e uso de itens no jogo" 
              className={imageClass}
            />
            <p className="mb-4">
              Falar da mecânica desse jogo é meio... como posso dizer? Jogos de golfe existem há bastante tempo. Lembro que lá pelos anos 2000 já tinha vários — não vou lembrar o nome agora — mas onde quero chegar é: jogos de golfe não são revolucionários e, ao mesmo tempo, são relativamente fáceis de fazer, porque não exigem tanta complexidade mecânica.
            </p>
            <p className="mb-4">
              Porém, ao longo dos anos, jogos multiplayer foram surgindo e novas ideias também. Vou citar alguns exemplos, como Golf It e Golf With Your Friends, que são jogos de golfe voltados para jogar com amigos, simulando algo mais próximo da vida real.
            </p>
            <p className="mb-4">
              A diferença aqui é que essa equipe — apesar dos chefes serem da Suécia — é um time indie espalhado pelo mundo. E eu diria que eles tiveram uma excelente ideia. É aí que está o brilho do jogo: ele sai da mesmice. Enquanto outros títulos do gênero são praticamente iguais entre si, este traz uma proposta diferente. Além de bater a bola, você controla um personagem andando pelo mapa e pode pegar itens para ajudar ou atrapalhar os outros jogadores — quase como um Mario Kart de golfe.
            </p>
            <p className="mb-4">
              Isso torna a experiência caótica e imprevisível, podendo ser tanto divertida quanto irritante, principalmente jogando com amigos. E, assim como em Mario Kart, o jogo funciona muito melhor com bastante gente. Com poucos jogadores, as partidas ficam meio “vazias” e perdem intensidade. Já com mais de 12 players, o ritmo acelera, o tempo para agir diminui e o caos aumenta — o que deixa tudo muito mais divertido.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={80}>
            <GameImage 
              src="/assets/26/SuperBattleGolf/grafico.png" 
              alt="Design dos mapas e customização dos personagens" 
              className={imageClass}
            />
            <p className="mb-4">
              Os gráficos não são nada impressionantes, mas também não são feios. Aqui o destaque vai para o level design.
            </p>
            <p className="mb-4">
              Os mapas são bem feitos: alguns são muito fáceis, enquanto outros parecem feitos para irritar o jogador de propósito. Lembro de três em especial — deserto, costa e gelo — onde o buraco final é tão pequeno que qualquer erro te joga para fora do mapa, fazendo você voltar bastante.
            </p>
            <p className="mb-4">
              O jogo também possui roupas para o personagem. Algumas são desbloqueadas por conquistas, outras já vêm disponíveis desde o início. Nada é pago com dinheiro real — você ganha moeda jogando, e não é difícil de farmar, até jogando sozinho.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={60}>
            <p className="mb-4">
              A trilha sonora é boa, mas não é o foco do jogo. Cumpre bem o seu papel, então achei justo dar essa nota.
            </p>
          </ReviewSection>

          {/* História (Longevidade) */}
          <ReviewSection title="História" rating={70}>
            <GameImage 
              src="/assets/26/SuperBattleGolf/historia.png" 
              alt="Atualizações de conteúdo e novos mapas" 
              className={imageClass}
            />
            <p className="mb-4">
              Claro, jogos arcade assim não têm história, mas existe um ponto importante aqui: a longevidade do jogo depende da quantidade de mapas.
            </p>
            <p className="mb-4">
              No início, o jogo tinha cerca de 27 mapas (9 por bioma: floresta, praia e deserto). Com o tempo, os desenvolvedores foram atualizando o conteúdo: primeiro veio o bioma de gelo com mais 9 mapas, além de novos itens e mecânicas como vento, e depois ainda foram adicionados novos mapas nos biomas já existentes.
            </p>
            <p className="mb-4">
              Hoje, o jogo conta com cerca de 45 mapas no total, o que já traz uma boa variedade de gameplay. Mesmo assim, ainda existe um problema: o jogo não tem oficina ou criação de mapas pela comunidade.
            </p>
            <p className="mb-4">
              Isso é um ponto negativo, já que concorrentes como Golf It e Golf With Your Friends têm. Isso alivia o trabalho dos desenvolvedores e aumenta a vida útil do jogo. Claro, mapas da comunidade nem sempre são bons, mas ajudam a manter o jogo vivo. Sem isso, os desenvolvedores vão precisar lançar atualizações constantes.
            </p>
            <p className="mb-4">
              No futuro, talvez adicionem DLCs de mapas ou skins — e eu recomendaria focar em skins, já que são opcionais e permitem eventos. Resumindo: no começo é muito divertido, mas pode ficar repetitivo com o tempo.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              Aqui não tem muito o que falar: o jogo roda muito bem.
            </p>
            <p className="mb-4">
              Tem tradução para PT-BR e suporte a 17 idiomas. Provavelmente isso se deve ao fato da equipe ser internacional, o que ajudou bastante nesse aspecto.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="A nota pode parecer baixa? Na verdade, não. É uma nota alta para um jogo multiplayer indie. Super Battle Golf trouxe uma proposta interessante: misturar golfe com elementos de Mario Kart, criando partidas caóticas e muito divertidas — especialmente com amigos. Os principais problemas, na minha opinião, são a necessidade de novos mapas no futuro e o fato de que o jogo depende muito de jogar com amigos para ser realmente divertido. Dá para jogar sozinho? Dá. Mas não é a mesma experiência."
            rating={81}
            date="05/05/2026"
          />

        </div>
      </div>
    </>
  );
};

export default SuperBattleGolf;