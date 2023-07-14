import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);//The exclamation on the end means the element with the ID 'root' is guaranteed to be found in the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
