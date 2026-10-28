// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\CastlevaniaBelmontsCurse.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const CastlevaniaBelmontsCurse: React.FC = () => {

  const gameData = {
    slug: "castlevania-belmonts-curse",
    title: "Castlevania Belmont's Curse",
    subtitle: "Depois de 12 anos na geladeira, a Konami atua como publisher e acerta em mais um jogo, trazendo uma de suas franquias mais antigas de volta com muita qualidade e visual mais moderno.",
    rating: 88, 
    coverImage: "/assets/26/CastlevaniaBelmontCurse/cover.png", 
    logo: "/assets/26/CastlevaniaBelmontCurse/frontpage.png",
    genre: "Metroidvania / Plataforma 2D / Ação",
    releaseDate: "2026-10-15",
    developer: {
        name: "Evil Empire",
        countryFlag: "/assets/flags/france.png" // Evil Empire é um estúdio da França
    },
    publisher: "Konami",
    engine: "Custom Engine", 
    platforms: ["PlayStation 5", "Windows", "Xbox Series X/S", "Nintendo Switch 2"]
  };

  const seoDescription = "Review de Castlevania Belmont's Curse. Analisamos o aguardado retorno da franquia clássica da Konami, desenvolvido pela Evil Empire no melhor estilo Metroidvania.";
  const seoKeywords = "Castlevania Belmont's Curse review, análise Castlevania Evil Empire, Konami, Metroidvania, jogo de plataforma, 2D, Rose";

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
            <p className="mb-4 text-justify">Este é o primeiro Castlevania que eu jogo, ou seja, não sei se sou a melhor pessoa para dizer se o jogo é bom ou não, mas tentarei contar o que achei e como foi a minha experiência. Enfim, acho importante falar que notei que a Konami, dona da franquia Castlevania, está fazendo parcerias com várias empresas para lançar jogos da sua IP. Castlevania Belmont's Curse é um deles, tendo sido desenvolvido pela Evil Empire, estúdio já conhecido por fazer jogos excelentes no estilo Metroidvania.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <p className="mb-4 text-justify">Falando em Metroidvania, acho bom explicar o que é esse termo. Não é comum quando se dá a um gênero o nome de duas franquias (Metroid e Castlevania). São jogos focados em visão 2D com muita exploração, combate e ação. Não está tanto na moda no mercado principal hoje em dia, apesar de empresas indies estarem fazendo sucesso com eles. É só notar que meu site está no ar desde o início de 2025, já joguei vários títulos, e nenhum deles foi desse gênero. Mas, enfim, a fórmula continua fazendo muito sucesso (alguns exemplos recentes são Hollow Knight, Silksong, o próprio Dead Cells da Evil Empire e até o Metroid 4).</p>
            
            <GameImage 
              src="/assets/26/CastlevaniaBelmontCurse/mecanica1.png" 
              alt="Mecânicas de combate e exploração em Castlevania" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            
            <p className="mb-4 text-justify">Falando nas mecânicas, acho o jogo muito divertido. Ele te dá várias opções de armas para usar, e a eficácia delas varia; o que quero dizer é que cada arma pode ser melhor para um determinado tipo de monstro ou boss. Ao mesmo tempo, você pode equipar uma "arcana", que funciona como uma skill ativada quando se tem mana suficiente. Essas arcanas são desbloqueadas ao derrotar os chefes. Eu, particularmente, me diverti bastante com essa questão do combate.</p>
            <p className="mb-4 text-justify">Também preciso dizer que o jogo possui alguns puzzles. Eles podem ser do tipo que exige pensar (eu tive que quebrar a cabeça em alguns deles, mas como o jogo está legendado em português, fica mais fácil de entender) ou no estilo "parkour", onde é preciso pular no tempo certo ou desviar de obstáculos. Eu não acho isso chato, pois não tenho dificuldades com jogos de plataforma, mas algumas pessoas podem ter problemas se realmente não gostarem disso. O detalhe é que não é algo opcional: algumas quests exigem o uso obrigatório de parkour.</p>
            <p className="mb-4 text-justify">Sobre a dificuldade, eu diria que o jogo tem um combate justo. Se você tiver um pouco de receio, o jogo te dá a opção não apenas de mudar a dificuldade geral, mas sim de ajustar valores específicos de todo tipo. Algumas pessoas odeiam isso, mas pode ser excelente. Imagina que alguém não é bom em parkour ou não gosta? É só reduzir o dano de armadilhas para 0 ou 0,1 e ser feliz. Ou está travado depois de 15 tentativas em um boss? Aumenta o seu dano ao máximo para passar e depois volta ao normal. Não vejo isso como algo ruim, mas sim como uma forma de deixar o jogo muito mais acessível.</p>

            <GameImage 
              src="/assets/26/CastlevaniaBelmontCurse/mecanica2.png" 
              alt="Customização de dificuldade e parkour" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />

            <p className="mb-4 text-justify">O que eu odiei nas mecânicas talvez esteja conectado com a progressão do jogo. Acho que existe pouca opção de "viagem rápida" (fast travel), mas vou explicar isso melhor na seção da história. São pequenos detalhes que não curti muito.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/CastlevaniaBelmontCurse/grafico.png" 
              alt="Gráficos e arte de Castlevania Belmont's Curse" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Se eu disser que foi a arte que me fez comprar o jogo, você acreditaria? Não sei, mas foi realmente por causa dela que me interessei. O jogo possui um design gráfico muito bonito, e quem foi o responsável por essa direção de arte está de parabéns.</p>
            <p className="mb-4 text-justify">Para mim, existem algumas áreas que são absurdamente bonitas, mas tenho medo de dar spoiler, porque elas só são descobertas depois do Ato 1. Antes disso, não quer dizer que seja feio — as áreas iniciais são bonitas —, mas depois o nível sobe muito, sabe? Tirando isso, acho que não há muito mais o que falar. Os designs dos golpes e ataques também são lindos, e o jogo ainda tem um sistema de roupas diferentes para a Rose. Não é algo que muda a mecânica, mas fica aqui o comentário.</p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={75}>
            <GameImage 
              src="/assets/26/CastlevaniaBelmontCurse/trilha sonora.png" 
              alt="Trilha Sonora de Castlevania Belmont's Curse" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Eu achei a trilha sonora do jogo apenas "boa". Existem certas partes em que a música se sobressai bastante, mas, ao mesmo tempo, há locais em que ela deixa a desejar. Lembro que em alguns momentos preferi colocar a minha própria playlist para tocar no lugar do som do jogo. Quando isso acontece, é porque a trilha original não me prendeu tanto. Mas é como eu disse: não acho ruim, apenas varia muito dependendo do momento da campanha.</p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80}>
            <GameImage 
              src="/assets/26/CastlevaniaBelmontCurse/historia.png" 
              alt="História e exploração de Castlevania Belmont's Curse" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">A história do jogo não é ruim, acho que tem uma progressão boa. O que é uma progressão boa? É quando o jogo consegue guiar o jogador sem deixá-lo perdido. Porém, não sei se é por ser de uma franquia antiga, mas ele possui certas decisões de design ultrapassadas. Uma delas foi o que comentei no início desta review: não entendo por que tem tão pouco teletransporte no mapa. É praticamente apenas um fast travel por área e, além disso, o salvamento só é feito em lugares específicos. Isso não seria um grande problema, porque o jogo tem uma opção de "ressurgir" na porta do boss caso você morra, mas ainda assim me incomodou. Às vezes você morre e precisa caminhar quase um minuto inteiro para voltar à arena, lidando com inimigos e obstáculos no caminho novamente. Confesso que odiei um pouco essa repetição.</p>
            <p className="mb-4 text-justify">Outra parada que me fez sentir o peso de um design "antigo" foram os puzzles. São vários enigmas que, se você não entender a lógica de primeira, vai precisar procurar um guia na internet. Algumas pessoas gostam disso, mas estou falando daqueles puzzles bem específicos, do tipo: "na frente dessa pintura, equipe e use um arcano X" ou "volte em um local muito distante para interagir com uma coisa específica" (para obter todos os arcanos, precisei fazer muito isso). Tirando essa parte, o jogo possui três finais: o ruim, o normal e o verdadeiro. Acredito que ainda não fiz o verdadeiro enquanto escrevo esta análise, mas o final ruim me pegou de surpresa e achei uma sacada muito boa da história.</p>
            <p className="mb-4 text-justify">Agora preciso comentar algo importante: vi muita gente criticando esse jogo, principalmente os fãs mais puristas de Castlevania. Como eu disse, não sou o melhor juiz para o passado da saga, mas as críticas que vi foram do tipo: "mudou a lore do jogo", "copiou o visual da série da Netflix" ou "parece só um mod de Dead Cells". Na minha visão de quem está vindo de fora, acho que a galera está reclamando de barriga cheia. Não consigo entender esse ódio. A franquia estava sem um lançamento inédito há 12 anos! Na real, a Konami estava vivendo só de máquinas de pachinko porque dava lucro rápido, e deixou várias IPs consagradas na geladeira. Silent Hill e Metal Gear só estão retornando agora. Claro que não são os criadores originais fazendo os jogos, mas a IP precisa se manter viva. Se você é realmente fã da franquia, acho que deveria dar suporte e dar uma chance. O jogo está longe de ser ruim, e é melhor ter um lançamento de qualidade do que ficar preso no passado para sempre. Tive uma experiência parecida com Digimon. A série ficou sem jogos de verdade de 2017 até 2022 (5 anos tristes). Quando voltou com Digimon Survive, era algo totalmente diferente do clássico. Era ruim? Não, era até bem legal. E então, três anos depois, lançaram o que eu considero o melhor da franquia, o Time Stranger. O que estou tentando explicar é: se você ama a franquia, apoie o retorno dela. Talvez, ao se reerguer, a empresa lance o jogo perfeito que encaixe exatamente no seu estilo no futuro.</p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
             <GameImage 
              src="/assets/26/CastlevaniaBelmontCurse/otimizacao.png" 
              alt="Otimização de Castlevania Belmont's Curse" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">O jogo vem localizado em PT-BR, então não há do que reclamar. Sobre bugs, por incrível que pareça, não encontrei um único erro técnico ou engasgo de otimização. Talvez isso aconteça porque o jogo não é do tipo "pesado" com gráficos super-realistas em 3D, mas sim uma arte 2D lindíssima e leve, feita para rodar perfeitamente na grande maioria das máquinas.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4 text-justify">Por fim, sendo este o meu primeiro Castlevania, eu gostei bastante. Foram 25 horas de gameplay muito bem aproveitadas. Acho que cheguei a fazer quase tudo o que o jogo tinha a oferecer, só não consegui descobrir sozinho como desbloquear o True Ending (final verdadeiro), então não devo buscar a platina.</p>
                <p className="space-y-4 mb-4 text-justify">E para quem é indicado esse jogo? Acho que é feito sob medida para quem gosta de ação e, principalmente, de plataforma. Se você odeia saltos precisos e parkour, não vai se dar bem aqui. Além disso, acho que foi um acerto enorme da Konami ter atuado apenas como publisher (distribuidora) e ter fechado essa parceria com a Evil Empire. Eu realmente não esperava que o jogo fosse tão bom; achei que seria apenas algo "legalzinho" para passar o tempo, mas, no fim das contas, me entregou uma aventura excelente.</p>
                </>
            }
            rating={88}
            date="20/10/2026" 
          />

        </div>
      </div>
    </>
  );
};

export default CastlevaniaBelmontsCurse;