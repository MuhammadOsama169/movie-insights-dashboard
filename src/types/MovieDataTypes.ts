export type GenreTypes = {
  name: string;
  value: number;
};
export type MovieDataTypes = {
  id: string;
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

export const moviesInitialData: MovieDataTypes[] = [];
