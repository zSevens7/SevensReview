// src/pages/jogos/007FirstLight.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import { Helmet } from 'react-helmet-async';

const JamesBondFirstLight: React.FC = () => {

  const gameData = {
    slug: "007-first-light",
    title: "007: First Light",
    subtitle: "A IO Interactive estreia James Bond nos games com um sólido sistema de stealth, que lembra Payday e Hitman, embora perca fôlego na reta final.",
    rating: 90,
    coverImage: "/assets/26/007FirstLight/cover.png", 
    logo: "/assets/26/007FirstLight/frontpage.png",
    genre: "Ação e Aventura",
    releaseDate: "2026-05-27",
    developer: {
        name: "IO Interactive",
        countryFlag: "/assets/flags/denmark.png"
    },
    publisher: "IO Interactive",
    engine: "Glacier",
    platforms: ["PlayStation 5", "Windows", "Xbox Series X/S", "Nintendo Switch 2"]
  };

  // SEO
  const seoDescription = "Review de 007: First Light. Analisamos a estreia de James Bond pela IO Interactive, com mecânicas de stealth inspiradas em Hitman, gráficos e história.";
  const seoKeywords = "007 First Light review, análise James Bond, IO Interactive, Project 007, jogo de espionagem, stealth, ação e aventura";

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
              Bem, eu iria jogar esse jogo no PC, mas infelizmente, enquanto jogava, aconteceu um curto-circuito pelo HDMI que acabou queimando minha RTX 4060. Por causa disso, tive que pedir reembolso e comprar o jogo para PS5.
            </p>
            <p className="mb-4">
              Então, algumas coisas que descobri sobre o jogo foram através da versão de PlayStation. Depois comprei uma RTX 5070, mas ela demoraria para chegar e, ao mesmo tempo, eu estava sem nada para fazer. Espero que entendam isso na hora de ler esta review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={90}>
            <p className="mb-4">
              Gostei bastante das mecânicas do jogo. Elas não são perfeitas, mas quero começar falando do sistema de stealth. Sabe do que ele me lembrou? Payday. Isso mesmo.
            </p>
            <p className="mb-4">
              Eu sei que a empresa responsável por este jogo é a mesma da franquia Hitman, mas achei o stealth muito divertido. Só acho uma pena não existirem missões totalmente focadas nisso. Talvez os desenvolvedores tenham tido receio de frustrar o jogador com falhas constantes e reinícios frequentes.
            </p>
            <p className="mb-4">
              Percebi isso principalmente quando morria. Ao mesmo tempo, quando alguém descobria minha presença, eu podia simplesmente sair batendo em todo mundo e nem sempre todos vinham atrás de mim. Achei isso um pequeno erro em um sistema de stealth que, no geral, é muito bom.
            </p>
            <p className="mb-4">
              Sobre as mecânicas de tiro, o jogo segue uma linha mais realista. Você não consegue carregar uma quantidade absurda de munição, e isso não me incomoda. O problema, para mim, eram os combates a longa distância. Em alguns momentos foi realmente difícil acertar os tiros.
            </p>
            <p className="mb-4">
              Entendo que essa foi uma escolha consciente dos desenvolvedores, mas nem sempre o realismo torna a experiência mais divertida. Também existem mecânicas de direção de veículos e alguns puzzles, mas nada muito complexo. Tirei alguns pontos apenas por causa do sistema de armas, que poderia ser um pouco mais amigável para o jogador.
            </p>
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={95}>
            <p className="mb-4">
              O jogo é muito bonito visualmente. No PS5 ele rodou a 60 FPS e oferece modos de desempenho e qualidade, o que considero excelente.
            </p>
            <p className="mb-4">
              As missões contam com bons cenários e um level design muito competente. Porém, preciso fazer uma crítica aos desenvolvedores: quem foi o gênio que decidiu não colocar um modo foto?
            </p>
            <p className="mb-4">
              Sério, por quê?
            </p>
            <p className="mb-4">
              Eu não conseguia tirar fotos adequadas no PS5. Quando utilizava a função de captura do console, o resultado não ficava bom. Pode parecer um detalhe pequeno, mas é uma funcionalidade que deveria existir em um jogo tão bonito. Por isso retirei alguns pontos, e também é o motivo de não haver imagens do jogo nesta review.
            </p>
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={70}>
            <p className="mb-4">
              A trilha sonora é apenas mediana. Temos uma música da Lana Del Rey na introdução, o que é muito legal, mas depois disso a trilha não se destaca tanto.
            </p>
            <p className="mb-4">
              Algumas músicas lembram os filmes da franquia, mas faltou algo mais marcante. Existem cenas que poderiam ter sido muito mais impactantes com uma escolha musical melhor. Não é ruim, mas também não impressiona.
            </p>
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={95}>
            <p className="mb-4">
              A história é muito boa no início e na metade do jogo. Vou explicar o motivo.
            </p>
            <p className="mb-4">
              Primeiro, os desenvolvedores conseguem conquistar o jogador rapidamente através de James Bond. O protagonista tem muito carisma e sustenta bem a narrativa. Além disso, o começo apresenta um ótimo ritmo, introduzindo as missões de stealth de forma bastante eficiente.
            </p>
            <p className="mb-4">
              Porém, para mim, o jogo começa a perder força na segunda metade. Acho que faltaram mais missões focadas em infiltração. As melhores partes da campanha são justamente aquelas em que você invade museus, participa de festas como penetra ou precisa agir discretamente em ambientes sociais.
            </p>
            <p className="mb-4">
              Já algumas missões finais acabam se passando em locais mais genéricos e tecnológicos. Elas são mais longas, chegando facilmente a 4 ou 5 horas no mesmo ambiente. Em comparação, as missões de stealth que mais gostei duravam cerca de 2 horas e eram muito mais interessantes.
            </p>
            <p className="mb-4">
              Vou ser sincero: o jogo brilha quando aposta na espionagem e na infiltração. É aí que ele tem personalidade própria.
            </p>
            <p className="mb-4">
              Também vale destacar que várias missões oferecem diferentes rotas e abordagens para atingir seus objetivos, o que aumenta bastante a rejogabilidade.
            </p>
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={100}>
            <p className="mb-4">
              O jogo não possui dublagem em português, mas preciso agradecer aos desenvolvedores por disponibilizarem uma tradução oficial.
            </p>
            <p className="mb-4">
              Inicialmente ela nem estava nos planos, mas a equipe ouviu os pedidos da comunidade e decidiu implementá-la posteriormente. Esse tipo de atenção ao público merece reconhecimento.
            </p>
            <p className="mb-4">
              Além disso, não encontrei nenhum bug durante toda a campanha. Houve alguns momentos em que pensei ter encontrado problemas, mas depois percebi que eram apenas erros meus ou falta de atenção.
            </p>
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito
            text="No geral, o jogo é muito bom. Considero um ótimo começo para uma franquia que já é extremamente famosa nos cinemas. O ponto mais forte, sem dúvida, é o stealth, que me lembrou bastante Payday em alguns momentos. Existe muito espaço para evolução em futuras sequências, mas mesmo assim já é uma experiência bastante sólida. Eu recomendaria facilmente para qualquer pessoa que goste de jogos de espionagem, infiltração e ação."
            rating={90}
            date="28/05/2026"
          />

        </div>
      </div>
    </>
  );
};

export default JamesBondFirstLight;