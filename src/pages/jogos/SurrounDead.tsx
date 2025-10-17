// src/pages/jogos/SurrounDead.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';

const SurrounDead: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <Helmet>
        <title>SurrounDead - Review Completo | Jogo de Sobrevivência Zumbi</title>
        <meta 
          name="description" 
          content="Análise detalhada do SurrounDead, jogo de sobrevivência FPS em mundo aberto com zumbis. Descubra as mecânicas, gráficos e otimização deste survival game."
        />
        <meta name="keywords" content="SurrounDead, Jogo de Sobrevivência, Zumbi, FPS, Unreal Engine 5, Survival Game" />
        <meta property="og:title" content="SurrounDead - Review do Jogo de Sobrevivência Zumbi" />
        <meta 
          property="og:description" 
          content="Análise completa do SurrounDead: mecânicas realistas, sistema de crafting e sobrevivência em mundo aberto pós-apocalíptico"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/25/SurrounDead/frontpage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SurrounDead - Review Completo" />
        <meta name="twitter:description" content="Análise do jogo de sobrevivência FPS com zumbis em mundo aberto" />
        <meta name="twitter:image" content="/assets/25/SurrounDead/frontpage.png" />
      </Helmet>

      <ReviewHeader
        title="SurrounDead"
        subtitle=""
        rating={78}
        coverImage="/assets/25/SurrounDead/frontpage.png"
        logo="/assets/25/SurrounDead/frontpage.png"
        genre="FPS/Sobrevivência"
        releaseDate="2022-06-24"
        developer={{
          name: "Zurvivor",
          countryFlag: "/assets/flags/usa.png"
        }}
        publisher="PlaySurrounDead"
        engine="Unreal Engine 5"
        platforms={["PC"]}
      />

      <div className="mt-8">
        {/* Introdução */}
        <ReviewSection title="Introdução">
          <p>
            Sinopse: SurrounDead é um jogo de sobrevivência em mundo aberto. Ambientado em um mundo devastado 
            por uma catástrofe apocalíptica, os mortos reinam livres e não medirão esforços para te matar.
          </p>
        </ReviewSection>

        {/* Mecânica */}
        <ReviewSection title="Mecânica" rating={90} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            Eu gostei muito de jogar SurrounDead. O jogo é bem criativo na questão de sobrevivência. 
            Vou citar alguns pontos que achei muito legais: dependendo do item ou roupa que você pega, 
            seu inventário ganha mais espaço, te permitindo carregar mais recursos. Achei isso muito interessante. 
            Além disso, é necessário comer e beber ao longo do jogo, e os itens possuem uma condição que se desgasta 
            com o tempo, o que adiciona mais realismo à mecânica.
          </p>
          <p className="mb-4">
            Outro ponto que me agradou é que, mesmo sendo singleplayer, o criador adicionou IAs de bandidos 
            que tentam te matar. Ou seja, o mundo não é feito só de zumbis, há vários outros perigos. 
            Também existem zonas seguras onde é possível vender e comprar recursos, o que é bem legal.
          </p>

          <GameImage 
            src="/assets/25/SurrounDead/SurrounDead_mec_01.png" 
            alt="SurrounDead mecânica" 
          />

          <p className="mt-4 mb-4">
            Talvez o único problema nesse aspecto seja justamente o fato do jogo ser apenas singleplayer (por enquanto). 
            Porém, já ouvi rumores de que o desenvolvedor planeja lançar um modo cooperativo no futuro, o que, 
            na minha opinião, será uma adição muito bem-vinda.
          </p>
          <p className="mb-4">
            Por outro lado, algo que me incomodou foi o sistema de crafting. Apesar de necessário, principalmente 
            para sobreviver à noite (como ao fazer uma fogueira, por exemplo), o processo é meio chato. 
            Você precisa encontrar ferramentas como picareta ou machado para coletar recursos, e isso torna a 
            experiência um pouco cansativa. Diferente de outros jogos que facilitam um pouco essa parte, 
            SurrounDead aposta mais no realismo. No meu caso, senti falta de algo mais dinâmico, que priorizasse 
            mais a diversão do que a simulação.
          </p>
          <p className="mb-4">
            Outro ponto positivo é o sistema de evolução de habilidades, bem parecido com RuneScape: 
            qualquer coisa que você faz vai aumentando sua skill. Achei isso muito bacana e bem implementado.
          </p>

          <GameImage 
            src="/assets/25/SurrounDead/SurrounDead_mec_02.png" 
            alt="SurrounDead mecânica" 
          />
        </ReviewSection>

        {/* Gráficos */}
        <ReviewSection title="Gráficos" rating={80} ratingColor="bg-green-800 text-white">
          <p className="mb-4">
            O jogo foi desenvolvido na Unreal Engine 5. Os gráficos não são extremamente bonitos, mas são bem 
            otimizados e acessíveis para todos os tipos de computadores. O design do mundo é bem feito, e um 
            detalhe que gostei muito foi o sistema dinâmico de clima, que muda constantemente e traz mais imersão.
          </p>
          <p className="mb-4">
            O ponto negativo é que o mapa é sempre o mesmo, sem variações de bioma ou localização, o que, 
            com o tempo, pode cansar. Outro aspecto que senti falta foi na construção de bases. Fiz uma base 
            improvisada, mas, como comentei antes, faltam recursos e ferramentas no jogo para deixar esse 
            sistema mais robusto. Imagine se tivesse mais variedade de itens e a possibilidade de construir 
            uma fazenda, por exemplo? Seria incrível.
          </p>

          <GameImage 
            src="/assets/25/SurrounDead/SurrounDead_gra_01.png" 
            alt="SurrounDead gráficos" 
          />
        </ReviewSection>

        {/* Trilha Sonora */}
        <ReviewSection title="Trilha Sonora" rating={60} ratingColor="bg-red-600 text-white">
          <p>
            A trilha sonora é mediana. Os efeitos sonoros, principalmente dos tiros, são bem simples. 
            Não são ruins, mas também não se destacam. Pelo menos, não chegam a ser irritantes.
          </p>
        </ReviewSection>

        {/* História */}
        <ReviewSection title="História" rating={65} ratingColor="bg-red-600 text-white">
          <p className="mb-4">
            Apesar de ser um jogo sandbox, que te dá bastante liberdade, ele apresenta uma história bem simples, 
            basicamente voltada para te guiar até o comércio de compra e venda de armas. Achei interessante, 
            considerando que o foco do jogo está muito mais na mecânica do que na narrativa.
          </p>

          <GameImage 
            src="/assets/25/SurrounDead/SurrounDead_hist_01.png" 
            alt="SurrounDead história" 
          />
        </ReviewSection>

        {/* Otimização */}
        <ReviewSection title="Otimização" rating={95} ratingColor="bg-yellow-400 text-black">
          <p>
            O jogo roda super liso no meu PC. Porém, o maior problema aqui é a ausência de localização para 
            português (PT-BR). Mesmo que o jogo não tenha uma história tão complexa, seria muito bem-vinda 
            uma tradução, principalmente nas descrições dos itens e no sistema de crafting. Achei estranho 
            um jogo indie, em pleno 2025, não ter tradução nem para outras línguas.
          </p>
        </ReviewSection>

        {/* Veredito Final */}
        <ReviewVeredito 
          text="SurrounDead é um jogo com uma proposta bem interessante e divertido para quem gosta de sobrevivência. Ainda há espaço para melhorias, principalmente no sistema de crafting, na construção de base e na questão da localização, mas é um título que vale a pena acompanhar e jogar, especialmente se, no futuro, receber o tão aguardado modo cooperativo."
          rating={78}
          date="28/05/2025 21:30"
        />
      </div>
    </div>
  );
};

export default SurrounDead;