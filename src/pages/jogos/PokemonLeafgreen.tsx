// src/pages/jogos/PokemonLeafGreen.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const PokemonLeafGreen: React.FC = () => {

  const gameData = {
    slug: "pokemon-leafgreen",
    title: "Pokémon LeafGreen",
    subtitle: "No aniversário de 30 anos de Pokémon, a Nintendo libera o seu jogo clássico que foi lançado 22 anos atrás, literalmente igual ao anterior, ou seja, terá problemas.",
    rating: 86,
    coverImage: "/assets/26/PokemonLeafgreen/cover.png", 
    logo: "/assets/26/PokemonLeafgreen/frontpage.png",
    genre: "RPG",
    releaseDate: "2026-02-27", // Data simbólica do relançamento no Switch
    developer: {
        name: "Game Freak",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nintendo / The Pokémon Company",
    engine: "GBA Engine",
    platforms: ["Game Boy Advance", "Nintendo Switch"]
  };

  // SEO
  const seoDescription = "Review do relançamento de Pokémon LeafGreen no Switch. Analisamos como o remake de GBA se sustenta hoje, suas mecânicas, gráficos nostálgicos e a falta de otimização no port.";
  const seoKeywords = "Pokémon LeafGreen review, Pokemon Switch, Game Freak, análise Pokemon Leaf Green, GBA, FireRed, 30 anos Pokemon";

  // Estilo para manter os pixels nostálgicos bem nítidos
  const pixelatedStyle = { imageRendering: 'pixelated' as const };
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
              Depois de sei lá quanto tempo, a Nintendo liberou um jogo clássico para a galera poder jogar oficialmente, sem precisar de emulação. E, para quem não sabe, em 2026 a franquia Pokémon completou 30 anos.
            </p>
            <p className="mb-4">
              Esse “relançamento” acabou gerando uma certa polêmica dentro da comunidade, porque muita gente não concordou com o preço e também com o fato de o jogo não ter recebido melhorias significativas. Enfim, vamos para a review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={80}>
            <GameImage 
              src="/assets/26/PokemonLeafgreen/mecanica.png" 
              alt="Mecânicas e batalhas de Pokémon LeafGreen" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              Mecanicamente, o jogo é ok. Usando a engine da terceira geração, ficou bem diferente de como era na primeira. Lembro que, na época, esse foi o primeiro remake da franquia — e esse conceito nem era tão comum assim, mas a recepção foi tão boa que depois começaram a fazer remakes de outras gerações.
            </p>
            <p className="mb-4">
              E como o jogo evoluiu mecanicamente? Bastante coisa foi adicionada: habilidades, naturezas, divisão entre ataque físico e especial e batalhas em dupla, o que foi um ótimo acréscimo. Ao mesmo tempo, conseguiram manter várias coisas clássicas, como os 151 Pokémon até a Elite Four e os líderes de ginásio sem grandes mudanças.
            </p>
            <p className="mb-4">
              Agora, comparando com o Pokémon Let's Go Pikachu & Eevee, dá pra ver como ele seguiu um caminho totalmente errado. Em vez de evoluir a mecânica, simplificaram demais: tiraram habilidades, deixaram o sistema mais básico e acabaram removendo profundidade do jogo.
            </p>
            <p className="mb-4">
              Sobre trocas de Pokémon não serem online, prefiro detalhar melhor na parte de otimização, mas isso impacta a mecânica, porque você fica limitado a trocas locais, o que hoje em dia é bem ruim.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90}>
            <GameImage 
              src="/assets/26/PokemonLeafgreen/grafico.png" 
              alt="Visual pixel art clássico de Pokémon LeafGreen" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              Sobre os gráficos, dei essa nota porque talvez eu seja meio nostálgico. Hoje em dia eles são considerados retrô, mas os pixels foram muito bem trabalhados e ainda se destacam pelo cuidado nos detalhes.
            </p>
            <p className="mb-4">
              Além disso, os designs dos personagens são marcantes. Um exemplo é a personagem feminina (a Blue do mangá), que teve uma estreia bem memorável, e isso também vale para líderes de ginásio e rival, que possuem identidades visuais fortes.
            </p>
            <p className="mb-4">
              Sinceramente, isso é algo que o Pokémon Let's Go Pikachu & Eevee não conseguiu reproduzir tão bem, principalmente no estilo e na identidade dos personagens. Comparando com a primeira geração, o salto gráfico é absurdo, então considero um ponto muito positivo.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={85}>
            <GameImage 
              src="/assets/26/PokemonLeafgreen/trilha-sonora.png" 
              alt="Músicas e sons clássicos no GBA" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A trilha sonora é boa e não tem muito o que comentar, mas recebeu pequenas melhorias por conta do upgrade para o Game Boy Advance.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={85}>
            <GameImage 
              src="/assets/26/PokemonLeafgreen/historia.png" 
              alt="Momentos da história nas Sevii Islands" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              A história do primeiro jogo nunca foi algo incrível, mas funciona. A Equipe Rocket é um ponto forte, já que realmente age como uma vilã de verdade, enquanto o restante segue o objetivo clássico de enfrentar a Elite Four e se tornar campeão.
            </p>
            <p className="mb-4">
              Os lendários não fazem parte direta da história — os pássaros são opcionais —, mas ainda assim o jogo se sustenta bem. O grande diferencial aqui são as Sevii Islands (Sete Ilhas), onde você pode explorar três delas antes da Elite Four e, após zerar o jogo, liberar o restante com uma história complementar.
            </p>
            <p className="mb-4">
              Essas ilhas expandem bastante a lore da franquia. Um exemplo famoso é a história envolvendo o Hypno e a garota perdida na floresta.
            </p>
            <p className="mb-4">
              Sobre progressão, o sistema de XP funciona bem, e foi introduzido um recurso para rebatalhar treinadores, que eu usei bastante para farmar XP e dinheiro — uma ótima adição.
            </p>
            <p className="mb-4">
              Por outro lado, depois do sexto ginásio, os Pokémon selvagens dão pouca experiência (principalmente Geodude e Pidgey), o que acaba forçando o jogador a farmar mais do que deveria.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={90}>
            <GameImage 
              src="/assets/26/PokemonLeafgreen/otimizacao.png" 
              alt="Performance e o port para Switch" 
              className={imageClass}
              style={pixelatedStyle}
            />
            <p className="mb-4">
              O jogo não tem tradução para PT-BR, mas isso já era esperado, então não considerei como ponto negativo.
            </p>
            <p className="mb-4">
              O problema principal é que parece que a Game Freak teve preguiça de mexer no código base e fez praticamente uma portabilidade simples. Por causa disso, surgem limitações como trocas e batalhas funcionando apenas localmente no Nintendo Switch, o que hoje em dia é bem ultrapassado.
            </p>
            <p className="mb-4">
              Isso fica ainda mais evidente quando comparamos com projetos feitos por fãs. Um exemplo é o Pokémon Polished Crystal, que mostra o potencial que o jogo poderia ter com melhorias reais.
            </p>
            <p className="mb-4">
              Esses projetos usam engenharia reversa para basicamente “reconstruir” o jogo original. Em vez de só editar a ROM por cima, os desenvolvedores analisam o código do jogo byte por byte até entender como ele funciona internamente.
            </p>
            <p className="mb-4">
              Com isso, eles conseguem recriar o código em uma forma mais organizada (como se fosse o código-fonte original), permitindo modificar praticamente tudo: adicionar novas mecânicas, melhorar gráficos, corrigir bugs e até expandir o conteúdo.
            </p>
            <p className="mb-4">
              Isso é bem diferente das ROM hacks antigas, que eram muito mais limitadas. Aqui, é como se eles tivessem acesso ao código original do jogo — mesmo sem ter oficialmente. Por isso, esse tipo de projeto mostra um potencial que a versão oficial poderia ter explorado muito melhor.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Mesmo com esse problema de otimização, ainda é um bom jogo. Antigamente, eu já jogava sem fazer trocas, porque não tinha amigos com Game Boy e também nunca tive o jogo original. Minha primeira experiência foi em emulador lá por 2007–2008, quando as ROM hacks ainda eram bem simples e muitas vezes ruins. Então por que comprei e joguei agora? Porque eu gosto da franquia Pokémon. Não é o melhor jogo da série, mas também está longe de ser um dos piores. Para a época, foi extremamente importante. Muita gente começou por Pokémon FireRed e Pokémon Emerald, e alguns até consideram o melhor da franquia — eu discordo, mas entendo totalmente. No fim, ele mostra como a Game Freak soube reaproveitar bem elementos de jogos anteriores e transformar isso em algo que vendeu muito bem."
            rating={86}
            date="27/04/2026"
          />

        </div>
      </div>
    </>
  );
};

export default PokemonLeafGreen;