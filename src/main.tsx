// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from 'react-helmet-async'; // << Novo Import

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>  {/* << Adicione aqui */}
      <App />
    </HelmetProvider> {/* << Feche aqui */}
  </React.StrictMode>
);