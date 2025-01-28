import { AxiosResponse } from "axios";
import { HttpService } from "../HTTPService";

const apikey = import.meta.env.VITE_TMBD_KEY;
export default {
  getTrendingMovies(currentPage: number): Promise<AxiosResponse<any, any>> {
    return HttpService().get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${currentPage}`
    );
  },
  getTrendingMovieTrailers(showId: number): Promise<AxiosResponse<any, any>> {
    return HttpService().get(
      `https://api.themoviedb.org/3/movie/${showId}/videos?api_key=${apikey}`
    );
  },
  searchMovies(
    currentPage: number,
    searchTerm: string
  ): Promise<AxiosResponse<any, any>> {
    return HttpService().get(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apikey}&page=${currentPage}`
    );
  },
  getTrendingShows(currentPage: number): Promise<AxiosResponse<any, any>> {
    return HttpService().get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&page=${currentPage}`
    );
  },
  searchShows(
    currentPage: number,
    searchTerm: string
  ): Promise<AxiosResponse<any, any>> {
    return HttpService().get(
      `https://api.themoviedb.org/3/search/tv?query=${searchTerm}&api_key=${apikey}&page=${currentPage}`
    );
  },
};
