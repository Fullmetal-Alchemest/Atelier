import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '@lib/store.js';

import App from '@components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
