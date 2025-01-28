import { moviesInitialData } from "@/types/MovieDataTypes";
import { trendingInitialData } from "@/types/TrendingDataTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: trendingInitialData,
  isLoading: true,
};

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setTrendingData: (state, action) => {
      state.trending = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setTrendingData } = trendingSlice.actions;
export default trendingSlice.reducer;
