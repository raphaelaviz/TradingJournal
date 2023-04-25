import React from 'react'
import {MdScreenshotMonitor} from 'react-icons/md' 
import {BsFillTrashFill} from 'react-icons/bs'

// This component renders the trade log (table), as we
// add more entries via the TradeForm component.

const TradeTable = ({ trades, removeTrade }) => {
  return (
    <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th>Date</th>
              <th>Symbol</th>
              <th>Outcome</th>
              <th>Trade Idea</th>
              <th>Screenshot</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {trades.map((trade, index) => (
            <tr className='' key={index}>
              <td className="pl-2 px-4 text-center dark:text-gray-200">
                {new Date(trade.date).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 text-center dark:text-gray-200">
                {trade.symbol}
              </td>
              <td className="py-2 px-4 text-center dark:text-gray-200">
                {trade.outcome}
              </td>
              <td className="py-2 px-4 text-center dark:text-gray-200">
                {trade.idea}
              </td>
              <td className="py-2 px-4 text-center dark:text-gray-200">
                {trade.screenshot ? (
                  <a href={trade.screenshot} target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col items-center">
                      <MdScreenshotMonitor className="w-6 h-6 transition duration-300 transform hover:scale-110" />
                    </div>
                  </a>
                ) : (
                    <div className="text-xs">
                      No screenshot provided
                    </div>
                  )}
              </td>
              <td>
                <button onClick={() => removeTrade(index)}>
                  <BsFillTrashFill className="w-5 pt-1 h-5 transition duration-300 transform hover:scale-110 dark:text-gray-200"/>
                </button>
              </td>
             </tr>
              ))}
          </tbody>
        </table>
  )
}

export default TradeTable