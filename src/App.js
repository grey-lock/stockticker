import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header'
// import Footer from './components/Footer'
import StockList from './components/stocks/StockList'
import StockDetails from './components/stocks/details/StockDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <main className='main'>
          <Switch>
            <Route exact path='/' component={StockList} />
            <Route exact path='/:symbol' component={StockDetails} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
