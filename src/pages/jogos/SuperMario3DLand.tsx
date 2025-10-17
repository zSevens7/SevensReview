// src/pages/jogos/SuperMario3DLand.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';

const SuperMario3DLand: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <Helmet>
        <title>Super Mario 3D Land - Review Completo | Nintendo 3DS</title>
        <meta 
          name="description" 
          content="Análise detalhada do Super Mario 3D Land para Nintendo 3DS. Descubra este incrível jogo de plataforma que combina clássicos do Mario com gráficos 3D."
        />
        <meta name="keywords" content="Super Mario 3D Land, Nintendo 3DS, Mario, Plataforma, Puzzle, Nintendo EAD" />
        <meta property="og:title" content="Super Mario 3D Land - Review Completo do Clássico da Nintendo" />
        <meta 
          property="og:description" 
          content="Análise do jogo que marcou a estreia do Mario em 3D no Nintendo 3DS. Gráficos impressionantes e mecânicas perfeitas!"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/25/SuperMario3D/SuperMario3dFront.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Super Mario 3D Land - Review Completo" />
        <meta name="twitter:description" content="Análise do clássico jogo de plataforma do Mario para Nintendo 3DS" />
        <meta name="twitter:image" content="/assets/25/SuperMario3D/SuperMario3dFront.png" />
      </Helmet>

      <ReviewHeader
        title="Super Mario 3D Land"
        subtitle=""
        rating={88}
        coverImage="/assets/25/SuperMario3D/SuperMario3dFront.png"
        logo="/assets/25/SuperMario3D/SuperMario3dFront.png"
        genre="Plataforma/Puzzle"
        releaseDate="2011-11-03"
        developer={{
          name: "Nintendo EAD",
          countryFlag: "/assets/flags/japan.png"
        }}
        publisher="Nintendo"
        engine="Action Library"
        platforms={["Nintendo 3DS"]}
      />

      <div className="mt-8">
        {/* Introdução */}
        <ReviewSection title="Introdução">
          <p className="mb-4">
            Sinopse: Durante uma noite, uma enorme tempestade sopra todas as folhas da Árvore Tanuki e as espalha por vários lugares. 
            Na manhã seguinte, a Princesa Peach sai para ver como está a árvore, mas, durante sua inspeção, Bowser a sequestra. 
            Mais tarde, Mario e três Toads vão até a árvore à procura da princesa. Eventualmente, eles descobrem que todas as 
            Super Folhas desapareceram. O Toad amarelo percebe uma carta flutuando perto da árvore, e o grupo decide investigar. 
            Mario pega e abre a carta e vê uma foto de Bowser segurando a Princesa Peach, com as Super Folhas voando ao fundo. 
            Mario e os Toads imediatamente partem para salvar a princesa.
          </p>
          <p>
            Este não foi o meu primeiro Super Mario, os de plataforma, ja que tinha jogado no Nintendo 64 quando era criança, 
            mas demorei a jogar esses jogos, porque só consegui jogar eles quando consegui desbloquear meu nintendo 3DS depois 
            de muito tempo, só desbloquei ele quando a eShop acabou, e resumindo, joguei ele no meu 3DS e por isso não tenho 
            os prints, a maiora das fotos dessa review vem do local das pagina da internet, tanto da loja da nintendo e da amazon.
          </p>
        </ReviewSection>

        {/* Mecânica */}
        <ReviewSection title="Mecânica" rating={95} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            Eu amei as mecânicas apresentadas nesse jogo. Ele conseguiu combinar perfeitamente as mecânicas clássicas com 
            o novo visual gráfico em 3D (tema que abordarei mais adiante). O jogo marca o retorno da famosa mecânica do 
            "Tanuki Suit", que permite ao personagem planar por um tempo, deixando a gameplay mais fácil e variada.
          </p>
          <p className="mb-4">
            Gostei muito de como os puzzles foram integrados ao visual 3D. Às vezes, você precisava observar o cenário de 
            outro ângulo, ou calcular bem o pulo. Enfim, souberam aproveitar muito bem a introdução do 3D à franquia Super Mario.
          </p>
          <p className="mb-4">
            O meu único problema — ou talvez não — foram os easter eggs espalhados pelo mapa. Eram três moedas especiais 
            por fase, mas era um pouco frustrante quando você precisava de uma certa quantidade mínima delas para avançar 
            no jogo. Se não me engano, no final eram necessárias cerca de 100 moedas douradas. Acabei tendo que voltar em 
            várias fases para encontrar essas moedas escondidas nos mínimos detalhes.
          </p>

          <GameImage 
            src="/assets/25/SuperMario3D/SuperMario3D Mec.png" 
            alt="Imagem do Super Mario 3D Land" 
          />
        </ReviewSection>

        {/* Gráficos */}
        <ReviewSection title="Gráficos" rating={100} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            Essa foi a parte que mais me impressionou. O level design do jogo está simplesmente incrível. Não sei o nome 
            do responsável, mas a equipe está de parabéns! Os mundos são criativos, variados, e usam muito bem a perspectiva 3D. 
            Alguns têm visão de cima, outros exigem o uso do efeito 3D para entender os desafios — em resumo, conseguiram usar 
            todos os recursos do console para oferecer a melhor experiência possível.
          </p>
          <p className="mb-4">
            Em relação aos gráficos em si, o jogo é lindo para um título de 2011. E mesmo hoje, continuo achando que a 
            proposta visual se mantém charmosa e bem executada.
          </p>

          <GameImage 
            src="/assets/25/SuperMario3D/SuperMario3D Gra.png" 
            alt="Imagem de Super Mario 3D Land" 
          />
        </ReviewSection>

        {/* Trilha Sonora */}
        <ReviewSection title="Trilha Sonora" rating={80} ratingColor="bg-green-800 text-white">
          <p>
            Sobre a trilha sonora, não tenho muito o que comentar. É boa, mas nada marcante demais. Pode ser um pouco 
            nostálgica para quem já conhece as músicas do Mario, que sempre ficam na cabeça. Aqui não é diferente: 
            não é uma trilha ruim nem excelente, mas cumpre bem o papel.
          </p>
        </ReviewSection>

        {/* História */}
        <ReviewSection title="História" rating={65} ratingColor="bg-red-600 text-white">
          <p className="mb-4">
            Esse é o ponto mais fraco do jogo, o que é até compreensível, já que se trata de um jogo de plataforma e puzzle, 
            onde a história não costuma ser o foco. Ainda assim, conseguiram dar um contexto básico do que está acontecendo, 
            e isso já ajuda na imersão. Por isso, minha nota é 65: aceitável. Há também alguns chefes novos além do clássico 
            Bowser (neste caso eu não sei se é novo ou não, porque foi a minha primeira vez que vi eles no jogo do Mario)
          </p>

          <GameImage 
            src="/assets/25/SuperMario3D/SuperMario3D Hist.png" 
            alt="Imagem de Super Mario 3D Land" 
          />
        </ReviewSection>

        {/* Otimização */}
        <ReviewSection title="Otimização" rating={100} ratingColor="bg-yellow-400 text-black">
          <p>
            Joguei o game em português de Portugal, e mesmo com o idioma disponível, o jogo praticamente não depende de textos, 
            já que tem foco em ação e plataforma. Um destaque positivo é que o jogo ajuda bastante o jogador que tiver dificuldades: 
            se você errar muito em uma fase, o personagem recebe um item especial no início (como uma estrela com tempo infinito) 
            ou até um bloco que permite terminar a fase direto — mas sem ganhar as moedas especiais, o que torna essa ajuda 
            opcional e não obrigatória.
          </p>
        </ReviewSection>

        {/* Veredito Final */}
        <ReviewVeredito 
          text="Super Mario 3D Land é um jogo divertido, bem otimizado e visualmente criativo. As mecânicas funcionam muito bem e aproveitam ao máximo o 3D do console. Mesmo com uma história simples, ele compensa em jogabilidade e design. Vale muito a pena jogar!"
          rating={88}
          date="17/05/2025 15:13"
        />
      </div>
    </div>
  );
};

export default SuperMario3DLand;