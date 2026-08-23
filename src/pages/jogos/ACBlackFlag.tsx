// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\ACBlackFlag.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const ACBlackFlag: React.FC = () => {

  const gameData = {
    slug: "ac-black-flag-resynced",
    title: "Assassin's Creed: Black Flag Resynced",
    subtitle: "O primeiro remake da franquia Assassin's Creed foi o Black Flag e provou ser um projeto muito bem feito.",
    rating: 95, // Nota provisória, ajuste conforme seu veredito
    coverImage: "/assets/26/ACBlackFlag/cover.png", 
    logo: "/assets/26/ACBlackFlag/frontpage.png",
    genre: "Ação e Aventura",
    releaseDate: "2026-07-19",
    developer: {
        name: "Ubisoft",
        countryFlag: "/assets/flags/france.png" // Ou canada.png, dependendo do estúdio principal
    },
    publisher: "Ubisoft",
    engine: "Ubisoft Anvil", 
    platforms: ["PlayStation 5", "Windows", "Xbox Series X/S"]
  };

  const seoDescription = "Review de Assassin's Creed: Black Flag Resynced. Analisamos o primeiro remake da franquia AC, focando em suas mecânicas navais, gráficos atualizados e história.";
  const seoKeywords = "AC Black Flag Resynced review, análise Assassin's Creed remake, Ubisoft, Edward Kenway, jogo de pirata, ação e aventura";

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
            <p className="mb-4">
              Depois de 13 anos (lançado em 2013), a Ubisoft escolheu um jogo da franquia Assassin’s Creed para receber o seu "remake": Black Flag, considerado o 4º jogo da franquia (na verdade é o 6º, mas a saga do Ezio pode ser contada como uma só, já que é uma trilogia). Esta review pode ser um pouco tendenciosa, porque sou apaixonado por Black Flag e considero ele um dos melhores Assassin’s Creed já feitos pela empresa. Enfim, vamos para a review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={92}>
            <GameImage 
              src="/assets/26/ACBlackFlag/mecanica.png" 
              alt="Mecânicas de AC Black Flag Resynced" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Quando ouvimos a palavra "remake", pensamos que é apenas fazer um jogo com gráficos bonitos, mas, na verdade, não. Eu diria que os bons remakes são aqueles em que os desenvolvedores fazem coisas além. E o que seria esse "além"? Diria que é adicionar algo que não existia antes.
            </p>
            <p className="mb-4">
              Começando pelas mudanças na mecânica, foi adicionada uma "skill" que veio da época do Origins ou Odyssey (acredito que foram lançados em 2017 e 2018, por aí). São mecânicas que ajudam durante as batalhas. Não lembro se já existia uma forma de refletir ataques no jogo original, mas, no geral, a jogabilidade continua sendo desviar, atacar normalmente e ter uma chance de refletir os golpes. É algo simples mesmo. Os Assassin’s Creed sempre foram assim, nunca foram jogos muito difíceis.
            </p>
            <GameImage 
              src="/assets/26/ACBlackFlag/mecanica1.png" 
              alt="Mecânicas de AC Black Flag Resynced" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              A questão do stealth ficou praticamente igual à do jogo original. Aqui talvez eu tenha encontrado um ponto negativo, porque, no último jogo da franquia, Assassin’s Creed Shadows, lançado no ano passado, foi apresentado um nível de stealth muito superior. Tudo bem que este remake foi desenvolvido ao mesmo tempo, mas acredito que poderia ter sido melhor. Isso não quer dizer que seja ruim. Existem várias missões de stealth e diversas formas de eliminar um inimigo. Inclusive, digo que, nos chefes finais, vale muito mais a pena derrotá-los de forma furtiva do que sair atacando como um louco, já que isso acaba tendo sua recompensa.
            </p>
            <p className="mb-4">
              Por fim, meu principal ponto negativo é um minigame de navio que veio como novidade. Tenho quase certeza de que é novo; antes, acho que era apenas enviar missões para determinados locais do mapa, mas agora existem missões envolvendo o Caribe. O que não gostei foi justamente isso. Na verdade, poderia ter sido melhor, trazendo uma forma de evoluir o navio da tripulação, nomear o barco ou personalizá-lo. Já falando dos navios, a gameplay naval ficou ainda melhor. Ela já era o grande diferencial do jogo e recebeu alguns upgrades, como novos oficiais, habilidades para eles, um novo morteiro e outras melhorias.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/ACBlackFlag/grafico.png" 
              alt="Gráficos de AC Black Flag Resynced" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Os jogos da franquia Assassin’s Creed sempre são lindos. São alguns dos jogos mais bem ambientados da indústria e praticamente nunca falham nesse quesito. O jogo evoluiu bastante graficamente em comparação com a versão de 2013. Está bonito tanto em terra quanto nas partes subaquáticas. Gostei muito das cidades, das ilhas e dos locais onde acontecem os eventos climáticos.
            </p>
            
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={100}>
            <GameImage 
              src="/assets/26/ACBlackFlag/historia.png" 
              alt="História de AC Black Flag Resynced" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Aqui preciso entrar em um ponto que gera muita discussão entre os fãs da franquia. Muita gente odeia Black Flag por dois motivos. O primeiro é que foi o primeiro jogo lançado após o fim da era Desmond. Ou seja, a parte da vida moderna perdeu bastante importância e, na época, ainda existiam momentos envolvendo isso. Agora, no remake, essas partes foram removidas. Na minha opinião, foi uma boa jogada da Ubisoft.
            </p>
            <p className="mb-4">
              O segundo motivo é que o protagonista não é um assassino, e sim um anti-herói. Na verdade, ele é o primeiro protagonista anti-herói da franquia. Eu acho isso perfeito, justamente porque ele segue as próprias convicções, mesmo quando elas estão completamente erradas. Um exemplo acontece logo no início do jogo: alguém rouba o mapa do protagonista e, ao mesmo tempo, rouba o açúcar de um homem que Edward havia salvado e ajudado a chegar em Havana. O que ele faz? Recupera apenas o próprio mapa. Ele poderia muito bem recuperar também o açúcar do companheiro, mas simplesmente ignora isso. Esse é Edward Kenway, e o jogador acompanha toda a evolução desse personagem ao longo da história.
            </p>
            <p className="mb-4">
              Além disso, o jogo apresenta novas missões secundárias, todas focadas em novos tripulantes, dando um desfecho para alguns personagens que realmente mereciam uma conclusão. Também existe um detalhe que não sei dizer se é novo ou não, mas agora há cartas contendo mensagens que expandem a história do universo. O que mais me surpreendeu foi a qualidade dos diálogos, tanto na escrita quanto na atuação dos personagens, fazendo parecer que realmente são pessoas vivendo naquela época.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={84}>
            <GameImage 
              src="/assets/26/ACBlackFlag/trilha sonora.png" 
              alt="Trilha Sonora de AC Black Flag Resynced" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              A trilha sonora do jogo é boa. O principal diferencial é que ela apresenta dois estilos diferentes. O primeiro é focado nas missões, servindo para aumentar a emoção dos momentos importantes. Não é a melhor trilha sonora do mundo, mas encaixa muito bem e cumpre seu papel.
            </p>
            <p className="mb-4">
              Já a segunda, que realmente torna o jogo especial, é a trilha sonora da tripulação enquanto navega. As músicas cantadas pelos marinheiros dão muita personalidade às viagens e ajudam bastante na imersão.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={99}>
             <GameImage 
              src="/assets/26/ACBlackFlag/otimizacao.png" 
              alt="Otimização de AC Black Flag Resynced" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              O jogo vem dublado e legendado. Apesar disso, joguei com o áudio original por um motivo simples: dessa forma é possível diferenciar três idiomas diferentes durante a campanha — inglês, espanhol e português. Sim, existem partes faladas em português durante os acontecimentos na Ilha do Príncipe.
            </p>
            <p className="mb-4">
              Sobre o desempenho, o jogo rodou muito bem no Ultra no meu PC, mantendo cerca de 90 FPS. Tive alguns bugs e, por isso, a nota ficou em 99. O mais chato aconteceu quando derrotei o comandante de um forte e o jogo simplesmente travou. Precisei reiniciá-lo. Ainda bem que perdi apenas cerca de cinco minutos de progresso graças ao autosave.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">
                    Meu veredito final é que Assassin’s Creed Black Flag Resynced é simplesmente a melhor versão de Black Flag. E para quem esse jogo é indicado? Principalmente para quem gosta de batalhas navais e para quem já é fã da franquia Assassin’s Creed. Sendo bem sincero, se você não gostar desses dois pontos, existe uma grande chance de não gostar do jogo.
                </p>

                <p className="space-y-4 mb-4">
                    Pelo menos ele não sofre do mesmo problema de Assassin’s Creed Valhalla, com um mapa gigantesco que faz o jogador passar mais de 80 horas apenas para terminar a campanha. Aqui você consegue zerar em cerca de 30 a 40 horas, talvez até menos. Onde quero chegar é que o jogo não enrola o jogador. Ele é direto ao ponto.
                </p>
                </>
            }
            rating={95} // Lembre-se de atualizar esta nota junto com o objeto principal
            date="19/07/2026"
          />

        </div>
      </div>
    </>
  );
};

export default ACBlackFlag;