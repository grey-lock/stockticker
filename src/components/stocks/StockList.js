import React, { Component } from 'react'
import StockItem from './StockItem'

class StockList extends Component {

  renderStockList = () => {
    return this.props.stocks.map( (symbol, idx) => {
      return <StockItem 
                key={idx} 
                symbol={symbol} 
                stockData={this.props.stocksData[symbol]} 
              />
    })
  }


  render() {
    return (
      <div className='stock-list'>
        <p>Stock List</p>
        {this.renderStockList()}
      </div>
    )
  }
}

export default StockList