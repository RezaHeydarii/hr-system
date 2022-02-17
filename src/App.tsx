import React from "react";
import "./styles/main.scss";
import { AppContainer } from "./AppContainer";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <AppContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
