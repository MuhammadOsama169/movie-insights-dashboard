import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { TbArrowBackUp } from "react-icons/tb";
import { FaImdb } from "react-icons/fa";
import ReactPlayer from "react-player";
import { SlCalender } from "react-icons/sl";
import apiService from "@/api/trending/index";
import { setActivePage } from "@/store/slices/ActivePageSlice";

export const TrendingDetails = () => {
  const { showId } = useParams<{ showId: any }>();
  const [trailerData, setTrailerData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trendingMoviesData = useSelector(
    (state: RootState) => state?.TrendingSlice.trending.results
  );
  let numberId: number = Number(showId);
  const selectedMovie = trendingMoviesData.find((t: any) => t.id === numberId);

  useEffect(() => {
    apiService
      .getTrendingMovieTrailers(showId)
      .then((res) => setTrailerData(res.data.results));
  }, [selectedMovie]);

  const findTrailer: any = trailerData?.find(
    (trailer: any) => trailer.type === "Trailer"
  );

  if (!selectedMovie) {
    return <div>Loading...</div>;
  }

  const handleNavigateHome = () => {
    dispatch(setActivePage("Trending Movies"));
    navigate("/trending-movies");
  };

  return (
    <main className="min-h-screen  text-white p-6">
      <button
        onClick={handleNavigateHome}
        className="flex items-center mb-6 text-white hover:text-gray-300 transition-colors"
      >
        <TbArrowBackUp size={24} className="mr-2" />
        Back to Home
      </button>

      <div className="flex flex-col-reverse lg:flex-row  overflow-hidden">
        {/* headings */}
        <div className="lg:w-2/3 xl:p-8 p-2">
          <h1 className="xl:text-4xl text-2xl font-bold mb-4">
            {selectedMovie.title}
          </h1>

          {/* //video player */}
          <section className="w-full  h-[500px] mb-10">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${findTrailer?.key}`}
              controls={true}
              width="100%"
              height="100%"
            />
          </section>

          {/* basic info*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center">
              <FaImdb className="text-yellow-400 mr-2" size={24} />
              <span className="text-lg">
                IMDb Rating: <strong>{selectedMovie.vote_average}/10</strong>
              </span>
            </div>
            <div className="flex items-center">
              <SlCalender className="text-blue-400 mr-2" size={24} />
              <span className="text-lg">
                Release Year: {selectedMovie.release_date}
              </span>
            </div>
          </div>

          <p className="text-xl  my-4">{selectedMovie.overview}</p>
        </div>

        {/* poster */}
        <div
          className="lg:w-1/3 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path})`,
          }}
        >
          <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
              alt={`${selectedMovie.title} Poster`}
              className="w-3/4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TrendingDetails;
