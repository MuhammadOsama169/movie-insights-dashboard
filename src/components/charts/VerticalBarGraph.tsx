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
          endIndex={6}
        />

        <Bar
          dataKey={secondPlotDataKey}
          fill="#8884d8"
          barSize={50}
          stackId="a"
          name={secondPlotDataKey}
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
