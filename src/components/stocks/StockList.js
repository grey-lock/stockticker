import React, { Component } from 'react'
import StockItem from './StockItem'
import StockForm from './StockForm'

class StockList extends Component {

renderStockList = () => {
  return this.props.stocks.map( (symbol, index) => {
    if(symbol !== null) {
      return <StockItem 
                key={index} 
                index={index} 
                symbol={symbol} 
                stockData={this.props.stocksData[symbol]} 
                updateStocks={this.props.updateStocks} />
    } 
    else {
      return <StockForm 
                key={index} 
                index={index} 
                updateStocks={this.props.updateStocks} />
    }
  })
}

render() {
  return (
    <div className='stock-wrapper'>
      <div className='stock-list'>
        {this.renderStockList()}
      </div>
    </div>
  )
}
}

export default StockList