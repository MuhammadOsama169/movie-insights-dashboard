import React, { useMemo, useState } from "react";
import { GraphHeaders } from "./charts/GraphHeaders";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { VerticalBarGraph } from "@/components/charts/VerticalBarGraph";
import { useFilterMovies } from "@/hooks/useFilterMovies";

export const VerticalBarGraphComponent = () => {
  const [selectedYearRange, setSelectedYearRange] = useState<string>("all");
  const [selectedGenre, setSelectedGenre] = useState<string>("all");

  const reduxMovieData = useSelector(
    (state: RootState) => state?.MoviesSlice?.movies_data
  );

  const { filteredMovies } = useFilterMovies({
    selectedGenre,
    selectedYearRange,
    reduxMovieData,
  });

  return (
    <section className=" w-full text-white border border-[#F0F0F2] px-4 py-2 mt-4 rounded-md flex flex-col h-[350px] 4xl:h-[400px] overflow-y-auto">
      <GraphHeaders
        heading="Top IMDB rated movies"
        setSelectedGenre={setSelectedGenre}
        setSelectedYearRange={setSelectedYearRange}
      />

      <div className="h-full ">
        {filteredMovies.length > 0 ? (
          <VerticalBarGraph
            data={filteredMovies}
            secondPlotDataKey="imdb_rating"
            dataKey="title"
          />
        ) : (
          <p className="text-center text-gray-400 justify-center items-center flex h-full">
            No movies match the selected filters.
          </p>
        )}
      </div>
    </section>
  );
};
