import React, { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PreLoader } from "./components/global/PreLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowseMovies } from "./pages/BrowseMovies";
import { PublicRoute } from "./middleware/PublicRoute";
import { Layout } from "./components/global/Layout";

const queryClient = new QueryClient();
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const MovieDetail = lazy(() => import("@/pages/MovieDetail"));

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <PublicRoute>
                    <Dashboard />
                  </PublicRoute>
                }
              />
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <BrowseMovies />
                  </PublicRoute>
                }
              />
              <Route
                path="/movie/:movieId"
                element={
                  <PublicRoute>
                    <MovieDetail />
                  </PublicRoute>
                }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
