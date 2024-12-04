import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";
import CounterProvider from "./context/provider/CounterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
