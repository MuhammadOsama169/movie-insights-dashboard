import React from "react";
import { BsEye } from "react-icons/bs";
import { MovieDataTypes } from "@/types/MovieDataTypes";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface CardComponentProps {
  data: MovieDataTypes;
}

export const CardComponent = ({ data }: CardComponentProps) => {
  return (
    <Link to={`/movie/${data.id}`}>
      <div className="group relative w-[250px] h-[350px] rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        <img
          src={data.poster}
          alt={data.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-bg-opacity duration-300 flex flex-col justify-between p-4">
          <div className="flex justify-center items-center h-[80%]">
            <BsEye
              size={50}
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="flex justify-between items-center">
            {/* IMDb Rating */}
            <div className="flex items-center gap-1">
              <FaStar color="#FFBF00" size={20} />
              <span className="text-white font-semibold">
                {data.imdb_rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
