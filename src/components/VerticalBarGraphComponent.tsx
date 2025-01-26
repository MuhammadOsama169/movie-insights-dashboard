import React from "react";
import { GraphHeaders } from "./charts/GraphHeaders";
import { PieGraph } from "./charts/PieGraph";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { VerticalBarGraph } from "@/components/charts/VerticalBarGraph";

export const VerticalBarGraphComponent = () => {
  const reduxMovieData = useSelector(
    (state: RootState) => state?.MoviesSlice?.movies_data
  );

  return (
    <section className=" w-full bg-[#1f1f1f] text-white border border-[#F0F0F2] px-4 py-2 mt-4 rounded-md flex flex-col h-[350px] 4xl:h-[400px] overflow-y-auto">
      <GraphHeaders heading="Top IMDB rated movies" />

      <div className="h-full ">
        <VerticalBarGraph
          data={reduxMovieData}
          secondPlotDataKey="imdb_rating"
          dataKey="title"
        />
      </div>
    </section>
  );
};
