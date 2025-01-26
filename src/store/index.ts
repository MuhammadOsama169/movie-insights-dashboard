import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./slices/MovieSlice";
import ActivePageSlice from "./slices/ActivePageSlice";

export const store = configureStore({
  reducer: {
    MoviesSlice,
    ActivePageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
