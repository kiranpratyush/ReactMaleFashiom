import React from 'react';
import './style.css';
import { Rating } from '../Rating/Rating';
import shirt from '../../Assets/img5.webp';
export function Card({ itemName, price, image,rating }) {
  console.log(rating)
  return (
    <div className="card-animated">
      <div className="card-imgwrapper">
        <img src={image} alt="shirt" />
      </div>
      <button className="btn btn-default icon">
        <i className="bi bi-heart"></i>
      </button>
      <div className="card-animated-body">
        <button className="btn btn-link cart">Add to cart</button>

        <h5>{itemName}</h5>
        <h4>${price}</h4>
        <Rating ratings={rating} />

      </div>
    </div>
  );
}
