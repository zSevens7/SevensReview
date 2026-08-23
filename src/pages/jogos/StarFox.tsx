// src/pages/jogos/StarFox.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const StarFox: React.FC = () => {

  const gameData = {
    slug: "star-fox",
    title: "Star Fox",
    subtitle: "Depois de 10 anos, Star Fox ganha um outro jogo, porém é um remake feito de forma segura, sem inovar ou acrescentar algo comparado ao original.",
    rating: 78,
    coverImage: "/assets/26/StarFox/cover.png", 
    logo: "/assets/26/StarFox/frontpage.png",
    genre: "Rail Shooter",
    releaseDate: "2026-06-28",
    developer: {
        name: "Velan Studios",
        countryFlag: "/assets/flags/usa.png" // Assumindo flag baseada na origem comum do estúdio
    },
    publisher: "Nintendo",
    engine: "Nintendo Engine",
    platforms: ["Nintendo Switch 2"]
  };

  const seoDescription = "Review de Star Fox. Analisamos o remake de Star Fox 64 pela Velan Studios, focando em suas mecânicas, gráficos e o conteúdo conservador.";
  const seoKeywords = "Star Fox review, análise Star Fox remake, Velan Studios, Nintendo, rail shooter, Star Fox 64";

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
              Esse é o primeiro jogo da franquia Star Fox que joguei. É uma franquia antiga da Nintendo que ficou bastante tempo sem receber uma sequência. Pelo que pesquisei, o último jogo lançado havia sido em 2016 para o Nintendo Wii U, desenvolvido pela PlatinumGames.
            </p>
            <p className="mb-4">
              Desta vez, a Nintendo contratou um estúdio bem menor e novato no mercado, a Velan Studios, para desenvolver uma versão "remake" de Star Fox 64, lançado originalmente em 1997.
            </p>
            <p className="mb-4">
              Enfim, vamos à review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={80}>
            <GameImage 
                          src="/assets/26/StarFox/mecanica.png" 
                          alt="Imagem de Star Fox" 
                          className="max-w-xs md:max-w-md lg:max-w-lg"
                        />

            <p className="mb-4">
              Confesso que nunca fui um grande fã do gênero rail shooter. Para quem não conhece, trata-se de um estilo de jogo em que o personagem segue um trajeto praticamente fixo enquanto elimina os inimigos que aparecem pelo caminho. É um gênero que fez bastante sucesso anos atrás, principalmente em jogos de combate aéreo, e que combina perfeitamente com a proposta de Star Fox.
            </p>
            <p className="mb-4">
              Mesmo não sendo um estilo que costumo jogar com frequência, admito que a jogabilidade me divertiu bastante. Os controles respondem muito bem, a movimentação da Arwing é precisa e as missões conseguem manter um bom ritmo do começo ao fim. Outro detalhe que gostei foi a quantidade de diálogos durante as fases. Enquanto você enfrenta os inimigos, os personagens conversam constantemente pelo rádio, dando instruções, fazendo comentários e ajudando a criar a sensação de estar participando de uma missão espacial ao lado do restante da equipe.
            </p>
            <p className="mb-4">
              O meu maior problema está nas batalhas contra os chefes. Em diversos momentos tive a impressão de que a distância entre a nave e o inimigo não funcionava muito bem, dificultando a percepção do que realmente estava acontecendo na tela. Além disso, alguns chefes obrigam o jogador a esperar bastante tempo até que o único ponto vulnerável fique exposto. O pior é que o jogo quase nunca deixa isso claro. Em algumas lutas, um personagem comenta sobre o ponto fraco apenas depois de muito tempo, enquanto em outras você simplesmente precisa descobrir sozinho. Houve um chefe em que morri cerca de sete vezes até perceber que bastava atirar em um dos braços para causar dano, algo que poderia ter sido comunicado de forma muito mais intuitiva.
            </p>
            <p className="mb-4">
              Outro elemento interessante são as fases em áreas abertas. Nelas, o jogo abandona temporariamente a estrutura tradicional do rail shooter e permite que você voe livremente por uma arena circular, enfrentando inimigos enquanto realiza loopings, curvas fechadas e outras manobras típicas dos clássicos jogos de combate aéreo. A ideia é muito boa e ajuda a variar o ritmo da campanha, embora em alguns momentos a ação fique um pouco confusa, principalmente quando há muitos inimigos ocupando a tela ao mesmo tempo.
            </p>
            <p className="mb-4">
              Por fim, o jogo traz suporte ao modo mouse do Nintendo Switch 2, uma das principais novidades do console. No meu caso, praticamente não utilizei essa funcionalidade, pois preferi jogar durante toda a campanha utilizando os controles tradicionais. Portanto, não considero justo avaliar esse recurso, já que minha experiência foi quase inteiramente com o esquema clássico de comandos.
            </p>
            
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={75}>
            <GameImage 
                          src="/assets/26/StarFox/grafico.png" 
                          alt="Imagem de Star Fox" 
                          className="max-w-xs md:max-w-md lg:max-w-lg"
                        />
            <p className="mb-4">
              Os modelos dos personagens ficaram muito bonitos. Pesquisando sobre o remake, percebi que a principal melhoria em relação ao original está justamente nas cenas cinematográficas, que receberam muito mais detalhes e ajudam a contar melhor a história antes de cada missão.
            </p>
            <p className="mb-4">
              Já os cenários e o level design funcionam bem. Eles cumprem seu papel e são agradáveis, mas o visual do mundo em si é apenas mediano.
            </p>
            <p className="mb-4">
              Resumindo:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Gráfico e design dos personagens → Excelente.</li>
              <li>Level design das missões → Bom.</li>
              <li>Gráfico dos cenários → Mediano.</li>
            </ul>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={60}>
            <GameImage 
                          src="/assets/26/StarFox/historia.png" 
                          alt="Imagem de Star Fox" 
                          className="max-w-xs md:max-w-md lg:max-w-lg"
                        />
            <p className="mb-4">
              Tudo bem que esse é um jogo de tiro, então nunca esperei encontrar uma narrativa extremamente elaborada. Ainda assim, o motivo da minha nota baixa não está na história em si, mas na quantidade de conteúdo que o jogo oferece. A sensação que tive durante toda a campanha foi de que ela termina justamente quando começa a engrenar.
            </p>
            <p className="mb-4">
              Pelo que percebi, a Velan Studios preferiu seguir um caminho bastante conservador. Em vez de expandir a experiência original, o estúdio concentrou seus esforços principalmente na melhoria visual, preservando quase toda a estrutura do jogo de 1997. O resultado é um remake muito fiel, mas que pouco acrescenta para quem esperava algo além de gráficos atualizados.
            </p>
            <p className="mb-4">
              Para concluir uma campanha, você enfrenta apenas sete missões, e elas estão longe de serem longas. Pelo contrário, a maioria pode ser concluída rapidamente, fazendo com que o jogo termine em poucas horas. Quando os créditos aparecem, fica aquela sensação de que ainda havia espaço para mais fases, mais acontecimentos e um desenvolvimento maior da aventura.
            </p>
            <p className="mb-4">
              Existe conteúdo adicional para quem deseja conhecer melhor o universo de Star Fox, mas ele está preso a desafios específicos. O jogo possui cartões com informações sobre inimigos, personagens e outros detalhes da história, porém, para desbloqueá-los, é necessário cumprir objetivos como terminar uma missão em um tempo determinado ou destruir uma quantidade específica de máquinas. Particularmente, nunca fui muito fã desse tipo de recompensa. Prefiro que essas informações façam parte da campanha principal, em vez de ficarem escondidas atrás de desafios opcionais.
            </p>
            <p className="mb-4">
              Outro ponto importante é o sistema de rotas alternativas. Apesar de a campanha possuir apenas sete missões por partida, o jogo conta com diversos mapas diferentes, e cada rota leva o jogador por uma sequência distinta de fases. Na prática, isso aumenta a rejogabilidade e incentiva novas partidas para descobrir todos os caminhos disponíveis.
            </p>
            <p className="mb-4">
              Na minha experiência, comecei jogando no modo Normal, mas fiquei preso várias vezes no chefe do planeta Solar. Acabei reduzindo a dificuldade para o Easy apenas para concluir a campanha e conhecer o restante do jogo. Depois, ao retornar ao modo Normal, fui surpreendido ao perceber que minhas escolhas me levaram por uma rota completamente diferente, com fases que eu sequer havia visto anteriormente.
            </p>
            <p className="mb-4">
              Sei que muita gente gosta desse tipo de estrutura justamente porque aumenta a vida útil do jogo. No meu caso, porém, nunca fui muito fã de experiências baseadas em repetir várias vezes a mesma campanha para desbloquear todo o conteúdo. Depois da primeira conclusão, acabo perdendo um pouco o interesse em revisitar as mesmas fases apenas para seguir um caminho diferente.
            </p>
            <p className="mb-4">
              É justamente por isso que acredito que a Velan Studios perdeu uma boa oportunidade. Na minha visão, um remake não deveria se limitar apenas a melhorar os gráficos. Ele também pode expandir a experiência original, acrescentando novas missões, personagens, momentos inéditos e mais conteúdo para justificar seu retorno.
            </p>
            <p className="mb-4">
              Isso não impactou tanto a minha experiência, já que nunca havia jogado Star Fox 64 no Nintendo 64. Porém, consigo imaginar que muitos fãs do jogo original talvez esperassem uma reimaginação mais ambiciosa, em vez de uma recriação tão fiel da aventura clássica.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={75}>
            <GameImage 
                          src="/assets/26/StarFox/trilha sonora.png" 
                          alt="Imagem de Star Fox" 
                          className="max-w-xs md:max-w-md lg:max-w-lg"
                        />
            <p className="mb-4">
              A trilha sonora é competente e cumpre muito bem o seu papel durante as missões. Algumas músicas conseguem se destacar e ajudam bastante a criar o clima das batalhas e das perseguições espaciais, tornando a ação mais empolgante. Ainda assim, não considero que seja uma daquelas trilhas marcantes que fazem você procurar as músicas depois para ouvir no Spotify ou no YouTube. Mesmo não sendo memorável, ela complementa muito bem a experiência e acaba sendo mais um ponto positivo do jogo.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              Aqui não há muito o que criticar. O jogo conta com legendas em português do Brasil e, o mais importante, possui uma dublagem completa em nosso idioma. Pelo menos na minha experiência com os jogos publicados pela Nintendo, foi a primeira vez que vi um trabalho desse nível. E quando digo dublagem completa, não estou falando apenas de algumas frases soltas. Durante toda a campanha existem diversos diálogos entre os personagens, tanto nas cenas quanto durante as missões, o que ajuda bastante na imersão e torna a experiência muito mais agradável. É uma diferença enorme quando comparado a títulos como Super Mario Bros. Wonder, em que os personagens praticamente se limitam a algumas poucas falas. Nesse aspecto, a Nintendo merece reconhecimento pelo excelente trabalho de localização realizado neste remake.
            </p>
          </ReviewSection>

          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">
                    Não considero Star Fox um jogo ruim. Muito pelo contrário: ele é divertido,
                    tem uma jogabilidade sólida e consegue entregar momentos bastante agradáveis
                    durante toda a campanha. O maior problema é justamente a sensação de potencial
                    desperdiçado. Em vários momentos tive a impressão de que a Velan Studios
                    preferiu não correr riscos, optando por um remake extremamente fiel ao
                    original. O resultado é um jogo competente, mas que raramente surpreende ou
                    apresenta novidades capazes de justificar uma nova experiência para quem
                    esperava algo além de uma atualização visual.
                </p>

                <p className="space-y-4 mb-4">
                    Essa decisão faz com que o jogo tenha uma proposta muito próxima da de um
                    arcade. A campanha é curta, as missões são rápidas e existe pouco conteúdo
                    para manter o jogador envolvido por muitas horas. É verdade que as rotas
                    alternativas aumentam a rejogabilidade, mas, para quem não gosta de repetir
                    a campanha diversas vezes, elas acabam não sendo um grande atrativo.
                </p>

                <p className="space-y-4 mb-4">
                    Ainda assim, existe um público para o qual esse formato funciona muito bem.
                    Eu costumo levar o Nintendo Switch em viagens, e consigo imaginar Star Fox
                    sendo exatamente aquele jogo ideal para essas ocasiões: você liga o console,
                    joga por uma ou duas horas, conclui uma campanha e segue viagem sem precisar
                    investir dezenas de horas para aproveitar a experiência.
                </p>

                <p className="space-y-4 mb-4">
                    No fim das contas, Star Fox é um bom remake e um jogo divertido, mas faltou
                    coragem para transformá-lo em algo realmente memorável. Se a Velan Studios
                    tivesse expandido o conteúdo original com novas missões, mais história e
                    algumas ideias inéditas, acredito que estaríamos falando de um dos grandes
                    jogos do Nintendo Switch 2, e não apenas de uma recriação competente de um
                    clássico da Nintendo.
                </p>
                </>
            }
            rating={78}
            date="28/06/2026"
            />

        </div>
      </div>
    </>
  );
};

export default StarFox;