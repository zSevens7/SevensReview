// src/pages/jogos/PokemonPolishedCrystal.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';

const PokemonPolishedCrystal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <Helmet>
        <title>Pokemon Polished Crystal 3.1.0 - Review Completo | Melhor Hack ROM do Crystal</title>
        <meta 
          name="description" 
          content="Análise detalhada do Pokemon Polished Crystal 3.1.0, a hack ROM definitiva que aprimora o Crystal original com novos Pokémon, mecânicas e conteúdo expandido."
        />
        <meta name="keywords" content="Pokemon Polished Crystal, Hack ROM, Pokemon Crystal, Game Boy Color, RPG, 2ª Geração" />
        <meta property="og:title" content="Pokemon Polished Crystal 3.1.0 - A Versão Definitiva do Crystal" />
        <meta 
          property="og:description" 
          content="Descubra esta incrível hack ROM que corrige todos os problemas do Crystal original e adiciona novos Pokémon, mapas e mecânicas"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/25/PokemonPCrystal/frontpage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pokemon Polished Crystal 3.1.0 - Review Completo" />
        <meta name="twitter:description" content="A hack ROM que transforma o Crystal na experiência definitiva da 2ª geração" />
        <meta name="twitter:image" content="/assets/25/PokemonPCrystal/frontpage.png" />
      </Helmet>

      <ReviewHeader
        title="Pokemon Polished Crystal 3.1.0"
        subtitle=""
        rating={96}
        coverImage="/assets/25/PokemonPCrystal/frontpage.png"
        logo="/assets/25/PokemonPCrystal/frontpage.png"
        genre="RPG Turno/Aventura"
        releaseDate="2025-01-01"
        developer={{
          name: "Rangi",
          countryFlag: "/assets/flags/japan.png"
        }}
        publisher="Hackroom"
        engine="Game Boy Color"
        platforms={["Microsoft Windows", "Mobile"]}
      />

      <div className="mt-8">
        {/* Introdução */}
        <ReviewSection title="Introdução">
          <p className="mb-4">
            "O enredo é o mesmo — você começa em New Bark Town, vence os ginásios de Johto e a Elite Four, 
            depois segue para Kanto e luta contra o Red. No entanto, adicionei novos Pokémon, novos movimentos, 
            novas mecânicas, novos mapas, novos eventos, novos treinadores, novos itens, novos bugs, e lutar 
            contra o Red nem é o fim do jogo. Também aumentei moderadamente a dificuldade, embora isso provavelmente 
            precise de ajustes." — rangi (criador da hackrom)
          </p>
          <p className="mb-4">
            O motivo de eu escolher jogar uma hackrom da versão Crystal não foi apenas pela possibilidade de 
            capturar todos os Pokémon, mas também pelos diversos problemas que a versão original apresentava. 
            Um deles era a falta de lógica na progressão dos líderes de ginásio, como o caso do Pryce: no Crystal 
            original, você podia enfrentá-lo antes mesmo do Chuck e da Jasmine, o que criava uma queda de nível 
            inesperada nos oponentes.
          </p>
          <p className="mb-4">
            Na versão modificada (hackrom), essa progressão foi corrigida e bem estruturada. Um ótimo exemplo 
            disso está na imagem que peguei do canal -SmithPlays Pokemon- (youtuber), mostrando a comparação 
            entre a rota original e a nova.
          </p>
          
          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemonintro.png" 
            alt="Imagem do pokemon polished crystal" 
          />

          <p className="mt-4">
            Outro erro do Crystal original era a sensação de que Johto era apenas uma "DLC" de Kanto. 
            Muitos Pokémon novos só estavam disponíveis após vencer a Elite Four, o que enfraquecia a identidade 
            da região. Essa hackrom corrige isso muito bem. Outro detalhe que foi aprimorado, mas ainda vem do 
            sucessor original, foi o antigo limite de espaço na mochila — agora muito mais funcional.
          </p>
        </ReviewSection>

        {/* Mecânica */}
        <ReviewSection title="Mecânica" rating={100} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            A parte mecânica me surpreendeu bastante, com várias melhorias excelentes para uma hackrom da 2ª geração. 
            Alguns destaques:
          </p>
          
          <ul className="list-disc list-inside mb-4">
            <li>Adição do tipo Fada;</li>
            <li>TM's reutilizáveis e possibilidade de deletar HM's;</li>
            <li>Os HM's não precisam estar equipados — basta ter um Pokémon compatível no time e apertar "A" no local, agilizando a exploração;</li>
            <li>Interface reorganizada na lista de ataques dos Pokémon.</li>
          </ul>

          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemonmec1.png" 
            alt="pokemon MEC 1" 
          />

          <ul className="list-disc list-inside mb-4 mt-4">
            <li>Possibilidade de escolher um terceiro personagem, com a introdução da Lyra, que aparece no SoulSilver.</li>
          </ul>

          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemonmec2.png" 
            alt="pokemon MEC 2" 
          />

          <ul className="list-disc list-inside mb-4 mt-4">
            <li>Pós-game expandido, com opções como Battle Tower e rebatalhas com líderes, com mudanças nos times e níveis — por exemplo, o Bugsy não tem mais Metapod e Kakuna.</li>
            <li>Mais espaço para itens: só precisei acessar o PC ao chegar em Viridian.</li>
            <li>As Poké Balls feitas pelo Kurt são entregues na hora!</li>
            <li>Sprites com variações de cor inspiradas em Pokémon Colosseum. Ex: um Pidgey pode ter uma coloração diferente, mas com os mesmos status.</li>
            <li>Inclusão de novas formas de Pokémon e aumento do limite de 251 para 344 Pokémon, algo impensável na época do Game Boy.</li>
          </ul>

          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemonmec3.png" 
            alt="pokemon MEC 3" 
          />
        </ReviewSection>

        {/* Gráficos */}
        <ReviewSection title="Gráficos" rating={100} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            Tenho um gosto especial pela arte em pixel da 2ª geração. A estética me encanta. 
            Algumas melhorias que chamaram minha atenção:
          </p>
          
          <ul className="list-disc list-inside mb-4">
            <li>É possível decorar seu quarto. Abaixo, um exemplo de como o meu ficou com os troféus das duas vezes que enfrentei a Elite Four.</li>
          </ul>

          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemongra1.png" 
            alt="Imagem Pokémon GRA 1" 
          />

          <ul className="list-disc list-inside mb-4 mt-4">
            <li>Novos locais, alguns criados pelo autor e outros inspirados nas Ilhas Laranja. Apesar de algumas partes parecerem inacabadas (como exemplo a ilha de shamouti tem falta de dialogo com NPCs), a ideia é promissora.</li>
            <li>O mapa foi redesenhado, com novos lugares e detalhes interessantes como a linha de trem de Goldenrod até Saffron.</li>
          </ul>

          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemongra2.png" 
            alt="Imagem Pokémon GRA 2" 
          />
          
          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemongra3.png" 
            alt="Imagem Pokémon GRA 3" 
          />
        </ReviewSection>

        {/* Trilha Sonora */}
        <ReviewSection title="Trilha Sonora" rating={80} ratingColor="bg-green-800 text-white">
          <p>
            A trilha sonora é boa, com pequenas melhorias em relação ao Crystal original, mas não chega a ser excepcional. 
            Ainda assim, cumpre bem seu papel.
          </p>
        </ReviewSection>

        {/* História */}
        <ReviewSection title="História" rating={100} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">A história foi muito bem expandida. Além dos novos mapas:</p>
          
          <ul className="list-disc list-inside mb-4">
            <li>Adição de uma nova missão com a Equipe Rocket, agora com quatro aparições ao invés de três. Destaque para o evento na Yellow Forest, onde aparecem Jessie e James.</li>
          </ul>

          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemonhis1.png" 
            alt="Imagem Pokémon his 1" 
          />

          <ul className="list-disc list-inside mb-4 mt-4">
            <li>Inclusão de líderes Rocket com sprites únicos, como o Archer, o que deixa as batalhas mais marcantes.</li>
          </ul>

          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemonhis2.png" 
            alt="Imagem Pokémon his 2" 
          />

          <ul className="list-disc list-inside mb-4 mt-4">
            <li>Detalhes imersivos como jornais nos Centros Pokémon relatando eventos da cidade e dos líderes.</li>
            <li>A Lyra tem uma participação bem feita no pós-jogo, inclusive batalhando pelos líderes de Johto.</li>
            <li>A progressão foi linearizada após o 4º ginásio, forçando o jogador a seguir a ordem lógica de eventos, o que corrige a bagunça da versão original.</li>
          </ul>
        </ReviewSection>

        {/* Otimização */}
        <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
          <p>
            Não encontrei bugs durante minha jogatina. Todos os elementos mencionados na parte de mecânica funcionaram 
            perfeitamente, e o ritmo do jogo ficou ótimo. Nem senti a necessidade de "grindar" XP.
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            * Nota: A otimização recebeu pontuação máxima devido ao excelente desempenho e ausência de bugs.
          </p>
        </ReviewSection>

        {/* Veredito Final */}
        <ReviewVeredito 
          text="Antes de começar o veredito final, só quero compartilhar o meu time para primeira Elite Four, o electabuzz era shiny que veio do ovo shiny entregue em goldenrod. Essa hackrom é, com certeza, uma das melhores experiências que já tive com a 2ª geração. Ela respeita a essência do Pokémon Crystal original, mas corrige quase todos os seus defeitos, expande a história, melhora as mecânicas, otimiza o sistema de batalha, dá vida aos mapas e ainda cria uma experiência de pós-jogo divertida e desafiadora. A personalização, a introdução de personagens clássicos como Lyra, Jessie e James, os novos Pokémon e mapas inéditos transformam essa versão em algo especial para fãs nostálgicos e novos jogadores."
          rating={96}
          date="18/04/2025 20:31"
        />
        
        <div className="mt-4">
          <GameImage 
            src="/assets/25/PokemonPCrystal/pokemonver1.png" 
            alt="Imagem Pokémon veredito" 
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonPolishedCrystal;