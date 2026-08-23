// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\PokemonStadium.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const PokemonStadium: React.FC = () => {

  const gameData = {
    slug: "pokemon-stadium",
    title: "Pokémon Stadium",
    subtitle: "Jogo 3D de batalha que cada fã de Pokémon na época sempre sonhou.",
    rating: 76, 
    coverImage: "/assets/26/PokemonStadium/cover.png", 
    logo: "/assets/26/PokemonStadium/frontpage.png",
    genre: "Batalha / Estratégia",
    releaseDate: "199-08-01",
    developer: {
        name: "HAL Laboratory / Nintendo",
        countryFlag: "/assets/flags/japan.png" 
    },
    publisher: "Nintendo",
    engine: "Custom N64 Engine", 
    platforms: ["Nintendo 64"]
  };

  const seoDescription = "Review de Pokémon Stadium. Relembramos as clássicas batalhas 3D do Nintendo 64, analisando as mecânicas, os gráficos nostálgicos e o impacto na franquia.";
  const seoKeywords = "Pokémon Stadium review, análise Pokémon Stadium N64, Nintendo 64, batalhas pokémon 3D, retrô, HAL Laboratory";

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
            <p className="mb-4">Esse era um jogo dos meus sonhos quando era criança. Por quê? Acho que joguei só uma vez na vida quando era criança. O motivo é simples: o Nintendo 64 não fez tanto sucesso aqui no Brasil, porque nasceu praticamente ao mesmo tempo que o PlayStation 1 e o Game Boy Color. Ou seja, era raro ver alguém que tinha esse jogo e esse console na época. A vantagem do PlayStation 1 era muito maior que a do N64. Enfim, vamos para a review. Essa é a minha primeira experiência com o jogo.</p>
            
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={70}> {/* Ajuste a nota da seção como preferir */}
            <GameImage 
              src="/assets/26/PokemonStadium/mecanica.png" 
              alt="Mecânicas de Pokémon Stadium" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Olha, o jogo não é ruim. Vou tentar explicar como funciona: pensa no modo Battle Tower que foi acrescentado na versão Pokémon Emerald e que sempre ficou na franquia. É isso aí: uma batalha 3x3 usando Pokémon "alugáveis" ou seus próprios Pokémon que você criou nos jogos. Pena que no Nintendo Switch Online não consigo fazer isso, então só pude usar os alugáveis.</p>
            <p className="mb-4">A mecânica da batalha lembra totalmente a primeira geração, e aí nasce o problema da mecânica do jogo. Um modo de jogo de Pokémon que não tenha habilidades e as regras atuais deixa o jogo muito quebrado. Por quê? Por exemplo, o status Sleep faz o Pokémon dormir e, quando ele acorda, ainda existe a possibilidade de não atacar. Ou seja, é possível criar um loop de sono praticamente infinito. Além disso, não existem os status de Attack e Special Attack separados como nas gerações atuais, nem Special Defense, há poucos ataques disponíveis e várias outras limitações. Mas, mesmo assim, o jogo é sim divertido. Ele é literalmente a ideia de um jogo que lançaram bem recentemente para celular, acho que é Pokémon Champions. A ideia dele é basicamente essa.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <GameImage 
              src="/assets/26/PokemonStadium/grafico.png" 
              alt="Gráficos de Pokémon Stadium" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Eu acho que o ponto mais importante aqui é o gráfico dos Pokémon. Na época da primeira geração, eles eram bem feios no Game Boy, mas aqui conseguem usar o poder do N64, o que torna tudo bem mais bonito. Eles possuem animações bem engraçadas e, considerando a mesma época em que o jogo foi lançado, até Yu-Gi-Oh! Forbidden Memories possui gráficos que seguem uma ideia parecida. Acho que é normal para a época.</p>
            <p className="mb-4">Talvez o único problema aqui seja a falta de opção de encontrar Pokémon Shiny. Eu notei que alguns inimigos tinham Pokémon com outras cores. Talvez seja uma referência ao filme Pokémon Mewtwo? Não sei ao certo.</p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={65}>
            <GameImage 
              src="/assets/26/PokemonStadium/trilha sonora.png" 
              alt="Trilha Sonora de Pokémon Stadium" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Talvez esse tenha sido o primeiro jogo de Pokémon em que ouvi uma voz humana narrando as batalhas. Pois é, até hoje, em 2026, nunca vi uma dublagem na franquia, mas aqui estou escutando um narrador falando durante as batalhas. É legal ele falando das coisas e reagindo ao que acontece, mas a trilha sonora não é lá essas coisas. É ok.</p>
          </ReviewSection>

          {/* História */}
                    <ReviewSection title="História" rating={80}>
                      <GameImage 
                        src="/assets/26/PokemonStadium/historia.png" 
                        alt="História de Pokémon Stadium" 
                        className="max-w-xs md:max-w-md lg:max-w-lg"
                      />
                      <p className="mb-4">Aqui, eu acho que minha crítica vai mais para a Nintendo ou para a Game Freak, sei lá, não entendo muito bem quem toma essas decisões. Não entendo por que existe esse desejo de COPIAR tudo igual ao passado. Por exemplo, NÃO TEM como a gente ter Pokémon da primeira geração e passar para esse jogo. Ou seja, ficamos presos aos Pokémon alugáveis, o que depende muito do moveset deles, porque pode ser oito ou oitenta.</p>
                      <p className="mb-4">Um exemplo: notei que existem certos Pokémon que não possuem nem um ataque do próprio tipo, como um Golduck sem um ataque Psychic ou um Golem sem um ataque de pedra. São coisas assim que me deixaram meio "pá". Não existe uma opção de customização dos ataques, e isso acaba prejudicando bastante a experiência.</p>
                      <p className="mb-4">Mas, pelo menos, a história e o objetivo são legais. Existem vários tipos de desafios, mas o mais importante é justamente o que tornou a Battle Tower tão interessante: batalhas 3x3 por nível 50. E sim, isso gera um conteúdo bom e divertido. Só acho que poderiam melhorar essa parte dos Pokémon e, infelizmente, isso provavelmente não vai mudar.</p>
                    </ReviewSection>

          {/* Otimização / Performance Retrô */}
          <ReviewSection title="Otimização" rating={95}>
             
            <p className="mb-4">Entendo que, na época, era normal fazer um jogo americano em apenas uma língua. Acho que tirei alguns pontos aqui por causa da falta de opções de customização dos Pokémon.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">Por fim, fiquei surpreso com essa nota. Eu esperava mais desse jogo. Não joguei o 2 ainda, mas agora entendo por que não tivemos uma continuação, por exemplo, quando foi lançado o Nintendo Wii.</p>
                <p className="space-y-4 mb-4">Apesar disso, infelizmente, acho que a Game Freak sempre poderia aproveitar melhor a franquia. Acho que esse jogo é um exemplo disso, sendo que o Pokémon Champions só nasceu agora, em 2026, depois de 27 anos. E, na época, já existia o Pokémon Showdown, que foi lançado em 2011, 12 anos depois de Pokémon Stadium. Ou seja, não era tão dependente disso.</p>
                <p className="space-y-4 mb-4">Mas é isso: só mostra como a Game Freak às vezes falha em perceber o óbvio dentro da própria franquia.</p>
                </>
            }
            rating={76}
            date="11/08/2026"
          />

        </div>
      </div>
    </>
  );
};

export default PokemonStadium;