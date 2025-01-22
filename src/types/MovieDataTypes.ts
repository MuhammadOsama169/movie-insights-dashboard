export type MovieDataTypes = {
  title: string;
  year: string;
  genre: string[];
  country: string[];
  imdb_rating: number;
  oscar_nominations: number;
  oscar_winning: number;
  cast: string[];
  language: string[];
  oscar_nominations_list: string[];
  oscar_winning_list: string[];
  poster: string;
};

export const moviesInitialData: MovieDataTypes = {
  title: "",
  year: "",
  genre: [],
  country: [],
  imdb_rating: 0,
  oscar_nominations: 0,
  oscar_winning: 0,
  cast: [],
  language: [],
  oscar_nominations_list: [],
  oscar_winning_list: [],
  poster: "",
};
