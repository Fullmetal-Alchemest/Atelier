import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from '@lib/store.js';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
