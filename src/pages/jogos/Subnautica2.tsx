// src/pages/jogos/Subnautica2.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const Subnautica2: React.FC = () => {

  const gameData = {
    slug: "subnautica-2",
    title: "Subnautica 2",
    subtitle: "Depois de 8 anos após lançar o Subnautica 1, finalmente temos um Subnautica coop, que apresenta um mundo muito bonito.",
    rating: 85,
    coverImage: "/assets/26/Subnautica2/cover.png", 
    logo: "/assets/26/Subnautica2/frontpage.png",
    genre: "Sobrevivência / Ação e Aventura",
    releaseDate: "2026-05-16", // Data de acesso antecipado
    developer: {
        name: "Unknown Worlds Entertainment",
        countryFlag: "/assets/flags/usa.png" // Unknown Worlds é americana
    },
    publisher: "Krafton",
    engine: "Unreal Engine 5",
    platforms: ["Microsoft Windows", "Xbox Series X/S"]
  };

  // SEO
  const seoDescription = "Review de Subnautica 2 em acesso antecipado. Avaliamos a chegada do tão aguardado modo cooperativo, os gráficos na Unreal Engine 5 e o novo mundo alienígena.";
  const seoKeywords = "Subnautica 2 review, análise Subnautica 2, Unknown Worlds, Krafton, Unreal Engine 5, jogo de sobrevivência, coop, multiplayer";

  // Estilo padrão para imagens de jogos modernos (alta resolução)
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
              Aqui na introdução, eu tenho que falar sobre dois assuntos diferentes. O primeiro é: se você jogou o Subnautica 1, nesse exato momento do jogo (maio de 2026), você possivelmente não vai gostar tanto dele. O motivo? Ouvi a opinião de duas pessoas que jogaram e disseram: “É o mesmo jogo, só que com modo multiplayer”, e eles não mostraram muito interesse em jogar agora.
            </p>
            <p className="mb-4">
              Porém, no meu caso, eu não joguei o Subnautica 1 na época. Eu não queria jogar porque era singleplayer, e eu mesmo achava um desperdício não ter coop. Mesmo assim, achei a experiência desse jogo muito legal, e vou explicar isso com mais detalhes.
            </p>
            <p className="mb-4">
              Outro assunto que precisa ser comentado é que esse jogo teve apoio financeiro da empresa coreana Krafton. Também aconteceram várias brigas entre os criadores do Subnautica 1 e a empresa. É só procurar na internet: teve discussão envolvendo bônus de metas caso o jogo fosse um sucesso no mercado, além de rumores de demissões por parte do CEO. E, pelo que parece, o jogo realmente foi um sucesso, já que na Steam atingiu um pico de aproximadamente 350 mil jogadores simultâneos, um número bastante alto.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <GameImage 
              src="/assets/26/Subnautica2/mecanica.png" 
              alt="Mecânicas de sobrevivência e cooperativo" 
              className={imageClass}
            />
            <p className="mb-4">
              Vamos lá, o jogo é focado em sobrevivência. Você cai no meio de um planeta praticamente do nada, sendo 99% coberto por água, e só tem um lifepod para te guiar e ajudar. É basicamente a mesma proposta do Subnautica 1, mas agora em um ambiente totalmente novo.
            </p>
            <p className="mb-4">
              Você, como jogador, precisa aprender a lidar com esse mundo, descobrir o que é hostil ou não, o que pode comer, como construir equipamentos e sobreviver. Isso é justamente o que torna o jogo divertido.
            </p>
            <p className="mb-4">
              Tem algumas coisas que achei muito legais, como o jogo seguir uma lógica de física relacionada à pressão atmosférica. Quanto mais fundo você vai, mais difícil fica respirar sem equipamentos ou submarinos. Esses detalhes deixam o desafio muito mais interessante.
            </p>
            <p className="mb-4">
              Agora sobre o aspecto cooperativo, eu ainda senti que faltam alguns detalhes para melhorar. Pelo que li no “road map” do jogo, eles pretendem evoluir bastante isso no futuro. No momento desta review, ainda existem poucas mecânicas realmente focadas no coop.
            </p>
            <p className="mb-4">
              Outro fator que achei ruim é não existir um item realmente eficiente para atacar os peixes hostis. Tirando isso, é muito divertido construir bases no fundo do mar, fabricar submarinos e explorar o oceano. Só faltam esses pequenos detalhes para o coop ficar ainda melhor.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/Subnautica2/grafico.png" 
              alt="Visual do mundo de Subnautica 2" 
              className={imageClass}
            />
            <p className="mb-4">
              Esse foi, sem dúvida, o ponto mais positivo do jogo. O mundo é muito bonito. Ele é bonito de dia, bonito de noite, e as cavernas são simplesmente incríveis.
            </p>
            <p className="mb-4">
              Você não precisa depender totalmente de lanterna logo no começo, então o jogo não fica totalmente escuro para o jogador iniciante. Claro, quanto mais fundo você vai, mais difícil fica enxergar, mas ainda assim o visual impressiona muito.
            </p>
            <p className="mb-4">
              Sério, o jogo é lindo. A equipe está de parabéns pelo trabalho visual.
            </p>
          </ReviewSection>

          {/* Trilha Sonora (Sem Imagem) */}
          <ReviewSection title="Trilha Sonora" rating={60}>
            <p className="mb-4">
              A trilha sonora do jogo é apenas ok. Não tem muito o que comentar sobre isso.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={76}>
            <GameImage 
              src="/assets/26/Subnautica2/historia.png" 
              alt="Lore e exploração do planeta" 
              className={imageClass}
            />
            <p className="mb-4">
              Em jogos coop, a história geralmente fica em segundo plano, porque você acaba focando mais em jogar com os amigos, construir sua base e se divertir.
            </p>
            <p className="mb-4">
              Mesmo assim, notei algumas coisas positivas aqui. O jogo possui bastante lore, tanto em textos quanto em áudios dos funcionários. Também existe uma espécie de “Pokédex” ainda incompleta, mostrando informações sobre os animais e plantas do planeta, e achei isso bastante interessante.
            </p>
            <p className="mb-4">
              Só não dei uma nota maior porque esse realmente não parece ser o foco do jogo. Claro que ele até ajuda o jogador indicando para onde ir e o que fazer, mas acho que exageraram um pouco na quantidade de informação.
            </p>
            <p className="mb-4">
              Para um jogo coop, muitos jogadores acabam nem ligando tanto para ouvir tantos áudios ou ler tanto texto. Às vezes, um resumo mais direto funcionaria melhor. Ainda assim, quem gosta de lore provavelmente vai ficar muito feliz com a quantidade de conteúdo disponível.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={99}>
            <GameImage 
              src="/assets/26/Subnautica2/otimizacao.png" 
              alt="Performance e bugs engraçados" 
              className={imageClass}
            />
            <p className="mb-4">
              O jogo é traduzido para PT-BR, o que já ajuda bastante.
            </p>
            <p className="mb-4">
              Só tirei um ponto porque encontrei um bug muito engraçado: quando eu usava um item para emergir, meu personagem simplesmente era lançado lá para o céu. Isso mesmo, eu voava muito alto.
            </p>
            <p className="mb-4">
              E querendo ou não, estou até abusando disso, porque funciona quase como uma hiperbola de gráfico de segundo grau. Consigo atravessar uns 10 a 30 metros pelo ar sem tomar dano.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Por fim, eu achei o jogo excelente. Ele está incompleto? Sim. Mas já dá para jogar tranquilamente. Eu acho que o jogo já possui bastante conteúdo, mas a duração da campanha principal deve ficar entre 6 e 10 horas se você focar apenas na história. Agora, se a ideia for realmente se divertir com amigos, construir bases e explorar o mapa em coop, pode esperar facilmente mais de 12 horas de gameplay. Você percebe claramente que o jogo exige bastante farming de recursos, mas ainda bem que os itens dão respawn. Outro detalhe que esqueci de comentar é que o mapa possui locais fixos. Não importa o save, os lugares sempre serão iguais. Tem gente que odeia isso, porque não é como em Raft, onde o mapa é gerado aleatoriamente. Por outro lado, isso também permite criar uma história onde os Devs conseguem “Guiar” o jogador para tal lugar sabe."
            rating={85}
            date="17/05/2026"
          />

        </div>
      </div>
    </>
  );
};

export default Subnautica2;