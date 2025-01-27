import { PreLoader } from "@/components/global/PreLoader";
import { ServerErrorPage } from "@/pages/error/ServerErrorPage";
import { RootState } from "@/store";
import { setActivePage } from "@/store/slices/ActivePageSlice";
import { setData } from "@/store/slices/MovieSlice";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const PublicRoute = ({ children }: any) => {
  const location = useLocation();
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

  useEffect(() => {
    const activePage = location.pathname.startsWith("/")
      ? location.pathname.slice(1)
      : location.pathname;

    dispatch(setActivePage(activePage));
  }, [location.pathname]);

  if (isLoading) {
    return <PreLoader />;
  }

  if (isError) {
    return (
      <ServerErrorPage
        title="Server Error"
        desc="There was an error while fetching the data. Please try again or
          contact the developer if the issue continues"
      />
    );
  }

  return children;
};
