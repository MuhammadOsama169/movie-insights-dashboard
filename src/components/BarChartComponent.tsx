import React from "react";
import { useSelector } from "react-redux";
import { BarGraph } from "./charts/BarGraph";
import { GraphHeaders } from "./charts/GraphHeaders";
import { RootState } from "@/store";

export const BarChartComponent = () => {
  const reduxMovieData = useSelector(
    (state: RootState) => state?.MoviesSlice?.movies_data
  );

  return (
    <section className="xl:w-[50%] w-full border border-[#F0F0F2] px-4 py-2 mt-4 rounded-md flex flex-col h-[400px] overflow-y-auto">
      <GraphHeaders heading="Oscar Statistics" />

      <div className="h-full ">
        <BarGraph
          data={reduxMovieData}
          firstPlotADataKey="oscar_nominations"
          secondPlotDataKey="oscar_winning"
          dataKey="title"
        />
      </div>
    </section>
  );
};
