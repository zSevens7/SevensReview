// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\YamiKids.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const YamiKids: React.FC = () => {

  const gameData = {
    slug: "yami-kids",
    title: "Yami Kids",
    subtitle: "Um jogo com arte pixelizada bonita que apresenta uma boa mecânica e trilha sonora, mas peca um pouco na história do jogo.",
    rating: 84, 
    coverImage: "/assets/26/YamiKids/cover.png", 
    logo: "/assets/26/YamiKids/frontpage.png",
    genre: "RPG de Turno /  Aventura",
    releaseDate: "2026-09-22",
    developer: {
        name: "Yanako RPGs / GameDevTosh",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Silverbook Games Studio LLC",
    engine: "MonTamer Maker Engine", 
    platforms: ["Windows (Steam)"]
  };

  const seoDescription = "Review de Yami Kids. Analisamos o RPG indie de captura de monstros (Monster Taming) que mistura a estética de Persona com combates estratégicos em turnos.";
  const seoKeywords = "Yami Kids review, análise Yami Kids, Yanako RPGs, Monster Tamer, Pokémon clone, Persona, RPG indie";

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
            <p className="mb-4 text-justify">Eu fui uma das pessoas que "apostou" no desenvolvimento desse jogo, apoiando-o desde o início. Cheguei a receber a chave do beta, mas infelizmente fiquei sem tempo para testar na época (os meses de setembro e outubro sempre são uma loucura com os lançamentos). Consegui uma boa janela para jogá-lo agora, já que, apesar de ter lançado no dia 22/09, eu estava bastante ocupado terminando o Trails in the Sky SC. Antes de entrar na análise em si, preciso reforçar que avalio esta obra como um jogo indie, feito por apenas duas pessoas. Não sei exatamente qual foi a função de cada um no projeto, conheço apenas Yanako RPGs por conta do Dokimon Quest. De qualquer forma, tentarei ser o mais justo possível e evitar "passar pano" para os erros.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <GameImage 
              src="/assets/26/YamiKids/mecanica.png" 
              alt="Mecânicas de combate e captura em Yami Kids" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">O título funciona como um RPG de batalha em turnos. A principal diferença em relação ao Dokimon é o sistema de tipagem: aqui, os monstros (Onis) sempre possuem dois tipos simultâneos. Esses tipos contam com um ciclo de fraqueza e resistência separados. É um pouco complexo de explicar em texto, mas funciona muito bem na prática. Além do modo de batalha normal, o jogo apresenta batalhas em duplas, um modo roguelike(não sei como chamar, mas lembra disso) que é um sistema de enfrentar treinadores em uma estação (bem parecido com a Battle Frontier de Pokémon). </p>
            <p className="mb-4 text-justify">O jogo exige um certo nível de grind para upar e conseguir enfrentar os inimigos mais fortes. Embora ofereça três níveis de dificuldade e possua Exp Share, você ainda precisará dedicar um tempo farmando experiência. Não me lembro exatamente como era no Dokimon, mas sinto que os puzzles de Yami Kids são como uma montanha-russa: às vezes são ótimos, mas em outros momentos são bem chatos, mesmo usando a mesma lógica. Percebi que o problema está no tamanho dos mapas. Quando a área é pequena, o puzzle flui bem porque você não precisa andar tanto. Já em mapas gigantes, fica extremamente confuso. A Torre de Água é o melhor exemplo disso: tive que ir e voltar várias vezes, me perdi, continuava esbarrando em monstros (mesmo sabendo que existe Repel no jogo), e só depois notei um local super escondido que liberava a passagem. Áreas muito grandes misturadas com puzzles não me agradaram.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90}>
            <GameImage 
              src="/assets/26/YamiKids/grafico.png" 
              alt="Gráficos e arte de Yami Kids" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Acredito que a parte visual foi responsabilidade de Yanako, e a arte é realmente muito bonita. O design de vários monstros ficou excelente, com destaque para Vamperia, Harlequin e Telebi. Notei que o foco desta vez foi em designs mais "humanoides". Também senti uma forte inspiração na estética de Persona, o que combinou perfeitamente com a temática um pouco mais dark da história. Os cenários de batalha mudam dependendo do local, e o jogo possui um sistema de dia e noite que afeta a iluminação, o que é um toque bem legal. Porém, sinto que fui até generoso com essa nota por causa de um detalhe: a interface de usuário (UI). Como programador, aprendi o quanto uma boa UI é essencial. Acredito que a engine usada (Monster Tamer) precisa de melhorias na HUD. Na hora de selecionar os ataques dos monstros, faz muita falta um botão de otimização automática ou uma visualização melhor, pois ter que rolar a lista para baixo toda hora cansa. Nas batalhas, também senti falta de ver o nível e o nome dos monstros inimigos para facilitar a memorização. No menu principal, não dá para ver a quantidade de gold e almas que você possui (só abrindo a loja), e incrivelmente não há opção de vender itens.</p>
            <p className="mb-4 text-justify">Mudando um pouco de assunto (mas ainda sobre design visual e de level), a Escola ficou muito confusa por ser gigante. Um formato simples de "prédio com andares e corredores" teria funcionado melhor, mas fizeram um mapa quadrado cheio de saídas que só deixam o jogador perdido (tive muita dificuldade de achar a Julie lá). De qualquer forma, reforço: a arte em si é linda.</p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={85}>
            <GameImage 
              src="/assets/26/YamiKids/trilha sonora.png" 
              alt="Trilha Sonora de Yami Kids" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">A trilha sonora foi uma grata surpresa para mim. As músicas têm um som estilo 8-bits muito bonito, agradável de ouvir e com uma boa variedade de faixas para os diferentes momentos do jogo.</p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={60}>
            <GameImage 
              src="/assets/26/YamiKids/historia.png" 
              alt="História e exploração de Yami Kids" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Tive a forte impressão de que o jogo não está completo. Depois de enfrentar uma das irmãs em uma igreja, a progressão simplesmente parou. O jogo pede para derrotar mais igrejas, mas já explorei todas e, na última cidade, não há mais caminhos para seguir. A situação fica ainda mais confusa porque não existe um mapa dessa área para ajudar na exploração. Sendo sincero, desanima bastante jogar algo que passa a sensação de terminar na metade, sem deixar claro se ainda existe algo a fazer ou se o conteúdo realmente acaba ali. Dificilmente eu voltaria a jogar apenas para procurar o que faltou, até porque já explorei tudo minuciosamente, como mencionei no caso da escola.</p>
            <p className="mb-4 text-justify">O jogo até possui um guia interessante para indicar aonde ir, mas algumas falhas nos tutoriais tornam certos momentos desnecessariamente complicados. O maior exemplo foi o uso da BOMBA na seção do esgoto. Tive que tentar umas 10 vezes até descobrir como utilizá-la e só consegui avançar depois de consultar as discussões na Steam. O jogo está em inglês, mas faltou indicar na tela qual botão deveria ser segurado ao lado do ícone da bomba, o que teria evitado toda essa confusão. Além disso, a bomba parece ter uma utilidade bastante limitada, já que encontrei apenas alguns pontos específicos do mapa em que ela pode ser utilizada para abrir passagens. Seria muito mais interessante se ela tivesse outras funções durante a exploração, como destruir obstáculos, remover matos ou até interagir com NPCs.</p>
            <p className="mb-4 text-justify">Também senti que o design do mapa poderia ser melhor. Pelo que entendi, o jogo possui três cidades principais, mas a progressão parece seguir praticamente uma única direção: você sai da Cidade A, segue para a esquerda até chegar à Cidade B e continua nessa mesma direção até alcançar a Cidade C. Acredito que um mapa com uma conexão triangular entre as três cidades tornaria a exploração mais interessante, permitindo viajar de uma região para outra por caminhos diferentes, em vez de seguir praticamente uma rota linear. Além disso, senti falta de um mapa para me orientar e de uma forma mais acessível de viajar rapidamente entre as regiões. Pelo que entendi, existe um item que permite fazer viagens rápidas, mas seu preço é bastante elevado. O submundo também poderia ser melhor integrado à exploração, já que o acesso parece pouco intuitivo e, se não entendi errado, pode até envolver perder uma batalha para chegar lá. Isso acaba tornando a exploração dessa área menos prática, mesmo existindo itens que poderiam recompensar o jogador por visitá-la. No geral, são detalhes que poderiam tornar a exploração mais intuitiva, recompensadora e divertida.</p>
            <p className="mb-4 text-justify">Tirando esses tropeços, a premissa da história é interessante. Ela envolve vingança e batalhas mortais. Se você perde um duelo, você meio que morre mesmo. É por isso que citei a pegada mais dark: ao longo da jornada, você sente que está de fato matando várias pessoas, mas não vou dar mais spoilers sobre isso.</p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
             <GameImage 
              src="/assets/26/YamiKids/otimizacao.png" 
              alt="Otimização de Yami Kids" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">O jogo roda liso e não encontrei bugs, o que é um ponto excelente. O único problema aqui é a falta de localização. O jogo está disponível apenas em inglês (não tem nem em japonês, que acredito ser a nacionalidade de Yanako). Hoje em dia, com IAs traduzindo textos com tanta facilidade, bastaria um revisor para checar o contexto. Localização conta muitos pontos na hora de um jogador decidir dar uma chance a um jogo. Entendo que é uma decisão dos devs e parece que vão adicionar espanhol no futuro. Quem sabe não chega um PT-BR mais pra frente?</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4 text-justify">Yami Kids é um ótimo título indie, especialmente recomendado para quem é fã de RPGs de turno e colecionamento de monstros. Ele acerta em cheio no sistema de batalha, na direção de arte lindíssima e na trilha sonora nostálgica, entregando um combate divertido e sem nenhum bug de performance. No entanto, o jogo peca em algumas decisões de level design com mapas desnecessariamente grandes e confusos, uma interface de usuário (UI) que precisa de melhorias de qualidade de vida, e uma história que, apesar de ter uma premissa sombria e promissora, passa a sensação de terminar de forma abrupta(digo não enfrentei o boss final, mas não sei se é possível ou não, então não sei é verdade ou não isso). Se você tem paciência para um pouco de grind e não se importa em jogar em inglês, vale a pena dar uma chance.</p>
                </>
            }
            rating={84}
            date="13/10/2026" 
          />

        </div>
      </div>
    </>
  );
};

export default YamiKids;