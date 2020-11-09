import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import reportWebVitals from './reportWebVitals';
import Pages from './pages/Pages.js';

ReactDOM.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
