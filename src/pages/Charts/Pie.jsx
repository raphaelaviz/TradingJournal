import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Pie as PieChart } from '../../components';


//*******************  UNFINISHED COMPONENT

const Pie = () => (
  

  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
  <div>
      <p className="text-lg text-gray-400">Chart</p>
      <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">Coming soon</p>
  </div>
      <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">Trading frequency by symbol</p>
      <div className="w-full">
        <PieChart id="chart-pie" data={pieChartData} height="full" />
      </div>
  </div>

);

export default Pie;