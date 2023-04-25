import React, { useState, useEffect } from 'react';
import CustomLineChart from './Charts/CustomLineChart';
import TradeForm from '../components/TradeForm';
import TradeTable from '../components/TradeTable';

// This component manages and renders the TradeForm, TradeTable, and 
// CustomLineChart components. It also  handles the necessary logic for
// the form submission, trades list update, removal of trades, and to 
// keep the chart and balance updated.


const Trades = () => {
  
  const [trades, setTrades] = useState(() => {
  const storedTrades = localStorage.getItem('trades');
    return storedTrades ? JSON.parse(storedTrades) : [];
  });
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [data, setData] = useState([
    {
      name: '',
      Balance: 0,
    },
  ]);

  // useEffect used to automatically update the total outcome
  // and set the newly added trade to local storage.
  
  useEffect(() => {
    let outcome = 0;
    trades.forEach(trade => {
      outcome += parseInt(trade.outcome);
    });
    setTotalOutcome(outcome);
    localStorage.setItem('trades', JSON.stringify(trades));
  }, [trades]);


  // Handles the form submission effects by adding elements to
  // the TradeTable component and feeding the data displayed by
  // the CustomLineChart.

  const handleSubmit = (event) => {
    event.preventDefault();
    const { date, symbol, outcome, idea, screenshot } = event.target.elements;
    const newTrade = {
      date: date.value,
      symbol: symbol.value,
      outcome: outcome.value,
      idea: idea.value,
      screenshot: screenshot.value,
    };
    setTrades((prevTrades) => [...prevTrades, newTrade]);
  
    const updatedBalance = totalOutcome + parseInt(outcome.value);
  
    setData((prevData) => [
      ...prevData,
      {
        name: `Trade ${prevData.length}`,
        Balance: updatedBalance,
      },
    ]);
  
    setTotalOutcome(updatedBalance);
  
    event.target.reset();
  };

  // Removes the selected trade from the list and reassesses the data
  // in order to update not only the balance but the chart history as well

  const removeTrade = (index) => {
    const newTrades = [...trades];
    const removedTrade = newTrades.splice(index, 1)[0];
    setTrades(newTrades);
    setTotalOutcome(totalOutcome - removedTrade.outcome);
  
    setData(prevData => {
      const newData = [...prevData];
      newData.splice(index + 1, 1);
      for (let i = index + 1; i < newData.length; i++) {
        newData[i].Balance -= removedTrade.outcome;
        newData[i].name = `Trade ${i}`;
      }
      return newData;
    });
  };

  // Rendering section

  return (
    <div className="w-full">
      <TradeForm handleSubmit={handleSubmit} />
      <div className="w-full mt-5">
      <TradeTable trades={trades} removeTrade={removeTrade} /> 
      </div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <div div className="flex flex-col md:flex-row">
    <div className="flex-1">
      <CustomLineChart data={data} />
    </div>
    <div className="flex-1 md:pl-10 flex flex-col justify-center items-center md:items-start md:flex-row md:justify-between">
      <p className={`rounded-lg p-2 ${totalOutcome < 0 ? "bg-red-500/80" : "bg-green-500/80"} text-white md:ml-4`}>
        Current Balance: $ {totalOutcome}
      </p>
    </div>
  </div>
  </div>

</div>
  );
};
// localStorage.clear(); 

export default Trades;
