// src/pages/jogos/NeedForSpeedHPR.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const NeedForSpeedHPR: React.FC = () => {

  const gameData = {
    slug: "need-for-speed-hpr",
    title: "Need for Speed: Hot Pursuit Remastered",
    subtitle: "A perseguição definitiva retorna com visual aprimorado e a mesma adrenalina",
    rating: 89,
    coverImage: "/assets/26/NeedForSpeedHPR/cover.png", 
    logo: "/assets/26/NeedForSpeedHPR/frontpage.png",
    genre: "Corrida / Arcade",
    releaseDate: "2020-11-06", // Data do Remaster
    developer: {
        name: "Stellar Entertainment / Criterion",
        countryFlag: "/assets/flags/uk.png"
    },
    publisher: "Electronic Arts",
    engine: "Chameleon",
    platforms: ["PC", "PS4", "Xbox One", "Switch"]
  };

  // SEO
  const seoDescription = "Review de Need for Speed: Hot Pursuit Remastered. O retorno do clássico de 2010 com gráficos atualizados, cross-play e a eterna disputa entre policiais e corredores em Seacrest County.";
  const seoKeywords = "Need for Speed Hot Pursuit Remastered, NFS HPR, Criterion Games, Stellar Entertainment, Arcade Racing, Review, Seacrest County";

  // Estilo para imagens
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
              Eu considero <strong>Need for Speed: Hot Pursuit</strong> o último jogo da franquia que estaria no nível "excelente". Depois do <em>Most Wanted</em> (o antigo mesmo), a franquia nunca conseguiu emplacar um jogo realmente bom com consistência.
            </p>
            <p className="mb-4">
              Acho isso estranho, pois enquanto outras franquias de corrida arcade mal conseguiram sobreviver — muitas vezes ofuscadas pelas gigantes <em>Gran Turismo</em> e <em>Forza Horizon</em> —, Need for Speed tinha tudo para brilhar, mesmo sendo diferente desses simuladores.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/NeedForSpeedHPR/mecanica.png" 
              alt="Gameplay de perseguição policial" 
              className={imageClass}
            />
            <p className="mb-4">
              A mecânica é extremamente agradável. Eu diria que é um jogo fácil de pegar e jogar, mas muito divertido. É simples fazer derrapagens na pista (os famosos <em>drifts</em>), e isso funciona muito bem no controle.
            </p>
            <p className="mb-4">
              Além disso, você pode pilotar tanto carros de corrida quanto viaturas de polícia. Eu não sou uma pessoa que jogou todos os "Need da vida", mas essa foi minha primeira experiência com essa dinâmica e achei muito divertido jogar como policial, perseguindo os corredores e conseguindo derrotá-los. O detalhe da câmera lenta quando você abate um carro dá um toque especial de satisfação.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <GameImage 
              src="/assets/26/NeedForSpeedHPR/grafico.png" 
              alt="Cenários de Seacrest County" 
              className={imageClass}
            />
            <p className="mb-4">
              O visual na versão <em>Remastered</em> é bonito. Não é um gráfico de "última geração" atual, mas envelheceu muito bem. O ponto fantástico aqui são os locais das pistas. É fácil memorizar cada parte do traçado, onde fica aquela curva específica ou aquele atalho. O que quero dizer é: quando o jogador consegue lembrar do mapa, é sinal de que o design foi bem criado.
            </p>
            <p className="mb-4">
              O mapa consiste em várias regiões distintas: praia, floresta, estradas de alta velocidade, montanhas (com e sem neve) e deserto. Além disso, o sistema de clima dinâmico — com chuvas e neve — afeta visualmente e também a mecânica de direção.
            </p>
            <p className="mb-4">
               A qualidade dos modelos dos carros é ótima, mas senti falta de poder personalizar melhor os veículos. Era um pouco complicado e limitado criar sua configuração visual. Tirei alguns pontos aqui justamente porque Need for Speed é famoso pela customização (o <em>Most Wanted</em> é amado por isso), e aqui ficou devendo.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={85}>
            <GameImage 
              src="/assets/26/NeedForSpeedHPR/trilha sonora.png" 
              alt="Menu de seleção de carros e modos" 
              className={imageClass}
            />
            <p className="mb-4">
              A trilha sonora é boa. As músicas licenciadas combinam com o clima, destacando-se clássicos como <em>"Edge of the Earth"</em> do 30 Seconds to Mars, <em>"Cinema"</em> do Benny Benassi e <em>"Watercolour"</em> do Pendulum. O áudio dos motores também é competente.
            </p>
            <p className="mb-4">
              Um detalhe legal é que, durante as perseguições, a música licenciada para e entra uma trilha original, instrumental e tensa, focada na ação policial. Além disso, a versão de PC permite que o jogador coloque suas próprias músicas na pasta do jogo para ouvir enquanto dirige (o famoso <em>Custom Soundtrack</em>).
            </p>
          </ReviewSection>

          {/* História e Modos */}
          <ReviewSection title="História/Conteúdo" rating={70}>
            <GameImage 
              src="/assets/26/NeedForSpeedHPR/historia.png" 
              alt="Menu de seleção de carros e modos" 
              className={imageClass}
            />
            <p className="mb-4">
              Falar de história em um jogo puramente <em>arcade</em> é difícil. Não existe aquela trama de vingança igual ao <em>Most Wanted</em>. Porém, eles conseguiram fazer o jogador se divertir com a variedade de modos.
            </p>
            <p className="mb-4">
              Para o lado dos <strong>Corredores (Racers)</strong>, temos: Corrida, Duelo, <em>Gauntlet</em> (você sozinho contra a polícia), <em>Hot Pursuit</em> (corrida com perseguição policial e vários rivais), <em>Preview</em> (teste de carros) e <em>Time Trial</em>.
            </p>
            <p className="mb-4">
              E para os <strong>Policiais (Cops)</strong>, temos: <em>Hot Pursuit</em> (lado da lei), <em>Interception</em> (perseguir um único carro que pode ir para onde quiser, sem rota fixa) e <em>Rapid Response</em> (um estilo de <em>Time Trial</em>, mas se você bater ou encostar nas paredes, ganha penalidade de tempo).
            </p>
            <p className="mb-4">
              Sentiu algo faltando? Eu diria que faltaram pistas específicas de <em>Drift</em> ou circuitos fechados (voltas), já que todas as corridas são "Sprints" (ponto A ao ponto B). Uma opção de criar sua própria pista seria uma adição legal que não pensaram na época.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização e Localização" rating={95}>
            <p className="mb-4">
              Sobre a parte técnica, o jogo roda muito bem. O único ponto negativo é a falta de legendas em PT-BR. Tudo bem que o jogo não tem tanta história, mas seria legal ter a tradução, afinal, é pouco texto e seria fácil de implementar.
            </p>
            <p className="mb-4">
              Encontrei pouquíssimos bugs. Na verdade, apenas um: durante um <em>Hot Pursuit</em>, um carro de ladrão ficou preso no cenário (clipou no chão) e eu tive que voltar a pista toda para ele desbugar. Não perdi o progresso, mas foi um imprevisto.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Sendo bem sincero, o jogo é muito bom e divertido. É excelente para quem gosta puramente de CORRIDA e não se importa com enredo. A progressão é boa, e talvez o único defeito seja que ele, infelizmente, acaba. Não vejo tantos problemas no jogo em si, apenas fico triste com a franquia Need for Speed no geral, que parece ter dificuldade de voltar aos seus dias de glória. Mas, pelo menos, a franquia continua viva, ao contrário de Driver, que está morta desde 2012."
            rating={89}
            date="13/02/2026"
          />

        </div>
      </div>
    </>
  );
};

export default NeedForSpeedHPR;