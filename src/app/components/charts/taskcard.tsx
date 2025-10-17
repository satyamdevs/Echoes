import { useState } from 'react';
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import GlassCard from '../ui/glasscard';

// Type definition for each data item
type ChartData = {
  name: string;
  value: number;
};

// Chart data array
const data: ChartData[] = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// Color palette
const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Task() {
  const [selected, setSelected] = useState<ChartData | null>(null);
  const handlePieClick = (entry: ChartData, index: number) => {
    setSelected(entry);
  };

  return (
    <GlassCard className="h-72 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl mb-2">Working</h1>

      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            onClick={handlePieClick}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </GlassCard>
  );
}
