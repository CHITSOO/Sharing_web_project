import { BrowserRouter } from "react-router-dom";
import Reducer from './_reducers';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import 'antd/dist/antd.css';

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'core-js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './_components/App';;
//import * as serviceWorker from './serviceWorker';
//import reportWebVitals from './reportWebVitals';





const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore) 

ReactDOM.render(

  <Provider
    store={createStoreWithMiddleware(Reducer, 
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
  >
     <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>
  
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()

//아래가 수정전.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//reportWebVitals();
//serviceWorker.unregister();
