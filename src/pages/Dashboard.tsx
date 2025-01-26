import React from "react";
import { useSelector } from "react-redux";
import { BarChartComponent } from "@/components/BarChartComponent";
import { TopOscarWinsByGenre } from "@/components/TopOscarWinsByGenre";
import { VerticalBarGraphComponent } from "@/components/VerticalBarGraphComponent";
import { RootState } from "@/store";
import { LoadingSpinner } from "@/components/global/LoadingSpinner";

const Dashboard = () => {
  const isLoading = useSelector(
    (state: RootState) => state?.MoviesSlice?.isLoading
  );

  return (
    <div className="  h-[100vh] bg-[#08080a] text-white my-2 xl:px-8 px-4">
      <div className="grid grid-col-1 xl:grid-cols-2 gap-4">
        {isLoading ? (
          <section className="animate-pulse w-full justify-center items-center   border border-[#F0F0F2] px-4 py-2 mt-4 rounded-md flex flex-col h-[350px] 4xl:h-[400px] overflow-y-auto">
            <LoadingSpinner size="100px" />
          </section>
        ) : (
          <VerticalBarGraphComponent />
        )}
        {isLoading ? (
          <section className="animate-pulse w-full justify-center items-center   border border-[#F0F0F2] px-4 py-2 mt-4 rounded-md flex flex-col h-[350px] 4xl:h-[400px] overflow-y-auto">
            <LoadingSpinner size="100px" />
          </section>
        ) : (
          <TopOscarWinsByGenre />
        )}
      </div>
      <div>
        {isLoading ? (
          <section className="animate-pulse w-full justify-center items-center   border border-[#F0F0F2] px-4 py-2 mt-4 rounded-md flex flex-col h-[350px] 4xl:h-[400px] overflow-y-auto">
            <LoadingSpinner size="100px" />
          </section>
        ) : (
          <BarChartComponent />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
