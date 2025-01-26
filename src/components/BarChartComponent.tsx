import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BarGraph } from "./charts/BarGraph";
import { GraphHeaders } from "./charts/GraphHeaders";
import { RootState } from "@/store";
import { useFilterMovies } from "@/hooks/useFilterMovies";

export const BarChartComponent = () => {
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
    <section className=" w-full border border-[#F0F0F2] px-4 py-2 mt-4 rounded-md flex flex-col h-[320px] 4xl:h-[400px] overflow-y-auto">
      <GraphHeaders
        heading="Oscar Statistics"
        setSelectedGenre={setSelectedGenre}
        setSelectedYearRange={setSelectedYearRange}
      />

      <div className="h-full ">
        {filteredMovies.length > 0 ? (
          <BarGraph
            data={filteredMovies}
            firstPlotADataKey="oscar_winning"
            secondPlotDataKey="oscar_nominations"
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
