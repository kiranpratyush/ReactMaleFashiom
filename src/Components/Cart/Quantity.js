import React from 'react';
import './Quantity.css';
import { useCartContext } from '../../export';
export function Quantity({ id, quantity }) {
  const { dispatch } = useCartContext();
  function handleIncrement() {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id } });
  }
  function handleDecrement() {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id } });
  }
  return (
    <div className="quantity">
      <button className="quantity__button" onClick={handleIncrement}>
        +
      </button>
      <input
        type="text"
        value={quantity}
        className="quantity__input"
        readOnly
      />
      <button className="quantity__button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}
