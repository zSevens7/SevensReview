// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\TrailsInTheSkySC.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const TrailsInTheSkySC: React.FC = () => {

  const gameData = {
    slug: "trails-in-the-sky-sc",
    title: "Trails in the Sky 2nd Chapter Remake",
    subtitle: "A continuação do remake de Trails in the Sky continua no mesmo nível do primeiro: excelente.",
    rating: 95, 
    coverImage: "/assets/26/TrailsInTheSky2/cover.png", 
    logo: "/assets/26/TrailsInTheSky2/frontpage.png",
    genre: "RPG de Turno",
    releaseDate: "2026-09-17",
    developer: {
        name: "Nihon Falcom",
        countryFlag: "/assets/flags/japan.png" 
    },
    publisher: "Nihon Falcom / GungHo",
    engine: "Falcom Engine", 
    platforms: ["Nintendo Switch", "Nintendo Switch 2", "PlayStation 5", "Windows"]
  };

  const seoDescription = "Review de The Legend of Heroes: Trails in the Sky SC. Analisamos o remake do segundo capítulo deste clássico RPG de turno da Nihon Falcom.";
  const seoKeywords = "Trails in the Sky SC review, análise Trails in the Sky 2nd Chapter Remake, Nihon Falcom, RPG de turno, JRPG, Estelle, Joshua";

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
              Depois de ter zerado o Trails in the Sky 1st Chapter Remake, decidi jogar o 2° capítulo. Este jogo apresentou uma demo muito boa, que me ajudou a finalizar o jogo mais rápido, porque a demo era o prólogo + 1 capítulo do jogo. Enfim, vamos para a review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/TrailsInTheSky2/mecanica.png" 
              alt="Mecânicas de combate de Trails in the Sky SC" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              A mecânica é a mesma do primeiro jogo, é um estilo meio diferente de batalha por turnos. A única diferença é que agora você tem os personagens para sempre no jogo. No outro jogo, você tinha personagens temporários e, a cada capítulo, os personagens iam mudando. Nesse aqui, você é obrigado a usar alguns, enquanto outros podem ser selecionados. A minha personagem favorita foi a Kloe, que é uma excelente suporte.
            </p>
            <p className="mb-4">
              Também acho que, como joguei o primeiro jogo, achei mais fácil jogar agora, sabe? Estou falando disso porque a mecânica de Trails, pelo menos para mim, é um pouco diferenciada, então foi mais fácil entender as coisas. Ah, acho bom citar também que existe um modo de batalha mais rápido, e isso ajuda muito.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <GameImage 
              src="/assets/26/TrailsInTheSky2/grafico.png" 
              alt="Gráficos de Trails in the Sky SC" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              O jogo se passa no mesmo país do primeiro jogo, ou seja, reaproveitou muitos cenários do primeiro jogo, igual à franquia Yakuza faz, sabe? Eu não ligo para essas coisas. As únicas diferenças foram adicionar algumas novas áreas e também você meio que faz uma rota diferente do primeiro. Se no primeiro viajamos a pé, agora viajamos de avião.
            </p>
            <p className="mb-4">
              Também sobre a qualidade do gráfico, é bom. Não é excelente, mas entendo o motivo de ser assim, afinal, a empresa não é grande e não tem tantos desenvolvedores trabalhando. Dizem que tem 70 e poucos aí. Por fim, só devo falar que existe um sistema de mudar a roupa dos personagens. Tem como DLC ou comprando dentro do jogo. Claro que eu não sou fã disso, mas é apenas opcional mesmo, não muda nada? Depende. Tem um certo item que é obrigatório usar e precisa ser colocado no personagem, mas não é algo como "pago" na loja da Steam, e sim dentro do jogo. No momento certo vão falar o que é esse item.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90}>
            <GameImage 
              src="/assets/26/TrailsInTheSky2/trilha sonora.png" 
              alt="Trilha Sonora de Trails in the Sky SC" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              A trilha sonora do jogo continua excelente, é o mesmo padrão do primeiro, apenas adicionaram algumas trilhas novas.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={95}>
            <GameImage 
              src="/assets/26/TrailsInTheSky2/historia.png" 
              alt="História de Trails in the Sky SC" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Para entender a história, precisa jogar o primeiro, não tem como fugir disso. Mas como é a história do jogo? É quase o mesmo estilo do primeiro. Tem missões nas guildas, algumas são opcionais e outras são da história principal. Recomendo fazer todas. 
            </p>
            <p className="mb-4">
              Mas, sobre a história do jogo, ela começa lenta, bem lenta, motivada por causa do fim do primeiro jogo, mas depois... vai engrenar muito bem. Fiquei realmente emocionado com o jogo. No início do jogo, estava pensando em dar mais ou menos um 70 a 80 nessa parte, mas acontece uma parte em que, do nada, a história fica muito boa. Não posso dar spoiler, e também parece que o jogo consegue finalizar bem o que deixou aberto no primeiro jogo. Por fim, gostei muito.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
             
            <p className="mb-4">
              O jogo não possui bugs e tal, na minha opinião não encontrei nada. O único problema é... o jogo não possui legenda PT-BR oficial. Fiquei sabendo que tem alguém que está tentando traduzir o jogo, mas acho que está naquela espécie de período de revisão, sabe? Para quem tiver interesse, o perfil <a href="https://x.com/Starlight_Tradu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-400">https://x.com/Starlight_Tradu</a> no X/Twitter é focado nessas traduções. Talvez algum dia deva sair. Aposto que, no máximo em 2027, essa pessoa consegue entregar.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">
                  Para mim, esse jogo é um dos melhores jogos do ano, mas acho que o grande motivo é... eu sou muito fã de RPG de turno, então era normal eu gostar dele mesmo. E até falo: se gostou do primeiro jogo, possivelmente vai gostar desse capítulo.
                </p>
                <p className="space-y-4 mb-4">
                  Eu dei uma pesquisada também sobre o que vem por fim e, pelo que parece, a equipe do jogo ainda não sabe se vai partir para um remake do 3° capítulo da trilogia Sky ou se vai partir para o Zero. Como citei, a equipe é pequena e, dessa vez, apresentou que conseguiu reaproveitar algumas coisas do primeiro capítulo. Enfim, é um excelente jogo de RPG, recomendo jogar. Se estiver com medo, recomendo jogar a demo, que tem duração de 8h a 12h.
                </p>
                </>
            }
            rating={95}
            date="07/10/2026" 
          />

        </div>
      </div>
    </>
  );
};

export default TrailsInTheSkySC;