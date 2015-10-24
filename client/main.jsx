'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/main/App';
import store from './store';
import remote from 'remote';

require('./styles/global.scss');

require('ipc').on('action', function (type, data) {
  store.dispatch({ type, data });
});

document.addEventListener('DOMContentLoaded', function () {
  remote.getCurrentWindow().show();
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);