import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas principais de review (lazy loading)
const HomePage = lazy(() => import('../pages/Homepage'));
const AssassinCreedShadow = lazy(() => import('../pages/jogos/AssassinCreedShadow'));
const ClairObscurExpedition33 = lazy(() => import('../pages/jogos/ClairObscurExpedition33'));
const DeathStranding2 = lazy(() => import('../pages/jogos/DeathStranding2'));
const DemonSlayer2 = lazy(() => import('../pages/jogos/DemonSlayer2'));
const DigimonStoryTimeStranger = lazy(() => import('../pages/jogos/DigimonStoryTimeStranger'));
const DokimonQuest = lazy(() => import('../pages/jogos/DokimonQuest'));
const DoomDarkAges = lazy(() => import('../pages/jogos/DoomDarkAges'));
const F12025 = lazy(() => import('../pages/jogos/F12025'));
const FootballLifeSimulator = lazy(() => import('../pages/jogos/FootballLifeSimulator'));
const FootballManager2024 = lazy(() => import('../pages/jogos/FootballManager2024'));
const InZOI = lazy(() => import('../pages/jogos/InZOI'));
const KingdomComeDeliverance2 = lazy(() => import('../pages/jogos/KingdomComeDeliverance2'));
const LostSoulAside = lazy(() => import('../pages/jogos/LostSoulAside'));
const OctopathTraveler1 = lazy(() => import('../pages/jogos/OctopathTraveler1'));
const Peak = lazy(() => import('../pages/jogos/Peak'));
const PokemonEmeraldLegacy = lazy(() => import('../pages/jogos/PokemonEmeraldLegacy'));
const PokemonGlazed = lazy(() => import('../pages/jogos/PokemonGlazed'));
const PokemonPolishedCrystal = lazy(() => import('../pages/jogos/PokemonPolishedCrystal'));
const PokemonYellowLegacy = lazy(() => import('../pages/jogos/PokemonYellowLegacy'));
const RuneFactory4 = lazy(() => import('../pages/jogos/RuneFactory4'));
const RuneScapeDragonwilds = lazy(() => import('../pages/jogos/RuneScapeDragonwilds'));
const SuperMario3DLand = lazy(() => import('../pages/jogos/SuperMario3DLand'));
const SurrounDead = lazy(() => import('../pages/jogos/SurrounDead'));
const VoiceOfCardsBeastsOfBurden = lazy(() => import('../pages/jogos/VoiceOfCardsBeastsOfBurden'));
const GuiaDeReview = lazy(() => import('../pages/GuiaDeReview'));
const Setup = lazy(() => import('../pages/Setup'));
const RankingAno = lazy(() => import('../pages/RankingAno'));
const RankingGeral = lazy(() => import('../pages/RankingGeral'));

const ListReviewRoutes: React.FC = () => (
  <Suspense fallback={<div>Carregando página...</div>}>
    <Routes>
      {/* Página inicial */}
      <Route path="/" element={<HomePage />} />

      {/* Reviews individuais - TODAS EM MINÚSCULAS */}
      <Route path="/jogos/assassin-creed-shadow" element={<AssassinCreedShadow />} />
      <Route path="/jogos/clair-obscur-expedition-33" element={<ClairObscurExpedition33 />} />
      <Route path="/jogos/death-stranding-2" element={<DeathStranding2 />} />
      <Route path="/jogos/demon-slayer-2" element={<DemonSlayer2 />} />
      <Route path="/jogos/digimon-story-time-stranger" element={<DigimonStoryTimeStranger />} />
      <Route path="/jogos/dokimon-quest" element={<DokimonQuest />} />
      <Route path="/jogos/doom-the-dark-ages" element={<DoomDarkAges />} /> {/* ← CORRIGIDO! */}
      <Route path="/jogos/f1-2025" element={<F12025 />} />
      <Route path="/jogos/football-life-simulator" element={<FootballLifeSimulator />} />
      <Route path="/jogos/football-manager-2024" element={<FootballManager2024 />} />
      <Route path="/jogos/inzoi" element={<InZOI />} />
      <Route path="/jogos/kingdom-come-deliverance-2" element={<KingdomComeDeliverance2 />} />
      <Route path="/jogos/lost-soul-aside" element={<LostSoulAside />} />
      <Route path="/jogos/octopath-traveler-1" element={<OctopathTraveler1 />} />
      <Route path="/jogos/peak" element={<Peak />} />
      <Route path="/jogos/pokemon-emerald-legacy" element={<PokemonEmeraldLegacy />} />
      <Route path="/jogos/pokemon-glazed" element={<PokemonGlazed />} />
      <Route path="/jogos/pokemon-polished-crystal" element={<PokemonPolishedCrystal />} />
      <Route path="/jogos/pokemon-yellow-legacy" element={<PokemonYellowLegacy />} />
      <Route path="/jogos/rune-factory-4" element={<RuneFactory4 />} />
      <Route path="/jogos/runescape-dragonwilds" element={<RuneScapeDragonwilds />} />
      <Route path="/jogos/super-mario-3d-land" element={<SuperMario3DLand />} />
      <Route path="/jogos/surroundead" element={<SurrounDead />} />
      <Route path="/jogos/voice-of-cards-the-beast-of-burden" element={<VoiceOfCardsBeastsOfBurden />} />
      <Route path="/guia" element={<GuiaDeReview />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/ranking-ano" element={<RankingAno />} />
      <Route path="/ranking-geral" element={<RankingGeral />} />

     
    </Routes>
  </Suspense>
);

export default ListReviewRoutes;