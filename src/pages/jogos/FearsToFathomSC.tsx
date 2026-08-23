// src/pages/jogos/FearsToFathomSC.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const FearsToFathomSC: React.FC = () => {

  const gameData = {
    slug: "fears-to-fathom-sc",
    title: "Fears to Fathom",
    subtitle: "O desenvolvedor Rayll tenta trazer o terror psicológico para o modo cooperativo, com momentos de tensão bem construídos, mas atrapalhado por problemas técnicos.",
    rating: 75,
    coverImage: "/assets/26/FearsToFathomSC/cover.png", 
    logo: "/assets/26/FearsToFathomSC/frontpage.png",
    genre: "Terror Psicológico / Cooperativo",
    releaseDate: "2026-06-10",
    developer: {
        name: "Rayll",
        countryFlag: "/assets/flags/india.png"
    },
    publisher: "Rayll",
    engine: "Unity",
    platforms: ["Windows"] // Provavelmente apenas PC; ajuste se houver outras
  };

  // SEO
  const seoDescription = "Review de Fears to Fathom, o mais novo capítulo cooperativo da série de terror psicológico de Rayll. Analisamos as mecânicas multiplayer, atmosfera, bugs e história.";
  const seoKeywords = "Fears to Fathom review, análise Fears to Fathom, Rayll, jogo de terror, cooperativo, indie, terror psicológico";

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
              A série Fears to Fathom é de um desenvolvedor indiano chamado Rayll. Apesar de ser indiano, ele mora nos Estados Unidos, em Nova York. Os jogos dele são focados em terror psicológico com gráficos em estilo "retrô".
            </p>
            <p className="mb-4">
              Neste jogo, ele tentou fazer um experimento com um modo cooperativo. E, sinceramente, parece que ele não foi muito fã da ideia. Eu acredito que o motivo tenha sido o tempo de desenvolvimento deste jogo em comparação com os anteriores, já que foi o projeto com o maior intervalo entre lançamentos. Mas enfim, vamos lá.
            </p>
            <p className="mb-4">
              Antes de começar, eu joguei o jogo junto com o Sinxplays.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânicas" rating={90}>
            <GameImage 
                                      src="/assets/26/StarFox/mecanica.png" 
                                      alt="Imagem de Fears to fathom" 
                                      className="max-w-xs md:max-w-md lg:max-w-lg"
                                    />
            <p className="mb-4">
              Começando pela mecânica de multijogador, ele conseguiu aplicar algumas ideias interessantes. A primeira delas é a possibilidade de arrastar determinados itens em conjunto. Foi bem implementada, apesar de que, nos momentos de terror, isso nem sempre era necessário e acabava ficando um pouco complicado.
            </p>
            <p className="mb-4">
              Mas o grande ponto positivo foi a forma como o jogo mistura cooperação com terror. Há momentos em que uma pessoa está passando por uma situação extremamente tensa, enquanto a outra está completamente tranquila. Além disso, é possível conversar por telefone e dar dicas ao parceiro. Isso ajudou bastante na construção da atmosfera.
            </p>
            <p className="mb-4">
              Na verdade, esse é o grande ponto forte dos jogos do Rayll: conseguir entregar ao jogador um ambiente imersivo.
            </p>
            <p className="mb-4">
              Tirando isso, ele mantém outras mecânicas já tradicionais da série, como dirigir carros, se esconder e coletar objetos. Porém, não vou entrar em muitos detalhes, porque acredito que o foco deste jogo seja realmente o multiplayer.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={80}>
            <GameImage 
                                      src="/assets/26/StarFox/grafico.png" 
                                      alt="Imagem de Fears to fathom" 
                                      className="max-w-xs md:max-w-md lg:max-w-lg"
                                    />
            <p className="mb-4">
              As fotos do jogo podem parecer bem feias à primeira vista, mas jogando não é tão ruim assim. Eu diria que ele consegue utilizar bem o visual para reforçar a atmosfera do terror.
            </p>
            <p className="mb-4">
              Talvez a única parte realmente negativa tenha sido o design de uma determinada área. Não sei se foi proposital ou não, mas um trecho próximo a um posto de gasolina era bastante confuso.
            </p>
            <p className="mb-4">
              Fora isso, não há muito o que comentar. Os cenários não são nada extraordinários, mas também não são ruins a ponto de prejudicar a experiência.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={70}>
            <GameImage 
                                      src="/assets/26/StarFox/trilhasonora.png" 
                                      alt="Imagem de Fears to fathom" 
                                      className="max-w-xs md:max-w-md lg:max-w-lg"
                                    />
            <p className="mb-4">
              Tudo bem que existem jogos de terror no mesmo estilo que nem possuem dublagem, então isso já é um diferencial. Mas não dou tantos créditos por causa disso.
            </p>
            <p className="mb-4">
              O importante é: a música é boa? Sim. Porém, acho que o grande defeito do Rayll até hoje é saber quando usar a trilha sonora da forma correta.
            </p>
            <p className="mb-4">
              Por quê? Porque ficava muito evidente quando o jogo queria indicar que algo ruim estava prestes a acontecer. Era fácil distinguir os momentos de "alguém vai me perseguir" dos momentos em que "está tudo bem". Isso acaba diminuindo um pouco a tensão.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={75}>
            <GameImage 
                                      src="/assets/26/StarFox/historia.png" 
                                      alt="Imagem de Fears to fathom" 
                                      className="max-w-xs md:max-w-md lg:max-w-lg"
                                    />
            <p className="mb-4">
              A história é interessante, mas segue muito a fórmula de "vá até o local X e depois vá até o local Y".
            </p>
            <p className="mb-4">
              O problema é que o jogo enrola bastante durante as primeiras horas. Só quando finalmente chegamos ao hotel é que a trama realmente começa a fazer sentido.
            </p>
            <p className="mb-4">
              Até lá, tudo bem que existam informações importantes sobre a narrativa, mas como quase não há mecânicas novas ou acontecimentos relevantes, acaba surgindo aquela sensação de: "Tá bom, já entendi, agora deixa eu jogar".
            </p>
            <p className="mb-4">
              Esses momentos foram bem irritantes.
            </p>
            <p className="mb-4">
              E o pior ainda estava por vir: algumas vezes nós morremos ou o jogo bugou, e tivemos que ouvir TODO O DIÁLOGO novamente. Não existe opção para pular as conversas. Na verdade, existe, mas apenas na última missão.
            </p>
            <p className="mb-4">
              Isso fez a gente perder cerca de 10 a 15 minutos ouvindo falas repetidas, o que foi bastante cansativo.
            </p>
            <p className="mb-4">
              Tirando isso, a história é legal, embora seja relativamente previsível para quem já jogou os outros títulos da franquia. O tema continua parecido: cultos, mistérios e situações sobrenaturais.
            </p>
            {/* SPOILER */}
            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
              <p className="font-semibold mb-2">⚠️ Alerta de Spoiler</p>
              <p className="mb-0">
                Mesmo assim, fiquei surpreso com a quantidade de inimigos no final do jogo.
              </p>
            </div>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={60}>
            <p className="mb-4">
              Talvez esta seja a pior nota do jogo e também a pior nota que eu já dei para o quesito otimização.
            </p>
            <p className="mb-4">
              Antes das críticas, preciso agradecer pela presença de legendas em português brasileiro.
            </p>
            <p className="mb-4">
              Agora vamos aos problemas.
            </p>
            <p className="mb-4">
              Como se trata de um jogo multiplayer, ele precisava oferecer opções muito melhores de configuração. As opções disponíveis são extremamente simples.
            </p>
            <p className="mb-4">
              Eu tive um problema sério com o microfone. O meu é muito sensível, e foi praticamente impossível reduzir os ruídos adequadamente. Tentei configurar pela Steam, pelo Windows e até fisicamente no equipamento, mas nada resolveu. O jogo captava absolutamente tudo: sons do ambiente, teclas do teclado e outros ruídos.
            </p>
            <p className="mb-4">
              Em um jogo cooperativo, no qual a comunicação é importante, isso deveria ter recebido muito mais atenção.
            </p>
            <p className="mb-4">
              Agora, falando dos bugs:
            </p>
            <p className="mb-4">
              Primeiro bug: a tradução mudava sozinha em determinados momentos.
            </p>
            <p className="mb-4">
              Segundo bug: em uma cena na banheira junto com o "namorado", o jogo simplesmente travou. Ele não conseguia sair de jeito nenhum. A solução? Reiniciar tudo e ouvir novamente o diálogo da senhora por cerca de 20 minutos.
            </p>
            <p className="mb-4">
              Terceiro bug: durante a perseguição final, conseguimos quebrar a inteligência artificial de alguma forma. Os inimigos simplesmente pararam de nos perseguir, impedindo o progresso. Resultado: tivemos que reiniciar novamente.
            </p>
            <p className="mb-4">
              Quarto bug: esse era apenas visual. Eu estava observando o local por onde um NPC deveria aparecer e quase consegui prendê-lo em uma colisão estranha. Achei que iria quebrar o jogo, mas felizmente ficou apenas na parte visual.
            </p>
            <p className="mb-4">
              Com todos esses detalhes, acho que faz sentido a nota de otimização ter sido tão baixa.
            </p>
            <p className="mb-4">
              Vou explicar melhor minha opinião no veredito final.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={`No geral, acredito que seja um bom jogo indie de terror. Ele consegue proporcionar momentos bem divertidos, principalmente em cooperação.
Porém, os problemas técnicos prejudicam bastante a experiência.
Vale lembrar que Rayll é praticamente um desenvolvedor solo. Apesar disso, ele já possui recursos suficientes para contratar mais pessoas, como dubladores.
Este também foi o jogo com o maior intervalo entre lançamentos da série:
• 2 de julho de 2021
• 6 de janeiro de 2022 (188 dias depois)
• 9 de janeiro de 2023 (368 dias depois)
• 20 de outubro de 2023 (284 dias depois)
• 12 de setembro de 2024 (328 dias depois)
• 10 de junho de 2026 (636 dias depois)
Ou seja, provavelmente foi o projeto que mais exigiu dele. Ainda assim, parece que faltou um período maior de testes. Dei uma olhada nos comentários da comunidade e encontrei muitas pessoas relatando problemas semelhantes.
Talvez isso tenha acontecido justamente por ser o primeiro Fears to Fathom com foco em multiplayer — e talvez até o último.
Já que estou falando do mesmo desenvolvedor, preciso comentar outra situação. Na minha opinião, Rayll demonstrou um certo ciúme ou arrogância em relação a outro desenvolvedor que também decidiu criar uma série de jogos seguindo uma estrutura parecida.
Algumas pessoas podem perguntar: "Mas isso é errado?"
Na minha visão, não.
Ambos utilizam a Unity, ambos trabalham com visuais retrô — algo que já existia antes — e a principal diferença é que Rayll decidiu transformar seus jogos em uma franquia com identidade própria, enquanto outros desenvolvedores optaram por projetos separados.
Foi uma decisão genial? Talvez.
Mas isso não significa que outras pessoas não possam criar experiências semelhantes. Se alguém realmente quiser algo totalmente único, teria que desenvolver sua própria tecnologia.
Acredito que a ideia do multiplayer tenha surgido justamente como uma tentativa de fazer algo diferente, pensar fora da caixa. E, sinceramente, acho que isso não era necessário.
Por fim, existe uma diferença importante entre os jogos do Rayll e os do estúdio 616. Apesar das semelhanças superficiais, os jogos da 616 costumam ser mais cinematográficos, focando em apresentar cenas quase como um filme. Já Rayll se destaca por construir ambientes mais atmosféricos e imersivos.
Enfim, é isso.`}
            rating={75}
            date="12/06/2026"
          />

        </div>
      </div>
    </>
  );
};

export default FearsToFathomSC;