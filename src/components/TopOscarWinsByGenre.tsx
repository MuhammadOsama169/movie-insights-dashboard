import React from "react";
import { GraphHeaders } from "./charts/GraphHeaders";
import { PieGraph } from "./charts/PieGraph";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const TopOscarWinsByGenre = () => {
  const reduxMovieData = useSelector(
    (state: RootState) => state?.MoviesSlice?.movies_data
  );

  return (
    <section className="w-full border border-[#F0F0F2] px-4 py-2 mt-4 rounded-md flex flex-col h-[350px] 4xl:h-[400px] overflow-y-auto">
      <GraphHeaders heading="Top Genre for Oscar Wins" />

      <div className="h-full ">
        <PieGraph data={reduxMovieData} />
      </div>
    </section>
  );
};
