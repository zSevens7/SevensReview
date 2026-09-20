// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\TheBloodOfDawnwalker.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const TheBloodOfDawnwalker: React.FC = () => {

  const gameData = {
    slug: "the-blood-of-dawnwalker",
    title: "The Blood of Dawnwalker",
    subtitle: "O novo jogo do estúdio conhecido por ter ex-devs de The Witcher 3 estreia bem, sendo um RPG que tenta introduzir ideias novas.",
    rating: 78, // Nota baseada no seu veredito
    coverImage: "/assets/26/BloodOfDawnwalker/cover.png", 
    logo: "/assets/26/BloodOfDawnwalker/frontpage.png",
    genre: "Ação e RPG",
    releaseDate: "2026-09-03",
    developer: {
        name: "Rebel Wolves",
        countryFlag: "/assets/flags/poland.png" // Estúdio polonês
    },
    publisher: "Bandai Namco Entertainment",
    engine: "Unreal Engine 5", 
    platforms: ["PlayStation 5", "Windows", "Xbox Series X/S"]
  };

  const seoDescription = "Review de The Blood of Dawnwalker. Analisamos o RPG medieval e sombrio da Rebel Wolves, estúdio formado por ex-desenvolvedores de The Witcher 3.";
  const seoKeywords = "The Blood of Dawnwalker review, análise The Blood of Dawnwalker, Rebel Wolves, RPG medieval, vampiro, Unreal Engine 5";

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
            <p className="mb-4">Abrindo os jogos de setembro, temos o título de estreia de um estúdio polonês formado por ex-desenvolvedores de The Witcher 3. É um RPG ambientado em um mundo medieval que trouxe algumas ideias legais, mas que poderiam ser mais bem polidas. Vou explicar isso melhor aos poucos.</p>
            
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            
            <p className="mb-4">Começando pela mecânica, o jogo tenta adaptar o sistema de combate do Kingdom Come para um mundo em terceira pessoa. Por que falei disso? Bem, vou tentar explicar como funciona o combate lá: você escolhe a direção exata onde quer acertar a espada e, para se defender, precisa bloquear na direção correspondente. O problema, para mim, é que essa mecânica é mais bem executada no Kingdom Come do que aqui. Aqui fica um pouco confuso, mas ainda funciona. Onde quero chegar é: tentaram fazer algo diferente, não ficou ruim, mas também não ficou perfeito.</p>
            <p className="mb-4">Falando das mecânicas, além do combate com espadas, as habilidades de vampiro são bem legais, e tem também umas coisas envolvendo bruxaria que funcionam bem. Talvez tenha faltado uma forma decente de atacar com arco e flecha? Até os inimigos não usam, mas não vou tirar muito ponto por causa disso, porque é um estúdio novo, sabe? Acho que as mecânicas entregues são suficientes.</p>
            <p className="mb-4">Acho que a única coisa que eu realmente odiei foi a HUD dos equipamentos. Achei bem chata para organizar os itens, ainda mais considerando que você precisa ter duas builds diferentes (uma para o dia e outra para a noite). Tentar organizar tudo isso na interface atual é simplesmente horrível.</p>
            <GameImage 
              src="/assets/26/BloodOfDawnwalker/mecanica.png" 
              alt="Mecânicas de The Blood of Dawnwalker" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={90}>
            
            <p className="mb-4">O gráfico do jogo é bom, mas não tem aquelas interações super detalhadas, como posso explicar? Tipo você dar um golpe e cortar a grama no cenário, por exemplo — isso você não vai encontrar aqui, mas ainda assim é bonito. O mundo apresenta um level design bem legal, com vários cenários retratando perfeitamente uma Europa Medieval Sombria. Só tiro pontos pela falta de um design mais bonito para os personagens. Acho que esse é o principal problema: nem o protagonista tem um design marcante. Quando digo isso, quero dizer que falta aquela estética que te faz querer ver conteúdos e artes deles fora do jogo, sabe?</p>
            
            <GameImage 
              src="/assets/26/BloodOfDawnwalker/grafico.png" 
              alt="Gráficos de The Blood of Dawnwalker" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={55}>
            
            <p className="mb-4">Eu acho que essa é a pior parte do jogo. Não lembro de uma única música boa, não estou zoando, estou falando sério. Achei a trilha sonora tão apagada que eu poderia colocar outra coisa para tocar de fundo e nem ligaria. O resto da parte sonora até que é aceitável e tal, mas as músicas em si poderiam ser muito melhores, sabe?</p>
            <GameImage 
              src="/assets/26/BloodOfDawnwalker/trilha sonora.png" 
              alt="Trilha Sonora de The Blood of Dawnwalker" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={56}>
            
            <p className="mb-4">Aqui eu preciso separar este tópico em duas partes. A primeira, mais resumida, é que o jogo possui ótimas quests de RPG — excelente nesse ponto, não há discussão. Mas aí você se pergunta: por que dei uma nota tão mediana? É por causa da mecânica de "TEMPO" que adicionaram. Sendo sincero, eu já joguei com essa mecânica de tempo limitado em jogos como Persona e Metaphor, porém, lá o tempo é meio que uma "fachada". Como assim? Você pode farmar o quanto quiser na dungeon que o tempo do dia não vai passar; é mais um tempo baseado em escolhas, sabe? E lá isso é introduzido aos poucos e vai evoluindo, criando uma boa progressão.</p>
            <p className="mb-4">Aqui neste jogo, eu diria que fizeram tudo errado, pelo menos na minha visão. O tutorial é bem curto, dura apenas a metade de um dia in-game, e você mal conhece o povo da sua própria região. Eu diria que Kingdom Come conseguiu apresentar o mundo muito melhor, e olha que o tutorial de lá dura só 1 hora. Falo isso porque, quando terminei o tutorial aqui, só tinha conhecido duas pessoas e a minha família, sendo que havia muito mais gente na vila para conhecer e se importar.</p>
            <p className="mb-4">Enfim, mas o grande problema não é só esse, é o que vem depois do tutorial. O jogo define um limite rígido de 30 dias in-game para você cumprir um objetivo principal, e esse objetivo já é o final da história! Sim, você tem 30 dias para acabar o jogo. Algumas pessoas podem detestar isso de cara, mas eu decidi jogar até o fim para tirar a dúvida: dá para fazer? A resposta é sim, dá para fazer de boas. O problema é que fica chato às vezes. Por exemplo, quando você precisa fazer uma missão que só acontece à noite, mas ainda está de dia. O que você faz? Fica esperando sem fazer nada? Faz coisas aleatórias só para passar o tempo? Não sei se deu para entender, mas é aí que nasce o problema. Além disso, até para UPAR as skills do personagem o tempo passa! Achou essa decisão ruim? Fica pior. Vou te dar um pequeno "spoiler" que pode te ajudar (não é spoiler da história, mas de como jogar): na minha gameplay, faltavam 9 dias para acabar o prazo, então decidi ir logo enfrentar o objetivo final pensando "depois eu faço o restante das missões secundárias". E o que eu descobri? O jogo não possui "Pós-Game"! Além de termos um limite super restrito de 30 dias, somos obrigados a ficar presos eternamente a esse ciclo de antes do fim. Nossa, a ideia de forçar o jogador a gerenciar o tempo pode até parecer brilhante no papel, mas ninguém da equipe pensou no pós-game? Eu só dei nota 61 porque as missões em si são interessantes; se não fosse por isso, a nota seria uns 30. Essa foi a minha maior decepção.</p>
            <GameImage 
              src="/assets/26/BloodOfDawnwalker/historia.png" 
              alt="História de The Blood of Dawnwalker" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={99}>
             
            <p className="mb-4">Eu vi muita gente reclamando de otimização (não só neste jogo, mas em outros recentes também). Enfim, para mim o jogo rodou muito bem. Apenas na cidade capital que dava umas engasgadas para andar. Joguei em 1080p com os gráficos em Alta qualidade. Tive apenas um único bug, onde um monstro spawnou dentro da parede e eu não conseguia derrotá-lo, o que me obrigou a refazer a missão.</p>
            <GameImage 
              src="/assets/26/BloodOfDawnwalker/otimizacao.png" 
              alt="Otimização de The Blood of Dawnwalker" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">Para o título de estreia de um estúdio novato, eu acho que é um bom jogo. Existem certas coisas que poderiam ser melhores, a começar pelo sistema de horas/tempo. Os desenvolvedores precisam balancear a quantidade de dias com base na dificuldade escolhida e, principalmente, precisam adicionar um Pós-Game real. Tenho fé que eles vão lançar algum patch para arrumar isso, porque é impossível manter um RPG assim; acho que é o primeiro jogo de mundo aberto onde vejo uma decisão dessas de encerrar tudo sem te deixar explorar depois.</p>
                
                </>
            }
            rating={78}
            date="07/09/2026"
          />

        </div>
      </div>
    </>
  );
};

export default TheBloodOfDawnwalker;