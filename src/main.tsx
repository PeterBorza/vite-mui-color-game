import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/mui-theme.ts";
import { ColorsContextProvider } from "context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ColorsContextProvider>
        <App />
      </ColorsContextProvider>
    </ThemeProvider>
  </StrictMode>
);
