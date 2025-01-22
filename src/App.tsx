import React, { lazy, Suspense } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PreLoader } from "./components/global/PreLoader";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BrowseMovies } from "./pages/BrowseMovies";

const queryClient = new QueryClient();
const Dashboard = lazy(() => import("@/pages/Dashboard"));

function App() {
  return (
    <Suspense fallback={<PreLoader />}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/browse" element={<BrowseMovies />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
