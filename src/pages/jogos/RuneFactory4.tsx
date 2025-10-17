// src/pages/jogos/RuneFactory4.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';

const RuneFactory4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <Helmet>
        <title>Rune Factory 4 - Review Completo | Análise do RPG de Fazenda</title>
        <meta 
          name="description" 
          content="Análise detalhada do Rune Factory 4 para Nintendo 3DS. Descubra os prós e contras deste RPG que combina agricultura com aventura em dungeons."
        />
        <meta name="keywords" content="Rune Factory 4, Nintendo 3DS, RPG, Simulador de Fazenda, Harvest Moon, Marvelous, xSeed Games" />
        <meta property="og:title" content="Rune Factory 4 - Review Completo do RPG de Fazenda" />
        <meta 
          property="og:description" 
          content="Análise do jogo que mistura agricultura com aventura em dungeons. Será que vale a pena jogar?"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/25/RuneFactory4/RuneFactory 4 Frontpage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rune Factory 4 - Review Completo" />
        <meta name="twitter:description" content="Análise do RPG que combina fazenda com aventura em dungeons" />
        <meta name="twitter:image" content="/assets/25/RuneFactory4/RuneFactory 4 Frontpage.png" />
      </Helmet>

      <ReviewHeader
        title="Rune Factory 4"
        subtitle=""
        rating={73}
        coverImage="/assets/25/RuneFactory4/RuneFactory 4 Frontpage.png"
        logo="/assets/25/RuneFactory4/RuneFactory 4 Frontpage.png"
        genre="Simulador/Aventura"
        releaseDate="2012-06-19"
        developer={{
          name: "Neverland",
          countryFlag: "/assets/flags/japan.png"
        }}
        publisher="Marvelous / xSeed Games"
        engine=""
        platforms={["Nintendo 3DS"]}
      />

      <div className="mt-8">
        {/* Introdução */}
        <ReviewSection title="Introdução">
          <p className="mb-4">
            Em Rune Factory 4, para Nintendo 3DS, o jogador assume o papel de um novo habitante da vila de Selphia, 
            confundido com um príncipe e, portanto, encarregado de resolver os problemas da região. Inicialmente, 
            o protagonista perde a memória e precisa reconstruir sua vida e identidade enquanto se envolve em 
            atividades como cultivar a terra, criar monstros, pescar e cozinhar.
          </p>
          <p>
            Apenas um detalhe, eu usei as imagens buscada na internet no google, ja que joguei o jogo no meu nintendo 3ds.
          </p>
        </ReviewSection>

        {/* Mecânica */}
        <ReviewSection title="Mecânica" rating={70} ratingColor="bg-red-300 text-black">
          <p className="mb-4">
            A mecânica do jogo lembra bastante Harvest Moon, um simulador de fazenda em que você vive em uma vila 
            e precisa ajudar na sua evolução. Um ponto interessante é a combinação de dois estilos: batalhas em dungeons 
            e a clássica rotina de fazendinha. O conceito de Rune Factory é, de fato, muito interessante, 
            mas acredito que Stardew Valley conseguiu implementar essa ideia de forma mais equilibrada.
          </p>
          
          <ul className="list-disc list-inside mb-4">
            <li>A possibilidade de explorar dungeons com aliados que ajudam nas batalhas.</li>
            <li>Um sistema de progressão de XP semelhante ao de RuneScape, onde praticamente qualquer ação contribui para o avanço do personagem.</li>
            <li>A interação social, que permite dar presentes aos moradores e cumprir missões diárias para acumular pontos. Esses pontos podem ser usados para melhorar a fazenda, o inventário e até realizar feriados na cidade.</li>
          </ul>

          <p className="mb-4">Por outro lado, há falhas importantes:</p>
          
          <ul className="list-disc list-inside mb-4">
            <li>A parte da fazenda é pouco relevante. Os itens obtidos com monstros costumam valer mais do que os cultivados, o que tira o foco da mecânica agrícola (algo que Stardew Valley equilibra melhor).</li>
            <li>O sistema de combate não é muito desafiador.</li>
            <li>E, pessoalmente, não gostei da localização da casa do protagonista na vila — achei mal planejada e desconectada.</li>
          </ul>

          <GameImage 
            src="/assets/25/RuneFactory4/RuneFactory4 Mec.png" 
            alt="Imagem de Rune Factory 4" 
          />
        </ReviewSection>

        {/* Gráficos */}
        <ReviewSection title="Gráficos" rating={70} ratingColor="bg-red-300 text-black">
          <p className="mb-4">
            Os designs dos personagens são muito bonitos, e o jogo ainda apresenta algumas cutscenes em estilo anime, 
            como se fossem vídeos em 720p — o que dá um charme especial. No entanto, o design do mundo em si é um 
            pouco decepcionante, o que acabou influenciando negativamente a nota.
          </p>

          <GameImage 
            src="/assets/25/RuneFactory4/RuneFactory4 Gra.png" 
            alt="Imagem de Rune Factory 4" 
          />
        </ReviewSection>

        {/* Trilha Sonora */}
        <ReviewSection title="Trilha Sonora" rating={60} ratingColor="bg-red-600 text-white">
          <p>
            A trilha sonora é apenas mediana. Um detalhe curioso é que alguns personagens soltam pequenos áudios 
            durante certas cenas — como simples cumprimentos. É um toque simpático, mas nada marcante.
          </p>
        </ReviewSection>

        {/* História */}
        <ReviewSection title="História" rating={70} ratingColor="bg-red-300 text-black">
          <p className="mb-4">
            A história está presente, mas a forma como o universo do jogo é apresentado deixa a desejar. 
            Achei pouco envolvente a introdução do personagem e o local onde ele passa a viver. Para avançar na trama, 
            é necessário progredir nas dungeons, o que exige se fortalecer e estudar os inimigos.
          </p>

          <GameImage 
            src="/assets/25/RuneFactory4/RuneFactory4 Hist.png" 
            alt="Imagem de Rune Factory 4" 
          />
        </ReviewSection>

        {/* Otimização */}
        <ReviewSection title="Otimização" rating={90} ratingColor="bg-yellow-400 text-black">
          <p>
            O jogo é bem otimizado: não sofre com quedas de FPS e roda de forma estável. O único ponto negativo 
            é a ausência de legendas em português, algo comum no 3DS, mas que aqui faz bastante falta para 
            acompanhar melhor a história.
          </p>
        </ReviewSection>

        {/* Veredito Final */}
        <ReviewVeredito 
          text="Rune Factory 4 tem ideias boas, mas a execução peca em vários aspectos — especialmente no equilíbrio entre os sistemas de combate e fazenda, além da ambientação e envolvimento com a história. Apesar de algumas qualidades, como a otimização e os personagens visualmente bonitos, a experiência não me prendeu o suficiente. Dropei o jogo após cerca de 8 horas de gameplay."
          rating={73}
          date="08/06/2025 20:47"
        />
      </div>
    </div>
  );
};

export default RuneFactory4;