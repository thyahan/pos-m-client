import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "core-js";
import 'whatwg-fetch';

import App from './App';
import configureStore from './store/configurationStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>,
  document.getElementById('root')
);