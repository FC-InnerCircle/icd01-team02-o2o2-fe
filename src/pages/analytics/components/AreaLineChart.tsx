import { HTMLAttributes } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from '@emotion/styled';

interface AreaLineChartProps extends HTMLAttributes<HTMLDivElement> {
  data?: { month: string; value: number }[];
}

const AreaLineChart = ({ data, ...rest }: AreaLineChartProps) => {
  return (
    <ChartContainer {...rest}>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
        >
          <XAxis dataKey="month" tick={{ fontSize: 14, fill: '#666' }} />
          <YAxis tick={{ fontSize: 14, fill: '#666' }} />
          <Tooltip
            contentStyle={{
              borderRadius: 8,
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          />
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2E73FF" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#2E73FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#2E73FF"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorValue)"
            dot={{ fill: '#2E73FF', stroke: '#fff', strokeWidth: 2, r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default AreaLineChart;

const ChartContainer = styled.div`
  padding: 0;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  max-width: 100%;
`;
