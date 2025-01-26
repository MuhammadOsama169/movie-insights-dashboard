import { PreLoader } from "@/components/global/PreLoader";
import { ServerErrorPage } from "@/pages/error/ServerErrorPage";
import { RootState } from "@/store";
import { setData } from "@/store/slices/MovieSlice";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const PublicRoute = ({ children }: any) => {
  const dispatch = useDispatch();
  const initialDataLoaded = useSelector(
    (state: RootState) => state?.MoviesSlice?.isLoading
  );

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/67935505e41b4d34e47de929/latest",
      {
        headers: {
          "X-Master-Key": import.meta.env.VITE_MASTER_X_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  useEffect(() => {
    if (data && initialDataLoaded) {
      dispatch(setData(data.record));
    }
  }, [data]);

  if (isLoading) {
    return <PreLoader />;
  }

  if (isError) {
    return <ServerErrorPage />;
  }

  return children;
};
