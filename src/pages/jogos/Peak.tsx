// src/pages/jogos/Peak.tsx
import React from 'react';
import ReviewHeader from '../../components/ReviewHeader';
import ReviewSection from '../../components/ReviewSection';
import ReviewVeredito from '../../components/ReviewVeredito';
import GameImage from '../../components/GameImage';
import { Helmet } from 'react-helmet-async';

const Peak: React.FC = () => {
  const gameData = {
    slug: "peak",
    title: "PEAK",
    subtitle: "",
    rating: 70.6,
    coverImage: "/assets/25/PEAK/frontpage.png",
    logo: "/assets/25/PEAK/frontpage.png",
    genre: "Simulador/Sobrevivência",
    releaseDate: "2025-06-16",
    developer: {
      name: "LandCrab",
      countryFlag: "/assets/flags/sweden.png"
    },
    publisher: "Landfall, Aggro Crab",
    engine: "Unity",
    platforms: ["PC"],
  };

  // Textos para SEO
  const seoDescription = "Review completa de PEAK - jogo cooperativo de escalada e sobrevivência. Análise das mecânicas de alpinismo, level design e experiência multiplayer. Avaliação: 70.6/100.";
  const seoKeywords = "PEAK, Landfall, Aggro Crab, jogo cooperativo, escalada, alpinismo, simulador, sobrevivência, review, análise, PC";

  // Schema structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "VideoGame",
      "name": gameData.title,
      "description": seoDescription,
      "genre": gameData.genre,
      "platform": gameData.platforms,
      "releaseDate": gameData.releaseDate,
      "developer": {
        "@type": "Organization",
        "name": gameData.developer.name
      },
      "publisher": {
        "@type": "Organization",
        "name": gameData.publisher
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Sevens Review"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": gameData.rating,
      "bestRating": 100
    },
    "datePublished": "2025-06-21T12:30:00-03:00"
  };

  return (
    <>
      <Helmet>
        {/* Meta Tags Básicas */}
        <title>{gameData.title} - Review Completo | Sevens Review</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={`https://sevensreview.com.br/jogos/${gameData.slug}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />
        <meta property="og:url" content={`https://sevensreview.com.br/jogos/${gameData.slug}`} />
        <meta property="og:site_name" content="Sevens Review" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameData.title} - Review Completo | Sevens Review`} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`https://sevensreview.com.br${gameData.coverImage}`} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <ReviewHeader
          title="PEAK"
          subtitle=""
          rating={70.6}
          coverImage="/assets/25/PEAK/frontpage.png"
          logo="/assets/25/PEAK/frontpage.png"
          genre="Simulador/Sobrevivência"
          releaseDate="2025-06-16"
          developer={{
            name: "LandCrab",
            countryFlag: "/assets/flags/sweden.png"
          }}
          publisher="Landfall, Aggro Crab"
          engine="Unity"
          platforms={["PC"]}
        />

        <div className="mt-8">
          {/* Introdução */}
          <ReviewSection title="Introdução">
            <p className="mb-4">
              <strong>PEAK</strong> é um jogo cooperativo de escalada onde o menor erro pode significar sua ruína.
              Sozinho ou em grupo, sua única esperança de resgate em uma ilha misteriosa é escalar a montanha no centro.
              Você tem o que é preciso para chegar ao PEAK?
            </p>
            <p className="mb-4">
              Antes de começar a review, eu queria explicar como joguei esse jogo.
              Estava em um lobby de <strong>F1 23</strong> no canal do
              <a href="https://www.youtube.com/@Sinxplays" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline"> Sinxplays</a>,
              e ele iria jogar outro jogo com um amigo dele chamado PhChiquini.
              O jogo era o <strong>PEAK</strong>.
              Como faltava alguém da galera do TS, ele me convidou, e eu comprei o jogo para jogar com eles.
              Neste ano, tenho feito uma review de cada jogo que jogo para publicar no meu site
              e também para melhorar minhas habilidades em programação.
              Por isso, decidi também fazer uma review deste jogo da <strong>Landfall</strong>.
              Para quem não sabe, pelo menos na minha biblioteca, eles são os criadores de
              <em>Content Warning</em> (2024) e <em>Stick Fighter</em> (2017) — excelentes jogos cooperativos e com preço acessível.
            </p>
            <p>
              Outro ponto importante: o jogo parece ter sido feito por duas equipes —
              uma da <strong>Aggro Crab</strong> (Seattle, EUA) e outra da <strong>Landfall</strong> (Suécia).
              Preferi colocar a Suécia no título porque é a distribuidora do jogo.
              Enfim, vamos à review.
            </p>
          </ReviewSection>

          {/* Mecânica */}
          <ReviewSection title="Mecânica" rating={75} ratingColor="bg-yellow-300 text-black">
            <p className="mb-4">
              Na parte de mecânica, irei compará-lo bastante com <strong>Death Stranding</strong> (2019), do Kojima. Por quê?
              Porque é o único jogo que lembro onde se escalava e utilizavam-se ferramentas de alpinismo para subir montanhas.
            </p>

            <p className="font-bold mb-2">Pontos positivos do PEAK:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Mecânica de puxar um amigo durante a escalada;</li>
              <li>Mecânica de usar o próprio corpo como apoio para o outro pegar impulso.</li>
            </ul>

            <p className="mb-4">
              A escalada em si é divertida e não é complicada. O jogo desafia o jogador com condições como
              superfícies molhadas que fazem a barra de <em>stamina</em> descer mais rapidamente — algo bem similar
              ao que ocorre em <strong>Death Stranding</strong>. No PEAK, a <em>stamina</em> representa a resistência para subir,
              enquanto no jogo do Kojima está mais ligada ao equilíbrio. Acredito que isso se deva às limitações da engine Unity.
            </p>

            <p className="mb-4">
              Outro ponto é que o jogo possui elementos de sobrevivência: é necessário comer durante a escalada,
              e o jogador enfrenta desafios como <strong>peso, vida, veneno e gelo</strong>, que afetam a <em>stamina</em>.
              Além disso, há um limite de tempo para escalar, o que pressiona o jogador.
              Acho interessante esse elemento de sobrevivência, mas faltou um sistema de <em>crafting</em>
              ou ao menos uma forma mais acessível de encontrar comida. Muitas vezes, era preciso torcer
              para que as malas encontradas contivessem algo útil.
            </p>

            <p className="mb-4">
              Agora, a parte crítica: a maioria dos itens de escalada (com exceção da corda) são <strong>inúteis</strong>.
              Por exemplo, o cipó que existe para atravessar locais não tem utilidade real — é lento, consome muita energia,
              e cair é praticamente fatal. Ou seja, estão mais como enfeites de cenário.
            </p>

            <p>
              E falando em morte: se você morrer, prepare a pipoca — vai passar um bom tempo apenas assistindo seu amigo jogar.
            </p>
            
            <GameImage 
              src="/assets/25/PEAK/PEAK MECANICA.png" 
              alt="PEAK mecânica" 
            />
          </ReviewSection>

          {/* Gráficos */}
          <ReviewSection title="Gráficos" rating={76} ratingColor="bg-yellow-300 text-black">
            <p className="mb-4">
              Visualmente, o jogo é <strong>bonito</strong>. Não tenta ser um jogo com gráficos realistas, mas consegue criar uma ambientação legal.
              A personalização dos personagens lembra os bonecos do <strong>Nintendo Wii</strong>.
            </p>

            <p className="mb-4">
              O grande problema aqui é o <strong>level design</strong>. Pelo que entendi, o mapa muda a cada 24 horas, o que a princípio é interessante
              para evitar repetição. Porém, os mapas parecem ser <strong>gerados proceduralmente</strong> e sem muito cuidado.
            </p>

            <p className="mb-4">
              Na primeira partida, havia apenas <strong>um caminho possível</strong> para subir. Na terceira tentativa, cada jogador tentou ir para
              um lado diferente, mas todos acabaram indo para o mesmo local.
            </p>

            <p className="mb-4">
              No segundo mapa, era <strong>impossível subir</strong> — talvez por falta de stamina ou pela necessidade de usar os cipós
              (que, como já disse, são inúteis). Isso tornou a jogabilidade frustrante.
              Pelo que vi em trailers e na comunidade, existem mais mapas, mas a <strong>impressão inicial foi fraca</strong>.
            </p>

            <GameImage 
              src="/assets/25/PEAK/PEAK GRAFICO.png" 
              alt="PEAK gráficos" 
            />
          </ReviewSection>

          {/* Trilha Sonora */}
          <ReviewSection title="Trilha Sonora" rating={55} ratingColor="bg-red-300 text-black">
            <p className="mb-4">
              A trilha sonora é ok, funcional. Não há nada marcante, mas ao menos existe ambientação sonora.
            </p>
            <GameImage 
              src="/assets/25/PEAK/PEAK TRILHA SONORA.png" 
              alt="PEAK trilha sonora" 
            />
          </ReviewSection>

          {/* História */}
          <ReviewSection title="História" rating={60} ratingColor="bg-red-300 text-black">
            <p className="mb-4">
              Embora o foco do jogo seja o multiplayer e a escalada, há uma tentativa de narrativa. Quando chegamos no início do segundo mapa, apareceu algo que parecia parte de uma história — até tirei print disso. Comentarei mais sobre isso no veredito.
            </p>
            <GameImage 
              src="/assets/25/PEAK/PEAK HISTORIA.png" 
              alt="PEAK história" 
            />
          </ReviewSection>

          {/* Otimização */}
          <ReviewSection title="Otimização" rating={88} ratingColor="bg-green-800 text-white">
            <p className="mb-4">
              Em termos de desempenho, tivemos apenas alguns <strong>problemas pontuais</strong>. Por exemplo, encontramos algumas malas
              "flutuando" no início do jogo — talvez destinadas a nos ajudar, mas que estavam <strong>inacessíveis</strong>.
            </p>

            <p className="mb-4">
              Outro problema foi o <strong>sistema de voz</strong>: ele simplesmente <strong>não funcionou direito</strong>. Apenas alguns conseguiam
              ouvir os outros, e tivemos que usar o <strong>Discord</strong> para a comunicação.
            </p>

            <p className="mb-4">
              Sobre idioma: o jogo <strong>não possui tradução</strong> para o português do Brasil e, curiosamente, só está disponível em inglês —
              <strong>nem mesmo em sueco</strong>, apesar de a <strong>Landfall</strong> ser da Suécia.
              Com o avanço da IA hoje em dia, poderiam ao menos ter adicionado uma tradução automática, especialmente considerando
              que o jogo possui <strong>história e tutoriais</strong>.
            </p>
            <GameImage 
              src="/assets/25/PEAK/PEAK OTIMIZACAO.png" 
              alt="PEAK otimização" 
            />
          </ReviewSection>

          {/* Veredito Final */}
          <ReviewVeredito 
            text="Concluindo: o jogo é divertido. Me diverti muito durante as 3 horas que joguei com o Sinx e os amigos dele. No momento em que escrevo, o vídeo da jogatina ainda não foi postado no canal. Agora, o problema: eu voltaria a jogar? Só se eles melhorarem três pontos principais (em ordem de prioridade): 1. Melhorar as mecânicas de alpinismo; 2. Reestruturar o level design dos mapas; 3. Adicionar opções de idioma. Fico me perguntando por que os desenvolvedores decidiram lançar o jogo desse jeito. E o mais estranho é que ele passou por diversos testes com jogadores — será que ninguém apontou esses problemas? Eles são muito evidentes. A dúvida que fica é: vale a pena corrigir esse jogo? Como ele não funciona por temporadas (você compra uma vez e pronto), e a janela de lançamento é o momento mais importante de um game, pode ser que ele já esteja esquecido. Diferente dos outros dois jogos citados (Content Warning e Stick Fighter), este não tem um bom fator replay — e isso compromete muito a vontade de voltar a jogá-lo."
            rating={70.6}
            date="21/06/2025 12:30"
          />
        </div>
      </div>
    </>
  );
};

export default Peak;