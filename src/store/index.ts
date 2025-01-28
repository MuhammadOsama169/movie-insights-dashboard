import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./slices/MovieSlice";
import ActivePageSlice from "./slices/ActivePageSlice";
import TrendingSlice from "./slices/TrendingSlice";

export const store = configureStore({
  reducer: {
    MoviesSlice,
    ActivePageSlice,
    TrendingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
