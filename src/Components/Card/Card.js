import React from 'react';
import './style.css';
import shirt from '../../Assets/img5.webp';
export function Card({ itemName, price, image }) {
  return (
    <div className="card-animated">
      <div className="card-imgwrapper">
        <img src={image || shirt} alt="shirt" />
      </div>
      <button className="btn btn-default icon">
        <i className="bi bi-heart"></i>
      </button>
      <div className="card-animated-body">
        <button className="btn btn-link cart">Add to cart</button>
        <h5>{itemName}</h5>
        <h4>${price}</h4>
      </div>
    </div>
  );
}
