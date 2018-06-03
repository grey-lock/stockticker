import React from 'react'
import { Link } from 'react-router-dom'

const StockItem = ({ symbol, stockData}) => {
  return (
    <div className='stock-item-wrapper'>
      <Link to={`/${symbol}`}>
      <div className='stock-item'>
        <h3>{symbol}</h3>
        {stockData ?
          <div className='stock-item-data'>
            <img src={stockData.logo.url} alt='stock-logo'/>
            <p>{stockData.quote.companyName}</p>
            <p>${stockData.quote.latestPrice}</p>
            <p>{stockData.quote.primaryExchange}</p>
            <p>{stockData.quote.changePercent * 100}</p>
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