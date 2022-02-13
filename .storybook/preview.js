import "../src/styles/main.scss";
import { ThemeProvider } from "@mui/material/styles";
import { MainTheme } from "../src/styles/mui";
import { QueryClient, QueryClientProvider } from "react-query";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={MainTheme}>
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    </ThemeProvider>
  ),
];
