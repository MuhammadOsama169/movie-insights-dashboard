import { moviesInitialData } from "@/types/MovieDataTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies_data: moviesInitialData,
};

export const movieSlice = createSlice({
  name: "movie_data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.movies_data = action.payload;
    },
  },
});

export const { setData } = movieSlice.actions;
export default movieSlice.reducer;
