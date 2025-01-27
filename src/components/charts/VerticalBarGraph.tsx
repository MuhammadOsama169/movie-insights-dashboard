import { useMediaQuery } from "@uidotdev/usehooks";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  LabelList,
  Legend,
  Brush,
} from "recharts";

interface VerticalBarGraphProps {
  data: any;
  dataKey: string;
  secondPlotDataKey: string;
}

export const VerticalBarGraph = ({
  data,
  dataKey,
  secondPlotDataKey,
}: VerticalBarGraphProps) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={{ direction: "ltr" }}
    >
      <BarChart data={data} layout="vertical">
        <XAxis
          type="number"
          stroke="#fff"
          tick={{ fill: "#fff", fontSize: 14, textAnchor: "middle" }}
        />
        <YAxis dataKey={dataKey} type="category" hide={true} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#333",
            borderRadius: "5px",
          }}
        />
        {data.length > 3 && (
          <Brush
            dataKey={dataKey}
            height={30}
            stroke="#8884d8"
            startIndex={0}
            endIndex={isSmallDevice ? 3 : 6}
          />
        )}

        <Bar
          dataKey={secondPlotDataKey}
          fill="#8884d8"
          barSize={50}
          stackId="a"
          name="IMDB Rating"
        >
          <LabelList
            dataKey={dataKey}
            position="insideLeft"
            fill="#ffffff"
            style={{ fontWeight: "bold", fontSize: 12 }}
          />
        </Bar>
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};
