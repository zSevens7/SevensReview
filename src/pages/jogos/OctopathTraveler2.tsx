// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\OctopathTraveler2.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const OctopathTraveler2: React.FC = () => {

  const gameData = {
    slug: "octopath-traveler-2",
    title: "Octopath Traveler 2",
    subtitle: "O jogo mantém a qualidade do Octopath Traveler 1, não inova tanto, mas é um bom jogo.",
    rating: 93, 
    coverImage: "/assets/26/OctopathTraveler2/cover.png", 
    logo: "/assets/26/OctopathTraveler2/frontpage.png",
    genre: "RPG de Turno",
    releaseDate: "2023-02-24", // Data de lançamento original
    developer: {
        name: "Acquire / Square Enix",
        countryFlag: "/assets/flags/japan.png" 
    },
    publisher: "Square Enix",
    engine: "Unreal Engine 4", 
    platforms: ["Nintendo Switch", "PlayStation 4", "PlayStation 5", "Windows", "Xbox One", "Xbox Series X/S", "Nintendo Switch 2"]
  };

  const seoDescription = "Review de Octopath Traveler 2. Analisamos a continuação do aclamado RPG da Square Enix, destacando o estilo de arte, sistema de batalha e as 8 novas histórias.";
  const seoKeywords = "Octopath Traveler 2 review, análise Octopath Traveler II, RPG de turno, Square Enix, Acquire, HD-2D";

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
              Eu joguei o Octopath Traveler 1 e depois o Zero, e acabei gostando dos dois jogos. Acabou rolando um espaço nesse mês de agosto para jogar o número 2 dessa franquia. Enfim, como sempre, vamos lá para a review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <GameImage 
              src="/assets/26/OctopathTraveler2/mecanica.png" 
              alt="Mecânicas de Batalha em Octopath Traveler 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              A mecânica do jogo é a mesma do 1°, porém, ao mesmo tempo, não é a mesma do 0°. O que eu quero dizer? Um pouco complicado, mas a mecânica do Octopath Traveler 0 é muito mais gostosa, porque você consegue usar 8 viajantes ao mesmo tempo. Aqui é quase idêntico ao 1°, é um bom jogo de RPG de turno. O único adicional de mecânica foi o fator de habilidade extra em cada personagem, que não precisa usar SP.
            </p>
            <p className="mb-4">
              Também preciso só comentar por que gostei da franquia. É um mundo aberto, aonde você pode ir aonde quiser, tem batalhas opcionais contra bosses secundários e o jogo é bem desafiador. Talvez, como joguei os dois jogos anteriores, não achei muito difícil. Acho que só cheguei a morrer lá para as 40 horas de jogo, porque enfrentei um boss com LV maior. E sim, o Level nesse jogo é importante seguir o recomendado, mas não quer dizer que você não pode explorar uma região. Por exemplo, eu sou LV 20 e posso sim farmar em uma região de LV 26.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/OctopathTraveler2/grafico.png" 
              alt="Gráficos HD-2D de Octopath Traveler 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              Eu sou fã da arte do jogo, é um estilo de arte parecido com Stardew Valley, pixelizado e com um design bonito. Acredito que isso aqui pode ser o meu gosto pessoal mesmo, mas mantém o mesmo nível de excelência que a desenvolvedora entrega nos outros jogos da série Octopath Traveler.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={80}>
            <GameImage 
              src="/assets/26/OctopathTraveler2/trilha sonora.png" 
              alt="Trilha Sonora de Octopath Traveler 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              A trilha sonora, para mim, é boa. O problema é que não é uma trilha sonora excelente num contexto geral, mas os compositores conseguiram separar muito bem a identidade musical de cada personagem. Para mim, as minhas músicas favoritas são as campanhas da Agnes e do Hikari.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={100}>
            <GameImage 
              src="/assets/26/OctopathTraveler2/historia.png" 
              alt="História de Octopath Traveler 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              A história do jogo funciona da mesma forma que no primeiro: você escolhe um personagem e começa a história do mundo em volta dele. Você pode ir conhecendo os outros personagens e desvendando a história deles ao passar por outras cidades do mapa.
            </p>
            <p className="mb-4">
              Acho que esse é o melhor ponto do jogo. A história dos 8 personagens ficou melhor e bem mais equilibrada entre todos. Lembro que, no primeiro Octopath Traveler, tinha tipo 4 histórias excelentes e as outras eram meio "meh". Aqui eles conseguiram manter um padrão de qualidade muito mais alto, sabe?
            </p>
            <p className="mb-4">
              Eu acho que o diferencial desse Octopath Traveler são as missões em conjunto que você pode fazer. São 4 missões em dupla, para ser exato. Também tem o novo sistema de dia e noite, onde o personagem agora tem duas habilidades diferentes para usar na cidade. E esse fator de dia e noite é bem importante na exploração, porque envolve conseguir pegar itens ou conhecer pessoas exclusivas de certos horários.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={95}>
             <GameImage 
              src="/assets/26/OctopathTraveler2/otimizacao.png" 
              alt="Otimização de Octopath Traveler 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4">
              O jogo é bem simples graficamente, então é muito difícil ter problemas de otimização de hardware. Porém, precisamos falar que o jogo não tem legenda oficial em português. Apesar de eu ter jogado com uma legenda feita por fãs, é o tipo de jogo que precisa de tradução oficial urgente, porque tem bastante texto e narrativa.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4">
                  Essa nota pode ser um pouco tendenciosa porque eu amo RPG de batalha de turno, e o Octopath é um excelente jogo nesse estilo. É um jogo legal em que o jogador consegue ser livre e decidir aonde ir e como montar o seu grupo.
                </p>
                <p className="space-y-4 mb-4">
                  Acredito que alguns jogadores mais modernos podem achar a estrutura um pouco chata, porque ele lembra demais como eram os RPGs antigos, contando até com o clássico sistema de aparecimento aleatório dos monstros (encontros randômicos). Ou seja, se você não gosta de RPG de turno, possivelmente eu nem recomendo tocar nele. Mas, se você é fã do gênero, é um prato cheio.
                </p>
                </>
            }
            rating={93}
            date="23/08/2026"
          />

        </div>
      </div>
    </>
  );
};

export default OctopathTraveler2;