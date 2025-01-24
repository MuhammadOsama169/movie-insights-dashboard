// TopGenresRadarGraph.tsx

import { RootState } from "@/store";
import { GenreTypes, MovieDataTypes } from "@/types/MovieDataTypes";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const PieGraph = ({ data }: { data: MovieDataTypes[] }) => {
  const oscarWinsByGenre: any = useMemo(() => {
    // total oscar wins per genre
    const genreWinsMap = data?.reduce((acc: any, movie: MovieDataTypes) => {
      movie.genre.forEach((genre) => {
        if (!acc[genre]) {
          acc[genre] = 0;
        }
        acc[genre] += movie.oscar_winning;
      });
      return acc;
    }, {});

    // convert object into array of obj
    return Object?.entries(genreWinsMap)
      .map(([genre, wins]) => ({
        name: genre as string,
        value: wins as number,
      }))
      .sort((a, b) => b.value - a.value);
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={oscarWinsByGenre}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis
          angle={30}
          domain={[
            0,
            Math.max(...oscarWinsByGenre.map((d: GenreTypes) => d.value)) + 1,
          ]}
        />
        <Tooltip />
        <Radar
          name="Oscar Wins"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
