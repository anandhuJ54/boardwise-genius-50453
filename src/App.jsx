
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
