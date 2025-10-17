import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GlassCard from '../ui/glasscard';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarCharts = () => {
    return (
        <GlassCard className="row-span-2  h-[72%] flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Major Expenses</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                >
                    <XAxis fontSize={10} dataKey="name" stroke="#11111" // Line color (white)
                        tick={{ fill: 'white' }}/>
                    <YAxis fontSize={9} color='white'stroke="#11111" // Line color (white)
                        tick={{ fill: 'white' }}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="uv" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        </GlassCard>
    );
};

export default BarCharts;
