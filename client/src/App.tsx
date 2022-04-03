import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Main } from "./pages/Main";
import { BrowserRouter as Router } from "react-router-dom";

export const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Main />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
