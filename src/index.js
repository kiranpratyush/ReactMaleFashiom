import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Contexts/DataContext';
import { CartContextProvider } from './Contexts/CartContext';

const div = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  div
);
