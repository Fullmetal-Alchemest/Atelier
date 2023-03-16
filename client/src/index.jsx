import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './lib/store';
import App from './components/App.jsx';

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
=======
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from '@lib/store.js';

import App from '@components/App.jsx';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
>>>>>>> copyOfMain
);
