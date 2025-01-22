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
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      style={{ direction: "ltr" }}
    >
      <BarChart data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey={dataKey} type="category" hide={true} />
        <Tooltip />

        <Brush
          dataKey={dataKey}
          height={30}
          stroke="#8884d8"
          startIndex={0}
          endIndex={3}
        />

        <Bar
          dataKey={firstPlotADataKey}
          fill="#8884d8"
          barSize={50}
          stackId="a"
          name={firstPlotADataKey}
        >
          <LabelList
            dataKey={dataKey}
            position="insideLeft"
            fill="#ffffff"
            style={{ fontWeight: "bold", fontSize: 12 }}
          />
        </Bar>
        <Bar
          dataKey={secondPlotDataKey}
          fill="#82ca9d"
          barSize={50}
          stackId="a"
          name={secondPlotDataKey}
        />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};
