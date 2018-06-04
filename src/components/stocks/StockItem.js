import React from 'react'
import { Link } from 'react-router-dom'

const StockItem = ({ index, symbol, stockData, updateStocks }) => {
  if (stockData) {
    var { companyName, latestPrice, change, changePercent } = stockData.quote;
  }

  return (
    <div className='stock-item-wrapper'>

      <div className='delete-button' onClick={() => updateStocks(index, null)}>
        <i className="fa fa-trash"></i>
      </div>

      <Link to={`/${symbol}`}>
      <div className='stock-item'>
        <h3>{symbol}</h3>
        <i>{stockData && companyName}</i>
        { stockData ?
          <div className='stock-item-data'>
            <img src={stockData.logo.url} alt='stock-logo'/>
            <p>${stockData.quote.latestPrice}</p>
            <p style={{color: change === 0 ? '#333' : change > 0 ? 'green' : 'red'}}>
              <span>{change.toFixed(2)} </span>
              <span> {change > 0 ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}</span>
              <span>{(Math.abs(changePercent) * 100).toFixed(2)}%</span>
            </p>
          </div>
          :
          <div className='stock-item-data'>
            <p>Loading...</p>
          </div>
        }
        </div>
      </Link>
    </div>
  )
}

export default StockItem