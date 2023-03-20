import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from 'lib/store/store';

import App from 'Components/App';
=======
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from '@lib/store/store';

import App from '@components/App';
>>>>>>> main

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
<<<<<<< HEAD
=======
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
>>>>>>> bcd937e (created bare skeleton)
=======
// import { Provider } from 'react-redux';
// import store from './lib/store';
import App from './components/App.jsx';

ReactDOM.render(
  // <Provider store={store}>
    <App />,
  // </Provider>,
  document.getElementById('root')
>>>>>>> 4d40ddc (Initial setup of Redux and folders for Product Overview)
>>>>>>> f5b7440 (Oops forgot core Redux)
=======
>>>>>>> main
);
