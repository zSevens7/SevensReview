// src/pages/jogos/DokimonQuest.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const DokimonQuest: React.FC = () => {
  const gameData = {
    slug: "dokimon-quest",
    title: "Dokimon Quest",
    subtitle: "",
    rating: 85,
    coverImage: "/assets/25/Dokimon/frontpage.png",
    logo: "/assets/25/Dokimon/logo.png",
    genre: "RPG de Monstros/Aventura",
    releaseDate: "2025-08-18",
    developer: {
      name: "Yano",
      countryFlag: "/assets/flags/japan.png",
    },
    publisher: "Indie",
    engine: "Luna Engine",
    platforms: ["Windows"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Dokimon Quest - jogo indie de RPG de monstros desenvolvido por um único criador. Análise detalhada da jogabilidade, arte impressionante e desafios do desenvolvimento independente. Avaliação: 85/100.";
  const seoKeywords = "Dokimon Quest, Yano, jogo indie, RPG de monstros, monster taming, Luna Engine, review, análise, Windows, jogo independente";

  // Schema structured data
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
    "datePublished": "2025-08-18T17:00:00-03:00"
  };

  return (
    <>
      <Helmet>
        {/* Meta Tags Básicas */}
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
        <meta property="og:url" content={`https://sevensreview.com.br/jogos/${gameData.slug}`} />
        <meta property="og:site_name" content="Sevens Review" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        {/* Header */}
        <ReviewHeader {...gameData} />

        {/* Conteúdo da Review */}
        <div className="mt-8">
          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              "Uau, cuidado! Essa foi por pouco! Você não sabia que os Dokimon são perigosos?"
            </p>
            <p className="mb-4">
              Entre na região de Xelos e embarque em uma aventura para desvendar o mistério do seu amigo de infância desaparecido.
            </p>
            <p>
              Antes de começar a análise, preciso contar como conheci este jogo. Foi através de um tweet do criador que o descobri, porém, só o joguei agora, pois na época ele não tinha tradução para o português do Brasil. Quando vi que o jogo foi atualizado com os idiomas português e espanhol, decidi comprar e testá-lo.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={74} ratingColor="bg-red-300 text-black">
            <p className="mb-4">
              Antes de começar a análise da mecânica, tenho que elogiar o criador do jogo por ter desenvolvido uma engine chamada Luna (antigamente batizada de MonMae) e disponibilizá-la na Steam (<a href="https://store.steampowered.com/app/2555470/MonTamer_Maker/?curator_clanid=45651403" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">MonTamer_Maker</a>) para que outras pessoas possam criar jogos parecidos com Dokimon. Isso dá um trabalho enorme.
            </p>
            <p className="mb-4">
              Bem, começando pela mecânica, o jogo apresenta a famosa tipagem de Pokémon, etc., porém, ele adiciona um tipo chamado "Light" e muda um pouco a ordem de efetividade e imunidade, o que adiciona um desafio a mais para novos jogadores. O cenário de combate é bem bonito e segue o estilo padrão de um RPG por turno, com efeitos negativos e ataques críticos. O jogo ainda consegue adicionar batalhas em dupla, o que é impressionante para um primeiro título.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON MECANICA 01.png" 
              alt="Mecânica do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              O ponto negativo que aponto na mecânica, e que talvez possa estar relacionado aos gráficos, é algo que me incomodou bastante: a HUD de seleção dos Dokimons. Demorei a me acostumar para entender como funcionava. Além disso, a decisão do criador de tornar "simples" a troca de golpes do Dokimon é uma boa escolha quando a mecânica de subir de nível e de lembrar golpes não dá muito certo, não é? Ou talvez ele tenha tentado fazer diferente, algo que até Digimon Story também faz. Porém, a HUD dessa função não é nada agradável. Você não sabe quando o Dokimon aprenderá um determinado golpe; o estilo era "Lv 3?", mas quando exatamente? Isso gerou frustração.
            </p>
            <p className="mb-4">
              Outro ponto, que está relacionado à imagem abaixo, é o escalonamento de nível dos monstros e dos treinadores. Eu notei que o jogo não tem um escalonamento de nível bem definido. Como assim? Primeiro, o jogo tem um sistema que facilita rebatalhar com treinadores, o que permite aumentar o XP e o dinheiro rapidamente. Ao mesmo tempo, os treinadores da história simplesmente somem. Ou seja, esses treinadores seriam um pré-requisito para chegar a um local. Aonde quero chegar é que faltou a mecânica do treinador te ver e iniciar uma batalha ao se aproximar. Digo isso porque o fato do treinador sumir é um ponto negativo para a história, pois ele poderia contar mais coisas depois de ser derrotado.
            </p>
            <p className="mb-4">
              Notei também que, nessas rebatalhas, parece que o nível dos Dokimons adversários sobe com base no nível dos seus próprios Dokimons, algo que percebi porque amo "grindar" XP. Ao mesmo tempo, no fim do jogo, o nível dos Dokimons sobe muito rápido. Fora isso, ele também adiciona outras variações de Dokimon, no estilo dos "Shiny" de Pokémon ou do "X-Antibody" de Digimon.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON MECANICA 02.png" 
              alt="Mecânica do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              Ah, tenho que lembrar que o jogo tem uma mecânica legal de "surf", que na verdade é mais como uma prancha. Achei interessante a mecânica de encontrar monstros no mar apenas quando você quer, e não a todo momento como nas franquias Pokémon. O único problema dessa mecânica é que ela só pode ser acessada e finalizada em locais específicos. No fim, comentarei sobre um "bug" não intencional do criador.
            </p>
            <p>
              Um outro detalhe negativo na mecânica é que, quando um ataque falha, a parte visual dele ainda é exibida. O certo seria não mostrar a animação e apenas informar que falhou. É um erro visual que prefiro incluir aqui na mecânica, porque me parece um erro de programação.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={98} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Agora vem a parte mais forte do jogo, e foi essa parte que me fez descobrir Dokimon Quest no Twitter. Se não fosse pela arte do Yano, eu nunca teria encontrado o jogo. Vou até deixar o link do X (Twitter) dele aqui: <a href="https://x.com/yanako_rpgs" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">@yanako_rpgs</a>.
            </p>
            <p className="mb-4">
              Analisando os gráficos, vou começar pelo ponto forte: o mundo do jogo é muito bonito e bem ambientado. Já joguei certos títulos que não dão valor a esses pequenos detalhes, mas aqui ele se destaca muito. Ao longo desta análise, há vários prints que fui tirando, e o motivo é porque eu amei a arte do jogo. As duas maiores cidades são as minhas preferidas, até tirei uma foto de uma delas para deixar aqui como visualização.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON GRAFICO 01.png" 
              alt="Gráficos do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              Outro ponto que precisamos falar é o design dos personagens e dos monstros (Dokimon). Os personagens são muito bonitos. Na parte da trilha sonora, separei uma imagem que mostra os personagens que você pode escolher. Parece que existe uma mecânica para trocar os acessórios do personagem, mas ela só está disponível no fim do jogo, parte que não alcancei (e contarei o porquê mais adiante). Já os designs dos monstros são bem legais. O grande problema aqui é que nem sempre vamos gostar de todos os designs, o que acontece em todo jogo do gênero "monster-taming". Mas, pelo menos para mim, a maioria aqui me agradou. Deixei no fim da análise os Dokimons que mais usei para mostrar a vocês.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON GRAFICO 02.png" 
              alt="Gráficos do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p>
              Acho que o único defeito dos gráficos é a pouca variedade ou criatividade para tornar os designs dos ataques mais bonitos. Eu acredito que o tempo de produção do jogo nao disponolizou isso.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={75} ratingColor="bg-yellow-300 text-black">
            <p className="mb-4">
              Para mim, a trilha sonora foi a maior surpresa do jogo. Não esperava algo tão agradável. Eu sempre digo isso nas minhas análises: quando você prefere ouvir uma música fora do jogo, é porque a trilha sonora dele não é tão boa. E aqui, eu preferi muito mais ouvir a música do próprio jogo. Além disso, é uma trilha nostálgica, no estilo 8-bits, que me trouve muitas lembranças.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON TRILHA SONORA 01.png" 
              alt="Trilha Sonora do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80} ratingColor="bg-green-800">
            <p className="mb-4">
              Essa era a categoria pela qual eu estava mais animado, mas minha empolgação foi diminuindo ao longo da jornada. Digo isso porque a história no início e no meio do jogo é muito boa. O problema é que... o dev/criador não soube como interligar a parte do clímax do meio do jogo até o final. Por que isso aconteceu? Não sei como foi a produção, ou se o desenvolvedor ficou desanimado, mas deu para notar que, no fim, as coisas ficaram meio apressadas: poucos NPCs, casas nas quais não se podia entrar... Eu diria que do início até o clímax do meio (onde fica a maior cidade), o jogo é perfeito. Os NPCs contam toda a história daquele local, e a "DokiDex" detalha as histórias dos Dokimons, fazendo o jogador aprender mais sobre o universo de Dokimon Quest.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON HISTORIA 01.png" 
              alt="História do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              O problema mesmo é que, depois desse grande acontecimento, o jogo se torna meio chato, e o escalonamento de nível fica muito alto de repente. Uma coisa que não consegui entender, ao ganhar as conquistas, era a baixa porcentagem de pessoas que as completaram. A parte que considero o auge do jogo, no meio da campanha, apenas 8,5% dos jogadores alcançaram. Já o final, apenas 5,5% viram. Achei isso muito bizarro, porque o jogo não é tão difícil para se chegar até lá. Isso é uma crítica minha aos outros jogadores.
            </p>
            <p>
              Por fim, preciso falar por que não consegui zerar o jogo. O motivo foi algo muito simples: eu precisava ter Dokimons com "coração zero" comigo, ou seja, "puros". O pior é que tentei de tudo para avançar, mas não consegui de jeito nenhum. Troquei para outros Dokimons que tinha capturado, até mesmo aqueles com formas novas. Tentei ler um guia e, infelizmente, não consegui passar. Achei a decisão de exigir um Dokimon com coração nulo até legal, mas a maioria que chegou até ali em sua jornada vai amar o seu Dokimon, não é? Então, achei essa decisão meio errada. É como se o criador quisesse que nos livrássemos do nosso Dokimon que nos acompanhou por toda a jornada? Enfim, talvez possa ser um bug, não sei. Deixei a imagem para mostrar qual seria a parte.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON HISTORIA 02.png" 
              alt="História do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mt-4"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={98} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Por fim, a questão da otimização. Primeiro, o jogo é simples, logo, ele roda sem problemas. O que eu gostei foram as opções de customização, que oferecem bastantes HUDs diferentes.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON ACESS 01.png" 
              alt="Otimização do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              O grande problema que o fez perder pontos foi, primeiro, uma área que eu não conseguia alcançar e não entendi o porquê. Estava tentando ver se precisava de mais um "Explorer Elite" e não conseguia chegar lá de jeito nenhum. Não sei se foi intencional, e por isso critiquei a mecânica de "surf", por ser bem limitada.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON ACESS 02.png" 
              alt="Otimização do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              O segundo ponto que tirei, e não é algo grave, é que encontrei três NPCs que não falam em PT-BR. Deixei a imagem para o caso de o dev/criador ver esta análise. Não sei se ele vai ler tudo, mas ficam aqui os locais que não estão em português.
            </p>
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON ACESS 03.png" 
              alt="Otimização do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <GameImage 
              src="/assets/25/Dokimon/DOKIMON ACESS 04.png" 
              alt="Otimização do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Veredito Final - Customizado pois tem conteúdo extra */}
          <div className="my-6 p-6 rounded-lg shadow-md border-4 border-green-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mx-2 sm:mx-4 md:mx-8 lg:mx-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 border-b-2 pb-2">
              Veredito Final
            </h2>
            
            <div className="mb-4">
              <p className="mb-4">
                Enfim, o veredito final. Para um jogo que o dev fez sozinho, eu fiquei surpreso. O jogo é bom. Ele apresenta alguns pontos negativos, principalmente nas mecânicas e no fim da história, mas ainda assim é um bom jogo, pois o desenvolvedor tem uma arte bonita e soube escolher bem as músicas. Só fiquei triste por não encontrar os créditos no final e nem sei se havia uma opção para isso no jogo. Deixarei aqui as imagens dos meus Dokimons.
              </p>
              
              <GameImage 
                src="/assets/25/Dokimon/DOKIMON VEREDITO 01.png" 
                alt="Dokimons usados" 
                className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
              />
              
              <GameImage 
                src="/assets/25/Dokimon/DOKIMON VEREDITO 02.png" 
                alt="Dokimons usados" 
                className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
              />
              
              <p className="mb-4">
                Para finalizar, quero contar uma experiência minha. No início do ano, até pensei em fazer um jogo no estilo "monster-taming", como Pokémon, mas parei devido à faculdade e por não ter experiência com arte. Eu não queria usar imagens geradas por IA, porque as achava muito feias (para quem me conhece, sabe que estou começando a aprender sobre programação). Estou falando disso porque fazer um jogo sozinho é difícil.
              </p>
              <p className="mb-4">
                Parece que, infelizmente, não teremos um Dokimon 2, mas isso também não é uma notícia ruim. Gostaria de deixar aqui o próximo projeto do criador, Yano, que se chama <a href="https://www.kickstarter.com/projects/56605700/yami-kids" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">YamiKids Project</a>. Parece que, dessa vez, ele terá a ajuda de uma pessoa chamada Tosh. Não o conheço, mas espero que essa ajuda torne o jogo ainda melhor, porque criar um game sozinho não é fácil. Estarei ansioso para ver o próximo jogo de Yano.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
              <div className="font-bold text-xl md:text-2xl mb-2 md:mb-0">
                Nota: <span>85</span>/100
              </div>
              <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-2 md:mb-0">
                ← Voltar para Home
              </a>
              <span>Escrito por Sevens - 18/08/2025 17:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DokimonQuest;