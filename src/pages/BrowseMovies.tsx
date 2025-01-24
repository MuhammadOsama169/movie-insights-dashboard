import { CardComponent } from "@/components/CardComponent";
import { RootState } from "@/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HiSearch } from "react-icons/hi";
import { Sidebar } from "@/components/global/Sidebar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoSortDesc } from "react-icons/go";

export const BrowseMovies = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  const reduxMovieData = useSelector(
    (state: RootState) => state?.MoviesSlice?.movies_data
  );

  return (
    <div className="sticky ">
      <Sidebar />
      <main className="flex flex-col xl:ml-[220px] overflow-y-auto h-[100vh]">
        {/* search */}
        <section className="flex w-full justify-between mx-auto my-4 px-8">
          <div
            className={`flex items-center  relative h-[50px] border px-2 rounded-md`}
          >
            <input
              type="text"
              value={searchTerm}
              placeholder="Search..."
              // onChange={handleChange}
              // onKeyDown={handleKeyPress}
              className={`border-none w-[400px] h-full rounded-md outline-none px-3 flex-1 text-sm`}
            />
            <HiSearch className={`text-[#979797] ml-3`} />
          </div>

          <div className="flex gap-2">
            <button className="flex items-center border px-2 rounded-md gap-2">
              <span>Genre</span>
              <RiArrowDropDownLine size={20} />
            </button>

            <button className="flex items-center border px-2 rounded-md gap-2">
              <span>IMDB Rating</span>
              <GoSortDesc size={20} />
            </button>
          </div>
        </section>
        {/* cards */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-5 place-items-center text-white text-center ">
          {reduxMovieData?.map((movie, id) => (
            <div key={id}>
              <CardComponent data={movie} />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
