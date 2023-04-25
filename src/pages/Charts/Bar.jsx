import React, { useState } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';


//*******************  UNFINISHED COMPONENT

const Bar = () => {
  const { currentMode } = useStateContext();
  
  const [values, setValues] = useState({
    'EUR / USD': 50,
    'BITCOIN / USD': 50,
    'US30': 50,
    'GOLD': 50,
    'US100': 50
  });

  const symbols = [
    {
      dataSource: [{x: '', y: values['EUR / USD']}],
      xName: 'x',
      yName: 'y',
      name: 'EUR / USD',
      type: 'Column',
    },
    {
      dataSource: [{x: '', y: values['BITCOIN / USD']}],
      xName: 'x',
      yName: 'y',
      name: 'BITCOIN / USD',
      type: 'Column',
    },
    {
      dataSource: [{x:'', y: values['US30']}],
      xName: 'x',
      yName: 'y',
      name: 'US30',
      type: 'Column',
    },
    {
      dataSource: [{x: '', y: values['GOLD']}],
      xName: 'x',
      yName: 'y',
      name: 'GOLD',
      type: 'Column',
    },
    {
      dataSource: [{x: '', y: values['US100']}],
      xName: 'x',
      yName: 'y',
      name: 'US100',
      type: 'Column',
    },
  ];

  const handleInputChange = (event, symbolName) => {
    const newValue = parseInt(event.target.value);
    setValues(prevState => {
      return {
        ...prevState,
        [symbolName]: prevState[symbolName] + newValue
      }
    });
  };

  return (
    
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className=" w-full">
        <ChartComponent
          id="charts"
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {symbols.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
