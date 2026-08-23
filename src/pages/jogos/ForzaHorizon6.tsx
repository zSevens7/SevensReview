// src/pages/jogos/ForzaHorizon6.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const ForzaHorizon6: React.FC = () => {

  const gameData = {
    slug: "forza-horizon-6",
    title: "Forza Horizon 6",
    subtitle: "A chegada da franquia ao Japão oferece uma experiência arcade refinada, embora com alguns tropeços no online e na progressão.",
    rating: 88,
    coverImage: "/assets/26/ForzaHorizon6/cover.png", 
    logo: "/assets/26/ForzaHorizon6/frontpage.png",
    genre: "Corrida",
    releaseDate: "2026-05-19",
    developer: {
        name: "Playground Games",
        countryFlag: "/assets/flags/uk.png" // Reino Unido
    },
    publisher: "Xbox Game Studios",
    engine: "ForzaTech",
    platforms: ["Windows", "Xbox Series X/S", "PlayStation 5"]
  };

  // SEO
  const seoDescription = "Review de Forza Horizon 6. Analisamos a estreia da série no Japão, os gráficos impressionantes, a jogabilidade arcade e os problemas do modo online.";
  const seoKeywords = "Forza Horizon 6 review, análise Forza Horizon 6, Playground Games, Xbox Game Studios, ForzaTech, jogo de corrida, arcade, Tokyo, Japão";

  // Estilo padrão para imagens de jogos modernos (alta resolução)
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
              Este é o primeiro Forza Horizon que joguei até o final. Lembro que já tentei jogar o primeiro título da franquia, mas hoje em dia é difícil encontrá-lo, pois é um jogo antigo e não está disponível na Steam. Na época em que joguei, achei o primeiro excelente. Depois disso, nunca tive tanto interesse na série Forza Horizon.
            </p>
            <p className="mb-4">
              Acho que o principal motivo que me levou a comprar este jogo foi o gráfico e o ambiente ambientado em Tóquio, algo que gostei bastante. Vi algumas pessoas jogando e decidi comprá-lo.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <GameImage 
              src="/assets/26/ForzaHorizon6/mecanica.png" 
              alt="Gameplay e variedade de terrenos" 
              className={imageClass}
            />
            <p className="mb-4">
              A franquia Forza Horizon (FH) é uma das poucas séries de jogos de corrida que ainda está realmente viva, recebendo grandes investimentos e entregando jogos com um nível mínimo de qualidade. A outra grande franquia é Gran Turismo (GT).
            </p>
            <p className="mb-4">
              Eu diria que Forza Horizon é mais arcade, enquanto Gran Turismo é mais simulador. Aqui, a mecânica funciona muito bem. Algumas pessoas podem achar difícil controlar os carros no início, mas o sistema faz sentido. Diferentes tipos de pneus e veículos realmente influenciam o desempenho em cada terreno: asfalto, terra, neve e chuva.
            </p>
            <p className="mb-4">
              Por exemplo, qualquer carro de rua tem grandes chances de perder o controle ao entrar em uma estrada de terra, enquanto um carro de rally se comporta muito melhor nessas condições. Resumindo, a jogabilidade é divertida e explorar o mapa é algo prazeroso, principalmente porque ele é grande e possui ambientes bastante variados.
            </p>
            <p className="mb-4">
              As corridas também são legais. Existem provas de sprint, circuitos com voltas, drift, arrancada, saltos e muito mais. Falta de variedade certamente não é um problema. Além disso, há algumas missões criadas para apresentar partes da cultura japonesa e do próprio universo do jogo, assunto que abordarei melhor na seção de história.
            </p>
            <p className="mb-4">
              Alguns recursos me ajudaram bastante durante a campanha. No início, se não fosse a função de retroceder o tempo, eu teria reiniciado diversas corridas. Depois de aproximadamente 20 horas de jogo, já estava tão acostumado à direção que praticamente deixei de utilizar esse recurso.
            </p>
            <p className="mb-4">
              Se eu estivesse avaliando apenas o modo offline, daria nota 100 para a mecânica. No entanto, ontem participei de um comboio com 12 pessoas e descobri que o modo online possui diversos problemas.
            </p>
            <p className="mb-4">
              Os mapas criados pela comunidade, pelo menos até 25/05/2026, são muito fracos visualmente e fornecem poucas informações sobre quais carros utilizar. Além disso, algumas pistas oficiais possuem limitações estranhas: certas provas de touge permitem apenas duas pessoas, enquanto outras aceitam apenas seis participantes.
            </p>
            <p className="mb-4">
              Outro problema é a tela de apresentação dos jogadores. Existe uma animação para exibir o personagem, mas não é possível visualizar adequadamente o carro do amigo que está ao lado. Também há o absurdo tempo de apenas 20 segundos para escolher um veículo. É praticamente impossível aplicar filtros, analisar opções e selecionar o carro desejado nesse intervalo.
            </p>
            <p className="mb-4">
              Isso se torna ainda pior porque o sistema de filtros é extremamente confuso. Existem muitas categorias e opções, tornando a navegação pouco intuitiva. O principal problema continua sendo o tempo reduzido; algo em torno de 1 minuto e 30 segundos seria muito mais adequado.
            </p>
            <p className="mb-4">
              Além disso, as colisões praticamente não possuem punição. Empurrar adversários contra muros ou fazê-los cair de pontes não gera penalidades relevantes. Por isso, acredito que o modo online funciona melhor entre amigos do que em partidas públicas.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/ForzaHorizon6/grafico.png" 
              alt="Gráficos e ambientação em Tóquio" 
              className={imageClass}
            />
            <p className="mb-4">
              Este é o ponto mais forte do jogo.
            </p>
            <p className="mb-4">
              Os desenvolvedores fizeram um trabalho excelente não apenas nos carros, mas também em todo o ambiente ao redor. Estradas, vegetação, iluminação e objetos do cenário apresentam um nível de detalhe impressionante.
            </p>
            <p className="mb-4">
              Outro destaque é o sistema de personalização. Além das melhorias mecânicas, é possível alterar completamente o visual dos veículos. Caso você não goste de passar horas criando pinturas, pode simplesmente baixar e aplicar os designs feitos pela comunidade.
            </p>
            <p className="mb-4">
              Fiz isso em vários carros famosos. Um exemplo é o carro de Initial D, que já possui diversas versões criadas pelos jogadores.
            </p>
            <p className="mb-4">
              Talvez algumas pessoas sintam falta de recursos como neon ou personalização da cor dos faróis, mas acredito que esse tipo de customização seja mais associado à franquia Need for Speed.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90}>
            <GameImage 
              src="/assets/26/ForzaHorizon6/trilha-sonora.png" 
              alt="Gráficos e ambientação em Tóquio" 
              className={imageClass}
            />
            <p className="mb-4">
              A trilha sonora é muito boa.
            </p>
            <p className="mb-4">
              Primeiramente, os sons dos motores são excelentes. Além disso, o jogo permite configurar individualmente o volume de cada elemento. Você pode optar por ouvir mais o motor, aumentar a música ou reduzir diálogos, algo que achei bastante interessante. Naturalmente, escolhi deixar a música em destaque.
            </p>
            <p className="mb-4">
              Falando dela, gostei bastante da seleção musical, embora nem todas as faixas tenham me agradado. As três rádios que mais ouvi foram Pulse, Bass e Gacha (exclusiva japonesa).
            </p>
            <p className="mb-4">
              Também gostei do sistema de rádio, que lembra bastante o utilizado em GTA. Os locutores comentam acontecimentos do festival, dão dicas e ajudam a criar uma sensação maior de imersão.
            </p>
            <p className="mb-4">
              Depois de jogar, recomendo procurar algumas músicas no Spotify ou no YouTube, pois várias delas são excelentes.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={60}>
            <GameImage 
              src="/assets/26/ForzaHorizon6/historia.png" 
              alt="Personagens e progressão da campanha" 
              className={imageClass}
            />
            <p className="mb-4">
              Este é, sem dúvida, o ponto mais fraco do jogo.
            </p>
            <p className="mb-4">
              O principal problema dos jogos de corrida modernos é a falta de uma história envolvente, objetivos claros e uma progressão mais satisfatória.
            </p>
            <p className="mb-4">
              A campanha possui potencial desperdiçado. Existem diversos personagens secundários com os quais realizamos missões paralelas. Alguns são japoneses e outros parecem vir de jogos anteriores da franquia. Eles possuem uma boa química e carisma, mas são pouco aproveitados.
            </p>
            <p className="mb-4">
              Muita gente pode argumentar que jogos de corrida não precisam de história, mas alguns dos melhores títulos do gênero, como Need for Speed: Most Wanted, possuíam narrativas simples, porém eficientes, capazes de motivar o jogador a continuar avançando.
            </p>
            <p className="mb-4">
              Quanto aos objetivos, a progressão gira em torno dos eventos do Horizon Festival e da evolução da pulseira de reputação. O problema é que, desde o início do jogo, o jogador pode explorar praticamente todo o mapa. Além disso, os eventos principais são relativamente poucos.
            </p>
            <p className="mb-4">
              Seria mais interessante se determinadas áreas fossem desbloqueadas gradualmente conforme o progresso do jogador. Isso criaria uma sensação maior de conquista e evolução.
            </p>
            <p className="mb-4">
              Por fim, chegamos ao maior problema: a progressão dos carros.
            </p>
            <p className="mb-4">
              As desenvolvedoras de jogos de corrida vêm falhando bastante nesse aspecto. Uma progressão ideal começa com veículos simples e acessíveis, como um Fiesta, Palio ou Polo. Aos poucos, o jogador conquista carros melhores e mais rápidos.
            </p>
            <p className="mb-4">
              O jogo até possui um sistema de classificação interessante (D → C → B → A → S → S1 → S2 → R), mas ele perde o sentido porque diversos veículos são entregues gratuitamente ao jogador o tempo todo. Em pouco tempo, você possui carros de altíssimo desempenho sem ter feito esforço real para conquistá-los.
            </p>
            <p className="mb-4">
              O resultado é uma progressão inconsistente, onde você pode disputar uma corrida com um carro S1 e logo depois utilizar um veículo da classe D. Esse problema não é exclusivo de Forza Horizon, mas continua sendo uma falha importante.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <GameImage 
              src="/assets/26/ForzaHorizon6/otimizacao.png" 
              alt="Interface e localização em português" 
              className={imageClass}
            />
            <p className="mb-4">
              Não tenho muito a comentar aqui.
            </p>
            <p className="mb-4">
              O jogo possui localização completa em português, incluindo dublagem, algo extremamente importante para acompanhar as falas dos apresentadores de rádio e dos personagens.
            </p>
            <p className="mb-4">
              Durante toda a minha experiência encontrei apenas um bug visual. Em uma das missões dos "Rolezinhos", as rodas do carro apareciam desalinhadas em relação aos eixos. Fora isso, não tive problemas relevantes.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="No geral, Forza Horizon 6 é um ótimo jogo. Depois de tanto tempo sem grandes lançamentos arcade AAA no gênero de corrida, um título como este faz muita falta. O jogo vendeu muito bem na Steam, alcançando cerca de 300 mil jogadores simultâneos, mesmo sendo um produto fortemente associado ao Game Pass e ao Xbox. Existem bons jogos independentes de corrida atualmente, mas ainda não tive tempo para experimentá-los. Ao mesmo tempo, a franquia Need for Speed não vive seu melhor momento. Por isso, considero Forza Horizon 6 uma das melhores opções de corrida moderna para quem prefere uma experiência arcade em vez de simuladores como Assetto Corsa ou Gran Turismo. Apesar dos problemas na progressão dos carros e de algumas limitações do modo online, a experiência geral continua sendo extremamente divertida. O preço pode parecer alto para algumas pessoas, mas sempre existe a possibilidade de esperar uma promoção ou assinar um mês de Game Pass para experimentar o jogo."
            rating={88}
            date="25/05/2026"
          />

        </div>
      </div>
    </>
  );
};

export default ForzaHorizon6;