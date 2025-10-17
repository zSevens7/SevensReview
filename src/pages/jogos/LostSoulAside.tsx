// src/pages/jogos/LostSoulAside.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const LostSoulAside: React.FC = () => {
  const gameData = {
    slug: "lost-soul-aside",
    title: "Lost Soul Aside",
    subtitle: "",
    rating: 70,
    coverImage: "/assets/25/Lostsoul/LostSoul FrontPage.png",
    logo: "/assets/25/Lostsoul/LostSoul FrontPage.png",
    genre: "Hack Slash/Aventura",
    releaseDate: "2025-08-29",
    developer: {
      name: "Ultizero Games",
      countryFlag: "/assets/flags/china.png",
    },
    publisher: "Sony Interactive Entertainment",
    engine: "Unreal Engine 4",
    platforms: ["PC", "PlayStation 5"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de Lost Soul Aside - jogo indie de hack and slash desenvolvido pela Ultizero Games. Análise detalhada da jogabilidade, gráficos e problemas na narrativa. Avaliação: 70/100.";
  const seoKeywords = "Lost Soul Aside, Ultizero Games, Sony, hack and slash, jogo indie, Unreal Engine 4, review, análise, PC, PS5";

  // Schema structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "VideoGame",
      "name": gameData.title,
      "description": seoDescription,
      "genre": gameData.genre,
      "platform": gameData.platforms,
      "releaseDate": gameData.releaseDate,
      "developer": {
        "@type": "Organization",
        "name": gameData.developer.name
      },
      "publisher": {
        "@type": "Organization",
        "name": gameData.publisher
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Sevens Review"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": gameData.rating,
      "bestRating": 100
    },
    "datePublished": "2025-09-08T14:00:00-03:00"
  };

  return (
    <>
      <Helmet>
        {/* Meta Tags Básicas */}
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
        <meta property="og:url" content={`https://sevensreview.com.br/jogos/${gameData.slug}`} />
        <meta property="og:site_name" content="Sevens Review" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        {/* Header */}
        <ReviewHeader {...gameData} />

        {/* Conteúdo da Review */}
        <div className="mt-8">
          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              Embarque em uma odisseia épica para salvar sua irmã mais nova – e toda a humanidade – de misteriosos invasores dimensionais vindos de além dos céus estrelados em Lost Soul Aside™.
            </p>
            <p className="mb-4">
              Eu decidi fazer uma aposta para jogar algum jogo em setembro, e a minha escolha foi esse novo título de uma empresa indie. Para quem não sabe, às vezes as grandes empresas investem em projetos pequenos para transformá-los em algo maior. Alguns exemplos no passado foram Stellar Blade e Black Myth: Wukong pela Sony, enquanto a Microsoft investe no Game Pass (último exemplo foi o Expedition 33). Às vezes dá certo, às vezes nem tanto. Mas vamos para a review.
            </p>
            <p>
              Vale lembrar que esse jogo começou a ser desenvolvido por uma única pessoa em 2014 e apenas em 2021 ou 2022 passou a ter uma equipe (com investimento da Sony), o que acelerou a produção.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={88} ratingColor="bg-green-800">
            <p className="mb-4">
              Eu diria que este é o ponto forte do jogo, sem dúvida nenhuma. O foco está nas mecânicas de hack and slash, e ele consegue entregar bem nesse quesito. As batalhas são legais, os inimigos têm ataques interessantes e algumas lutas realmente me marcaram.
            </p>
            <p className="mb-4">
              O jogo também tenta não ser repetitivo – não é apenas batalha após batalha. Às vezes ele introduz puzzles para o jogador avançar, ou até mesmo uma mistura de puzzle com plataforma. Se você odeia plataforma, nem recomendo jogar, porque algumas partes são bem difíceis, já que misturam com outras mecânicas de puzzle.
            </p>
            
            <GameImage 
              src="/assets/25/Lostsoul/Lost Soul Mecanica 01.png" 
              alt="Lost soul mecanica 01" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              E que puzzles são esses? Conforme o jogador libera mais armas, elas passam a ter funções secundárias nesses desafios. O que eu não gostei foi da escolha do botão "triângulo" para acionar essa mecânica, porque atrapalhava um pouco na hora de resolver puzzles de plataforma.
            </p>
            <p className="mb-4">
              Outro ponto: senti pouco uso das armas. São poucas opções, apenas o necessário, e elas não são tão diferentes entre si. Basicamente muda o estilo (espada curta, longa, etc.) e a magia elemental.
            </p>
            <p className="mb-4">
              Já o Arena – o monstro auxiliar do protagonista – poderia ter mais funções mecânicas no jogo. Ele me lembrou muito os Pods de Nier, que são úteis para quase tudo. Aqui, o Arena é praticamente um "Pod simplificado".
            </p>
            <p className="mb-4">
              Por fim, achei estranho o sistema de vigor de esquiva. O jogo tem quatro barras e, sinceramente, quase nunca precisei me preocupar em administrar isso. Me pareceu que os devs começaram a seguir uma pegada soulslike e desistiram no meio do caminho. O próprio dev já disse que o jogo não é soulslike, e realmente não é – inimigos não reaparecem, nem há combates longos e precisos baseados apenas em esquiva e defesa. Então fica a pergunta: por que colocar vigor de esquiva? Não fez sentido para mim.
            </p>
            
            <GameImage 
              src="/assets/25/Lostsoul/Lost Soul Mecanica 02.png" 
              alt="Lost soul mecanica 02" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={73} ratingColor="bg-yellow-300 text-black">
            <p className="mb-4">
              O jogo utiliza a Unreal Engine 4, provavelmente porque a produção se estendeu por muito tempo. Ainda assim, os gráficos em alguns ambientes são bons, e irei mostrar exemplos aqui na review conforme escrevo.
            </p>
            <p className="mb-4">
              Gostei bastante dos designs dos personagens secundários e de alguns chefes. Porém, os inimigos básicos (lacaios) são bem feios, especialmente os que aparecem logo no início. O único personagem que realmente não gostei foi o protagonista – o cabelo dele parecia mal renderizado. O design do Imperador e de alguns soldados também deixou a desejar, faltou diferenciação.
            </p>
            
            <GameImage 
              src="/assets/25/Lostsoul/Lost Soul Grafico 01.png" 
              alt="Lost soul grafico 01" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <p className="mb-4">
              Um ponto positivo: os efeitos dos golpes, tanto do protagonista quanto dos inimigos, ficaram muito bem feitos. Só que, logo no início do jogo, eles apresentam talvez o pior cenário possível ao jogador: a cidade principal. Não é que os gráficos sejam feios, mas sim que o ambiente não foi bem construído. Em contraste, outros cenários mais adiante chegam a tirar o fôlego. Infelizmente, essa parte inicial poderia ter sido mais caprichada.
            </p>
            
            <GameImage 
              src="/assets/25/Lostsoul/Lost Soul Grafico 02.png" 
              alt="Lost soul grafico 02" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={60} ratingColor="bg-red-300 text-black">
            <p className="mb-4">
              Coloquei nota 60 aqui. Poderia até ser mais generoso, mas o jogo não tem nenhuma música realmente memorável que me desse vontade de colocar no Spotify depois. Algumas músicas de chefes são boas (a da batalha final é destaque), mas no geral, as músicas de ambiente e de batalha – que são as mais importantes, já que o jogador passa mais tempo nelas – não conseguem empolgar.
            </p>
            
            <GameImage 
              src="/assets/25/Lostsoul/Lost Soul Trilha Sonora 01.png" 
              alt="Lost soul trilha sonora" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={30} ratingColor="bg-red-600 text-white">
            <p className="mb-4">
              Eu não achei que encontraria este ano uma história pior que a de Assassin's Creed Shadows, mas encontrei.
            </p>
            <p className="mb-4">
              Primeiro, vou falar das falhas mecânicas de narrativa, e depois entro na história em si (com spoilers).
            </p>
            <p className="mb-4">
              O jogo não apresenta quests secundárias, não tem um mapa-múndi, e entrega apenas uma lore básica de personagens/mundo. Até aí, ok. O que me irritou mesmo foi o baixo número de cutscenes. Em vez disso, algumas partes da história são "contadas" durante o gameplay, mas com o jogador podendo girar a câmera em ângulos estranhos. Esse tipo de recurso funciona em jogos em primeira pessoa, mas aqui ficou sem sentido.
            </p>
            
            <GameImage 
              src="/assets/25/Lostsoul/Lost Soul Historia 01.png" 
              alt="lost soul historia" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <GameImage 
              src="/assets/25/Lostsoul/Lost Soul Historia 02.png" 
              alt="lost soul historia" 
              className="max-w-xs md:max-w-md lg:max-w-lg mb-4"
            />
            
            <h3 className="text-xl font-bold mb-4 text-red-600 dark:text-red-400">⚠️ Spoilers da história</h3>
            
            <p className="mb-4">
              No início, o jogo apresenta um pequeno grupo de cinco pessoas querendo destruir um Império. Mas... quem são eles? O que motiva isso? Quem é esse Império? Você não sabe nada, só segue o roteiro.
            </p>
            <p className="mb-4">
              Quando o plano de assassinato dá errado, meteoros caem do céu, começam a atacar as pessoas e, no meio da confusão, a irmã do protagonista tem a alma roubada. A partir daí, o objetivo do jogador é recuperar os fragmentos da alma para trazê-la de volta.
            </p>
            <p className="mb-4">
              O problema é que o jogo não desenvolve nada disso. A irmã parece irrelevante, o Império é mal explicado, e você é jogado direto no meio da história sem uma introdução decente. Para piorar, essa cena inicial se passa no pior ambiente gráfico possível. Resultado: acredito que muitos jogadores pediram reembolso ou desistiram logo no começo.
            </p>
            <p className="mb-4">
              Mais adiante, a repetição também incomoda: para cada fragmento de alma, a fórmula é quase sempre a mesma – um caminho até a dimensão, depois uma sequência dentro dela. Se tivessem reduzido um pouco essa repetição e investido mais no desenvolvimento de personagens, teria sido muito melhor.
            </p>
            
            <GameImage 
              src="/assets/25/Lostsoul/Lost Soul Historia 03.png" 
              alt="lost soul historia 3" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={99} ratingColor="bg-yellow-400 text-black">
            <p className="mb-4">
              Joguei no PlayStation em modo desempenho e o jogo rodou perfeitamente. Só percebi quedas de FPS em uma batalha com muitas partículas de água. Fora isso, excelente.
            </p>
            <p>
              Também tive um crash, mas não cheguei a perder progresso. Além disso, o jogo já vem localizado em português (provavelmente graças à Sony).
            </p>
          </ReviewSection>

          {/* Veredito Final - Customizado pois tem conteúdo extra */}
          <div className="my-6 p-6 rounded-lg shadow-md border-4 border-yellow-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mx-2 sm:mx-4 md:mx-8 lg:mx-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 border-b-2 pb-2">
              Veredito Final
            </h2>
            
            <div className="mb-4">
              <p className="mb-4">
                No fim, acredito que Lost Soul Aside pecou em vários pontos, começando pelo marketing. Liberaram a demo apenas três dias antes do lançamento e houve pouquíssimas reviews de críticos. Mesmo que o jogo não fosse perfeito, deveriam ter investido melhor no pré-lançamento.
              </p>
              <p className="mb-4">
                Apesar disso, vejo que ele tinha muito potencial. As mecânicas são divertidas, os gráficos são bons em partes, mas a história é mal entregue – principalmente no começo – e não prende o jogador.
              </p>
              <p>
                Se você não liga muito para história, pode gostar bastante do jogo. Mas, ainda assim, eu recomendaria esperar uma promoção para jogá-lo.
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 dark:text-gray-400 border-t pt-4">
              <div className="font-bold text-xl md:text-2xl mb-2 md:mb-0">
                Nota: <span>70</span>/100
              </div>
              <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-2 md:mb-0">
                ← Voltar para Home
              </a>
              <span>Escrito por Sevens - 08/09/2025 14:00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LostSoulAside;