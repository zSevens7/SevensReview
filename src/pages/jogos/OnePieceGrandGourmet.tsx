// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\OnePieceGrandGourmet.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const OnePieceGrandGourmet: React.FC = () => {

  const gameData = {
    slug: "one-piece-grand-gourmet",
    title: "One Piece Grand Gourmet",
    subtitle: "Um jogo único de gerenciamento de restaurante do Sanji (de One Piece) que é divertido e viciante.",
    rating: 77, 
    coverImage: "/assets/26/OnePieceGrandGourmet/cover.png", 
    logo: "/assets/26/OnePieceGrandGourmet/frontpage.png",
    genre: "Simulação / Gerenciamento",
    releaseDate: "2026-10-22",
    developer: {
        name: "Kairosoft",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Bandai Namco Entertainment",
    engine: "Kairosoft Engine", 
    platforms: ["Windows (Steam)", "Mobile"]
  };

  const seoDescription = "Review de One Piece Grand Gourmet. Analisamos o jogo de gerenciamento de restaurante do Sanji, desenvolvido pela Kairosoft e publicado pela Bandai Namco.";
  const seoKeywords = "One Piece Grand Gourmet review, análise One Piece Kairosoft, Sanji, restaurante, gerenciamento, simulação, Bandai Namco";

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
            <p className="mb-4 text-justify">Esse jogo foi uma surpresa quando apareceu em algum evento de jogos, porque nunca passou pela minha cabeça encontrar um jogo da franquia One Piece em que você administra um restaurante do Sanji. Bem, fiquei interessado e decidi jogá-lo.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={80}>
            <GameImage 
              src="/assets/26/OnePieceGrandGourmet/mecanica.png" 
              alt="Mecânicas de gerenciamento do restaurante em One Piece Grand Gourmet" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Bem, eu conheço a publisher que divulgou o jogo, a famosa BANDAI, mas não conhecia quem o desenvolveu, que é a empresa japonesa Kairosoft. Pelo pouco que pesquisei sobre ela, pelo menos na Steam, a empresa tem muitos jogos focados em gerenciamento, abordando praticamente qualquer tema que você possa imaginar. Então, eu diria que desenvolver um jogo nesse formato não foi um erro, pois o jogo funciona bem.</p>
            <p className="mb-4 text-justify">As mecânicas consistem em produzir receitas e vender comidas. A diferença é que você precisa conquistar seus clientes fiéis, que são personagens do universo de One Piece que passam a frequentar seu restaurante. Para isso, é necessário ficar atento às decorações do estabelecimento, à forma como o cardápio é elaborado e a outros detalhes. Depois de tanto esforço, você ainda pode desbloquear várias conquistas. Aonde quero chegar com isso? O que me fez viciar no jogo até aqui (27 horas de jogo) foi tentar conseguir todos os personagens. Depois explico um pouco mais sobre isso na seção de história. Ao mesmo tempo, tirei alguns pontos da seção de mecânica por dois motivos. Primeiro, acho que faltaram algumas questões importantes relacionadas ao gerenciamento, como apresentar mais ESTATÍSTICAS sobre o consumo de alimentos e o comportamento dos clientes. Faltou mostrar mais informações que permitissem ao jogador analisar melhor o desempenho do restaurante. O jogo apresenta apenas um histórico de 10 ou 15 dias sobre ganhos e prejuízos, mas isso é o básico do básico quando falamos de gerenciamento financeiro. O segundo motivo pelo qual tirei alguns pontos tem a ver com a parte gráfica do jogo, então vou aproveitar para entrar nessa seção de uma vez.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={70}>
            <GameImage 
              src="/assets/26/OnePieceGrandGourmet/grafico.png" 
              alt="Gráficos e arte pixelizada de One Piece Grand Gourmet" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Antes de criticar, queria deixar claro que amo arte pixelizada e que o jogo não tem uma arte feia. O problema... é que fiquei com a impressão de que ele foi desenvolvido exclusivamente para MOBILE. Sim, ele foi lançado para dispositivos móveis, mas por que estou falando como se não existisse uma versão para PC? Fazia tempo que eu não encontrava um jogo com botões IMENSOS e que, ao mesmo tempo, não permitisse alterar a sensibilidade da movimentação com as teclas “WASD”. A movimentação é bem lenta, mas notei que, quando clico no mapa e arrasto com o mouse, a velocidade é muito maior. Isso me fez criar uma teoria: o jogo foi feito exclusivamente para mobile e só recebeu uma versão na Steam para vender mesmo. Acho que faltou um carinho maior por parte dos desenvolvedores, sabe? Se você duvida do que estou falando, dê uma olhada nas imagens que tirei jogando na resolução 1920x1080 e veja se os botões também parecem estranhos para você.</p>
            <p className="mb-4 text-justify">E não para por aí! A perspectiva da câmera é FIXA, mas o que isso significa e como afeta a jogabilidade? Significa que não consigo visualizar meu restaurante de outras formas, o que pode dificultar a visualização de determinadas áreas dependendo do ângulo. Além disso, essa limitação acaba prejudicando a liberdade de decoração, porque se fosse possível mudar o ângulo da câmera e observar o restaurante a partir de outras perspectivas, o jogador teria mais liberdade para organizar os móveis e as decorações, aproveitando melhor o espaço disponível.</p>
            <p className="mb-4 text-justify">Além disso, acho que faltaram mais áreas temáticas para o restaurante. Essas áreas funcionam como pisos ou ambientes inspirados em determinados arcos da franquia, como Alabasta e o Reino de Drum. Porém, nem todos estão presentes, como Water Seven, por exemplo. Também senti falta de mais opções de decoração. E, quando digo isso, não estou falando apenas da quantidade de itens disponíveis, mas também da praticidade para consegui-los. Era um pouco chato decorar o restaurante, pois precisava ir toda hora até o Franky para pedir que ele criasse os itens, quando poderia existir um sistema mais rápido e prático para realizar essa tarefa.</p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={50}>
            <GameImage 
              src="/assets/26/OnePieceGrandGourmet/trilha sonora.png" 
              alt="Trilha Sonora de One Piece Grand Gourmet" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Um jogo de anime que não possui músicas oficiais da franquia é algo difícil de engolir, sabe? E sim, o jogo não tem nenhuma trilha sonora de One Piece, sendo necessário criar uma identidade musical própria. O problema é... que a trilha sonora original é bem ruim. Você pode jogar no mudo e colocar suas próprias músicas para tocar, já que os personagens também não possuem vozes.</p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={85}>
            <GameImage 
              src="/assets/26/OnePieceGrandGourmet/historia.png" 
              alt="História e personagens de One Piece Grand Gourmet" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Antes de falar da história, preciso meio que dar uma pausa na jogatina depois de já ter passado da metade do jogo. O motivo? É que Phantom Blade vai ser lançado daqui a literalmente 4 horas e, como faltam apenas duas áreas para eu concluir o jogo, acredito que já tenha jogado o suficiente para fazer esta review.</p>
            <p className="mb-4 text-justify">Aqui preciso parabenizar os desenvolvedores por trazerem cerca de 400 personagens da franquia, o que é um desafio e tanto, sabe? Ou seja, o jogo começa desde o capítulo 1 de One Piece e vai até os acontecimentos mais atuais. Isso significa que existem spoilers? Eu diria que não exatamente, mas você pode acabar descobrindo o design de alguns personagens e conhecendo certas características e funções que eles terão futuramente na história. Apesar disso, acredito que esse jogo foi feito principalmente para quem já é fã da franquia. Não recomendo jogá-lo antes de conhecer One Piece e depois querer começar a assistir ao anime ou ler o mangá, porque, se você fizer 100% do jogo, poderá acabar descobrindo algumas pistas sobre a história, já que os eventos relacionados aos clientes fiéis têm ligação com a personalidade e a história de cada personagem.</p>
            <p className="mb-4 text-justify">Ah, quase me esqueci de comentar que achei essa mecânica dos clientes fiéis uma ótima ideia e bastante viciante. É justamente ela que incentiva o jogador a continuar administrando o restaurante, explorando o universo de One Piece e tentando conquistar todos os personagens disponíveis. Para mim, esse é um dos maiores acertos do jogo, porque transforma a coleção de personagens em um objetivo que dá vontade de continuar jogando por muitas horas.</p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
             
            <p className="mb-4 text-justify">O jogo não possui dublagem, mas pelo menos conta com legendas em português. Também não notei nenhum bug durante minhas sessões de jogo, e o desempenho foi tranquilo. Além disso, o jogo é bastante leve, ocupando pouco espaço de armazenamento.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4 text-justify">Eu acho que é um bom jogo. Ele é bem leve, ocupando apenas cerca de 250 MB, e se torna viciante por causa da mecânica de colecionar todos os personagens da franquia como clientes do restaurante. Porém, ao mesmo tempo, considero que é um jogo bastante nichado, voltado principalmente para quem gosta de One Piece. Além disso, você também precisa gostar de mecânicas de simulação, gerenciamento e estratégia econômica para aproveitar a experiência. No fim das contas, é um jogo divertido para os fãs que desejam passar algumas horas administrando o restaurante do Sanji e colecionando personagens, mas que poderia ter recebido mais atenção na versão para PC, principalmente nos controles, na câmera e nas opções de gerenciamento.</p>
                </>
            }
            rating={77}
            date="28/10/2026" 
          />

        </div>
      </div>
    </>
  );
};

export default OnePieceGrandGourmet;