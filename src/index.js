import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './Contexts/DataContext';
import { CartContextProvider } from './Contexts/CartContext';

const div = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <ContextProvider>
          <App />
      </ContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  div
);
