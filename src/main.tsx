import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import App from "./App.tsx";
import Error from "./containers/Error.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
