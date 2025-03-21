import React, { Dispatch, SetStateAction } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CategoryOptions, YearOptions } from "@/assets/data/FilterOptions";

interface GraphHeadersProps {
  heading: string;
  setSelectedYearRange: Dispatch<SetStateAction<string>>;
  setSelectedGenre: Dispatch<SetStateAction<string>>;
}

export const GraphHeaders = ({
  heading,
  setSelectedYearRange,
  setSelectedGenre,
}: GraphHeadersProps) => {
  const handleSelectYear = (e: any) => {
    const year = e.target.value;
    setSelectedYearRange(year);
  };
  const handleSelectGenre = (e: any) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
  };
  return (
    <div className="flex  md:flex-row flex-col w-full justify-between  items-center pb-2">
      <p className="text-white text-sm font-bold text-start w-full pb-2">
        {heading}
      </p>
      {/*  year select */}
      <section className="flex gap-2 w-full md:justify-end">
        <div className="md:w-[148px] w-full relative">
          <select
            className={`text-[14px] h-[50px] w-full appearance-none bg-[#1f1f1f] text-white px-2 py-2 border rounded-[8px] focus:outline-none`}
            onChange={handleSelectYear}
          >
            {YearOptions.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <div
            className={`absolute inset-y-0 flex  items-center pointer-events-none right-0 pr-2 `}
          >
            <MdKeyboardArrowDown size={"24px"} />
          </div>
        </div>
        {/* category select */}
        <div className="md:w-[148px] w-full relative">
          <select
            className={`text-[14px] h-[50px] w-full appearance-none bg-[#1f1f1f] text-white  px-2 py-2 border rounded-[8px] focus:outline-none`}
            onChange={handleSelectGenre}
          >
            {CategoryOptions.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <div
            className={`absolute inset-y-0 flex  items-center pointer-events-none right-0 pr-2 `}
          >
            <MdKeyboardArrowDown size={"24px"} />
          </div>
        </div>
      </section>
    </div>
  );
};
