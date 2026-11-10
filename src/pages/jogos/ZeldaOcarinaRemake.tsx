// C:\Users\Usuario\Documents\progamacao\SevensReview\src\pages\jogos\ZeldaOcarinaRemake.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';
import GameImage from '../../components/GameImage';

const ZeldaOcarinaRemake: React.FC = () => {

  const gameData = {
    slug: "zelda-ocarina-remake",
    title: "The Legend of Zelda: Ocarina of Time Remake",
    subtitle: "O remake do jogo com maior nota da indústria dos games, será que realmente merece uma nota tão alta assim?",
    rating: 98, 
    coverImage: "/assets/26/ZeldaOcarinaRemake/cover.png", 
    logo: "/assets/26/ZeldaOcarinaRemake/frontpage.png",
    genre: "Ação / Aventura",
    releaseDate: "2026-11-05", // Deixei apenas 2026, você pode ajustar para o dia exato se quiser
    developer: {
        name: "Nintendo",
        countryFlag: "/assets/flags/japan.png"
    },
    publisher: "Nintendo",
    engine: "Nintendo Engine", 
    platforms: ["Nintendo Switch 2"]
  };

  const seoDescription = "Review de The Legend of Zelda: Ocarina of Time Remake. Analisamos o aguardado remake do clássico da Nintendo rodando com os gráficos da nova geração do Switch 2.";
  const seoKeywords = "Zelda Ocarina of Time Remake review, análise Zelda OOT Remake, Nintendo Switch 2, Link, Ocarina, RPG de aventura, Nintendo";

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
            <p className="mb-4 text-justify">Em comemoração aos 40 anos da franquia Zelda, a Nintendo decidiu lançar um remake de um dos jogos mais bem avaliados da história dos videogames: The Legend of Zelda: Ocarina of Time, lançado originalmente em 1998 e que possui a nota 99 no Metacritic. Durante todos esses anos, eu nunca tinha jogado um Zelda na vida. Lembro que uma vez até tentei jogar quando tinha um emulador de Nintendo DS, mas minha preferência sempre foi Pokémon e, depois, talvez Mario. Eu poderia até ter experimentado alguns dos títulos mais famosos no Nintendo Switch 1, mas o fato de serem jogos com muitas horas de duração e, além disso, terem um preço relativamente alto sempre me afastou um pouco. Então, decidi comprar esse jogo e finalmente experimentar a franquia.</p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/ZeldaOcarinaRemake/mecanica.png" 
              alt="Mecânicas de combate e itens em Ocarina of Time Remake" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Sobre a mecânica, o jogo é um action-adventure. O que seria isso? Eu diria que é um jogo de aventura com bastante ação, mas sem a quantidade de combos que encontramos em um hack and slash. Os combates são mais simples, mas isso não significa que o jogo seja fácil. É meio complicado explicar isso aqui, mas o jogo possui defesa, esquiva, ataques normais e ataques giratórios. Comparando com jogos hack and slash, temos menos opções de combos, mas o que realmente torna a jogabilidade interessante são as ferramentas que podemos utilizar durante as batalhas. No remake, esses itens podem ser atribuídos aos botões do controle, facilitando bastante o acesso. Não lembro a quantidade exata, mas são muitos itens, e eles são importantes tanto durante os combates quanto na hora de resolver os puzzles. Então, você precisa quebrar um pouco a cabeça, primeiro para descobrir como resolver determinado puzzle e, segundo, para descobrir onde conseguir o item necessário. Depois explico melhor isso na seção da história.</p>
            <p className="mb-4 text-justify">Eu diria que algumas mecânicas deste jogo são coisas que encontramos até hoje nos títulos atuais. Mas quais seriam essas mecânicas? Bem, na época de 1998, Ocarina of Time foi um dos jogos que ajudaram a estabelecer como funcionariam as aventuras em ambientes 3D. Ou seja, foi uma verdadeira revolução para a época. Hoje em dia, talvez você não perceba o quanto isso foi importante, mas algumas das mecânicas que fizeram sucesso foram a possibilidade de travar a mira em um inimigo, os puzzles que utilizam a perspectiva e o ambiente 3D, como subir ou abaixar o nível da água, e os ganchos utilizados para alcançar lugares que seriam inacessíveis de outra maneira.</p>
            <p className="mb-4 text-justify">Agora, tirando tudo isso, eu me diverti durante o jogo inteiro. Eu realmente senti que estava jogando algo que me proporcionava diversão, sabe? Tentava conversar com os NPCs para conseguir algumas dicas e, ao mesmo tempo, até cheguei a farmar um pouco de dinheiro. Ou seja, eu realmente gostei da experiência.</p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={100}>
            <GameImage 
              src="/assets/26/ZeldaOcarinaRemake/grafico.png" 
              alt="Gráficos do Zelda Ocarina of Time Remake no Switch 2" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Esse gráfico é muito bonito! Eu fico com inveja. Por quê? Inveja? Antes de falar disso, preciso fazer uma comparação com o gráfico de Phantom Blade Zero, feito na Unreal Engine 5. Quem jogou ou pelo menos viu esse jogo vai falar que os gráficos são bonitos. Claro que são! Mas os gráficos deste Zelda também são muito bonitos. Então, o que torna os dois tão diferentes e por que estou usando Phantom Blade Zero como comparação? Porque, afinal de contas, praticamente todo o ambiente do mundo de Zelda é interativo e acessível. Você pode cortar a grama, existe uma física muito bonita na água, a iluminação é bem trabalhada e, além disso, temos todo o design dos puzzles e das dungeons. Não quero dizer que o design de Phantom Blade Zero seja ruim, mas são justamente os pequenos detalhes de Zelda que conseguem me conquistar muito facilmente.</p>
            <p className="mb-4 text-justify">Aqui eu quero abrir uma discussão. Lembro que, na época, um modder fez uma demonstração deste próprio Zelda utilizando a Unreal Engine 5 (<a
    href="https://youtu.be/aLfJaS6v1cc"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    vídeo demonstrativo
  </a>
  ). Quando esse vídeo feito por um fã saiu, lembro que muitas pessoas começaram a criticar o resultado, dizendo que estava feio. No fim das contas, o jogo original acabou ficando bem parecido com aquela demonstração. Para mim, os dois vídeos são bonitos, mas existe uma diferença: o jogo oficial possui muito mais detalhes, como expliquei no parágrafo acima. Não sei se o motivo disso é o fato de o Nintendo Switch 2 ser um console muito mais potente em comparação com o Switch 1 ou se é simplesmente uma questão de trabalho e otimização da própria Nintendo. De qualquer forma, esse é o tipo de qualidade gráfica que espero encontrar nos próximos jogos de Pokémon. Jogar esse Zelda me fez questionar por que Pokémon Scarlet tinha um design de mundo tão feio assim. Ou seja, estou bem hypado para o próximo jogo de Pokémon no ano que vem! Claro que ainda não tivemos muitas imagens, mas acredito que as próximas novidades só devem aparecer no aniversário de 31 anos da franquia Pokémon, em fevereiro de 2027.</p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={90}>
            <p className="mb-4 text-justify">A trilha sonora do jogo tem alguns momentos muito legais, como quando conseguimos um item novo ou vencemos uma batalha. Existem também algumas localidades com músicas muito boas, mas, no geral, não acho que a trilha sonora seja tão incrível assim.</p>
            
            <GameImage 
              src="/assets/26/ZeldaOcarinaRemake/trilha sonora.png" 
              alt="Mecânica de tocar a Ocarina com o microfone" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            
            <p className="mb-4 text-justify">O que realmente justifica essa nota alta é o fato de o jogo ter a música como parte fundamental da própria jogabilidade. Link, o protagonista, possui uma ocarina que pode utilizar para tocar diferentes melodias. Dependendo da música, ela produz efeitos dentro do jogo. Algumas funções são mais simples, como chamar um cavalo, enquanto outras servem para abrir caminhos, alterar o horário do dia ou até permitir o transporte para determinadas áreas. O grande acerto da Nintendo aqui foi permitir que o próprio jogador pudesse tocar o instrumento. Existe até a possibilidade de utilizar um instrumento musical de verdade, mas, caso você não tenha um, pode simplesmente cantarolar a melodia para o jogo reconhecer as notas por meio do microfone do Nintendo Switch 2. É meio louco, né? Mostrei na imagem como funciona essa mecânica, e ela acerta em aproximadamente 90% das vezes. Às vezes, o reconhecimento falha, mas, claro, eu também não sou cantor, né?</p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={100}>
            <GameImage 
              src="/assets/26/ZeldaOcarinaRemake/historia.png" 
              alt="História e exploração em Ocarina of Time" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">Jogar a história deste jogo me fez lembrar de Mario e Dragon Quest. A narrativa é relativamente simples, mas funciona muito bem. Literalmente, você é o herói (Link), precisa ajudar a princesa (Zelda) e enfrentar o vilão (Ganondorf). O que torna essa aventura única é a maneira como o jogo conduz a progressão. Além disso, ele consegue combinar muito bem as mecânicas e a história por meio da viagem no tempo, o que deixa tudo ainda mais interessante.</p>
            <p className="mb-4 text-justify">Alguns pontos que acho importante destacar aqui: primeiro, os NPCs. Todos eles possuem uma vida própria e seguem uma rotina que varia entre o dia e a noite. Além disso, o roteiro do jogo apresenta alguns itens que são necessários para avançar na aventura, mas, ao mesmo tempo, dá bastante liberdade ao jogador para explorar e descobrir as coisas por conta própria. Vou tentar dar um exemplo: se você visitar determinado local no início do jogo e completar uma dungeon, poderá conseguir a Canção do Sol. Essa música permite alterar entre o dia e a noite e também pode ser muito útil para lidar com determinados inimigos, como os ReDeads. É possível enfrentar esses inimigos sem utilizar a música? Claro! Mas a experiência pode ficar muito mais fácil quando você sabe aproveitar os recursos disponíveis. O jogo apresenta diversas opções de itens e ferramentas, mas nem sempre você precisa utilizar todos eles para avançar. No meu caso, por exemplo, acho que deixei de conseguir uma canção que teria me ajudado em alguns puzzles, mas o jogo ainda permite que você avance nessas áreas sem necessariamente precisar dela, sabe? Só para finalizar, as dungeons do jogo são muito legais, e considero que o nível de dificuldade delas é muito bom.</p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
             <GameImage 
              src="/assets/26/ZeldaOcarinaRemake/otimizacao.png" 
              alt="Otimização e dublagem PT-BR do Zelda Remake" 
              className="max-w-xs md:max-w-md lg:max-w-lg"
            />
            <p className="mb-4 text-justify">O jogo possui legendas em PT-BR e, além disso, também conta com dublagem. Sim, você ouviu direito: o jogo tem dublagem em português brasileiro! Porém, como acontece em muitos jogos japoneses, nem todas as falas dos personagens possuem dublagem. Algumas pessoas podem reclamar disso, enquanto outras nem vão ligar. Para mim, tanto faz.</p>
            <p className="mb-4 text-justify">Além disso, não enfrentei nenhum bug durante minha experiência com o jogo.</p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text={
                <>
                <p className="space-y-4 mb-4 text-justify">Eu super recomendo esse jogo! Me diverti muito do início ao fim e a grande lição que tiro daqui é o peso do design atemporal. A Nintendo conseguiu pegar uma obra-prima de 1998 e provar que um level design genial não envelhece nunca. Com o poder do Switch 2, esse remake não é apenas um resgate nostálgico para os fãs mais velhos, mas um título absurdo que bate de frente com qualquer lançamento gigante de 2026.</p>
                
                </>
            }
            rating={98}
            date="10/11/2026" 
          />

        </div>
      </div>
    </>
  );
};

export default ZeldaOcarinaRemake;