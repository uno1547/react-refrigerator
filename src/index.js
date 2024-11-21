import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import data from './utils/getData';
import './index.css';

console.log(data);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

