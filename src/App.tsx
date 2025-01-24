import React, { lazy, Suspense } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PreLoader } from "./components/global/PreLoader";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BrowseMovies } from "./pages/BrowseMovies";

import { PublicRoute } from "./middleware/PublicRoute";

const queryClient = new QueryClient();
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const MovieDetail = lazy(() => import("@/pages/MovieDetail"));

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
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
              path="/movies/:movieId"
              element={
                <PublicRoute>
                  <MovieDetail />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
