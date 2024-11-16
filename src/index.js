import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '../src/Context/Context';// Adjust the path as needed
import App from './App';

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
