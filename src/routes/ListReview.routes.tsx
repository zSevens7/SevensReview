
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
const GhostOfYotei = lazy(() => import('../pages/jogos/GhostOfYotei'));
const FootballManager2026 = lazy(() => import('../pages/jogos/FootballManager2026'));
const DigimonWorld1 = lazy(() => import('../pages/jogos/DigimonWorld1'));
const CitiesSkylanes2 = lazy(() => import('../pages/jogos/CitiesSkylanes2'));
const Dispatch = lazy(() => import('../pages/jogos/Dispatch'));
const PokemonX = lazy(() => import('../pages/jogos/PokemonX'));
const DigimonWorld2 = lazy(() => import('../pages/jogos/DigimonWorld2'));
const YugiohFM = lazy(() => import('../pages/jogos/YugiohFM'));
const AILA = lazy(() => import('../pages/jogos/AILA'));
const PokemonLegendsZA = lazy(() => import('../pages/jogos/PokemonLegendsZA'));
const NintendoSwitchSports = lazy(() => import('../pages/jogos/NintendoSwitchSports'));
const LockYourDoor = lazy(() => import('../pages/jogos/LockYourDoor'));
const PokemonSword = lazy(() => import('../pages/jogos/PokemonSword'));


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
      <Route path="/jogos/ghost-of-yotei" element={<GhostOfYotei />} />
      <Route path="/jogos/football-manager-2026" element={<FootballManager2026 />} />
      <Route path="/jogos/digimon-world-1" element={<DigimonWorld1 />} />
      <Route path="/jogos/cities-skylines-2" element={<CitiesSkylanes2 />} />
      <Route path="/jogos/dispatch" element={<Dispatch />} />
      <Route path="/jogos/pokemon-x" element={<PokemonX />} />
      <Route path="/jogos/digimon-world-2" element={<DigimonWorld2 />} />
      <Route path="/jogos/yu-gi-oh-forbidden-memories" element={<YugiohFM />} />
      <Route path="/jogos/aila" element={<AILA />} />
      <Route path="/jogos/pokemon-legends-z-a" element={<PokemonLegendsZA />} />
      <Route path="/jogos/nintendo-switch-sports" element={<NintendoSwitchSports />} />
      <Route path="/jogos/lock-your-door" element={<LockYourDoor />} />
      <Route path="/jogos/pokemon-sword" element={<PokemonSword />} />



     
    </Routes>
  </Suspense>
);

export default ListReviewRoutes;