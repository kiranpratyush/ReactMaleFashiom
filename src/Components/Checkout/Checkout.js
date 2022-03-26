import React from 'react';
import "./Checkout.css"
export function Checkout() {
  return (
    <div className="checkout__total">
      <h4 className='checkout__header'>CART TOTAL</h4>
      <ul>
        <li className='checkout__list' >
          <span>Subtotal</span>
          <span className ="checkout__price">$ 169.50</span>
        </li>
        <li className ="checkout__list" >
          <span>Total</span>
          <span className='checkout__price'>$ 169.50</span>
        </li>
      </ul>
      <button className="checkout__button">PROCEED TO CHECKOUT</button>
    </div>
  );
}
