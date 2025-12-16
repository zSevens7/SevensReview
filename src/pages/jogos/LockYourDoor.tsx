// src/pages/jogos/LockYourDoor.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const LockYourDoor: React.FC = () => {

  const gameData = {
    slug: "lock-your-door",
    title: "LockYourDoor",
    subtitle: "Tranque a porta e reze, mas cuidado com a iluminação cinzenta",
    rating: 70,
    coverImage: "/assets/25/LockYourDoor/cover.png",
    logo: "/assets/25/LockYourDoor/frontpage.png",
    genre: "Terror / Cooperativo",
    releaseDate: "2025-11-17",
    developer: {
        name: "Penguin's Autumn",
        countryFlag: "/assets/flags/turkey.png" // Assumindo BR pelo contexto do dev indie, ou use worldwide se preferir
    },
    publisher: "Penguin's Autumn",
    engine: "Não sei qual é a Engine",
    platforms: ["PC (Steam)"]
  };

  // SEO
  // SEO
  const seoDescription = "Review de LockYourDoor: vale a pena? Analisamos esse survival horror cooperativo que brilha no multiplayer, mas falha na iluminação e mecânicas.";
  
  // Adicionei "Lock Your Door" (separado), "terror multiplayer" e "jogo de terror"
  const seoKeywords = "LockYourDoor review, Lock Your Door, análise, survival horror, co-op, indie, terror multiplayer, jogo de terror, Sinxplays, PC, Steam";

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
    "datePublished": "2025-12-16T12:00:00-03:00"
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
              <strong>LockYourDoor</strong> é um jogo de survival horror cooperativo para 1 a 4 jogadores. O objetivo é procurar pelo seu amigo desaparecido, Darvin. Encontre-o e faça o que for preciso para continuar vivo; apenas os pacientes e inteligentes sobreviverão.
            </p>
            <p className="mb-4">
              Confesso que só joguei esse jogo por causa do streamer <strong>Sinxplays</strong>. Ele estava em live e faltava gente para completar a party, então decidi comprar e experimentar. Como a jogatina durou mais de 2 horas, decidi trazer essa review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={80}>
            <p className="mb-4">
              Falando em mecânicas, o mais importante em jogos de terror é: ele dá jumpscare? Tem ambientação assustadora? Eu diria que sim, essa qualidade está em um bom nível. Além disso, o jogo apresenta uma mecânica que lembra Devour. Como assim Devour? O jogo faz o jogador buscar chaves e avançar aos poucos, enquanto lê notas que dão dicas sobre o que está acontecendo na história.
            </p>
            <p className="mb-4">
              Sobre mecânicas diferentes, achei a ideia central legal, baseada no nome do jogo (LockYourDoor, que traduzindo seria “Tranque Sua Porta”): o jogador precisa dormir no local e trancar a porta. Apesar de achar a ideia inovadora (talvez outros jogos já tenham feito, mas não sou expert no gênero), diria que ela foi mal aproveitada aqui. Explico melhor na parte da História.
            </p>
            
            <GameImage 
              src="/assets/25/LockYourDoor/mecanica.png" 
              alt="Gameplay mostrando o inventário e mecânicas de itens" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">
              Além disso, o jogo tem um sistema de furtividade legal, onde você não deve fazer barulho nem falando (microfone) nem andando, e a HUD mostra isso muito bem. Temos 3 itens principais, mas achei que foram mal explorados: a bateria não vale tanto a pena; a cruz é até boa como defesa; e o boneco voodoo é divertido para brincar com os amigos (fiz muito isso). Só acho que poderiam ter colocado mais itens, como um kit médico ou algo assim.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={50}>
            <p className="mb-4">
              Sobre o gráfico, diria que ele é bonito, mas tem um grande problema. Não sei se dá para notar nas screenshots, mas a iluminação do jogo é muito “cinzenta”. Acho que a iluminação foi muito mal aproveitada, ainda mais considerando a mecânica de passar o dia. Seria muito melhor se o jogo começasse às 18h, com o sol se pondo, e fosse até o amanhecer; seria mais fácil para o jogador sentir a passagem do tempo.
            </p>
            <p className="mb-4">
              Volto a dizer: a mecânica é legal, mas mal executada visualmente. Essa ambientação cinza me incomodou demais. Até os personagens ficam parecidos; lembro que as personagens femininas são diferentes, mas por causa da iluminação parecem iguais, estando a lanterna ligada ou não.
            </p>

            <GameImage 
              src="/assets/25/LockYourDoor/grafico.png" 
              alt="Ambientação cinzenta e iluminação do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4">
              Sobre o design dos monstros, é bem feito e organizado. O jogo também apresenta vários detalhes nos quartos. Porém, o design de mundo (o mapa) no 2º andar é meio confuso; consegui decorar, mas muita gente pode achar um labirinto. Além disso, tenho que comentar o design específico da cruz: não entendi por que fizeram ela parecendo dois palitos de picolé colados.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={75}>
            <p className="mb-4">
              Em jogos de terror, o design de áudio é bastante importante, e aqui o jogo entrega uma boa qualidade.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={55}>
            <p className="mb-4">
              Sobre a história e o desenrolar do jogo, como citei na parte gráfica, o que mais me deixou chateado foi como desperdiçaram a mecânica de dormir. O jogador nunca sabe exatamente quando deve dormir ou não, pois o ambiente é sempre cinzento e sem noção de horário. O jogo até tenta dar uma dica no canto superior direito da HUD, mas é complicado ficar olhando para lá enquanto tem um “capeta” te perseguindo.
            </p>
            <p className="mb-4">
              Outra mecânica mal aproveitada (e aqui vai uma crítica pesada, talvez com spoiler): o jogo se chama Lock Your Door, certo? Fechar as portas com as teclas C e Z é até agradável, mas... a ideia é que você precisa ir dormir sozinho e trancar a porta. O grande problema é: o que adianta fechar a porta se o monstro consegue atravessar a parede? É como se fosse um convite para a morte.
            </p>
            <GameImage 
              src="/assets/25/LockYourDoor/historia.png" 
              alt="Ambientação cinzenta e iluminação do jogo" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Além disso, as camas duplas deveriam permitir que dois jogadores dormissem ao mesmo tempo. O jogo também faz você colocar uma cruz no quarto, mas nem isso te salva; o bicho vai te pegar do mesmo jeito.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={90}>
            <p className="mb-4">
              Para um jogo indie, ele vem traduzido em várias línguas, inclusive PT-BR, o que é um ponto positivo. Mas, ao mesmo tempo, tive um bug chato: em certo momento, eu não conseguia usar os itens do inventário, nem jogá-los no chão, e nem conseguia dormir. A única opção para “resetar” isso foi morrendo, infelizmente.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Por fim, para o jogo de estreia de um dev indie, diria que é um bom título de terror. Ele consegue ser assustador e é MAIS DIVERTIDO jogando com amigos. Você vai se divertir por um dia, mas dificilmente jogará novamente, a não ser que o dev lance novos mapas. Só acho que, num próximo projeto, ele deveria focar em melhorar a iluminação, pois esse tom cinzento atrapalhou muito a experiência."
            rating={70}
            date="16/12/2025"
          />

        </div>
      </div>
    </>
  );
};

export default LockYourDoor;