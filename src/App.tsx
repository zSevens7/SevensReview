// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ListReviewRoutes from "./routes/ListReview.routes";
import { HelmetProvider } from 'react-helmet-async'; // <--- NOVO IMPORT AQUI

function App() {
  return (
    // O HelmetProvider DEVE envolver todos os componentes que usam o Helmet,
    // garantindo que o contexto seja passado, mesmo em lazy loading.
    <HelmetProvider> 
      <BrowserRouter>
        {/* Header global do site */}
        <Header />

        {/* Conteúdo das páginas */}
        <main className="flex-1">
          <ListReviewRoutes />
        </main>

        {/* Footer global do site */}
        <Footer />
      </BrowserRouter>
    </HelmetProvider> // <--- FECHAMENTO AQUI
  );
}

export default App;