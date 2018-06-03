import React from 'react'
import { Link } from 'react-router-dom'

const StockItem = ({ symbol, stockData, idx, updateStocks }) => {
  return (
    <div className='stock-item-wrapper'>
      <div className='delete-button' onClick={() => updateStocks(idx, null)}>

        <i className="fa fa-trash"></i>
      </div>
      <Link to={`/${symbol}`}>
      <div className='stock-item'>
        <h2>{symbol}</h2>
        { stockData ?
          <div className='stock-item-data'>
            <img src={stockData.logo.url} alt='stock-logo'/>
            <p>{stockData.quote.companyName}</p>
            <p>${stockData.quote.latestPrice}</p>
            <p>{(stockData.quote.changePercent * 100).toFixed(2)}%</p>
          </div>
          :
          <div className='stock-item-data'>
            <p>Loading data...</p>
          </div>
        }
        </div>
      </Link>
    </div>
  )
}

export default StockItem