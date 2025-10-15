import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas principais de review (lazy loading)
const HomePage = lazy(() => import('../pages/Homepage'));
const AssassinCreedShadow = lazy(() => import('../pages/jogos/AssassinCreedShadow'));




const ListReviewRoutes: React.FC = () => (
  <Suspense fallback={<div>Carregando página...</div>}>
    <Routes>
      {/* Página inicial */}
      <Route path="/" element={<HomePage />} />

      {/* Reviews individuais */}
      <Route path="/jogos/assassin-creed-shadow" element={<AssassinCreedShadow />} />
      

      {/* Outras páginas */}
      
    </Routes>
  </Suspense>
);

export default ListReviewRoutes;
