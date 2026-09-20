// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\MarioKartWorld.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const MarioKartWorld: React.FC = () => {

  const gameData = {
    slug: "mario-kart-world",
    title: "Mario Kart World",
    subtitle: "Um novo Mario Kart depois de muito tempo. É um bom jogo, apesar de a ideia das pistas sem curvas nos torneios não ser muito agradável.",
    rating: 88, 
    coverImage: "/assets/26/MarioKartWorld/cover.png", 
    logo: "/assets/26/MarioKartWorld/frontpage.png",
    genre: "Corrida / Kart",
    releaseDate: "2025-09-01", // Estimativa baseada no seu texto ("tem um ano de lançamento")
    developer: {
        name: "Nintendo EPD",
        countryFlag: "/assets/flags/japan.png" 
    },
    publisher: "Nintendo",
    engine: "Nintendo Engine", 
    platforms: ["Nintendo Switch 2"]
  };

  const seoDescription = "Review de Mario Kart World. Analisamos o novo jogo de corrida do Nintendo Switch 2, suas inovações nas pistas, o modo de 24 jogadores e o polêmico novo formato de torneio.";
  const seoKeywords = "Mario Kart World review, análise Mario Kart Switch 2, Nintendo, corrida, multiplayer, 24 jogadores";

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
              Enfim, depois de muito tempo, decido escrever uma review sobre esse Mario Kart. Foi o primeiro grande jogo da Nintendo quando lançou o Nintendo Switch 2. Demorei para fazer ele porque comprei numa época em que a mídia física estava barata e, quando peguei troféu, digo, todos, acho que é hora de falar sobre ele.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <GameImage 
              src="/assets/26/MarioKartWorld/mecanica.png" 
              alt="Mecânicas de Mario Kart World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Essa parte da mecânica, eu acho que o jogo é muito divertido. De tantos jogos de corrida que existem, acho que Mario Kart é o melhor para diversão sobre corrida, sabe? Mas, falando em inovação, depois de sei lá quanto tempo no 8, esse novo Mario Kart traz algumas coisas novas.
            </p>
            <p className="mb-4">
              Primeiro, são vários itens. Alguns itens são bem legais, como o cogumelo para ficar grande, a peninha para dar um pulo ou o martelo. Outros são meio meh, como o casco dourado e o item surpresa, mas são boas adições para o jogo. Também foram adicionados de 12 competidores para 24, um número maior, que também fica bom para multiplayer. Quanto mais gente, maior é a confusão.
            </p>
            <p className="mb-4">
              Também, aproveitando para falar das mudanças, agora foi definido um aumento do limite de moedas para 20 e, além disso, se cair, perde todos os itens. Então, por que não é 100 aqui? Porque não gostei do design dos mapas. Diria que os mapas são, sim, bons, mas talvez eu vá explicar melhor isso na seção da história. Acabou respingando aqui.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/MarioKartWorld/grafico.png" 
              alt="Gráficos de Mario Kart World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              O gráfico do jogo deu um upgrade em comparação com o Mario Kart 8. Talvez o maior update mesmo tenha sido ter skins dos personagens. Claro que nem todos têm, mas algumas adições já foram bem-vindas. Além disso, as novas pistas também foram legais, principalmente a pista do Buu Cinema.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90}>
            <GameImage 
              src="/assets/26/MarioKartWorld/trilha sonora.png" 
              alt="Trilha Sonora de Mario Kart World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              A trilha sonora do jogo é sempre excelente, não tem o que comentar aqui. Cada pista tem sua própria música.
            </p>
          </ReviewSection>

          {/* História (Torneios e Design) */}
          <ReviewSection title="História" rating={60}>
            <GameImage 
              src="/assets/26/MarioKartWorld/historia.png" 
              alt="Design de Mapas e Torneios de Mario Kart World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Aqui que eu chego na polêmica. Antes da polêmica, só dizer que o jogo possui os modos antigos, de batalha, pegar moeda, dos torneios. Bem, adicionaram uns modos novos como eliminatória, que é uma espécie de Sprint e mais battle royale em corrida.
            </p>
            <p className="mb-4">
              Aqui começa a nascer o problema. Lembra que citei que as pistas têm um bom design? Eu não menti, estou falando sério. O problema é... como tem um mundo novo aberto na história, pensaram: vão fazer a pessoa acabar uma pista e chegar nela até lá. Aí que nasceu o problema, porque ir até outra pista é uma ideia legal, mas o problema é como é feita. É literalmente uma reta enorme e, no fim, você só dá uma volta nela, sabe? Estou falando disso nos torneios PADRÃO do jogo, aquele famoso 4 pistas e torneio estrela, cogumelo. Desde os tempos primordiais, achei essa decisão bem bosta.
            </p>
            <p className="mb-4">
              Agora, claro, que para o multiplayer você não precisa disso. Dá para ir escolhendo as pistas e, quando joga nela, você disputa com as voltas normais e não só uma volta, sabe? Eu não sei se vão melhorar isso, é cedo falar porque o jogo só tem um ano de lançamento ainda. Hoje, no momento dessa review, chegaram 10 pistas novas do Super Nintendo, porém, como falei, só podem ser jogadas no modo VS corrida ou online, ou seja, não tem um modo de trofeuzinho e tal. Além do online, eu achei legal uma opção de ficar andando pelo mapa enquanto espera a próxima pista.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
             
            <p className="mb-4">
              O jogo não possui bugs e também o jogo veio traduzido para PT-BR.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">
                  Eu acho que o Mario Kart 8 continua sendo o melhor dos Mario Kart. Apesar de esse Mario Kart ser mais moderno, espero que tenha evolução no futuro. Acho um bom jogo, apesar de ser caro, só recomendaria com promoção.
                </p>
                </>
            }
            rating={88}
            date="10/09/2026"
          />

        </div>
      </div>
    </>
  );
};

export default MarioKartWorld;