import { GenreEnums } from "@/enum/GenreEnums";

export const YearOptions = [
  { id: "all", value: "all", name: "1972 to 2025" },
  { id: "1972_1982", value: "1972_1982", name: "1972 to 1982" },
  { id: "1982_1992", value: "1982_1992", name: "1982 to 1992" },
  { id: "1992_2002", value: "1992_2002", name: "1992 to 2002" },
  { id: "2002_2012", value: "2002_2012", name: "2002 to 2012" },
  { id: "2012_2025", value: "2012_2025", name: "2012 to 2025" },
];
export const CategoryOptions = [
  { id: "all", value: "all", name: "All Categories" },
  { id: "action", value: GenreEnums.ACTION, name: "Action" },
  { id: "adventure", value: GenreEnums.ADVENTURE, name: "Adventure" },
  { id: "biography", value: GenreEnums.BIOGRAPHY, name: "Biography" },
  { id: "comedy", value: GenreEnums.COMEDY, name: "Comedy" },
  { id: "crime", value: GenreEnums.CRIME, name: "Crime" },
  { id: "drama", value: GenreEnums.DRAMA, name: "Drama" },
  { id: "fantasy", value: GenreEnums.FANTASY, name: "Fantasy" },
  { id: "history", value: GenreEnums.HISTORY, name: "History" },
  { id: "horror", value: GenreEnums.HORROR, name: "Horror" },
  { id: "mystery", value: GenreEnums.MYSTERY, name: "Mystery" },
  { id: "romance", value: GenreEnums.ROMANCE, name: "Romance" },
  { id: "scifi", value: GenreEnums.SCIFI, name: "Sci-Fi" },
  { id: "thriller", value: GenreEnums.THRILLER, name: "Thriller" },
];
