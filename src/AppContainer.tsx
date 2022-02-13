import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "./styles/mui";

export const AppContainer = () => {
  return (
    <ThemeProvider theme={MainTheme}>
      <div> </div>
    </ThemeProvider>
  );
};
