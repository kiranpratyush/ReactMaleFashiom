import React from 'react';
import './Checkout.css';
import { useCartContext } from '../../export';
export function Checkout() {
  const { state } = useCartContext();
  const total = state.data.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  return (
    <div className="checkout__total">
      <h4 className="checkout__header">CART TOTAL</h4>
      <ul>
        <li className="checkout__list">
          <span>Subtotal</span>
          <span className="checkout__price">${total}</span>
        </li>
        <li className="checkout__list">
          <span>Total</span>
          <span className="checkout__price">${total}</span>
        </li>
      </ul>
      <button className="checkout__button">PROCEED TO CHECKOUT</button>
    </div>
  );
}
