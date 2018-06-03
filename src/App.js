import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
// import Footer from './components/Footer'
import StockList from './components/stocks/StockList'
import StockInfo from './components/stocks/info/StockInfo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stocks: ['GOOG', 'TSLA', 'SPOT', 'FB', 'AAPL']
    }
  }

  render() {
    const { stocks } = this.state

    return (
      <div className="App">
       <Header />
        <main className='main'>
          <Switch>
            <Route exact path='/' 
              render={ () => (
                <StockList stocks={stocks} />
              )}
            />

            <Route exact path='/:symbol' 
              render={ props => (
                <StockInfo symbol={props.match.params.symbol} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
