// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\BeastOfReincarnation.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const BeastOfReincarnation: React.FC = () => {

  const gameData = {
    slug: "beast-of-reincarnation",
    title: "Beast of Reincarnation",
    subtitle: "Um bom hack and slash da Game Freak que surpreende com uma trilha sonora excelente e história envolvente, apesar de pecar na variedade de inimigos.",
    rating: 84, 
    coverImage: "/assets/26/BeastofReincarnation/cover.png", 
    logo: "/assets/26/BeastofReincarnation/frontpage.png",
    genre: "Hack and Slash, RPG de Ação",
    releaseDate: "2026-08-03",
    developer: {
        name: "Game Freak",
        countryFlag: "/assets/flags/japan.png" 
    },
    publisher: "Fictions",
    engine: "Unreal Engine 5", 
    platforms: ["PlayStation 5", "Windows", "Xbox Series X/S"]
  };

  const seoDescription = "Review de Beast of Reincarnation. Analisamos o novo jogo de ação e RPG da Game Freak, focando em suas mecânicas soulslike, gráficos e trilha sonora.";
  const seoKeywords = "Beast of Reincarnation review, análise Game Freak, Fictions, Unreal Engine 5, hack and slash, RPG de ação";

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
            <p className="mb-4">Beast of Reincarnation Então, estou fazendo esta review às pressas porque amanhã vou viajar. Como zerei o jogo agora, já queria deixar a análise pronta. Primeiro, queria esclarecer algo: sou um super fã de Pokémon e cresci jogando desde os meus 5 anos de idade. Foi a primeira vez que vi a Game Freak fazer um jogo fora da franquia Pokémon, o que me surpreendeu na época e foi um dos principais motivos para eu ter dado uma chance a este título.</p>
            <p className="mb-4">Ao mesmo tempo, fiquei chocado com as críticas pesadas que o jogo recebeu; parecia muito um review bomb. Não sei o porquê disso, será que alguém realmente esperava um jogo impecável? Os últimos jogos de Pokémon da Game Freak nem sempre foram dignos de nota 10. Nos últimos 10 anos, talvez só a série Legends tenha sido realmente boa; o resto foi por água abaixo. A desenvolvedora só sobrevive porque a franquia Pokémon é muito rentável, mesmo quando produzem jogos ruins. Mas enfim, vamos falar de Beast of Reincarnation.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={74}>
            <GameImage 
              src="/assets/26/BeastofReincarnation/mecanica.png" 
              alt="Mecânicas de Beast of Reincarnation" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Primeiro, quero explicar como o jogo funciona: é um hack and slash com um pouco da essência soulslike embutida, bem parecido com o que Stellar Blade fez. A diferença aqui é que ele é mais fácil... mas, ao mesmo tempo, não é. Por que digo isso? Porque os inimigos comuns (lacaios) que você encontra pelo mapa são muito fáceis de derrotar. Porém, quando chega nos chefes (bosses), a dificuldade aumenta de forma absurda. Acredito que seja pelo tamanho gigante deles; não é nem um problema de acertar o parry, mas sim que fica muito difícil ler todos os movimentos e ataques do inimigo.</p>
            <p className="mb-4">O que me salvou foi a opção de mudar a dificuldade quando eu quisesse. Quando chegava nos chefes, eu abaixava a dificuldade, pois não gosto de me estressar com jogos. É por isso que afirmo: ele pode ser um soulslike punitivo se você jogar no modo Difícil, mas se jogar no Fácil, vira um hack and slash tradicional. Sobre esse assunto de dificuldade, prefiro que seja assim: quanto mais acessível para diferentes tipos de pessoas, melhor. Só acho que não precisava de picos tão altos de dificuldade. Se eu quisesse, poderia ficar farmando à vontade, pois o jogo permite isso (tá difícil o boss? É só farmar XP e upar o personagem), mas eu não gosto de ficar farmando XP em jogos de ação.</p>
            
            <p className="mb-4">Além disso, a mecânica de batalha envolvendo as raízes foi muito bem feita. A interação durante os combates junto com o seu cachorro parceiro é super fluida e tornou a gameplay extremamente divertida.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={77}>
            <GameImage 
              src="/assets/26/BeastofReincarnation/grafico.png" 
              alt="Gráficos de Beast of Reincarnation" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">O jogo tem gráficos bonitos, mas preciso fazer duas críticas principais. A primeira é a falta de variedade de inimigos. A partir do capítulo 3 ou 4, você começa a notar que está enfrentando os mesmos inimigos humanos, mudando apenas os efeitos de status deles. Minha maior decepção foi ver que existem apenas uns 6 tipos de monstros/animais. Poxa, você é a Game Freak, a criadora de Pokémon e especialista em monstros, como consegue criar tão poucos para um jogo novo? Isso se reflete até nos chefes: o jogo tem 13 capítulos, o que deveria significar 13 chefes únicos, mas na verdade são apenas uns 8 diferentes (estou chutando os valores, mas a ideia é essa). Ou seja, eles reciclam chefes e você vai ter que enfrentá-los novamente.</p>
            <p className="mb-4">O segundo erro entra na parte do level design e no minimapa, que é extremamente confuso para achar itens. Por que o level design é um problema? Acho que foi um erro dos desenvolvedores apresentarem um mapa inicial semiaberto (que é a maior área do jogo) para depois, ao longo da campanha, a estrutura se tornar muito mais linear. A história combina muito mais com um mundo linear do que aberto, até porque as atividades secundárias não são nada chamativas.</p>
            <p className="mb-4">Outro problema: o minimapa não tem nenhum indicador de elevação (para saber se algo está em cima ou embaixo de você). Isso me INCOMODOU muito na hora de caçar itens em mapas onde uma área fica sobreposta à outra. É muito difícil e confuso. Tirando esses problemas, o design dos personagens, a interação com o cachorro e a ambientação do mundo são muito bem construídos.</p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90}>
            <GameImage 
              src="/assets/26/BeastofReincarnation/trilha sonora.png" 
              alt="Trilha Sonora de Beast of Reincarnation" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">A trilha sonora foi, de longe, o que mais me surpreendeu. Eu não esperava nada e o jogo realmente entrega músicas excelentes. Ouvi algumas pessoas reclamando depois: "Nossa, mas a trilha é só um loop infinito?". Sinceramente, isso não interessa. O importante de uma trilha sonora em jogos é fazer o jogador não querer desligar a música e continuar imerso ouvindo. Se o jogo conseguiu isso, parabéns, cumpriu o seu propósito. As composições me lembraram muito as de NieR e Stellar Blade; dá para notar claramente que essas foram as referências deles. Infelizmente, a trilha sonora oficial ainda não saiu no Spotify, mas deveriam lançar, porque eu curti demais.</p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={80}>
            <GameImage 
              src="/assets/26/BeastofReincarnation/historia.png" 
              alt="História de Beast of Reincarnation" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Não vou dar spoilers da história, mas posso adiantar algumas coisas. É um suspense muito bom: você está em um mundo pós-apocalíptico e precisa salvá-lo, recebendo as informações aos poucos. Só senti falta de um menu ou local melhor para rever as informações obtidas (como uma enciclopédia ou mais livros de lore); achei esse conteúdo escrito muito escasso. Mas, pelo menos, o final é ótimo. Até os nomes dos capítulos fazem um paralelo muito legal com o ciclo de vida de uma árvore (desde a muda até dar frutos).</p>
            <p className="mb-4">Quero aproveitar para falar de algo ligado à progressão aqui (poderia ser em Mecânica, mas prefiro comentar na História). Eu sinto que testaram muito pouco o balanceamento do jogo. Por quê? Chegando no Capítulo 6, eu já tinha maximizado quase tudo do meu personagem! O sistema pega bastante inspiração em God of War, onde você precisa coletar objetos pelo cenário para desbloquear upgrades. Só que a distribuição desses itens é totalmente desbalanceada; é muito fácil ficar forte logo no início. Quando percebi isso, pensei: "Bem, vou só rushar a história até o fim, porque já tenho tudo mesmo".</p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={99}>
             <GameImage 
              src="/assets/26/BeastofReincarnation/otimizacao.png" 
              alt="Otimização de Beast of Reincarnation" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">Vi muita gente reclamando da otimização deste jogo. Bem, rodando em uma RTX 5070, não enfrentei nenhum problema de performance. Joguei com os gráficos no Alto e o DLSS ativado no modo Qualidade. O único problema que tive foi um pequeno bug onde a legenda trocou para japonês do nada durante umas duas falas, mas foi só isso.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">Por fim, acho que Beast of Reincarnation é um bom jogo. Não é excelente, mas, ao mesmo tempo, ele nunca prometeu ser uma obra-prima. Então, eu o entendo e aceito como um jogo apenas "bom". A única coisa que não consigo entender bem é o porquê de ter sofrido tanto review bomb na Steam. O pessoal estava realmente acreditando que a Game Freak entregaria o jogo perfeito? Tem gente que parece que não joga os próprios jogos de Pokémon para saber como a empresa funciona.</p>
                <p className="space-y-4 mb-4">Enfim, eu gostei da experiência. O que mais me surpreendeu, como já destaquei, foi a trilha sonora. A conclusão da história também me agradou bastante; é exatamente o tipo de narrativa que eu curto, mas que, infelizmente, não posso dar detalhes aqui para não soltar spoilers.</p>
                </>
            }
            rating={84}
            date="05/08/2026"
          />

        </div>
      </div>
    </>
  );
};

export default BeastOfReincarnation;