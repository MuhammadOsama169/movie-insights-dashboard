import { moviesInitialData } from "@/types/MovieDataTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active_page: "Movies",
};

export const movieSlice = createSlice({
  name: "active_page",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.active_page = action.payload;
    },
  },
});

export const { setActivePage } = movieSlice.actions;
export default movieSlice.reducer;
