// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ListReviewRoutes from "./routes/ListReview.routes";

function App() {
  return (
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
  );
}

export default App;
