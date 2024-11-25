import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// 글로벌 스타일
// import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
