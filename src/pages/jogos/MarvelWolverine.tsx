// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\MarvelWolverine.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const MarvelWolverine: React.FC = () => {

  const gameData = {
    slug: "marvel-wolverine",
    title: "Marvel Wolverine",
    subtitle: "Um dos jogos mais criticados pela rede social, mas afinal o jogo é realmente ruim?",
    rating: 87, 
    coverImage: "/assets/26/Wolverine/cover.png", 
    logo: "/assets/26/Wolverine/frontpage.png",
    genre: "Ação e Aventura",
    releaseDate: "2026-09-15",
    developer: {
        name: "Insomniac Games",
        countryFlag: "/assets/flags/usa.png" 
    },
    publisher: "Sony Interactive Entertainment",
    engine: "Insomniac Engine", 
    platforms: ["PlayStation 5"]
  };

  const seoDescription = "Review de Marvel Wolverine. Analisamos o polêmico jogo de ação da Insomniac Games focado no mutante mais famoso dos X-Men e discutimos se o hate é justificado.";
  const seoKeywords = "Marvel Wolverine review, análise Wolverine PS5, Insomniac Games, X-Men, Logan, jogo de ação, hack and slash";

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
               A nova franquia da Insomniac, depois de ter realizado dois bons jogos do Homem-Aranha, parte para o universo dos X-Men. Aqui vamos falar desse jogo polêmico. Digo "polêmico" porque ele sofreu um <i>hate</i> enorme nas redes sociais, mas jogá-lo me fez querer discordar de grande parte das pessoas. Nesta review, vou comentar um pouco sobre isso, e acredito que deixarei essa parte para a seção de História.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <GameImage 
              src="/assets/26/Wolverine/mecanica.png" 
              alt="Mecânicas de combate de Marvel Wolverine" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">O jogo funciona como um autêntico hack and slash. A batalha é bem visceral, com muito sangue (tem a opção de censurar, mas não recomendo) e muita ação. Tem corridas frenéticas com perseguição de carros, batalhas dentro de aviões, etc. Onde quero chegar é: o jogo funciona perfeitamente como um jogo de ação, fazendo você se sentir dentro de um filme do Wolverine. Para ajudar ainda mais nessa imersão, muitos itens dos cenários são totalmente destrutíveis, o que combina perfeitamente com a brutalidade que se espera de um jogo de ação dele.</p>
            <p className="mb-4">A única coisa que não gostei no combate é que não tem como travar a mira nos inimigos (ou, se tiver, eu não descobri como faz). Isso me incomodou um pouco às vezes, mas foi só um pequeno detalhe. Outro destaque é a mecânica de acumular fúria para "renascer", já que o Wolverine é um personagem bem roubado e tem uma autocura muito forte. Mas não ache que o jogo é FÁCIL; vai por mim, se não souber bloquear ou esquivar, você vai se dar mal.</p>
            <p className="mb-4">Aproveitando para comentar coisas adicionais, o jogo tem um sistema de stealth bem básico. Dá para usar? Dá... mas é muito simples. Acho que foi um desperdício essa parte, talvez tenham colocado só para mostrar o lado caçador dele. Tem também uns minigames de desafios que dão recompensas para melhorar as habilidades. Acho que são 3 tipos de eventos e uns 10 a 15 no total, não é muita coisa. Resumindo: o jogo não fica enchendo linguiça com esses minigames.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90}>
            <GameImage 
              src="/assets/26/Wolverine/grafico.png" 
              alt="Gráficos de Marvel Wolverine" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Sobre os gráficos, joguei no modo Desempenho a 60 FPS (não cheguei a testar o modo Qualidade a 30 FPS, pois prefiro fluidez). Achei o jogo bonito e o level design dos mapas é bem legal. Como citei acima, tem bastante cenário bom para batalhar, o que combina com o estilo de ação. Os personagens também têm designs muito legais. Inclusive, vale destacar que o jogo possui várias roupas diferentes para o Wolverine, fazendo referências incríveis aos clássicos das HQs e dos filmes.</p>
            <p className="mb-4">Só não dei a nota máxima porque, das três cidades que visitamos, acho que só uma é realmente de tirar o fôlego. O resto é mais ok, não rola aquela sensação de "nossa, que lugar lindo!". Não sei se é porque é mais fácil recriar Nova York ou se é difícil inventar uma cidade fictícia do zero.</p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={70}>
            <GameImage 
              src="/assets/26/Wolverine/trilha sonora.png" 
              alt="Trilha Sonora de Marvel Wolverine" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">A trilha sonora do jogo é boa. Não é nada de outro mundo, mas também não é ruim.</p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={85}>
            <GameImage 
              src="/assets/26/Wolverine/historia.png" 
              alt="História de Marvel Wolverine" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Aqui que começa a polêmica. Uma das maiores reclamações no lançamento era que o jogo "ERA CURTO". Eu mesmo zerei em umas 16 a 17 horas de gameplay. Antes de falar sobre a história em si (sem dar spoilers), acho bom conversar um pouco sobre isso: eu prefiro mil vezes um jogo assim, direto ao ponto, do que um cheio de missões repetitivas só para inflar o tempo de jogatina. Ainda mais que, como um bom jogo de ação, ele permite revisitar as fases anteriores para fazer os 100%. Talvez seja coisa da minha cabeça, mas acho que o jogo sofreu esse hate todo influenciado pela notícia do fim da mídia física para os jogos de PlayStation, o que o tornou um alvo fácil. Tenho uma opinião sobre isso*, mas aonde quero chegar é: nunca deveriam avaliar um jogo apenas pela proporção "quantidade de horas vs. preço". Eu poderia dar exemplos de vários jogos em que você percebe facilmente que só estão enchendo o mapa de coisas inúteis para o jogador fazer.
            </p>
            <p className="mb-4 italic text-sm text-gray-600 dark:text-gray-400 border-l-4 border-gray-400 pl-4">
              <em>
                * Minha opinião sobre o fim da mídia física é que isso já era previsível, até porque no PC ela já morreu faz tempo (o meu último jogo físico de PC é um PES 2013 que tenho guardado aqui e nem posso usar, porque meu PC atual não tem leitor de CD/DVD). Os PCs e notebooks de hoje não vêm mais com suporte a discos. Eu até entendo o argumento da preservação, de ter a mídia para o jogo não ser tirado do mercado, mas como competir com a conveniência da digital? No meu caso, esse Wolverine eu comprei em mídia física. O jogo lançou no dia 15/09, e sabe que dia chegou aqui? No dia 18/09. E olha que eu moro na 4ª maior cidade de Minas Gerais, colada na BR-040. O que eu quero dizer é que, nesses 3 dias de atraso, eu vi tantos comentários sobre o jogo que isso desanima continuar comprando mídia física. A digital sempre vai ganhar na velocidade de acesso e, muitas vezes, no custo. A Nintendo também já está forçando essa mudança aos poucos, vendendo os jogos físicos muito mais caros (com aumentos de 100 a 150 reais) e, em alguns casos, entregando apenas um código na caixa.
              </em>
            </p>
            <p className="mb-4">
              Voltando à história, o começo é meio bizarro. O seu maior vilão parece ser o seu amigo. Esse é o único spoiler que posso dar: o Dentes-de-Sabre começa do seu lado, e só depois a história vai explicando o porquê disso. É uma narrativa bem construída. Minha única decepção foi não terem mostrado outros mutantes famosos. Espero que explorem mais o universo dos X-Men no futuro, porque eles são muito legais e cada herói tem habilidades únicas. Tomara que no futuro façam um jogo de equipe estilo "Esquadrão Suicida", mas bem feito (falo disso porque os X-Men funcionam super bem como equipe, mas aquele jogo recente do Esquadrão Suicida foi muito mal feito, o que foi estranho vindo de uma empresa com uma fama tão boa).
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
             <GameImage 
              src="/assets/26/Wolverine/otimizacao.png" 
              alt="Otimização de Marvel Wolverine" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Falando sobre otimização, não tive bug nenhum durante a minha campanha. O jogo está totalmente localizado em PT-BR (texto e dublagem) e a dublagem está excelente, curti muito! Também vi que o jogo é lotado de recursos de acessibilidade, como tamanho de texto e ajustes de gameplay. São pequenos detalhes muito legais.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">Ainda bem que as reviews negativas das redes sociais não me influenciaram. Comprei o jogo por causa do trailer e porque confio na Insomniac depois dos dois últimos jogos do Homem-Aranha, que curti demais. Saio dessa experiência bem feliz. Aproveitando, esse jogo é obrigatório para quem gosta de ação e para quem é fã do Wolverine e dos X-Men. Seja você um jogador mais casual ou focado em dificuldade, o jogo se adapta bem, já que possui diversas opções de dificuldade. Acredito muito que o próximo jogo trará ainda mais elementos do universo X-Men.</p>
                
                </>
            }
            rating={87}
            date="20/09/2026"
          />

        </div>
      </div>
    </>
  );
};

export default MarvelWolverine;