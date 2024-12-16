import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CharacterPage from "./components/character-page";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <CharacterPage />
      </QueryClientProvider>
    </main>
  );
};

export default App;
