'use client';

import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Product 1', value: 50 },
  { name: 'Product 2', value: 50 },
];

const COLORS = ['#A259FF', '#F7931A'];

export default function DonutChart() {
  return (
    <div className='py-7 rounded-xl w-[355px] bg-[#1e1e1e]'>
      <h2 className='px-4 text-xl font-bold mb-1'>Primary Text</h2>
      <p className='px-4 text-sm text-white/60'>5.987,34</p>
      <p className='px-4 text-xs mb-4 text-gray-400'>Secondary text</p>
      <div className='w-full h-[1px] bg-[#4f4f4f] mb-[30px]' />
      <div className='relative'>
        <ResponsiveContainer width='100%' height={250}>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={60}
              outerRadius={90}
              fill='#8884d8'
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign='bottom'
              align='left'
              iconType='circle'
              wrapperStyle={{ color: '#fff' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <span className='text-white font-semibold text-sm absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          50%
        </span>
        <span className='text-white font-semibold text-sm absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          50%
        </span>
      </div>
    </div>
  );
}
