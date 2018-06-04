import React, { Component } from 'react';
import axios from 'axios';


class StockForm extends Component {
  state = {
    symbol: '',
    placeholder: 'Enter A Symbol'
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase()
    })
  }

  handleOnSubmit = async e => {
    e.preventDefault()
    const { index } = this.props
    const { symbol } = this.state

    try {
      const resp = await axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/logo`)
      resp && this.props.updateStocks(index, symbol)
    } 
    catch(error) {
      this.setState({
        symbol: '',
        placeholder: 'Invalid Symbol'
      })
      setTimeout(() => {
        this.setState({
          placeholder: 'Enter A Symbol'
        })
      }, 1000)
    }
    
  }

  render() {
    const { symbol, placeholder } = this.state

    return (
      <div className='stock-form'>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleInput} 
                 placeholder={placeholder} 
                 value={symbol} 
                 name='symbol' 
                 maxLength='5'/>
          <button onClick={this.handleOnSubmit}>OK</button>
        </form>
      </div>
    )
  }
}

export default StockForm;