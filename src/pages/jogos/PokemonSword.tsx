// src/pages/jogos/PokemonSword.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const PokemonSword: React.FC = () => {

  const gameData = {
    slug: "pokemon-sword",
    title: "Pokémon Sword",
    subtitle: "Uma surpresa positiva que supera as expectativas, apesar dos problemas técnicos",
    rating: 84.4,
    coverImage: "/assets/25/PokemonSword/cover.png",
    logo: "/assets/25/PokemonSword/frontpage.png",
    genre: "RPG de Turno / Aventura",
    releaseDate: "2019-11-15",
    developer: {
        name: "Game Freak",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nintendo / The Pokémon Company",
    engine: "Proprietary Engine",
    platforms: ["Nintendo Switch"]
  };

  // SEO
  const seoDescription = "Review de Pokémon Sword. Analisamos a região de Galar, a mecânica Dynamax, a polêmica Wild Area e se o jogo vale a pena no Nintendo Switch.";
  const seoKeywords = "Pokémon Sword review, análise, Nintendo Switch, Galar, Dynamax, Wild Area, Game Freak, RPG";

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
    "datePublished": "2025-12-18T12:00:00-03:00" // Data aproximada na sua timeline de Dez/2025
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
              A oitava geração de Pokémon deu início à era "Switch" (após Pokémon Let's Go, Pikachu!). Foi uma geração que representava um potencial de melhoria na franquia, pois os gráficos de Let's Go já eram bem bonitos. No entanto, confesso que, de início, o jogo não me chamou muita atenção, mas irei abordar isso mais para frente na review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <p className="mb-4">
              O jogo funciona bem como um RPG clássico da franquia, com batalhas por turno. Eu diria que a animação ficou até mais suave comparada à geração do 3DS, mas é aquilo: o hardware do Switch é muito mais forte que o do portátil anterior.
            </p>
            <GameImage 
              src="/assets/25/PokemonSword/mecanica 01.png" 
              alt="Mecânica de Dynamax em batalha" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              O problema é que não gostei tanto daquelas versões de Pokémon gigantes (Dynamax/Gigantamax). Digo isso antes mesmo de jogar; no jogo até achei legal, apesar de não entender a necessidade de alguns Pokémons terem apenas um design diferente. Ou seja, não era igual à Mega Evolução, que mudava algo na mecânica de status; aqui o que mudava eram os golpes, o que acabou sendo perfeito para batalhas duplas.
            </p>

            <GameImage 
              src="/assets/25/PokemonSword/mecanica 02.png" 
              alt="Mecânica de Dynamax em batalha" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">
              Uma coisa que precisa ser falada é a Wild Area. A intenção dos devs era fazer uma área tipo um MMO de RPG, onde vários jogadores se encontravam para fazer missões ou acampamento. Mas acho que não conseguiram trabalhar bem mecanicamente para ficar legal; os personagens saíam e apareciam do nada (pop-in). A Wild Area acabou sendo um local pelo qual passei direto.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={85}>
            <p className="mb-4">
              Eu diria que, em questão de design de Pokémon e personagens, a Game Freak sabe fazer muito bem. Fiquei na dúvida para escolher meu time entre 10 Pokémons da nova geração. Talvez o único design ruim que achei foram os iniciais, apesar de saber que eles seguem o tema da região (Reino Unido).
            </p>
            <GameImage 
              src="/assets/25/PokemonSword/grafico 02.png" 
              alt="Visual das cidades e rotas em Galar" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Falando em ambiente, o jogo tem duas partes distintas. Tem uma área "2.5D" que é bonita, envolvendo as cidades e as rotas. Mas, ao mesmo tempo, a Wild Area é horrível. Eu diria que a Wild Area é apenas 30% do mapa, mas sinto que foi uma experiência visual ruim.
            </p>
            
            

            <p className="mb-4">
              Também achei estranho não ter mais as Hidden Machines (HM); achei bizarro demais isso. Apesar de ser mais na parte mecânica, sinto que quebra um pouco a exploração do mundo.
            </p>
            <GameImage 
              src="/assets/25/PokemonSword/grafico 01.png" 
              alt="Visual das cidades e rotas em Galar" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={85}>
            <p className="mb-4">
              Gostei das músicas de batalha do jogo, mas senti que poderiam melhorar em certos momentos. Principalmente no 7º ginásio (Dark Type), que é uma referência ao rock britânico. O líder canta com microfone e guitarra, mas é mudo! Perderam um potencial enorme aqui. É um desperdício total ver aquela cena sem voz nenhuma (quem jogou sabe do que estou falando). Caso queira ver a cena, tem uma no YouTube cortada em 24 segundos do que estou falando: <a href="https://www.youtube.com/watch?v=tC9vQmmvvfI" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://www.youtube.com/watch?v=tC9vQmmvvfI</a>
            </p>
            <GameImage 
              src="/assets/25/PokemonSword/trilha sonora.png" 
              alt="Visual das cidades e rotas em Galar" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={70}>
            <p className="mb-4">
              Eu diria que a história do jogo sobre o desafio dos ginásios é bem legal. São 3 rivais, e os líderes de ginásio são bem carismáticos; seus rivais sempre interagem com você tentando ser o campeão da região, o que me fez lembrar um pouco da 1ª geração.
            </p>
            
            <p className="mb-4">
              O problema mesmo é a falta de um bom antagonismo. O vilão da história é, tipo, o vilão mais burro da franquia (não posso dar spoiler). Ao mesmo tempo, o grupo vilão (Team Yell) é bem tosco. Foram uma referência aos hooligans do futebol britânico, mas nem tinham rivalidade real; era apenas um fã-clube da Marnie. Poderia ser uma rivalidade de duas cidades (tipo Manchester e Liverpool) ou essa gangue fazendo confusão real. Mas eles não fazem tanta bagunça, é apenas uma versão de fã-clube mesmo. Não tem estrutura de "gangue", e possuem apenas dois designs simples. Muito decepcionante.
            </p>
            <GameImage 
              src="/assets/25/PokemonSword/historia.png" 
              alt="Visual das cidades e rotas em Galar" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={92}>
            <p className="mb-4">
              O jogo não tem legendas em PT-BR. Mas, além disso, não tem dublagem sequer em japonês ou inglês. Eu geralmente dou 95 quando não tem legenda em português, mas preferi tirar uns pontinhos aqui devido à Wild Area no modo online ser deveras bugada. O personagem some e aparece do nada, assim como os outros players; isso é puro erro de otimização.
            </p>
            <GameImage 
              src="/assets/25/PokemonSword/otimizacao.png" 
              alt="Visual das cidades e rotas em Galar" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Eu entrei no jogo com a expectativa lá embaixo (achei que seria uma nota 70) e saí com um jogo bom. Acho ele um jogo legal da franquia, mas se comparar com outros, diria que ele ficaria abaixo. Não seria o pior jogo e nem o melhor. Para introduzir alguém à série, eu ficaria dividido, porque acho a geração do Nintendo DS e 3DS muito boa e mais equilibrada. Já aqui nessa geração, falta mais empenho na história e gráficos de qualidade. Estou falando isso porque estou bem no começo de Pokémon Scarlet (9ª geração), e já digo que aquele jogo consegue ser pior que o Sword em termos técnicos. Quase esqueci, mas sempre gosto de mostrar como foi minha equipe final no jogo, nesse foi o primeiro que decidir nao usar o inicial por não gostar deles, e sobre o lendario, eu diria que não era possivel capturar ele e jogar, ou seja,primeiro precisaria enfrentar a elite four e depois ir nele."
            rating={84.4}
            date="18/12/2025"
          />
          <GameImage 
              src="/assets/25/PokemonSword/veredito.png" 
              alt="Visual das cidades e rotas em Galar" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

        </div>
      </div>
    </>
  );
};

export default PokemonSword;