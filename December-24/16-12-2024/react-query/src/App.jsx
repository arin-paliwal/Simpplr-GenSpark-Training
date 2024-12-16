import { QueryClient, QueryClientProvider } from "react-query";
import CharacterPage from "./components/character";

function App() {
  const queryClient = new QueryClient();
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <CharacterPage />
      </QueryClientProvider>
    </main>
  );
}

export default App;
