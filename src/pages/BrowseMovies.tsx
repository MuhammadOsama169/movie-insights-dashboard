import { CardComponent } from "@/components/CardComponent";
import { RootState } from "@/store";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { HiSearch } from "react-icons/hi";
import { useClickAway, useDebounce } from "@uidotdev/usehooks";
import { GoSortDesc } from "react-icons/go";
import { GenreEnums } from "@/enum/GenreEnums";
import { GenreOptions } from "@/assets/data/GenreOptions";
import { MdOutlineSort } from "react-icons/md";

export const BrowseMovies = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  const [isGenreOptionOpen, setIsGenreOptionOpen] = useState<boolean>(false);
  const [imdbSortOrder, setImdbSortOrder] = useState<"asc" | "desc">("asc");

  const reduxMovieData = useSelector(
    (state: RootState) => state?.MoviesSlice?.movies_data
  );

  // debouncer for search input
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  //ref for genre option dropdown using useClickaway
  const greneDropdownRef = useClickAway(() => {
    setIsGenreOptionOpen(false);
  });

  //handlers
  const handleFilterImdb = () => {
    setImdbSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const handleGenreChange = (genre: GenreEnums) => {
    setSelectedGenre((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  //useMemo for displaying filtered data
  const filteredAndSortedMovies = useMemo(() => {
    if (!reduxMovieData) return [];
    let data = [...reduxMovieData];

    // genre filter

    if (selectedGenre.length > 0) {
      data = data.filter((movie) =>
        movie.genre.some((g) => selectedGenre.includes(g))
      );
    }

    // imdb sorting
    data.sort((a, b) => {
      const ratingA = a.imdb_rating || 0;
      const ratingB = b.imdb_rating || 0;

      if (imdbSortOrder === "asc") {
        return ratingA - ratingB;
      } else {
        return ratingB - ratingA;
      }
    });

    // search with debouncer
    if (debouncedSearchTerm?.trim()) {
      const lowerSearchTerm = debouncedSearchTerm.toLowerCase();

      data = data.filter((movie) =>
        movie.title.toLowerCase().includes(lowerSearchTerm)
      );
    }

    return data;
  }, [reduxMovieData, selectedGenre, imdbSortOrder, debouncedSearchTerm]);

  return (
    <div className="sticky bg-[#08080a] text-white ">
      <main className="flex flex-col overflow-y-auto  p-5">
        <section className="flex flex-col xl:flex-row w-full justify-between mx-auto my-4 px-8">
          {/* search */}
          <div
            className={`bg-white flex items-center  relative h-[50px] border px-2 rounded-md`}
          >
            <input
              type="text"
              value={searchTerm}
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`border-none xl:w-[400px] w-full h-full rounded-md outline-none px-3 flex-1 text-sm text-black`}
            />
            <HiSearch className={`text-[#979797] ml-3`} />
          </div>

          <div className="flex gap-2 xl:mt-0 mt-4 xl:justify-end justify-start">
            {/* genre options */}
            <section className="relative" ref={greneDropdownRef as any}>
              <button
                className="flex items-center  px-2 rounded-md gap-2 h-[50px]"
                onClick={() => setIsGenreOptionOpen(!isGenreOptionOpen)}
              >
                <span>Genre</span>
                <MdOutlineSort size={20} />
              </button>

              {isGenreOptionOpen && (
                <div className="absolute bg-white text-black grid xl:grid-cols-2 grid-cols-1  xl:right-0 z-10 p-4 rounded-lg xl:w-[300px] w-[150px] shadow-lg">
                  {GenreOptions.map((genre) => (
                    <button
                      key={genre.value}
                      id={genre.value}
                      onClick={() => handleGenreChange(genre.value)}
                      className={`px-2 py-1 rounded-md text-left ${
                        selectedGenre.includes(genre.value)
                          ? "bg-black text-white"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {genre.value}
                    </button>
                  ))}
                </div>
              )}
            </section>
            {/* imdb sort option */}
            <button
              className="flex items-center px-2 rounded-md gap-2"
              onClick={handleFilterImdb}
            >
              <span>IMDB Rating</span>
              <GoSortDesc size={20} />
            </button>
          </div>
        </section>
        {/* movie cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 4xl:grid-cols-5 gap-5 place-items-center text-white text-center ">
          {filteredAndSortedMovies?.map((movie) => (
            <div key={movie.id}>
              <CardComponent
                title={movie.title}
                poster={movie.poster}
                rating={movie.imdb_rating}
                id={movie.id}
                type="oscar"
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
