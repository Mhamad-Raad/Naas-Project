'use client';

import Info from '@/assets/Icons/Info';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'XS', product1: 60, product2: 0, product3: 0 },
  { name: 'S', product1: 0, product2: 130, product3: 0 },
  { name: 'M', product1: 0, product2: 0, product3: 180 },
];

export default function NetProfitChart() {
  return (
    <div className='rounded-xl bg-[#1e1e1e] max-w-3xl w-full'>
      <div className='p-6 flex justify-between items-center mb-2'>
        <div>
          <h2 className='text-xl font-bold'>Net Profit</h2>
          <p className='text-sm text-gray-400'>2024</p>
        </div>
        <button className='text-white/50 hover:text-white transition'>
          <Info />
        </button>
      </div>

      <div className='w-full h-[1px] bg-[#4f4f4f] mb-4' />
      <div className='p-6'>
        <ResponsiveContainer width='100%' height={250}>
          <BarChart data={data} barGap={10}>
            <CartesianGrid strokeDasharray='3 3' stroke='#333' />
            <XAxis dataKey='name' tick={{ fill: '#ccc' }} />
            <YAxis tick={{ fill: '#ccc' }} />
            <Tooltip />
            <Legend
              verticalAlign='bottom'
              align='left'
              iconType='circle'
              wrapperStyle={{ color: '#fff' }}
            />
            <Bar dataKey='product1' fill='#A259FF' radius={[4, 4, 0, 0]} />
            <Bar dataKey='product2' fill='#F7931A' radius={[4, 4, 0, 0]} />
            <Bar dataKey='product3' fill='#F9C74F' radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
