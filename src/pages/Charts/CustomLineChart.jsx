import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomLineChart = ({ data }) => {
  return (
    <ResponsiveContainer aspect={1.2}>
      <LineChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Balance" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
