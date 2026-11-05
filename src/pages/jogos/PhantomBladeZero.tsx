// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\PhantomBladeZero.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const PhantomBladeZero: React.FC = () => {

  const gameData = {
    slug: "phantom-blade-zero",
    title: "Phantom Blade Zero",
    subtitle: "Depois de tanto hack slash \"soulslike\", finalmente temos um hack slash em sua pura essência apresentando excelente mecânica ao estilo kung fu chinês.",
    rating: 85, 
    coverImage: "/assets/26/PhantomBlade0/cover.png", 
    logo: "/assets/26/PhantomBlade0/frontpage.png",
    genre: "Hack and Slash / Aventura",
    releaseDate: "2026-10-29",
    developer: {
        name: "S-Game",
        countryFlag: "/assets/flags/china.png" 
    },
    publisher: "S-Game",
    engine: "Unreal Engine 5", 
    platforms: ["PlayStation 5", "Windows (Steam)"]
  };

  const seoDescription = "Review de Phantom Blade Zero. Analisamos o novo jogo AAA chinês de ação (Kungfupunk) que foca em puro hack and slash em vez de ser mais um soulslike genérico.";
  const seoKeywords = "Phantom Blade Zero review, análise Phantom Blade 0, S-Game, hack and slash, wuxia, kungfupunk, Unreal Engine 5";

  return (
    <>
      <Helmet>
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        
        <ReviewHeader {...gameData} />

        <div className="mt-8">

          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4 text-justify">Depois de Wukong, temos outro jogo AAA de um novo estúdio chinês. Porém, a diferença em relação a Wukong, que era um "soulslike" (na minha visão), é que Phantom Blade Zero é totalmente um "hack and slash". Bem, vou explicar mais sobre isso a seguir.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/PhantomBlade0/mecanica.png" 
              alt="Combate Hack and Slash de Phantom Blade Zero" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Bem, até eu mesmo estava com receio de comprar o jogo. Motivo? Bem, depois do sucesso de Elden Ring em 2022, que foi um clássico dos soulslikes, as empresas começaram a fazer tudo como se fosse um soulslike da vida. Digo, o "hack and slash" nasceu antes de Dark Souls 1, e meio que vejo os soulslikes como um "hack and slash" diferenciado, que tenta ser focado em duas coisas simples. A primeira é fazer a batalha ser bem punitiva ao jogador. Por exemplo, em Dark Souls, qualquer ação do jogador, seja esquivar, atacar ou defender, gasta "stamina". Eu mesmo não sou fã disso, porque faz o jogador ficar muito preso. Outra coisa que acho que torna um jogo um soulslike é não ter escolha de dificuldade, ou seja, a dificuldade do jogo já vem como padrão em um nível bem difícil. E alguns jogos que tentaram copiar os soulslikes até exageram nisso, sabe? Eu mesmo tenho uma opinião controversa em relação aos jogadores de soulslikes: eu os chamo de masoquistas, porque, afinal de contas, eles gostam de apanhar para o mesmo "boss" sempre, e digo umas 50 vezes ou até mais. E por que gostam? Alguns gostam porque sentem que zerar um jogo desses é como conquistar um troféu. Enfim, dificuldade, para mim, deveria ser de livre escolha para todos. Não é à toa que God of War é um bom exemplo disso: qualquer um pode zerar, mas ainda vai encontrar batalhas difíceis, como as Valkírias, enquanto outras partes seguem a dificuldade normal da história. E, para aproveitar depois desse textão, o jogo tem 4 dificuldades: 3 você pode escolher na sua primeira jogatina, e a 4ª é uma bem difícil, na qual o jogador só tem 66 vidas.</p>
            <p className="mb-4 text-justify">A mecânica do jogo, pela nota, você já consegue perceber, e sim, ela é o ponto forte do jogo. Por quê? Bem, o desenvolvedor do jogo disse que foi inspirado no Kung Fu chinês, e realmente parece um filme chinês em que os caras ficam dando piruetas e coisas do tipo. E, no fim, deu certo no jogo, ficou bem legal. Quando você acerta um "parry azul" perfeito ou uma esquiva "vermelha", meu pensamento foi: que cinema! E o jogo consegue mostrar isso já nas suas primeiras horas de jogatina.</p>
            <p className="mb-4 text-justify">O jogo possui uma barra de vida e outra que, dentro da lore do jogo, é chamada de "sha-chi". Seria uma mistura de mana + "stamina". Mas o que seria o sha-chi? Bem, não vou explicar exatamente o que é dentro do jogo, mas sim para que serve, porque isso é importante para você saber se vai gostar ou não da mecânica. Quando você bloqueia um ataque, gasta um pouco do seu sha-chi. Se bloquear no tempo exato, vai consumir o sha-chi do adversário. Ao mesmo tempo, você tem um ataque especial (Triângulo no controle) que consome seu sha-chi e reduz o do seu adversário, mesmo se ele defender. Quando o sha-chi acaba, tanto você quanto o adversário não conseguem mais defender de jeito nenhum. Mas isso também não quer dizer que você não possa atacar, ou seja, você é livre para continuar atacando. Essa parte algumas pessoas não gostaram, porque você pode quebrar a defesa adversária e ainda assim ser punido. Mas acho que permitir apenas defender com parries tornaria o jogo muito fácil, então entendi o lado dos desenvolvedores. Existem alguns ataques que também são fortes, mas acho que não é necessário explicá-los, porque não são algo básico no jogo, e sim mecânicas mais avançadas que você não pode usar a todo momento.</p>
            <p className="mb-4 text-justify">Um outro fator que também é importante explicar é que os inimigos não voltam dos mortos. O que é isso? Lembra quando você carrega um save e eles voltam? Aqui isso não vai acontecer. Pode ser bom se você estiver de saco cheio de matar os mesmos inimigos, mas pode ser ruim se quiser testar builds. Tem seus prós e contras. Acho que o jogo não foi feito para grindar XP ou loot. Na real, o jogo nem tem barra de experiência, ele é puro "hack and slash". Tirando todos esses comentários, acho que expliquei bem o funcionamento das mecânicas básicas do jogo. Além disso, vai por mim, o jogo tem uma boa variedade de armas, estilos de luta diferentes e batalhas contra os bosses bem interessantes. Então, se gostar da mecânica, não vai se arrepender.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90}>
            <p className="mb-4 text-justify">O jogo foi feito na Unreal Engine 5. O gráfico não é feio, é digno de um jogo tier AAA. Mas, ao mesmo tempo, eu não ligo muito para esse tipo de comentário, embora precise fazê-lo: o jogo não possui cenários de tirar o fôlego. Pode ter alguns, mas são poucos. Também estamos falando de um território chinês, e sei que a China é conhecida por suas regiões montanhosas, então sim, você vai encontrar muitas regiões assim. Alguns cenários podem até ser bonitos? Acho que um em cada dez, por exemplo, mas não se empolgue muito. As físicas do cenário também não são muito atraentes, mas, como disse, minha opinião sobre gráficos é que tanto faz.</p>
            
            <GameImage 
              src="/assets/26/PhantomBlade0/grafico.png" 
              alt="Ambientes e montanhas chinesas" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            
            <p className="mb-4 text-justify">O que mais me irritou aqui foi o mapa do jogo. Não sei por que quiseram fazer o mapa ter uma visão artística chinesa, sabe? O mapa em si era linear, e acho que acertaram no design dos cenários, mas... nem tudo era tão óbvio assim. Existiam locais secundários que eram bons para ficar mais forte e que ficavam escondidos de propósito. Às vezes, você precisava voltar lá porque antes não conseguia abrir determinado local. Agora, como fazer isso? O mapa não ajuda em nada! Pode ter mil locais de respawn, mas, com um mapa desses, não adianta. Às vezes, o mapa mais simples é o melhor para o jogador.</p>

            <GameImage 
              src="/assets/26/PhantomBlade0/grafico2.png" 
              alt="Mapa e interface de Phantom Blade Zero" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={76}>
            <GameImage 
              src="/assets/26/PhantomBlade0/trilha sonora.png" 
              alt="Trilha Sonora de Phantom Blade Zero" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Eu não sou fã de músicas chinesas, mas preciso afirmar que algumas trilhas sonoras de determinadas batalhas foram muito bem feitas, enquanto outras nem tanto. Algo de que também gostei na parte de áudio foi o som da espada ao acertar um parry, que era bem legal. Enfim, joguei o jogo e não levarei nenhuma trilha sonora para o meu Spotify ou YouTube. Para quem me conhece, sabe que gosto bastante dessa parte, por isso avalio esse quesito de forma um pouco mais rigorosa.</p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={60}>
            <GameImage 
              src="/assets/26/PhantomBlade0/historia.png" 
              alt="História e Lore de Phantom Blade Zero" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Eu entendi um pouco da história do jogo, diria que uns 70%. O jogo possui muitos arquivos, que infelizmente são bastante numerosos e divididos, ou seja, você precisa caçar todos para saber mais sobre o jogo. Além disso, o jogo possui uma ficha técnica sobre cada monstro, item e espada, contando qualquer história relacionada a eles, para tentar preencher melhor a lore do jogo. Porém, ele apresenta um grande defeito.</p>
            <p className="mb-4 text-justify">O maior defeito é a forma como a história é contada ao jogador. Em vez de fazer o simples, preferiram contar os eventos de forma separada, o que acaba sendo uma péssima decisão, porque ninguém vai se apegar ao protagonista Soul. Na real, durante toda a história, o protagonista não demonstra nenhum sinal de carisma. Acredito que o problema esteja no roteiro. Poderiam apresentar melhor a infância do protagonista. Por que falo da infância? Porque, no meio do jogo, você vai enfrentar uma amiga de infância, e era para ser uma batalha triste. Digo isso porque a trilha sonora do jogo era triste naquele momento, mas... o jogo só apresenta a história dela por meio de uns cinco textos separados e fragmentados, e pronto: você enfrenta ela agora na forma adulta. A batalha dela é legal, mas, como disse, o jogo possui um roteiro tão fraco que você não vai se importar tanto com a história. Ao mesmo tempo, isso não quer dizer que ela seja confusa, apenas é mal elaborada.</p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={99}>
             
            <p className="mb-4 text-justify">O jogo possui legendas em PT-BR, mas por que uma nota 99? O jogo teve apenas alguns pequenos crashes, mas acho que o motivo foi porque estava usando dois monitores (além de estar jogando no Ultra). Mas os crashes não causaram grandes problemas, porque aconteceram perto do respawn. Foi aquele famoso bug que não machuca ninguém. Também aconteceu algo na batalha final: infelizmente, só deixei o print no meu perfil da Steam, mas fiquei invisível no meio da batalha. Por sorte, ainda tinha uma aura em volta de mim e consegui jogar por mais um tempo, mas precisei reiniciar o jogo. Digo novamente: não são problemas chatos. Tirando isso, o jogo rodou bem. Ah, quase esqueci: os 40 minutos carregando os shaders no dia do lançamento não desejo para mais ninguém.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4 text-justify">Eu acho que, para um jogo de estreia de um estúdio novato, é um excelente jogo. Faltaram alguns pontos importantes, principalmente na forma de desenvolver o personagem e a história. Como citei, o jogo possui uma lore que deve ser excelente, mas, sem uma boa conexão para apresentar tudo isso ao jogador, não adianta muita coisa.</p>
                <p className="space-y-4 mb-4 text-justify">E para quem é o jogo? Eu diria que é para pessoas que gostam de "hack and slash". Isso mesmo! Com o sucesso de Elden Ring, tivemos muitos jogos de "hack and slash" tentando ser mais um soulslike da vida, e isso, querendo ou não, acaba afastando alguns jogadores. Se você odeia soulslikes e gosta de "hack and slash", pode jogar, porque provavelmente vai gostar do jogo. E você que gosta de soulslikes, vai gostar do jogo? Bem, considerando que você não usa o jogo como um troféu (como citei lá em cima, existem alguns jogadores de soulslikes que gostam de zerar esses jogos justamente porque poucas pessoas conseguem), acho que sim! Pode jogar no modo difícil e ser feliz.</p>
                </>
            }
            rating={85}
            date="05/11/2026" 
          />

        </div>
      </div>
    </>
  );
};

export default PhantomBladeZero;