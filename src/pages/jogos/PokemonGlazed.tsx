// src/pages/jogos/PokemonGlazed.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';

const PokemonGlazed: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <Helmet>
        <title>Pokemon Glazed - Review Completo | Hack ROM Inovadora</title>
        <meta 
          name="description" 
          content="Análise detalhada do Pokemon Glazed, hack ROM baseada no Emerald com nova região, história original e mecânicas aprimoradas."
        />
        <meta name="keywords" content="Pokemon Glazed, Hack ROM, Pokemon Emerald, Tunod, RPG, Game Boy Advance" />
        <meta property="og:title" content="Pokemon Glazed - Review Completo da Hack ROM" />
        <meta 
          property="og:description" 
          content="Descubra esta incrível hack ROM com nova região, história original e Elite Four baseada em cores"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/25/POKEMONGLAZED/pokemonglazed1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pokemon Glazed - Análise Completa" />
        <meta name="twitter:description" content="Review da hack ROM que traz nova região e mecânicas inovadoras" />
        <meta name="twitter:image" content="/assets/25/POKEMONGLAZED/pokemonglazed1.png" />
      </Helmet>

      <ReviewHeader
        title="Pokemon Glazed"
        subtitle=""
        rating={87}
        coverImage="/assets/25/POKEMONGLAZED/pokemonglazed1.png"
        logo="/assets/25/POKEMONGLAZED/pokemonglazed1.png"
        genre="RPG de Turno/Aventura"
        releaseDate="2022-01-01"
        developer={{
          name: "Lucboi",
          countryFlag: "/assets/flags/japan.png"
        }}
        publisher="Internet Patch"
        engine="Pokemon Emerald"
        platforms={["PC"]}
      />

      <div className="mt-8">
        {/* Introdução */}
        <ReviewSection title="Introdução">
          <p>
            Hoje é o dia em que você faz 12 anos, o que significa que hoje é o dia em que você ganha seu primeiro Pokémon. 
            Mas se você estava esperando uma jornada sem incidentes pela região de Tunod, você está completamente enganado. 
            Um poder misterioso está colocando o mundo Pokémon e o mundo real em rota de colisão. Uma equipe misteriosa 
            espreita nas ruínas da antiga Tunod, com um propósito misterioso. Você encontrará aliados em três treinadores 
            itinerantes da região de Johto, bem como um Pikachu de cachecol determinado a se vingar. Você será capaz de lidar com isso?
          </p>
        </ReviewSection>

        {/* Mecânica */}
        <ReviewSection title="Mecânica" rating={85} ratingColor="bg-green-800 text-white">
          <p className="mb-4">
            A versão <strong>Glazed</strong> introduz a opção de escolher 5 Pokémon (3 iniciais de Sinnoh, um Shinx e um Riolu). 
            Escolhi o Riolu, o que achei bem diferente. Além disso, o jogo permite usar diversos TMs (algo comum em hackrooms) 
            e também possibilita trocar HMs sem precisar recorrer ao Move Deleter (por exemplo, troquei Waterfall por Surf sem complicações). 
            Um grande ponto positivo é a resolução do problema de grind de XP. O jogo permite rebatalhar alguns treinadores e desafios, 
            o que facilita bastante o ganho de experiência para o seu grupo.
          </p>
          
          <GameImage 
            src="/assets/25/POKEMONGLAZED/POKEMONGLAZED7.png" 
            alt="Meu time no jogo final" 
          />

          <p className="mt-4 mb-4">
            A dificuldade do jogo é bem equilibrada, apresentando um nível levemente maior que os jogos normais. 
            Não é extremamente desafiador, mas me deparei com dificuldades específicas nos seguintes ginásios: 3º, 6º, 7º e 8º. 
            Quanto aos rivais, são apresentados três, cada um utilizando um inicial de Johto. Um detalhe interessante é que o jogo 
            entrega um dispositivo para se comunicar com seu Pokémon, o que traz uma interação divertida.
          </p>

          <p className="mb-4">
            Em relação aos vilões, eles são representados por um grupo que parece uma fusão entre a Team Rocket e a Team Galactic. 
            Porém, o ponto negativo é que muitos vilões usam Pokémon do tipo Fighting ou Rock, o que se torna repetitivo. 
            Além disso, as batalhas contra os chefes acabam sendo meio "meme" devido às escolhas de Pokémon.
          </p>

          <p className="mb-4">
            Um detalhe que achei inovador foi como a Elite Four é representada: em vez de se especializarem por tipo, 
            os membros se baseiam em cores. Por exemplo, há um personagem que só utiliza Pokémon laranja, mas com vários tipos diferentes, 
            o que torna as batalhas mais desafiadoras e interessantes.
          </p>

          <GameImage 
            src="/assets/25/POKEMONGLAZED/pokemonglazed1.png" 
            alt="Elite FOUR" 
          />

          <p className="mt-4">
            No entanto, um ponto negativo da mecânica foi o pouco uso de puzzles nos ginásios. Em algumas partes, como nas cavernas, 
            os puzzles de Strength foram fáceis demais e pareciam estar ali apenas para bloquear o progresso do jogador, 
            sem um desafio significativo.
          </p>
        </ReviewSection>

        {/* Gráficos */}
        <ReviewSection title="Gráficos" rating={85} ratingColor="bg-green-800 text-white">
          <p className="mb-4">
            Os gráficos têm pontos positivos, como o trabalho dos desenvolvedores no design do mapa e na progressão, 
            que guia o jogador de forma eficiente, utilizando os HMs estrategicamente. Além disso, Pokémon de gerações além da 3ª 
            foram adicionados (como a base de Emerald ROM), e houve mudanças nos estilos de arte de Pokémon que utilizam Fly, Surf e Dive. 
            A imagem abaixo mostra o mapa como é, vale lembrar que o jogo tem um pós-game em jotho com acontecimentos de 10 ou 15 anos 
            depois da jornada em Gold/Silver, resumindo as coisas estão diferentes.
          </p>
          
          <GameImage 
            src="/assets/25/POKEMONGLAZED/pokemonglazed8.png" 
            alt="Mapa do Pokemon Glazed" 
          />

          <p className="mt-4 mb-4">
            Os designs dos líderes de ginásio, vilões e rivais criados para o jogo são bons. Não são incríveis, mas ultrapassam o aceitável. 
            Mostrando abaixo um design de um líder de ginásio e o design da protagonista como ficaram.
          </p>

          <GameImage 
            src="/assets/25/POKEMONGLAZED/pokemonglazed6.png" 
            alt="Design do líder de ginásio e protagonista" 
          />
          
          <GameImage 
            src="/assets/25/POKEMONGLAZED/pokemonglazed5.png" 
            alt="Design do líder de ginásio e protagonista" 
          />

          <p className="mt-4">
            O único ponto negativo para mim foi o level design das cavernas, que ficou muito ruim e confuso. 
            A imagem abaixo mostra um exemplo que vou detalhar na parte de otimização.
          </p>
        </ReviewSection>

        {/* Trilha Sonora */}
        <ReviewSection title="Trilha Sonora" rating={80} ratingColor="bg-green-800 text-white">
          <p>
            A trilha sonora é satisfatória, mas nada impressionante. No geral, segue o padrão das músicas de jogos de Pokémon 
            da 3ª geração, sem grandes inovações.
          </p>
        </ReviewSection>

        {/* História */}
        <ReviewSection title="História" rating={95} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            Como mencionado anteriormente, a história é bem estruturada e guia o jogador com clareza, evitando confusões. 
            Apenas uma vez me senti perdido, mas isso foi devido a problemas no level design, e não na narrativa. 
            Os NPCs também ajudam a dar mais contexto para a região de Tunod e as cidades ao longo do jogo.
          </p>
          <p className="mb-4">
            Os vilões têm personalidades bem construídas e razões plausíveis para seus atos, lembrando um pouco os vilões 
            da Team Galactic e o vilão de Unova. Um problema, no entanto, é a ausência de "mini chefes". 
            Grande parte dos vilões é representada por Grunts (soldados genéricos), com apenas três variações. 
            Seria interessante se houvesse algum mini chefe logo no início da história.
          </p>

          <GameImage 
            src="/assets/25/POKEMONGLAZED/pokemonglazed4.png" 
            alt="Imagem do Pokemon Glazed" 
          />

          <p className="mt-4 mb-4">
            O jogo tenta compensar isso com um Pikachu selvagem que se junta ao grupo dos vilões para se vingar de você. 
            Porém, ele parece mais um bônus do que um verdadeiro mini chefe.
          </p>
          <p>
            Outro detalhe positivo foi a presença de um membro da Elite Four ajudando na luta contra os vilões. 
            Sua participação foi muito bem trabalhada, tanto na narrativa quanto nas batalhas, o que enriquece a experiência.
          </p>
        </ReviewSection>

        {/* Otimização */}
        <ReviewSection title="Otimização" rating={90} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            A otimização é um ponto positivo do jogo. Como mencionado na seção de mecânica, 
            ele facilita o ganho de experiência sem precisar recorrer a cheats.
          </p>
          <p className="mb-4">
            Entretanto, o maior problema de "otimização" está no level design das cavernas. 
            A saída de algumas partes é confusa e mal desenhada, como acontece na Mt. Stratus. 
            O mapa apresenta elementos visuais que não ajudam a identificar os caminhos corretos, como falta de iluminação clara. 
            Abaixo, incluo um exemplo que ilustra esse problema.
          </p>
          
          <GameImage 
            src="/assets/25/POKEMONGLAZED/pokemonglazed2.png" 
            alt="Exemplo de level design ruim" 
          />
        </ReviewSection>

        {/* Veredito Final */}
        <ReviewVeredito 
          text="Pokémon Glazed é uma experiência sólida e inovadora dentro do universo das hackrooms. Ele se destaca por introduzir mecânicas bem pensadas, como a possibilidade de rebatalhar treinadores e melhorar a progressão de XP, além de inovar na forma como a Elite Four é apresentada. A história do jogo é rica e bem conduzida, com vilões que apresentam boas motivações e NPCs que ajudam a contextualizar a narrativa de forma eficaz. O design gráfico é interessante, com adaptações inteligentes no level design geral, apesar de alguns tropeços, especialmente nas cavernas, onde o layout pode ser confuso e frustrante. A trilha sonora, embora funcional, mantém-se dentro do esperado para a franquia, sem grandes momentos marcantes. Mesmo com algumas falhas, como a ausência de 'mini chefes' entre os vilões e o uso repetitivo de certos tipos de Pokémon (dos intregantes dos vilões), o jogo compensa com criatividade e uma jogabilidade equilibrada. É uma ótima escolha para quem busca uma nova aventura no universo de Pokémon, com desafios únicos e um mundo intrigante para explorar."
          rating={87}
          date="17/03/2025 00:42"
        />
        
        <div className="mt-4">
          <GameImage 
            src="/assets/25/POKEMONGLAZED/pokemonglazed3.png" 
            alt="Imagem do Pokemon Glazed" 
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonGlazed;