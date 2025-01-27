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
  CartesianGrid,
  Rectangle,
} from "recharts";

interface BarGraphProps {
  data: any;
  dataKey: string;
  firstPlotADataKey: string;
  secondPlotDataKey: string;
}
export const BarGraph = ({
  data,
  dataKey,
  firstPlotADataKey,
  secondPlotDataKey,
}: BarGraphProps) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        {data.length > 3 && (
          <Brush
            dataKey={dataKey}
            height={30}
            stroke="#8884d8"
            startIndex={0}
            endIndex={isSmallDevice ? 2 : 6}
          />
        )}

        <XAxis
          dataKey={dataKey}
          stroke="#fff"
          tick={{ fill: "#fff", fontSize: 14, textAnchor: "middle" }}
        />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "#333",
            borderRadius: "5px",
          }}
        />
        <Legend />
        <Bar
          dataKey={firstPlotADataKey}
          fill="#8884d8"
          name="Oscars Won"
          activeBar={<Rectangle />}
        />
        <Bar
          dataKey={secondPlotDataKey}
          fill="#82ca9d"
          name="Oscars Nominated"
          activeBar={<Rectangle />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
