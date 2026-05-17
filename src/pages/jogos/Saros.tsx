// src/pages/jogos/Saros.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const Saros: React.FC = () => {

  const gameData = {
    slug: "saros",
    title: "Saros",
    subtitle: "Um Returnal melhorado mecanicamente com novas ideias, porém ainda segue com uma história confusa e uma trilha sonora fraca.",
    rating: 82,
    coverImage: "/assets/26/Saros/cover.png", 
    logo: "/assets/26/Saros/frontpage.png",
    genre: "Ação / Roguelike",
    releaseDate: "2026-04-30",
    developer: {
        name: "Housemarque",
        countryFlag: "/assets/flags/finland.png"
    },
    publisher: "Sony Interactive Entertainment",
    engine: "Unreal Engine 5",
    platforms: ["PlayStation 5"]
  };

  // SEO
  const seoDescription = "Review de Saros para PS5. Sucessor espiritual de Returnal da Housemarque traz excelente uso do DualSense, mas sofre com trilha sonora ausente.";
  const seoKeywords = "Saros review, Saros PS5, análise Saros, Housemarque, Returnal sucessor, Unreal Engine 5, roguelike";

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
              Antes de começar a review, preciso comentar que esse é o meu primeiro grande jogo do ano no PS5. Na verdade, ele acabou sendo meio que o carro-chefe dessa primeira metade da Sony. Não lembro se teve outro lançamento grande além dele, talvez Nioh, mas além de não ser exclusivo, também é um jogo bem nichado. 
            </p>
            <p className="mb-4">
              Fiquei um tempo afastado dos lançamentos, jogando mais jogos antigos e focando em aumentar minha lista no novo Nintendo Switch 2, então agora finalmente cheguei em Saros, que basicamente funciona como um sucessor espiritual de Returnal. Não é exatamente um Returnal 2, mas o conceito principal continua ali.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={100}>
            <GameImage 
              src="/assets/26/Saros/mecanica.png" 
              alt="Combate e uso do DualSense em Saros" 
              className={imageClass}
            />
            <p className="mb-4">
              Mecanicamente, o primeiro Returnal já era muito bom, mas aqui eu realmente preciso elogiar a evolução. A Housemarque foi, na minha opinião, a segunda empresa da Sony que conseguiu utilizar muito bem os gatilhos L2 e R2 do controle do PS5. Pode parecer estranho falar disso, mas vou tentar explicar. Em muitos jogos de tiro você normalmente tem duas armas, ou então duas armas e uma habilidade especial, uma granada e coisas do tipo. Aqui não. Você literalmente usa apenas uma arma, mas ela possui três formas diferentes de ataque usando somente a pressão do L2.
            </p>
            <p className="mb-4">
              Se você não aperta o L2, a arma funciona normalmente. Quando pressiona parcialmente, ela muda completamente o modo de disparo. Um exemplo simples é a shotgun: no disparo normal ela atira de uma forma mais horizontal, mas usando a pressão parcial o tiro muda de formato e fica mais “em pé”, facilitando acertar certos inimigos e causando mais eficiência em algumas situações. E isso é só um pequeno exemplo para evitar spoilers. Já quando você pressiona totalmente o L2, ativa o disparo especial da arma. Ou seja, o pessoal responsável pelos controles e pela mecânica conseguiu aproveitar muito bem os recursos do DualSense.
            </p>
            <p className="mb-4">
              Falando do jogo em si, a estrutura continua parecida com Returnal: você avança por áreas, enfrenta inimigos, derrota bosses e desbloqueia recompensas que ajudam a progredir. Existem diversos itens espalhados pelo mapa, mas muitos deles podem vir corrompidos, trazendo vantagens e penalidades ao mesmo tempo. A grande diferença aqui é que Saros finalmente abraça de verdade a ideia de roguelike. Em Returnal, quando você morria, muitas vezes parecia que não tinha evoluído quase nada. Já em Saros, cada morte pode fortalecer permanentemente o personagem através de upgrades.
            </p>
            <p className="mb-4">
              Mesmo assim, não pense que o jogo fica fácil. Depois do segundo boss, você desbloqueia uma opção interessante que praticamente permite moldar a gameplay do seu jeito. Por exemplo: eu não gostava dos itens com penalidades, então você pode reduzir isso, mas em troca talvez precise abrir mão de algo importante, como uma segunda chance durante a run. O jogo fica constantemente te forçando a equilibrar risco e recompensa, e é justamente isso que torna tudo mais interessante.
            </p>
            <p className="mb-4">
              No geral, a gameplay ficou excelente. Eles pegaram a ideia central de Returnal e conseguiram melhorar bastante.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={73}>
            <GameImage 
              src="/assets/26/Saros/grafico.png" 
              alt="Visual e level design dos cenários de Saros" 
              className={imageClass}
            />
            <p className="mb-4">
              Sobre os gráficos, admito que fiquei um pouco decepcionado. O level design é muito bom, com vários caminhos, áreas secundárias e espaços que ajudam bastante na movimentação durante os combates. Dá para perceber que o mapa foi pensado para favorecer o gameplay. O problema é que, visualmente, o jogo raramente impressiona.
            </p>
            <p className="mb-4">
              Não acho Saros feio, longe disso. O problema é que ele quase nunca consegue encantar. Existem alguns momentos específicos em que isso acontece, mas são poucos. Um exemplo é uma cena logo no início do jogo, mostrada inclusive no vídeo do usuário MKIceAndFire. Com cerca de 25 minutos de gameplay, aparece uma criatura gigantesca olhando para você enquanto o sol ilumina toda a cena. A iluminação, a atmosfera e o enquadramento ficaram realmente muito bons. Naquele momento eu pensei: “agora o jogo vai ficar absurdo visualmente”. Só que depois disso, a maior parte do tempo o visual acaba sendo apenas ok.
            </p>
            <p className="mb-4">
              Os melhores momentos gráficos acabam ficando concentrados nas batalhas contra bosses finais, mas não posso mostrar nem comentar muito para evitar spoilers. Fora isso, boa parte do jogo passa uma sensação meio “meh”.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={52}>
            <GameImage 
              src="/assets/26/Saros/trilha sonora.png" 
              alt="Atmosfera sonora do jogo" 
              className={imageClass}
            />
            <p className="mb-4">
              Se você achou que os gráficos seriam o ponto mais fraco, então aí que entra a maior decepção: a trilha sonora. Ela é extremamente ausente, mas muito mesmo. E o pior é que existem momentos em que dá para perceber claramente o potencial desperdiçado.
            </p>
            <p className="mb-4">
              Lembro que isso acontece principalmente na parte final do primeiro boss e também na última luta do jogo. Nessas horas, a música finalmente aparece e melhora muito a experiência. Só que no restante da gameplay quase não existe trilha sonora. Para um FPS roguelike, isso pesa bastante, porque uma música forte ajuda a manter a adrenalina e deixa o jogador mais empolgado durante as runs.
            </p>
            <p className="mb-4">
              Eu só não joguei no mudo porque precisava ouvir os tiros vindo dos inimigos, já que os ataques podem surgir de qualquer direção. Pelo menos o jogo possui ótimos recursos de acessibilidade, como indicadores visuais mostrando de onde os disparos vêm e o próprio controle vibrando para ajudar na percepção.
            </p>
            <p className="mb-4">
              Um exemplo claro de como isso poderia ter sido melhor é Doom. Mesmo não sendo um roguelike, Doom sabe exatamente quando usar sua trilha sonora e como encaixá-la na gameplay. Isso faz toda diferença na experiência e mantém o jogador constantemente animado.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={85}>
            <GameImage 
              src="/assets/26/Saros/historia.png" 
              alt="Elementos de lore e narrativa" 
              className={imageClass}
            />
            <p className="mb-4">
              Vou ser sincero: eu acho a história de Returnal bem ruim. Além de extremamente confusa, o fato de existir praticamente só um personagem falando sozinho o tempo inteiro não ajudava muito. Em Saros eles melhoraram bastante isso.
            </p>
            <p className="mb-4">
              Agora existem mais personagens, mais diálogos, registros em áudio e textos espalhados pelo jogo. Não sei se isso já existia em algum nível antes, mas aqui funcionou muito melhor para mim. Conforme você joga, vai desbloqueando novas informações no banco de dados, quase como se cada personagem tivesse uma biografia que vai sendo expandida aos poucos. Isso ajuda bastante na construção do mundo e deixa tudo mais interessante.
            </p>
            <p className="mb-4">
              O único problema é que a história ainda herda parte da confusão típica de Returnal. Só que dessa vez ela parece menos exagerada e mais controlada. Ainda existem momentos difíceis de entender, mas pelo menos agora existe algo realmente interessante por trás.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              O jogo já chega totalmente dublado em português do Brasil e, durante toda minha experiência, rodou muito bem. Não encontrei bugs relevantes nem problemas de desempenho. Teve apenas um momento em que achei que algo estava quebrado, mas depois percebi que era uma mecânica do próprio jogo.
            </p>
            <p className="mb-4">
              Quando você acumula muitas penalidades, pode acabar recebendo uma condição que impede de visualizar a barra de vida dos inimigos. Isso aconteceu comigo justamente na batalha final, então por alguns minutos achei que o jogo tinha bugado. Mas não, era apenas mais uma punição do sistema de corrupção.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="Para mim, Saros é um jogo muito bom e extremamente divertido de jogar de vez em quando. Só pela mecânica já vale a experiência, porque a Housemarque conseguiu criar uma gameplay realmente diferenciada. Claro que o jogo possui problemas, principalmente na parte sonora, mas ainda assim considero ele melhor que Returnal em praticamente todos os aspectos. Se existe algo que eu realmente espero da sequência ou do próximo projeto do estúdio, é um cuidado muito maior com a trilha sonora. Foi a parte que mais me decepcionou durante toda a experiência."
            rating={82}
            date="10/05/2026"
          />

        </div>
      </div>
    </>
  );
};

export default Saros;