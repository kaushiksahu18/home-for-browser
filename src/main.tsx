import { memo, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./R3FBlob";

const App = memo(Home);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
