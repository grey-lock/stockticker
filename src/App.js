import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import StockList from './components/stocks/StockList'
import StockInfo from './components/stocks/info/StockInfo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stocks: ['NVDA', 'TSLA', 'SPOT', 'CSCO', 'AAPL'],
      stocksData: {},
    }
  }

  componentDidMount() {
    this.fetchStocksData() // fetch stock data on mount
    setInterval(this.fetchStocksData, 5000) // fetch data every 5 seconds
  }

  fetchStocksData = async () => {
    const { stocks } = this.state

    const resp = await axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stocks[0]},${stocks[1]},${stocks[2]},${stocks[3]},${stocks[4]}&types=quote,news,logo,chart`)

    this.setState({
      stocksData: resp.data
    })
  }

  render() {
    const { stocks, stocksData } = this.state

    return (
      <div className="App">
       <Header />
        <main className='main-content'>
          <Switch>
            <Route exact path='/' 
              render={ () => (
                <StockList 
                  stocks={stocks} 
                  stocksData={stocksData}
                />
              )}
            />

            <Route exact path='/:symbol' 
              render={ props => (
                <StockInfo 
                  symbol={props.match.params.symbol} 
                  stockData={stocksData[props.match.params.symbol]}
                />
              )}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App
