import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import createStore from './configureStore';
import rootRoute from '../routes';
import rootSaga from './saga'; // saga 操作
//import Table from '../table/Table';
//import customStyles from './table-custom-styles.css';
//require('./resources/app.scss');

let store = createStore();
store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>,
  document.getElementById('app')
);
