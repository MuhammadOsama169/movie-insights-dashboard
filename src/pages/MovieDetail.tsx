import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";

import { MovieDataTypes } from "@/types/MovieDataTypes";

export const MovieDetail = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: RootState) => state?.MoviesSlice.movies_data
  );

  //   if (!selectedMovie) {
  //     return <div>Loading...</div>;
  //   }

  return <div className="container mx-auto p-4"></div>;
};

export default MovieDetail;
