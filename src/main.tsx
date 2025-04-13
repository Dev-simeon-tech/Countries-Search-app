import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

import { CountriesProvider } from "./context/countries-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountriesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountriesProvider>
  </StrictMode>
);
