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
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Brush
          dataKey={dataKey}
          height={30}
          stroke="#8884d8"
          startIndex={0}
          endIndex={6}
        />
        <XAxis dataKey={dataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey={firstPlotADataKey}
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey={secondPlotDataKey}
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
