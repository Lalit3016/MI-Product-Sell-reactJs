import React from 'react';
// import ReactDOM from 'react-dom';
import  CreateRoot  from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

CreateRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
