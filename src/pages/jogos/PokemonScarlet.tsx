// src/pages/jogos/PokemonScarlet.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const PokemonScarlet: React.FC = () => {

  const gameData = {
    slug: "pokemon-scarlet",
    title: "Pokémon Scarlet",
    subtitle: "Boas ideias de mundo aberto arruinadas por uma execução técnica e visual datada",
    rating: 65,
    coverImage: "/assets/26/PokemonScarlet/cover.png",
    logo: "/assets/26/PokemonScarlet/frontpage.png",
    genre: "RPG de Turno / Aventura",
    releaseDate: "2022-11-18",
    developer: {
        name: "Game Freak",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nintendo / The Pokémon Company",
    engine: "Proprietary Engine",
    platforms: ["Nintendo Switch"]
  };

  // SEO
  const seoDescription = "Review de Pokémon Scarlet no Nintendo Switch 2. Analisamos a mecânica Terastal, os problemas gráficos, a falta de level scaling e se vale a pena jogar em 2026.";
  const seoKeywords = "Pokémon Scarlet review, análise, Nintendo Switch 2, Paldea, Terastal, Game Freak, RPG, Koraidon, Area Zero";

  // Schema Data
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
    "datePublished": "2026-01-23T12:00:00-03:00"
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
              Esta é a nona geração da franquia Pokémon, a última que faltava para eu jogar e analisar. Confesso que tinha um enorme medo de encarar esse título, pois na época de lançamento recebeu críticas pesadas devido à má otimização. Porém, decidi jogar como fã, aproveitando também as melhorias de hardware proporcionadas pelo <strong>Nintendo Switch 2</strong>.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={95}>
            <GameImage 
              src="/assets/26/PokemonScarlet/mecanica.png" 
              alt="Mecânica de Terastal e mundo aberto" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              Acredito que a mecânica seja o ponto alto do jogo. A base ainda é a clássica batalha por turnos, mas agora com a vantagem de ver os Pokémon no mapa (overworld), permitindo escolher quais enfrentar e tornando as batalhas contra NPCs opcionais.
            </p>
            <p className="mb-4">
              A novidade da geração é o fenômeno <strong>Terastal</strong> (aqueles cristais na cabeça do Pokémon). Eles mudam a tipagem da criatura, alterando a estratégia de combate. Sinceramente? Não achei tão incrível assim, ainda prefiro a Mega Evolução. Porém, as Tera Raids funcionam muito bem, permitindo jogar com amigos ou pessoas da internet.
            </p>
            <p className="mb-4">
              Onde quero chegar é: andar pelo mapa, capturar monstros e fazer essas Raids dá ao jogo um ar divertido e livre. Mas essa liberdade tem suas ressalvas, que explicarei na parte da história.
            </p>
            <p className="mb-4">
                A unica que preciso falar, é que o jogo não tem aquele sistema de dia e noite baseado na vida real, o que eu sinto falta ainda, porque eu gostava de jogar no tal horario para capturar aquele pokemon exato, mas o jogo tem dia e noite, mas é feito com intervalo menores.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={25}>
            <GameImage 
              src="/assets/26/PokemonScarlet/grafico.png" 
              alt="Visual de Paldea e texturas de baixa resolução" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              Primeiro, tenho que falar algo sério: esse é o pior jogo em questão de gráfico da franquia. Eu nunca vi um gráfico tão feio, e acho que foi uma das minhas piores notas aqui desde que comecei a fazer reviews. Vou listar os pontos negativos:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Escala dos Pokémon:</strong> Os modelos são extremamente pequenos no mundo aberto. Não sei o porquê disso, mas não gostei do escalonamento. É possível notar que em <em>Pokémon Let's Go</em>, <em>Sword</em> e <em>Legends: Arceus</em> os Pokémon não eram tão pequenos assim.
              </li>
              <li>
                <strong>Design dos Protagonistas:</strong> É um dos piores da série. Não é à toa que você não encontra tantas fanarts ou cosplays deles, porque são mal feitos mesmo se compararmos com outros protagonistas da franquia. Quem ganhou mais brilho visual foram os personagens secundários, como os rivais e líderes de ginásio.
              </li>
              <li>
                <strong>Ambientes e Interiores:</strong> O mundo é feio e tem áreas que deixam muito a desejar. Além disso, as casas dos líderes de ginásio e da Elite Four não têm identidade própria; é tudo genérico. O jogo tenta carregar o mapa inteiro, mas entrega uma versão de baixíssima qualidade quando vista de longe.
              </li>
              <li>
                <strong>Customização:</strong> Quase esqueci de falar: você não pode mudar a roupa principal! É obrigado a usar aquele uniforme escolar feio e brega o tempo todo. A personalização fica restrita apenas a comprar chapéu, mochila, tênis e luvas.
              </li>
            </ul>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={80}>
            <GameImage 
              src="/assets/26/PokemonScarlet/trilha sonora.png" 
              alt="Música e ambientação sonora" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              O jogo cumpre bem seu papel aqui, com uma trilha sonora boa e agradável.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={40}>
            <GameImage 
              src="/assets/26/PokemonScarlet/historia.png" 
              alt="Cenas da escola e narrativa" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              Se eu tivesse que definir em uma frase: o jogo perdeu a chance de ser um <em>Persona</em> de Pokémon. A premissa da escola é desperdiçada. Você é convidado, assiste a um flashback e... pronto, é mandado para o mundo aberto. O jogo apresenta várias áreas da escola (enfermaria, dormitórios, salas), mas você mal as usa.
            </p>
            <p className="mb-4">
              O jogo tenta copiar a liberdade de Elden Ring, soltando o jogador em Paldea para fazer o que quiser. O problema? Não há escalonamento de nível (level scaling). Você é "livre" para ir a qualquer lugar, mas encontrará Pokémon de nível altíssimo em áreas que o jogo não te preparou para ir, forçando um caminho linear disfarçado. Jogos como Octopath Traveler 0 souberam fazer isso muito melhor.
            </p>
            
            <p className="mb-2 font-bold">A trama se divide em 3 rotas:</p>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Victory Road:</strong> O padrão de conquistar insígnias (ok, mas básico).</li>
              <li><strong>Team Star:</strong> A "equipe vilã" é apenas um grupo de estudantes que sofrem bullying. A abordagem é infantil e o impacto na história é fraco.</li>
              <li><strong>Path of Legends:</strong> Buscar os 5 Titãs para dar upgrades no Koraidon.</li>
            </ul>

            <p className="mb-4">
              Falando no Koraidon, ele foi reduzido a uma motocicleta glorificada. A banalização do lendário, entregando-o logo no início como montaria, tira todo o peso místico dele. Jogos como Digimon Story ou o próprio Pokémon Sword souberam valorizar muito mais suas criaturas principais.
            </p>
            <p className="mb-4">
              E um pequeno spoiler necessário: o grande plot twist e os Pokémon Paradoxais (Passado/Futuro) ficam trancados na Area Zero, acessível apenas no final. O marketing vendeu esses Pokémon Ancestrais/Futuristas, mas a história mal os aproveita. Imagina se a equipe vilã quisesse usá-los para destruir algo? Foi um desperdício narrativo enorme.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={85}>
            <GameImage 
              src="/assets/26/PokemonScarlet/otimizacao.png" 
              alt="Desempenho no Switch 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            <p className="mb-4">
              Avaliei com 85 <strong>apenas</strong> porque joguei no Nintendo Switch 2. A atualização de hardware permitiu que o jogo rodasse fluido a 60 FPS na maior parte do tempo, corrigindo o desastre que foi no Switch original.
            </p>
            <p className="mb-4">
              Ainda assim, o jogo sofre com pop-ins (coisas aparecendo do nada na sua frente) e a Area Zero ainda apresenta quedas de framerate. Além disso, a falta de dublagem (até em japonês) e a ausência de legendas em PT-BR continuam sendo pontos negativos de acessibilidade.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <GameImage 
              src="/assets/26/PokemonScarlet/veredito.png" 
              alt="Desempenho no Switch 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
          {/* Veredito Final */}
          <ReviewVeredito
            text="Esse deve ser um dos piores jogos que já publiquei no meu site, e também acredito que é uma das piores gerações da franquia Pokémon. O motivo principal dele ser ruim é que ele parece ter sido pensado como um MMORPG, e não um singleplayer; ele tinha mecânicas para isso, mas como singleplayer, fica difícil fazer a história funcionar em um mapa tão grande e vazio. Lembro que na época as pessoas culpavam a Nintendo pelo console fraco ou a Game Freak por incompetência. Eu diria que a culpa é das duas: a Nintendo precisa administrar melhor a Game Freak, e a Game Freak precisa rever suas escolhas. Fico imaginando como seria o jogo se tivessem focado no tema escolar com áreas semi-abertas no estilo de Pokémon Legends: Arceus, que o jogador visita de vez em quando. Seria um jogo mais bonito e com história melhor. Enfim, para mim, é a pior geração de Pokémon, conseguindo ser inferior a Sun & Moon."
            rating={65}
            date="23/01/2026"
          />

        </div>
      </div>
    </>
  );
};

export default PokemonScarlet;