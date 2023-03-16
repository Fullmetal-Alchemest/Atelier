import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
=======
import ReactDOM from 'react-dom/client';
>>>>>>> 1299662b01821a276e9d20c52dc83de923ee061f

import { Provider } from 'react-redux';
import store from '@lib/store.js';

import App from '@components/App.jsx';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
