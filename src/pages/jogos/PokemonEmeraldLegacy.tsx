// src/pages/jogos/PokemonEmeraldLegacy.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';

const PokemonEmeraldLegacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <Helmet>
        <title>Pokemon Emerald Legacy - Review Completo</title>
        <meta 
          name="description" 
          content="Review detalhado do Pokemon Emerald Legacy, uma hack ROM que aprimora a experiência do Emerald original com novas mecânicas, gráficos e conteúdo."
        />
        <meta name="keywords" content="Pokemon Emerald, Hack ROM, Review, RPG, Game Boy Advance" />
        <meta property="og:title" content="Pokemon Emerald Legacy - Análise Completa" />
        <meta 
          property="og:description" 
          content="Descubra as melhorias e novidades desta versão aprimorada do clássico Pokemon Emerald"
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/assets/25/PokemonEmeraldLegacy/Pokemon Eme.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <ReviewHeader
        title="Pokemon Emerald Legacy"
        subtitle=""
        rating={90.6}
        coverImage="/assets/25/PokemonEmeraldLegacy/Pokemon Eme.png"
        logo="/assets/25/PokemonEmeraldLegacy/Pokemon Eme.png"
        genre="RPG Turno/Aventura"
        releaseDate="2025-01-01"
        developer={{
          name: "TheSmithPlays",
          countryFlag: "/assets/flags/japan.png"
        }}
        publisher="Hackroom"
        engine="Game Boy Advance"
        platforms={["Microsoft Windows", "Mobile"]}
      />

      <div className="mt-8">
        {/* Introdução */}
        <ReviewSection title="Introdução">
          <p className="mb-4">
            Sinopse: Você escolhe entre um personagem menino ou menina para se aventurar na região de Hoenn, 
            após sua família se mudar de Johto (região da geração anterior).
          </p>
          <p className="mb-4">
            Eu queria rejogar uma versão do Emerald que representasse bem a 3ª geração, mas encontrei muitas hack ROMs 
            que criam universos próprios ao invés de oferecer um "perfect Emerald". Foi então que descobri a versão 
            do YouTuber [TheSmithPlays], que achei a melhor. Vou explicar mais adiante as adições feitas por ele.
          </p>
          <p>
            Por fim, vale lembrar: para muita gente, esse foi o primeiro Pokémon jogado, e muitos consideram 
            essa a melhor geração — o que eu, pessoalmente, discordo. Enfim, vamos à review.
          </p>
        </ReviewSection>

        {/* Mecânica */}
        <ReviewSection title="Mecânica" rating={88} ratingColor="bg-green-800 text-white">
          <p className="mb-4">
            Aquilo que já é bom não precisa de grandes mudanças — e é exatamente isso que vemos em <strong>Pokémon Emerald</strong>. 
            A introdução das batalhas duplas trouxe uma dinâmica inédita e divertida, enquanto os novos Pokémon se destacam 
            tanto no visual quanto na utilidade competitiva. Por outro lado, a geração não apresentou novos métodos de evolução, 
            o que deixou um pequeno gosto de estagnação nesse aspecto.
          </p>

          <p className="mb-4">
            Outra adição interessante foram as duas bicicletas: uma voltada para velocidade e outra para manobras técnicas. 
            O jogador pode alternar entre elas livremente, o que amplia as possibilidades de exploração.
          </p>

          <p className="mb-4">
            As batalhas também passaram a dar mais importância ao ambiente e ao clima, que estão diretamente ligados à trama do jogo. 
            Foi nessa geração que as habilidades dos Pokémon estrearam, tornando os confrontos mais estratégicos. 
            Um novo HM também foi adicionado à progressão da história.
          </p>

          <p className="mb-4">Outras novidades de mecânica incluem:</p>

          <ul className="list-disc list-inside mb-4">
            <li>Concursos Pokémon (opcionais, mas carismáticos)</li>
            <li>Base secreta personalizável</li>
          </ul>

          <p className="mb-4">
            Apesar de divertida, a base secreta é um recurso com mais apelo visual do que prático. 
            Seria muito mais interessante se oferecesse vantagens reais, como buffs ou ganhos de experiência. 
            Uma boa ideia com potencial pouco explorado pela Game Freak.
          </p>

          <GameImage 
            src="/assets/25/PokemonEmeraldLegacy/Pokemon Emerald Mecanica.png" 
            alt="Imagem Pokémon Emerald Mecanica" 
          />

          <p className="mt-4 mb-4">
            <strong>Original, mas aprimorado</strong> — <em>Emerald Legacy</em> traz melhorias sutis, porém valiosas, 
            que modernizam a experiência sem descaracterizar a essência:
          </p>

          <ul className="list-disc list-inside mb-4">
            <li>Qualidade de vida: Pokédex melhorada; remoção segura de HMs; cura, salvamento e surf mais ágeis; corrida em ambientes fechados; sistema de mochila eficiente com envio automático de itens ao PC;</li>
            <li>Viagem rápida: liberada após Meteor Falls, ginásio de Flannery e obtenção do Surf;</li>
            <li>Melhorias nas bikes: após o pós-game, é possível alternar entre Mach e Acro na loja; Acro permite saltos em pequenos degraus;</li>
            <li>Informações de EV/IV: detalhamento com cores por natureza e dados estilo jogos modernos;</li>
            <li>Interface refinada: aceleração de texto em batalha, pular tutorial do Match Call, ajuste rápido do relógio pelo botão Start;</li>
            <li>Rebalanceamento de habilidades e tipos: Magma Armor reduz dano de água; Flash ignora precisão; alterações nos tipos Dark e Ghost; mudanças em clima e status;</li>
            <li>Evoluções sem trocas: Pokémon como Gengar, Machamp, Golem e Alakazam evoluem por nível; outras evoluções exigem apenas itens;</li>
            <li>Novos itens e berries: mais lojas, berries infinitas, novos drops (Sun Stone, Metal Coat), expansão nas Berry Shops;</li>
            <li>Pokédex expandida: novos Pokémon de Hoenn incluídos e necessários para completar a Pokédex;</li>
            <li>IA aprimorada: adversários trocam de forma inteligente e usam melhor habilidades como Will-o-Wisp e Baton Pass;</li>
            <li>Sistema de rematch: líderes de ginásio podem ser desafiados novamente com times mais fortes;</li>
            <li>Pós-game expandido: novos desafios, Frontier melhorada e conteúdo extra substancial.</li>
          </ul>

          <GameImage 
            src="/assets/25/PokemonEmeraldLegacy/Pokemon Emerald Mecanica 02.png" 
            alt="Imagem Pokémon Emerald Mecanica 2" 
          />
        </ReviewSection>

        {/* Gráficos */}
        <ReviewSection title="Gráficos" rating={90} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            Para a época do Game Boy Advance, Emerald trouxe um bom upgrade visual. Há reflexos em poças d'água, 
            mudanças visuais no clima, um novo tipo de grama e uma ambientação que combina com as mecânicas novas — 
            especialmente com as bicicletas.
          </p>
          <p className="mb-4">
            Um detalhe marcante é a presença de cenas fora do gameplay, como se fossem pequenas cutscenes, algo raro até então. 
            Outro destaque é o design do mundo, que casa bem com o tema da história — falarei mais disso na parte da narrativa.
          </p>
          <p className="mb-4">
            Ponto fraco: o design de alguns personagens. É fácil perceber quando um personagem foi "esquecido" no desenvolvimento. 
            A 3ª geração, por exemplo, tem uma das piores Elite Four da franquia, com exceção do campeão. 
            Além disso, os líderes de ginásio da 6ª, 7ª e 8ª insignias são muito mal aproveitados.
          </p>

          <GameImage 
            src="/assets/25/PokemonEmeraldLegacy/Pokemon Emerald Grafico.png" 
            alt="Imagem Pokémon Emerald Grafico" 
          />
        </ReviewSection>

        {/* Trilha Sonora */}
        <ReviewSection title="Trilha Sonora" rating={82} ratingColor="bg-green-800 text-white">
          <p>
            A trilha sonora mantém o padrão da série — nada revolucionário, mas ainda assim marcante. 
            Não houve grandes mudanças, mas ela cumpre bem o seu papel.
          </p>
        </ReviewSection>

        {/* História */}
        <ReviewSection title="História" rating={94} ratingColor="bg-yellow-400 text-black">
          <p className="mb-4">
            A história funciona muito bem. Emerald é praticamente a versão definitiva da 3ª geração.
          </p>
          <p className="mb-4">
            Por quê? Porque Ruby e Sapphire tinham narrativas divididas: uma focava no time Magma, a outra no time Aqua. 
            Já Emerald une as duas equipes de vilões, atuando simultaneamente, o que torna a trama mais rica.
          </p>
          <p className="mb-4">
            Sem dar spoilers (embora o jogo seja antigo), o foco gira em torno de mudanças climáticas na região de Hoenn. 
            Cada equipe quer dominar o clima a seu favor: mais terra ou mais água. Isso dá nome e peso ao conflito.
          </p>
          <p className="mb-4">
            Minha única crítica é que, no clímax da história, parece que a crise só acontece numa parte do mapa — 
            provavelmente uma limitação técnica da época. No remake (Omega Ruby/Alpha Sapphire), isso foi corrigido.
          </p>
          <GameImage 
            src="/assets/25/PokemonEmeraldLegacy/Pokemon Emerald Historia.png" 
            alt="Imagem Pokémon Emerald Historia" 
          />
        </ReviewSection>

        {/* Otimização */}
        <ReviewSection title="Otimização" rating={99} ratingColor="bg-yellow-400 text-black">
          <p>
            O jogo roda perfeitamente. Não enfrentei problemas de XP ou bugs. O único ponto que tira 1 ponto da nota 
            é a ausência de tradução para o português. Mas entendo: o jogo é antigo e não havia localização oficial na época.
          </p>
        </ReviewSection>

        {/* Veredito Final */}
        <ReviewVeredito 
            text="Todos jogos de pokemon eu sempre gosto de mostrar a minha equipe final que disputou a elite four, dessa vez eu utilizei uma equipe meio defensiva e totalmente exclusiva da geração, meu pokemon que utilizei pela primeira vez foi o Crawdunt, Exploud e Torkoal, acredito que quando era criança devo ter mesclado as gerações. Pokémon Emerald Legacy reforça o legado de Hoenn com maestria. Apesar de algumas escolhas criativas que podem dividir opiniões, as novidades são bem integradas, a narrativa permanece envolvente e a jornada continua tão memorável quanto na geração original."
            rating={90.6}
            date="13/06/2025 20:31"
            />

            <div className="mt-4">
            <GameImage 
                src="/assets/25/PokemonEmeraldLegacy/Pokemon Emerald Veredito Final.png" 
                alt="Imagem Pokémon Emerald Veredito Final" 
            />
            </div>

      </div>
    </div>
  );
};

export default PokemonEmeraldLegacy;