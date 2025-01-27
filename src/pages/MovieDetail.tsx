import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { TbArrowBackUp } from "react-icons/tb";
import { FaImdb } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export const MovieDetail = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const navigate = useNavigate();
  const movies = useSelector(
    (state: RootState) => state?.MoviesSlice.movies_data
  );

  const selectedMovie = movies.find((movie) => movie.id === movieId);

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  const oscarData = [
    {
      name: "Nominations",
      nominations: selectedMovie.oscar_nominations,
    },
    {
      name: "Wins",
      wins: selectedMovie.oscar_winning,
    },
  ];

  return (
    <main className="min-h-screen  text-white p-6">
      <button
        onClick={() => navigate("/")}
        className="flex items-center mb-6 text-white hover:text-gray-300 transition-colors"
      >
        <TbArrowBackUp size={24} className="mr-2" />
        Back to Home
      </button>

      <div className="flex flex-col-reverse lg:flex-row  overflow-hidden">
        {/* headings */}
        <div className="lg:w-2/3 xl:p-8 p-2">
          <h1 className="text-4xl font-bold mb-4">{selectedMovie.title}</h1>
          <p className="text-gray-300 mb-6">Released in {selectedMovie.year}</p>

          {/* basic info*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <FaImdb className="text-yellow-400 mr-2" size={24} />
              <span className="text-lg">
                IMDb Rating: <strong>{selectedMovie.imdb_rating}/10</strong>
              </span>
            </div>
            <div className="flex items-center">
              <SlCalender className="text-blue-400 mr-2" size={24} />
              <span className="text-lg">
                Release Year: {selectedMovie.year}
              </span>
            </div>
            <div className="flex items-center">
              <IoMdInformationCircleOutline
                className="text-green-400 mr-2"
                size={24}
              />
              <span className="text-lg">
                Genre: {selectedMovie.genre.join(", ")}
              </span>
            </div>
            <div className="flex items-center">
              <MdLanguage className="text-purple-400 mr-2" size={24} />
              <span className="text-lg">
                Language: {selectedMovie.language.join(", ")}
              </span>
            </div>
            <div className="flex items-center col-span-1 sm:col-span-2">
              <span className="text-lg">
                Cast: {selectedMovie.cast.join(", ")}
              </span>
            </div>
          </div>

          {/* Oscar Nominations List */}
          <div className="mb-8">
            {selectedMovie.oscar_nominations_list.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">
                  Nominated Categories:
                </h3>
                <ul className="grid grid-cols-2 list-disc list-inside text-gray-300">
                  {selectedMovie.oscar_nominations_list.map((nom, idx) => (
                    <li key={idx}>{nom}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Oscar Nominations vs Wins  */}
          <div className="rounded-lg 4xl:h-[250px] h-[200px] xl:mb-4 mb-10">
            <h3 className="text-xl font-semibold mb-4">
              Oscar Nominations vs Wins
            </h3>
            {selectedMovie.oscar_nominations_list.length > 1 &&
            selectedMovie.oscar_nominations_list.length > 1 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={oscarData} barSize={50}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                  <XAxis
                    dataKey="name"
                    stroke="#fff"
                    tick={{ fill: "#fff", fontSize: 14, textAnchor: "middle" }}
                    dy={10}
                  />
                  <YAxis stroke="#fff" allowDecimals={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#333",
                      borderRadius: "5px",
                    }}
                  />
                  <Bar
                    dataKey="nominations"
                    fill="#4ADE80"
                    stackId="a"
                    name="Oscars Nominated"
                  />
                  <Bar
                    dataKey="wins"
                    fill="#FBBF24"
                    stackId="a"
                    name="Oscars Won"
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center border rounded-md text-gray-400 justify-center items-center flex h-full">
                Selected Movie does not have any Oscar Wins or Nominations
              </p>
            )}
          </div>
        </div>

        {/* poster */}
        <div
          className="lg:w-1/3 bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedMovie.poster})` }}
        >
          <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
            <img
              src={selectedMovie.poster}
              alt={`${selectedMovie.title} Poster`}
              className="w-3/4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
