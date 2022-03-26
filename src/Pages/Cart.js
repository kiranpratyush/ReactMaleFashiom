import React from 'react';
import './Cartpage.css';
import { Cart } from '../Components/Cart/Cart';
import { Checkout } from '../Components/Checkout/Checkout';
import { Header } from '../Components/Header/Header';
export function CartPage() {
  return (
    <>
      <Header />
      <div className='cartpage__header'><span>My shopping Cart</span></div>
      <div className="cartcontainer">
        <div>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
        <Checkout />
      </div>
    </>
  );
}
