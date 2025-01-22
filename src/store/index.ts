import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./slices/MovieSlice";

export const store = configureStore({
  reducer: {
    MoviesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
