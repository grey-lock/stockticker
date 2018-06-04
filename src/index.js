import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
// import store from './store/store'
// import { Provider } from 'react-redux';

ReactDOM.render(
        // <Provider store={store}>
            <BrowserRouter>
              <App/>
            </BrowserRouter >
          // </Provider>
          ,
          document.getElementById('root')
        );

registerServiceWorker();
