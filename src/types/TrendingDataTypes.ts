export type trendingDataType = {
  id: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  genre_ids: [];
  original_language: string;
  original_title: string;
  title: string;
  overview: string;
  popularity: number;
  release_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
};
export type TrendingType = {
  results: trendingDataType[];
  page: number;
  total_pages: number;
  total_results: number;
};

export const trendingInitialData: TrendingType = {
  results: [],
  page: 0,
  total_pages: 0,
  total_results: 0,
};
