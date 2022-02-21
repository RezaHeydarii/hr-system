import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "./styles/mui";
import { AppRoutes } from "./pages/AppRoutes";
import { setupAxios } from "./services";
setupAxios();

export const AppContainer = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
};
