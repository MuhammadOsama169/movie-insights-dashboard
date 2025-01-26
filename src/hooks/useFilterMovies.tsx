import { MovieDataTypes } from "@/types/MovieDataTypes";
import { useMemo } from "react";

interface UseFilterMoviesProps {
  selectedGenre: string;
  selectedYearRange: string;
  reduxMovieData: MovieDataTypes[];
}

interface UseFilterMoviesReturn {
  filteredMovies: MovieDataTypes[];
}

export const useFilterMovies = ({
  selectedGenre,
  selectedYearRange,
  reduxMovieData,
}: UseFilterMoviesProps): UseFilterMoviesReturn => {
  //useMemo for displaying filtered data
  const filteredMovies = useMemo(() => {
    if (!reduxMovieData) return [];

    if (selectedGenre === "all" && selectedYearRange === "all") {
      return [...reduxMovieData];
    }

    let data = [...reduxMovieData];

    // genre filter if its not all
    if (selectedGenre !== "all") {
      data = data.filter((movie) =>
        movie.genre.some(
          (genre) => genre.toLowerCase() === selectedGenre.toLowerCase()
        )
      );
    }

    // year filter if its not all
    if (selectedYearRange !== "all") {
      const [start, end] = selectedYearRange.split("_").map(Number);

      data = data.filter(
        (movie: any) => movie.year >= start && movie.year <= end
      );
    }

    return data;
  }, [reduxMovieData, selectedGenre, selectedYearRange]);

  return { filteredMovies };
};
