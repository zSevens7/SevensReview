// src/pages/jogos/F12025.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const F12025: React.FC = () => {
  const gameData = {
    slug: "f1-2025",
    title: "F1 2025",
    subtitle: "",
    rating: 87,
    coverImage: "/assets/25/F12025/F1 FRONT.png",
    logo: "/assets/25/F12025/F1 FRONT.png",
    genre: "Corrida/Simulador",
    releaseDate: "2025-05-30",
    developer: {
      name: "Codemasters",
      countryFlag: "/assets/flags/uk.png",
    },
    publisher: "EA Sports",
    engine: "Ego Engine",
    platforms: ["PC"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de F1 2025 - o jogo oficial do campeonato de Fórmula 1 2025. Análise detalhada do modo carreira, gráficos e jogabilidade. Último F1 da Codemasters/EA. Avaliação: 87/100.";
  const seoKeywords = "F1 2025, Formula 1, Codemasters, EA Sports, jogo de corrida, simulador, Fórmula 1, review, análise, PC, modo carreira";

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
    "datePublished": "2025-05-31T02:30:00-03:00"
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
              Deixe sua marca no mundo do automobilismo em F1® 25, o jogo oficial do 2025 FIA Formula One World Championship™, que traz o modo Minha Equipe reformulado, o terceiro e emocionante capítulo de Ponto de Frenagem, e muito mais!
            </p>
            <p className="mb-4">
              Já joguei alguns F1 no passado, especialmente versões do PS2. No PC, a última versão que joguei foi o F1 2020, ou seja, faz 5 anos desde então. E por estar bastante animado com a temporada atual da Fórmula 1, decidi testar essa nova versão. Vale destacar que sou um jogador totalmente casual de F1, jogo no joystick e foco apenas no singleplayer.
            </p>
            <p className="mb-4">
              Uma informação importante é que este será o último F1 produzido pela Codemasters (EA Games), já que os direitos da franquia serão transferidos — segundo rumores — para a 2K Games. Embora não haja confirmação oficial sobre a 2K, já é certo que o jogo não estará mais sob os cuidados da EA.
            </p>
            <p>Enfim, vamos para a análise.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={85} ratingColor="bg-green-800">
            <p className="mb-4">
              Gostei bastante da jogabilidade apresentada. Como jogador casual, não senti dificuldades excessivas para pilotar. Além disso, é possível configurar o número de voltas de acordo com seu nível. Mesmo com corridas mais curtas, o jogo obriga uma parada no box, o que adiciona uma camada interessante entre quem busca mais realismo e quem prefere uma experiência mais casual, como eu.
            </p>
            
            <GameImage 
              src="/assets/25/F12025/F1 MEC 01.png" 
              alt="F1 2025 mecânica" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              Outro ponto que me chamou atenção (e não sei se já estava presente em versões anteriores) foi a possibilidade de jogar na F2 antes de subir para a F1, algo muito legal dentro do modo história — falarei mais sobre isso na seção de história.
            </p>
            <p className="mb-4">
              Também gostei bastante dos desafios durante as corridas, que deixam a gameplay mais dinâmica. Por exemplo, recebi dois desafios que achei muito divertidos: um de economizar pneu e outro de ultrapassar o piloto da frente em até 4 voltas — consegui na última volta e foi super emocionante, especialmente pela reação da equipe agradecendo meu desempenho.
            </p>
            <p className="mb-4">
              Por outro lado, há um ponto negativo que me incomodou: o jogo parece pensado para uma ou duas temporadas no máximo. Depois disso, ele fica repetitivo, pois não há mudanças no calendário, nem adição de pistas ou novos desafios. Seria incrível se houvesse, por exemplo, um modo editor, permitindo aos jogadores criarem suas próprias pistas e, assim, aumentarem muito a longevidade do jogo. Isso abriria espaço para competições diferentes, trazendo frescor ao gameplay.
            </p>
            
            <GameImage 
              src="/assets/25/F12025/F1 MEC 02.png" 
              alt="F1 2025 mecânica" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Aqui é, sem dúvida, um dos pontos mais fortes do jogo. Minha placa de vídeo conseguiu rodar tudo no Ultra, e, para minha surpresa, o desempenho foi excelente, com FPS estável mesmo com os gráficos no máximo.
            </p>
            <p className="mb-4">
              Como jogador casual, reparei em pequenos detalhes que me encantaram, como, por exemplo, fragmentos de grama saindo dos pneus quando saí da pista (eles somem depois, claro). Os reflexos na pista e nos carros também estão belíssimos.
            </p>
            <p className="mb-4">
              Talvez o único ponto negativo seja a qualidade dos modelos dos personagens, que estão um pouco abaixo do restante. Mas, considerando que o foco é nos carros e nas pistas, é compreensível.
            </p>
            
            <GameImage 
              src="/assets/25/F12025/F1 GRAF 01.png" 
              alt="F1 2025 gráficos" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={80} ratingColor="bg-green-800">
            <p className="mb-4">
              Me surpreendi positivamente com a trilha sonora. O jogo traz algumas músicas bem interessantes no menu, o que deixa a navegação mais agradável.
            </p>
            <p className="mb-4">
              Mas o grande destaque vai para o som dos carros durante a corrida, que está muito bem feito. É possível também configurar se você quer dar mais ênfase ao som do carro, à voz do engenheiro, ou equilibrar ambos — isso fica totalmente ao gosto do jogador.
            </p>
            <p className="mb-4">
              Um ponto que poderia ser melhorado é permitir que as músicas do menu também toquem durante as telas de classificação, nos boxes ou no pós-corrida. Já que o jogo paga pelos direitos dessas músicas, faria todo sentido aproveitá-las em mais momentos, trazendo mais dinamismo e deixando essas partes menos monótonas.
            </p>
            
            <GameImage 
              src="/assets/25/F12025/F1 TRILHA 01.png" 
              alt="F1 2025 trilha sonora" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={75} ratingColor="bg-yellow-300 text-black">
            <p className="mb-4">
              Gostei bastante das opções de modo carreira. O jogo oferece três caminhos principais:
            </p>
            
            <ol className="list-decimal list-inside mb-4 space-y-2">
              <li className="ml-4">Modo Piloto: começando na F1 ou na F2.</li>
              <li className="ml-4">Modo Minha Equipe: criando sua própria equipe e gerenciando-a.</li>
              <li className="ml-4">Modo Co-op: para jogar em dupla com um amigo, na mesma equipe.</li>
            </ol>
            
            <p className="mb-4">
              O problema está no fator replay, que é quase inexistente. Depois da primeira temporada, você provavelmente sentirá que não há mais muito o que fazer, já que não existem mudanças no calendário, desafios diferentes, ou variações relevantes nas temporadas seguintes.
            </p>
            <p className="mb-4">
              Na F1, até há algumas variações, mas na F2 praticamente não existe conteúdo extra. Parece que é só correr, sem interações, sem entrevistas, sem rivalidades, nem aquela pressão da equipe ou do chefe por resultados. Senti muita falta desse tipo de drama e desenvolvimento de história.
            </p>
            <p className="mb-4">
              Além disso, o jogo não possui um modo simples de corrida livre, onde você escolhe qualquer pista e as condições de tempo — algo que, sinceramente, deveria ser básico.
            </p>
            <p className="mb-4">
              Existe também um modo de pré-temporada, onde você testa e ajusta o carro, além do modo chamado Filme de F1, que, embora seja uma proposta interessante em termos de marketing, não me atrai tanto por preferir modos focados em simulação e campeonatos.
            </p>
            
            <GameImage 
              src="/assets/25/F12025/F1 HIST 01.png" 
              alt="F1 2025 história" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Aqui o jogo acerta em cheio. A otimização é impecável, extremamente acessível até para quem tem PCs mais modestos.
            </p>
            <p className="mb-4">
              O jogo conta com recursos de acessibilidade incríveis, inclusive para jogadores com deficiência visual. Um exemplo disso é que o jogo emite sons específicos quando você se aproxima da saída da pista.
            </p>
            <p className="mb-4">
              Outro ponto positivo é que o jogo está completamente dublado em português, o que facilita muito, especialmente durante as corridas, quando é difícil acompanhar textos e pilotar ao mesmo tempo. E, felizmente, não há narração da Band — o que, pessoalmente, eu considero um alívio, pois não gosto da narração oficial deles.
            </p>
            
            <GameImage 
              src="/assets/25/F12025/F1 ACESS 01.png" 
              alt="F1 2025 otimização" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="F1 2025 entrega uma excelente experiência, principalmente para quem curte jogar no singleplayer de forma casual, como é o meu caso. As mecânicas são sólidas, os gráficos estão incríveis e a otimização é simplesmente impecável, algo raro de se ver hoje em dia. Por outro lado, o jogo ainda peca na falta de conteúdo para o longo prazo, além da ausência de recursos que poderiam ser bem simples, como um modo de corrida livre ou até ferramentas de personalização, como criação de pistas, calendário dinâmico ou modos customizados. É importante destacar que essa análise foi feita totalmente baseada na minha experiência singleplayer, já que não joguei o modo online, pois não é o meu foco nesse tipo de jogo. Se você busca uma experiência casual, divertida e acessível, com boas corridas e bons gráficos, F1 2025 vale muito a pena. Agora, se você procura um jogo com alto fator de replay, mais longevidade e evolução de temporada em temporada, talvez acabe se sentindo limitado depois de algum tempo. Inclusive, se esse é o seu perfil, uma alternativa que recomendo é o Motorsport Manager, da Sega, que tem uma comunidade muito ativa, cheia de mods atualizados, permitindo alterar temporadas, regras e até adicionar pistas e pilotos fictícios ou reais. É um jogo bem diferente, mais focado na gestão, mas entrega um fator replay muito maior. Sobre o F1 Manager da Frontier, infelizmente não posso opinar, já que não joguei. F1 2025 é um ótimo jogo, mas ainda carrega aquele sentimento de que poderia ser mais."
            rating={87}
            date="31/05/2025 02:30"
          />
        </div>
      </div>
    </>
  );
};

export default F12025;