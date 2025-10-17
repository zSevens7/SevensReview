// src/pages/jogos/PokemonYellowLegacy.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';

const PokemonYellowLegacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <Helmet>
        <title>Pokemon Yellow Legacy - Review Completo | Melhoria do Clássico Amarelo</title>
        <meta 
          name="description" 
          content="Análise detalhada do Pokemon Yellow Legacy, hack ROM que aprimora o clássico Yellow com novas mecânicas, protagonista feminina e melhorias de qualidade de vida."
        />
        <meta name="keywords" content="Pokemon Yellow Legacy, Hack ROM, Pokemon Yellow, Game Boy, Primeira Geração, Kanto" />
        <meta property="og:title" content="Pokemon Yellow Legacy - A Versão Aprimorada do Clássico" />
        <meta 
          property="og:description" 
          content="Descubra como esta hack ROM moderniza o Pokemon Yellow com running shoes, novos ataques e protagonista feminina"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/25/PokemonYellow/frontpage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pokemon Yellow Legacy - Review Completo" />
        <meta name="twitter:description" content="A hack ROM que traz melhorias modernas ao clássico Pokemon Yellow" />
        <meta name="twitter:image" content="/assets/25/PokemonYellow/frontpage.png" />
      </Helmet>

      <ReviewHeader
        title="Pokemon Yellow Legacy"
        subtitle=""
        rating={86}
        coverImage="/assets/25/PokemonYellow/frontpage.png"
        logo="/assets/25/PokemonYellow/frontpage.png"
        genre="RPG Turno/Aventura"
        releaseDate="2024-05-14"
        developer={{
          name: "TheSmithPlays",
          countryFlag: "/assets/flags/japan.png"
        }}
        publisher="Hackroom"
        engine="Game Boy"
        platforms={["Microsoft Windows", "Mobile"]}
      />

      <div className="mt-8">
        {/* Introdução */}
        <ReviewSection title="Introdução">
          <p className="mb-4">
            Dois anos após o lançamento de Pokémon Red e Blue, a Nintendo lançou Pokémon Yellow, 
            uma versão aprimorada desses jogos, no Japão em 1998, e na América do Norte e Europa em 1999 e 2000. 
            O jogo foi projetado para se assemelhar à série de anime Pokémon, com o jogador recebendo um Pikachu 
            como seu starter e seu rival iniciando a jornada com um Eevee. Alguns personagens não jogáveis também 
            foram inspirados no anime, como Jessie e James da Equipe Rocket.
          </p>
          <p className="mb-4">
            Fonte: <a 
              href="https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red,_Blue,_and_Yellow#Pok%C3%A9mon_Yellow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Wikipedia
            </a>
          </p>
          <p>
            Esta é a sinopse do jogo original, mas a versão Pokémon Yellow Legacy, criada pelo youtuber TheSmithPlays, 
            traz várias melhorias em relação ao jogo clássico. Nesta review, irei destacar algumas dessas melhorias.
          </p>
        </ReviewSection>

        {/* Mecânica */}
        <ReviewSection title="Mecânica" rating={85} ratingColor="bg-green-800 text-white">
          <p className="mb-4">
            A mecânica de andar com o Pikachu sempre foi um dos destaques do jogo original. Além disso, 
            era possível montar uma equipe semelhante à do Ash no anime, composta por Pikachu e os três iniciais de Kanto.
            As principais melhorias em Pokémon Yellow Legacy incluem:
          </p>
          
          <ul className="list-disc list-inside mb-4">
            <li>Adição de novos ataques.</li>
            <li>Possibilidade de substituir HMs a qualquer momento.</li>
            <li>Inclusão do Running Shoes para aumentar a velocidade do jogador.</li>
            <li>Opção de jogar com a protagonista feminina (Green).</li>
            <li>Adição de uma barra de experiência visível.</li>
          </ul>

          <p className="mb-4">
            Outro ponto positivo é que o Pikachu ganha atributos extras ao derrotar líderes de ginásio, 
            tornando-se mais útil no final do jogo.
          </p>

          <p className="mb-4">
            A dificuldade também foi ajustada: a partir do quinto ginásio, os líderes possuem mais Pokémon e níveis mais altos, 
            tornando o desafio mais interessante. As batalhas contra Sabrina e Blaine, por exemplo, foram particularmente 
            difíceis devido à força de suas equipes. O jogo também permite rebatalhar contra todos os líderes de ginásio 
            e a Elite Four com níveis aumentados.
          </p>

          <GameImage 
            src="/assets/25/PokemonYellow/Pyellowbatalha.png" 
            alt="Imagem do Pokemon Yellow Legacy batalha" 
          />
        </ReviewSection>

        {/* Gráficos */}
        <ReviewSection title="Gráficos" rating={80} ratingColor="bg-green-800 text-white">
          <p className="mb-4">
            O maior ponto fraco do jogo são os gráficos. Diferente de Pokémon Red e Blue, onde tudo era monocromático, 
            cada cidade e área em Pokémon Yellow Legacy possui sua própria paleta de cores, o que é um detalhe positivo.
          </p>
          <p className="mb-4">
            Os sprites dos Pokémon estão bem desenhados, mas as versões traseiras são de qualidade inferior. 
            Além disso, as animações dos ataques são simples. No entanto, considerando que o jogo utiliza uma engine 
            baseada na primeira geração de Pokémon (1996), essa limitação é compreensível.
          </p>

          <GameImage 
            src="/assets/25/PokemonYellow/Pyellowgrafico.png" 
            alt="Imagem do Pokemon Yellow Legacy gráfico" 
          />
        </ReviewSection>

        {/* Trilha Sonora */}
        <ReviewSection title="Trilha Sonora" rating={80} ratingColor="bg-green-800 text-white">
          <p>
            A trilha sonora do jogo é bem executada. As músicas das batalhas são marcantes, 
            e a famigerada Lavender Town Theme continua sendo uma das mais icônicas da franquia.
          </p>
        </ReviewSection>

        {/* História */}
        <ReviewSection title="História" rating={85} ratingColor="bg-green-800 text-white">
          <p className="mb-4">
            A história segue o padrão dos jogos clássicos da série, mas possui dois elementos que a tornam mais interessante:
          </p>
          
          <ol className="list-decimal list-inside mb-4">
            <li>O rival Blue é um dos mais competitivos da franquia, sempre trocando seu time em busca dos Pokémon mais fortes, o que dá uma sensação de rivalidade realista.</li>
            <li>A trama da Equipe Rocket foi aprimorada com a adição de Jessie e James como chefes secundários. Isso torna as batalhas contra eles mais significativas e cria um elemento narrativo inédito para a primeira geração.</li>
          </ol>

          <GameImage 
            src="/assets/25/PokemonYellow/Pyellowhistoria.png" 
            alt="Imagem do Pokemon Yellow Legacy história" 
          />
        </ReviewSection>

        {/* Otimização */}
        <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
          <p>
            O jogo é muito bem otimizado. Ele roda sem problemas, tem um balanceamento adequado para evitar 
            grinding excessivo e permite utilizar todos os Pokémon disponíveis na geração sem dificuldades.
          </p>
        </ReviewSection>

        {/* Veredito Final */}
        <ReviewVeredito 
          text="Pokémon Yellow Legacy é uma excelente revisão do clássico Pokémon Yellow, trazendo melhorias na jogabilidade, na dificuldade e na narrativa. O jogo preserva a essência do original e adiciona elementos modernos que tornam a experiência ainda mais envolvente. Os gráficos são o ponto mais fraco, mas isso é compreensível devido à engine utilizada. A trilha sonora é nostálgica e continua memorável. A jogabilidade aprimorada, aliada às novas opções, faz deste um dos melhores rom hacks da primeira geração de Pokémon. Se você é fã da franquia e quer revisitar Kanto com melhorias significativas, Pokémon Yellow Legacy é uma excelente opção."
          rating={86}
          date="01/04/2025 16:38"
        />
        
        <div className="mt-4">
          <GameImage 
            src="/assets/25/PokemonYellow/Pyellowfinal.png" 
            alt="Imagem do Pokemon Yellow Legacy time" 
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonYellowLegacy;