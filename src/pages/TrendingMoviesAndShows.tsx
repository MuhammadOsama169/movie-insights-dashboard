import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiSearch } from "react-icons/hi";
import { useDebounce } from "@uidotdev/usehooks";
import { useQuery } from "@tanstack/react-query";
import { setTrendingData } from "@/store/slices/TrendingSlice";
import { CardComponent } from "@/components/CardComponent";
import PaginationComponent from "@/components/global/PaginationComponent";
import apiService from "@/api/trending/index";

export const TrendingMoviesAndShows = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dispatch = useDispatch();

  const reduxTrendingData = useSelector(
    (state: RootState) => state?.TrendingSlice
  );
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data } = useQuery({
    queryKey: ["trening", currentPage],
    queryFn: () => apiService.getTrendingMovies(currentPage),
  });

  useEffect(() => {
    if (!searchTerm) {
      dispatch(setTrendingData(data?.data));
    }
  }, [data, currentPage, searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm?.trim()) {
      const lowerSearchTerm = debouncedSearchTerm.toLowerCase();

      apiService
        .searchMovies(currentPage, lowerSearchTerm)
        .then((res) => {
          dispatch(setTrendingData(res?.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="sticky bg-[#08080a] text-white ">
      <main className="flex flex-col overflow-y-auto  p-5">
        <section className="flex flex-col xl:flex-row w-full justify-between mx-auto my-4 px-8">
          {/* search */}
          <div
            className={`bg-white flex items-center  relative h-[50px] border px-2 rounded-md`}
          >
            <input
              type="text"
              value={searchTerm}
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`border-none xl:w-[400px] w-full h-full rounded-md outline-none px-3 flex-1 text-sm text-black`}
            />
            <HiSearch className={`text-[#979797] ml-3`} />
          </div>
        </section>
        {/*  cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 4xl:grid-cols-5 gap-5 place-items-center text-white text-center ">
          {reduxTrendingData?.trending?.results?.map((movie, id) => (
            <div key={id}>
              <CardComponent
                title={movie.title}
                poster={movie.poster_path}
                id={movie.id}
                rating={movie.vote_average}
                type="trending_movies"
              />
            </div>
          ))}
        </section>
        {/* Pagination */}
        <div className="w-full justify-center mx-auto">
          <PaginationComponent
            maxPage={10}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
    </div>
  );
};
