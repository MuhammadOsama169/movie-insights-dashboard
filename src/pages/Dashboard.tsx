import React from "react";
import { Sidebar } from "../components/global/Sidebar";
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
    <div className=" relative h-[100vh] bg-[#1f1f1f] text-white">
      <Sidebar />
      <div className="xl:ml-[220px] grid grid-col-1 xl:grid-cols-2 gap-4">
        {isLoading ? <LoadingSpinner /> : <VerticalBarGraphComponent />}
        {isLoading ? <LoadingSpinner /> : <TopOscarWinsByGenre />}
      </div>
      <div className="xl:ml-[220px] ">
        {isLoading ? <LoadingSpinner /> : <BarChartComponent />}
      </div>
    </div>
  );
};

export default Dashboard;
