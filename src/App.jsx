import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Layout/Home";
import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CategoryWrapper from "./components/Pages/CategoryWrapper";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement,
    children: [
      { index: true, element: <Home /> },
      { path: "/:code/*", element: <CategoryWrapper /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
