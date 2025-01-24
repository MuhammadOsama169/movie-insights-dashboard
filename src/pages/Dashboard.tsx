import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/global/Sidebar";
import { AppBar } from "../components/global/AppBar";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setData } from "@/store/slices/MovieSlice";
import { BarChartComponent } from "@/components/BarChartComponent";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/67909b5bad19ca34f8f271d4/latest"
    );
    const data = await response.json();
    return data;
  };

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  useEffect(() => {
    if (data) {
      dispatch(setData(data.record));
    }
  }, [data]);

  return (
    <div className=" relative h-full">
      <section className="xl:absolute xl:flex hidden w-[200px] h-[100vh]  shadow-xl bg-white ">
        <Sidebar />
      </section>

      <section className="flex xl:hidden">
        <AppBar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          pageName={"Home"}
        />
      </section>

      <div className={` ml-[200px] bg-white text-black h-[100vh] px-6 pt-6`}>
        {isLoading ? <p>Loading...</p> : <BarChartComponent />}
      </div>
    </div>
  );
};

export default Dashboard;
