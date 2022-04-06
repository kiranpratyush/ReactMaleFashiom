import React from 'react';
import ReactDOM from 'react-dom';
import App from './export';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './export';
import { CartContextProvider } from './export';
import { AuthContextProvider } from './export';

const div = document.querySelector('#root');
ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <ContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  div
);
