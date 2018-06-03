import React, { Component } from 'react'

//import StockItem
// Will need a basic form to enter requested stock

class StockList extends Component {

  renderStockList = () => {
    return this.props.stocks.map( (symbol, idx) => {
      return <p key={idx}>{symbol}</p> //This will be stockitem component
    })
  }


  render() {
    return (
      <div className='stock-list'>
        <p>Stock List</p>
        {/*this.renderStockList()*/}
      </div>
    )
  }
}

export default StockList