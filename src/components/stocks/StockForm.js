import React, { Component } from 'react';
import axios from 'axios'


class StockForm extends Component {
  constructor(props) {
    super(props)

    this.state  = {
      symbol: '',
      placeholder: 'Enter A Symbol',
    }
  }

  // Uppercase the input
  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase()
    })
  }

  
  handleOnSubmit = async e => {
    e.preventDefault()

    const { idx } = this.props
    const { symbol } = this.state

    try {
      const resp = await axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/logo`);
      resp && this.props.updateStocks(idx, symbol)
    }

    catch(error) {
      this.setState({
        symbol: '',
        placeholder: 'Invalid entry',
      })
      setTimeout( () => {
        this.setState({
          placeholder: 'Enter a Symbol'
        })
      }, 1000)
    }
  }

  render() {
    const { symbol, placeholder } = this.state

    return (
      <div className='stock-form'>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            onChange={this.handleOnChange}
            value={symbol}
            placeholder={placeholder}
            name='symbol'
            maxLength='5'/>
          <button onClick={this.handleOnSubmit}/>
        </form>
      </div>
    )
  }
}

export default StockForm