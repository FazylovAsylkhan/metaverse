import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
