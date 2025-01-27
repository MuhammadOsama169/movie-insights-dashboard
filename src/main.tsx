import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";
import AppReduxProvider from "./store/AppReduxProvider";

createRoot(document.getElementById("root")!).render(
  <AppReduxProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppReduxProvider>
);
