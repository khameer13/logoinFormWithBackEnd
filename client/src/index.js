
import React from 'react';
import ReactDOM from 'react-dom/client';  //down tha 2
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//   <React.StrictMode>
//    < BrowserRouter> <App /> </BrowserRouter>
//   </React.StrictMode>
// );

//yarn strat kar client me aur serve me kar nod app.js
//project start karne
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <App />
  </BrowserRouter>
  </React.StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
