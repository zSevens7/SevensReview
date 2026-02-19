// src/pages/jogos/MarioTenisFever.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const MarioTenisFever: React.FC = () => {

  const gameData = {
    slug: "mario-tennis-fever",
    title: "Mario Tennis Fever",
    subtitle: "Mecânicas superpoderosas e quadras dinâmicas marcam a estreia do tênis no Switch 2",
    rating: 84,
    coverImage: "/assets/26/MarioTenisFever/cover.png", 
    logo: "/assets/26/MarioTenisFever/frontpage.png",
    genre: "Esporte / Tênis",
    releaseDate: "2026-02-12",
    developer: {
        name: "Camelot Software Planning",
        countryFlag: "/assets/flags/jp.png"
    },
    publisher: "Nintendo",
    engine: "Proprietária",
    platforms: ["Nintendo Switch 2"]
  };

  // SEO
  const seoDescription = "Review de Mario Tennis Fever para Nintendo Switch 2. Descubra se as novas Fever Rackets, as quadras dinâmicas e o modo aventura compensam neste divertido jogo de esporte da Nintendo.";
  const seoKeywords = "Mario Tennis Fever, Switch 2, Camelot, Nintendo, Esporte, Review, Análise, Fever Rackets";

  // Estilo para imagens
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
              Decidi jogar <strong>Mario Tennis Fever</strong> porque estava sem opções de jogos e, ao mesmo tempo, de férias. Vou ser sincero: gostei bastante do jogo e explicarei os motivos abaixo.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/MarioTenisFever/mecanica.png" 
              alt="Gameplay mostrando os efeitos das Fever Rackets" 
              className={imageClass}
            />
            <p className="mb-4">
              O jogo funciona como um título de tênis normal, mas você tem 6 tipos de "raquetadas". Temos a básica, a deixadinha, uma com efeito em curva, uma rebatida chapada, a bola alta (lob) e, por fim, o golpe <strong>ESPECIAL</strong>.
            </p>
            <p className="mb-4">
              Chamo de especial porque cada raquete te dá um certo poder (as <em>Fever Rackets</em>), e sendo sincero, é muito divertido. Esses poderes nem sempre garantem uma vantagem absoluta; se o adversário for esperto e conseguir devolver a bola, o efeito pode se voltar contra você, atrapalhando a sua jogada. Resumindo, mecanicamente, acho o jogo muito divertido mesmo.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <GameImage 
              src="/assets/26/MarioTenisFever/grafico.png" 
              alt="Cenários e quadras dinâmicas do jogo" 
              className={imageClass}
            />
            <p className="mb-4">
              Graficamente, o jogo é bem bonito. Só acho que poderia haver mais variedade de quadras especiais. Existem as quadras do mundo real (grama, areia e piso normal), mas adicionaram algumas que trazem mecânicas únicas.
            </p>
            <p className="mb-4">
              Uma delas, por exemplo, envolve a Planta Piranha: quando você acerta a bola nela, o espaço da sua área (ou a do inimigo) aumenta ou diminui. Isso é genial demais! Além disso, há quadras de gelo e outros cenários criativos que influenciam as partidas.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={60}>
            <GameImage 
              src="/assets/26/MarioTenisFever/trilha-sonora.png" 
              alt="Personagens e apresentação sonora" 
              className={imageClass}
            />
            <p className="mb-4">
              A trilha sonora não é lá essas coisas. Comparada aos clássicos do <em>Mario</em> e a <em>Mario Kart</em>, deixa um pouco a desejar. Apesar do jogo contar com as vozes dos personagens, a participação deles se resume a pequenos bordões, o que não acrescenta muito ao áudio geral.
            </p>
          </ReviewSection>

          {/* História e Modos */}
          <ReviewSection title="História/Conteúdo" rating={65}>
            <GameImage 
              src="/assets/26/MarioTenisFever/Historia.png" 
              alt="Menu do modo aventura e torneios" 
              className={imageClass}
            />
            <p className="mb-4">
              Esse ponto é complicado. Eu diria que a maioria dos jogadores VAI ODIAR a aventura. A premissa de virar bebê e explorar a ilha é legal, mas o modo pode se tornar muito irritante porque, no início, você precisa fazer vários minigames.
            </p>
            <p className="mb-4">
              O jogo tenta te ensinar a jogar tênis de uma forma lúdica, mas o problema é que ele já te ensina isso antes de começar e demora muito nos tutoriais, o que acaba ficando maçante. Depois dessa "academia", a história engrena e fica legal. É meio boba? Sim... mas os desafios são bem interessantes.
            </p>
            <p className="mb-4">
              Tirando o modo história, temos o modo torneio e as gincanas (como o modo <em>Mix It Up</em>), que são opções bem legais. Porém, minha decepção fica por conta dos torneios. Eu queria que houvesse mais variedade. Notei que os torneios mudam o estilo da quadra (o jogo tem umas 10 ou 12 quadras no total), mas só oferecem partidas simples (single) ou em duplas (double) em três níveis de dificuldade diferentes. Deixa muito a desejar nessa parte. Tem também o modo online, mas não joguei porque não sou muito fã.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização e Localização" rating={100}>
            <p className="mb-4">
              Além de o jogo vir com os textos totalmente traduzidos, ele também tem vozes — algo raro vindo da Nintendo, mas que faz sentido por ter pouco texto e diálogo. 
            </p>
            <p className="mb-4">
              O que mais me animou na parte de otimização e controles foi poder remapear os botões para dois golpes específicos e colocá-los nos famosos R2 e L2 (eu sei que na Nintendo os botões têm outros nomes como ZR/ZL, mas eu sou uma pessoa que nasceu jogando PlayStation!).
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Eu diria que quem é fã de jogos de tênis vai amar esse jogo, e para quem não é, não tem problema: o jogo é bem divertido e ótimo para jogar com os amigos. A única pena é ter um preço muito salgado (a Nintendo está vendendo seus jogos com uma conversão baseada em 1 dólar igual a 6 Reais, o que encarece muito os preços por aqui). Mas, tirando a questão do preço, é um ótimo jogo."
            rating={84}
            date="19/02/2026"
          />

        </div>
      </div>
    </>
  );
};

export default MarioTenisFever;