import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Layout/Home";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryWrapper from "./components/Pages/CategoryWrapper";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=":code/*" element={<CategoryWrapper />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}
export default App;
