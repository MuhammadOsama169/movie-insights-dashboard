import React, { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PreLoader } from "./components/global/PreLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowseMovies } from "./pages/BrowseMovies";
import { PublicRoute } from "./middleware/PublicRoute";
import { Layout } from "./components/global/Layout";
import { ServerErrorPage } from "./pages/error/ServerErrorPage";
import { TrendingMoviesAndShows } from "./pages/TrendingMoviesAndShows";
import TrendingDetails from "./pages/TrendingDetails";

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
                path="/top-movies"
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
              <Route path="/" element={<TrendingMoviesAndShows />} />
              <Route path="/trending/:showId" element={<TrendingDetails />} />
              <Route
                path="*"
                element={
                  <ServerErrorPage
                    title="404 Page Not Found "
                    desc="The page your trying to access does not exist. Please return back"
                  />
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
