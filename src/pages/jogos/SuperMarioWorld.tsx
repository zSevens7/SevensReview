// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\SuperMarioWorld.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const SuperMarioWorld: React.FC = () => {

  const gameData = {
    slug: "super-mario-world",
    title: "Super Mario World",
    subtitle: "Um dos melhores jogos feitos na história da indústria dos games, possivelmente está na lista dos 100 melhores.",
    rating: 94, 
    coverImage: "/assets/26/SuperMarioWorld/cover.png", 
    logo: "/assets/26/SuperMarioWorld/frontpage.png",
    genre: "Plataforma",
    releaseDate: "1990-11-01",
    developer: {
        name: "Nintendo EAD",
        countryFlag: "/assets/flags/japan.png" 
    },
    publisher: "Nintendo",
    engine: "Custom SNES Engine", 
    platforms: ["Super Nintendo (SNES)"]
  };

  const seoDescription = "Review de Super Mario World. Uma análise completa sobre um dos maiores clássicos da Nintendo, abordando mecânicas, gráficos e a magia do Super Nintendo.";
  const seoKeywords = "Super Mario World review, análise Super Mario SNES, Nintendo, jogos retrô, plataforma, clássico, review em português";

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
            <p className="mb-4">Como fiz assinatura do plano Nintendo Switch Online, consigo jogar alguns clássicos da Nintendo enquanto estou viajando. Aproveitei e joguei Super Mario World. Esse jogo me marcou na infância, porque, no Super Nintendo que meu primo tinha, era um dos poucos jogos disponíveis. Naquela época, era difícil ter jogos da Nintendo, principalmente em comparação com o PlayStation 1, onde copiar os CDs era muito mais fácil do que os cartuchos.</p>
            <p className="mb-4">Enfim, foi um dos primeiros jogos que joguei e decidi rejogar agora para ver como ele se sairia depois de tantos anos.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}> {/* Ajuste a nota da seção como preferir */}
            <GameImage 
              src="/assets/26/SuperMarioWorld/mecanica.png" 
              alt="Mecânicas de Super Mario World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Não tenho dúvidas: o jogo é muito divertido. Existem várias fases, são 7 mundos e, além disso, os mundos possuem locais secretos, várias formas de conseguir upgrades e poderes.</p>
            <p className="mb-4">Acho que uma das grandes diferenças dessa versão é a introdução do Yoshi, um personagem muito carismático, além do power-up que permite ao Mario voar.</p>
            <p className="mb-4">Além disso, as fases são muito boas, bem variadas e apresentam uma dificuldade que vai aumentando aos poucos. Se não fosse o suporte do Nintendo Switch Online de poder voltar no tempo, provavelmente demoraria muito mais para zerar o jogo. E, além disso, lembro que, até hoje, na minha infância, nunca passei da segunda fase. Claro que o jogo não era meu, mas... era difícil.</p>
            <p className="mb-4">Também existe a possibilidade de jogar em modo cooperativo, mas não lembro exatamente como funcionava.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <GameImage 
              src="/assets/26/SuperMarioWorld/grafico.png" 
              alt="Gráficos de Super Mario World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Para um jogo da década de 1990, o gráfico é muito bonito. Acho que o mais importante aqui são os designs dos personagens. O Yoshi ficou muito bonito e, até hoje, continua sendo uma referência nos jogos do Mario.</p>
            <p className="mb-4">Além disso, acho importante comentar que uma das coisas que sempre gostei nos jogos do Mario é o design das fases. Cada fase possui uma identidade própria, e o jogo consegue brincar bastante com diferentes ideias e mecânicas.</p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={95}>
            <GameImage 
              src="/assets/26/SuperMarioWorld/trilha sonora.png" 
              alt="Trilha Sonora de Super Mario World" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">A trilha sonora desse jogo é tão memorável que praticamente qualquer som que sai do jogo você consegue reconhecer na hora e saber que veio de Mario.</p>
            <p className="mb-4">É exatamente aí que quero chegar: a trilha sonora do jogo é excelente e consegue marcar bastante a experiência. Mesmo depois de tantos anos, várias músicas e efeitos sonoros continuam sendo facilmente reconhecíveis.</p>
          </ReviewSection>

          {/* História */}
                    <ReviewSection title="História" rating={80}>
                      <GameImage 
                        src="/assets/26/SuperMarioWorld/historia.png" 
                        alt="História de Super Mario World" 
                        className="max-w-xs md:max-w-md lg:max-w-lg"
                      />
                      <p className="mb-4">Talvez a história nunca seja um ponto tão importante para jogos de plataforma, mas aqui temos uma história básica: precisamos resgatar a Princesa Peach, como sempre.</p>
                      <p className="mb-4">A diferença é que também precisamos lidar com o desaparecimento dos Yoshis e enfrentar diversos desafios ao longo da aventura. Ou seja, é uma história simples, mas que cumpre bem o seu papel.</p>
                      <p className="mb-4">O que acho bom na história do jogo é como ela consegue se desenvolver através das próprias fases. Existem caminhos secretos, blocos invisíveis que podem levar a novas áreas e diversas outras descobertas.</p>
                      <p className="mb-4">São essas pequenas coisas que conseguem elevar um jogo de plataforma a um nível muito bom.</p>
                    </ReviewSection>
          
          {/* Otimização / Performance Retrô */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">Para a época, era normal o jogo estar apenas em inglês, então nem vou tirar ponto por isso. De resto, o jogo é muito tranquilo. Não encontrei bugs relevantes e, considerando a época em que foi lançado, a experiência continua muito boa.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">Para um jogo feito em 1990, para mim, Super Mario World continua jogável até hoje. E olha que já se passaram quase 40 anos.</p>
                <p className="space-y-4 mb-4">O jogo é considerado um dos melhores já feitos na história da indústria dos games, e acredito que entraria facilmente em uma lista dos 100 melhores jogos de todos os tempos. E não estou brincando.</p>
                <p className="space-y-4 mb-4">Enfim, recomendo bastante caso você tenha Nintendo Switch Online. Ou até mesmo procurando na internet, já que é um jogo que pode ser encontrado facilmente em diferentes plataformas.</p>
                <p className="space-y-4 mb-4">É um excelente jogo para passar o tempo e, principalmente, para entender por que Super Mario World continua sendo tão lembrado até hoje.</p>
                </>
            }
            rating={94}
            date="11/08/2026"
          />

        </div>
      </div>
    </>
  );
};

export default SuperMarioWorld;