import React from 'react';

// This component creates the form responsible for adding trades
// to the TradeTable component

const TradeForm = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-10 sm:flex-row justify-evenly items-center mt-20"
    >
      <input
          type="date"
          name="date"
          placeholder="aaaa/mm/dd" required
          className="rounded-lg px-3 py-2 border-2 border-gray-300 mb-3 sm:mb-0 sm:mr-3 sm:w-1/4"
        />
        <input
          type="text"
          name="symbol"
          placeholder="Symbol" required
          className="rounded-lg px-3 py-2 border-2 border-gray-300 mb-3 sm:mb-0 sm:mr-3 sm:w-1/4"
        />
        <input 
          type="number" 
          name="outcome" 
          placeholder="Outcome" required 
          className="rounded-lg px-3 py-2 border-2 border-gray-300 mb-3 sm:mb-0 sm:mr-3 sm:w-1/4" 
        />
        <input 
          type="text" 
          name="idea" 
          placeholder="Trade Idea" 
          className="rounded-lg px-3 py-2 border-2 border-gray-300 mb-3 sm:mb-0 sm:mr-3 sm:w-1/4" 
        />
        <input 
          type="text" 
          name="screenshot" 
          placeholder="Screenshot" 
          className="rounded-lg px-3 py-2 border-2 border-gray-300 mb-3 sm:mb-0 sm:mr-3 sm:w-1/4" 
        />
  
        <button 
          type="submit"
          className="rounded-lg px-3 py-2 bg-sky-500/80 text-white mb-3 sm:mb-0 sm:ml-3 sm:w-1/4">
            Add Trade
        </button>
    </form>
  );
};

export default TradeForm;