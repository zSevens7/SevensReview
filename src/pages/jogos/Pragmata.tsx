// src/pages/jogos/Pragmata.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const Pragmata: React.FC = () => {

  const gameData = {
    slug: "pragmata",
    title: "Pragmata",
    subtitle: "Depois de 6 anos de desenvolvimento, a Capcom lança uma nova franquia usando a RE Engine.",
    rating: 88,
    coverImage: "/assets/26/Pragmata/cover.png", 
    logo: "/assets/26/Pragmata/frontpage.png",
    genre: "Ação e Aventura / FPS",
    releaseDate: "2026-02-15", // Coloquei uma data genérica de 2026, pode ajustar se tiver o dia exato
    developer: {
        name: "Capcom",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Capcom",
    engine: "RE Engine",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"]
  };

  // SEO
  const seoDescription = "Review de Pragmata. Avaliamos a nova IP da Capcom, com suas mecânicas únicas de hackeamento, gráficos deslumbrantes na Lua e gameplay viciante na RE Engine.";
  const seoKeywords = "Pragmata review, Capcom, RE Engine, análise Pragmata, FPS, Lua, Hugh e Diana, RTX 4060";

  // Estilo das imagens (Sem o 'pixelated' aqui para manter a alta resolução do jogo moderno)
  const imageClass = "w-4/5 max-w-3xl h-auto rounded-lg border border-gray-300 dark:border-gray-700 shadow-md mb-6";

  return (
    <>
      <Helmet>
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
        
        {/* Twitter */}
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
              Conheci esse jogo em um evento lá em junho de 2020. Não sei se foi algum evento da Sony ou o Summer de 2020, mas enfim, era um jogo que apareceu e teve bastante “problemas” no desenvolvimento. Era para ter sido lançado em 2022 ou 2023, mas foi meio que refeito, sabe? Como se tivessem feito o jogo novamente do zero. E aqui estamos falando dele. Enfim, vamos para a review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/Pragmata/pragmata mecanica.png" 
              alt="Mecânicas de combate e hackeamento em Pragmata" 
              className={imageClass}
            />
            <p className="mb-4">
              Primeiro, o que mais me chamou atenção no jogo foi, literalmente, a mecânica — principalmente a mecânica de hackeamento. Foi o primeiro jogo que me obrigou a usar o terceiro botão do mouse (aquele que fica na lateral). Ao mesmo tempo, você precisa desviar, atirar e resolver o puzzle de hackeamento tudo junto, o que torna o jogo bastante divertido e único também (não lembro de um jogo recente assim).
            </p>
            <p className="mb-4">
              Segunda parte da mecânica: ele é um FPS com mundo fechado. Como posso explicar... é como se tivesse várias áreas em que você pode ir e voltar para rejogar. Por quê? Porque no jogo há upgrades que você pode fazer, e às vezes é necessário encontrar itens escondidos no mapa — e nem sempre conseguimos de primeira. Ao mesmo tempo, se quiser ficar mais forte, dá para farmar, porém não é necessário e também não recomendo, porque pode enjoar facilmente.
            </p>
            <p className="mb-4">
              Além disso, há desafios de treinamento e desafios de área “vermelha”. São coisas opcionais, mas que tornam a experiência mais interessante.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90}>
            <GameImage 
              src="/assets/26/Pragmata/pragmata grafico.png" 
              alt="Gráficos da Lua desenvolvidos na RE Engine" 
              className={imageClass}
            />
            <p className="mb-4">
              O jogo tem um gráfico bonito. Os ambientes são de tirar o fôlego — afinal, você está na Lua — e o design do mundo ficou muito bem feito. Além disso, há bastante variedade de inimigos, cada um com um design diferente, o que torna a gameplay mais dinâmica ao explorar os pontos fracos.
            </p>
            <p className="mb-4">
              Também há vários modelos de roupas diferentes apenas para coleção.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={70}>
            <GameImage 
              src="/assets/26/Pragmata/pragmata trilha sonora.png" 
              alt="Atmosfera sonora de Pragmata" 
              className={imageClass}
            />
            <p className="mb-4">
              Essa foi a parte que achei mais sem graça no jogo. Ela não é boa, mas também não é ruim. Para mim, só se destacam duas músicas/soundtracks: a do final (“Memories of You”) e a parte em que o jogo acontece no espaço, onde não há som. Para quem não sabe, o espaço não propaga som, então a ideia de não ter música e ouvir apenas os propulsores — como se estivesse ouvindo de dentro da roupa do Hugh — foi muito bem aplicada.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80}>
            <GameImage 
              src="/assets/26/Pragmata/pragmata historia.png" 
              alt="Interação entre Hugh e Diana" 
              className={imageClass}
            />
            <p className="mb-4">
              Essa foi a parte que o público mais criticou, principalmente porque o jogo tem poucas horas de duração. Antes de comentar isso, preciso destacar que a química entre Hugh e Diana (o protagonista e a menina) é bem construída. O fato de eles precisarem sobreviver e voltar para a Terra não depende de um antagonista muito bem desenvolvido — ou seja, o vilão é meio sem graça, mas isso não chega a ser um grande problema.
            </p>
            <p className="mb-4">
              O problema principal é a duração. Diria que o jogo leva entre 10 e 14 horas (no meu caso, foram 19 horas, pois fiz 100% dos mapas). Não sei se sou a favor ou contra isso, porque a história é boa e não tem partes que arrastam o jogador. Digo isso porque já joguei títulos que parecem adicionar conteúdo só para aumentar a duração, o que acaba cansando. Aqui, eles apostaram mais na “rejogabilidade”, algo parecido com Resident Evil. Se parar para pensar, os jogos da franquia também são relativamente curtos, nessa mesma faixa de duração, mas são mais focados em terror.
            </p>
            <p className="mb-4">
              Agora, uma sugestão pessoal: o jogo já começa no espaço indo para a Lua, mas acho que poderia ter um mini tutorial na Terra. Eu sei que isso aumentaria, sei lá, uns 30 minutos, mas ajudaria a aprofundar a história. Notei que existe uma diferença de visão entre quem está na Lua e quem está na Terra, e isso poderia ser melhor explorado. É só uma opinião minha, porque gostei bastante da lore do jogo e queria ver mais do ponto de vista do pessoal da Terra.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              O jogo vem dublado e legendado. Além disso, achei bem otimizado. Rodei em uma RTX 4060 jogando no modo “alto”, utilizando DLSS no modo desempenho. Em alguns momentos houve aquele efeito de escalonamento (os famosos pixels aparecendo), mas aconteceu só uma vez.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="No fim das contas, o jogo é bom. Tem uma história e uma atmosfera que prendem o jogador, além de introduzir uma mecânica meio que nova (digo “meio” porque não sei se é realmente inédita, mas para mim foi). Muita gente gosta de avaliar custo-benefício em relação às horas de jogo, mas acredito que o mais importante é a experiência ser divertida do início ao fim — e Pragmata consegue fazer isso. Valeu a pena esperar por 6 anos. Não sei se haverá continuação, afinal, o jogo é da Capcom (a galinha de ouro da Capcom são Resident Evil & Monster Hunter)."
            rating={88}
            date="20/04/2026"
          />

        </div>
      </div>
    </>
  );
};

export default Pragmata;