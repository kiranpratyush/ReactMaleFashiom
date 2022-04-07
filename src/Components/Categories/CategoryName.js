import React from 'react';
import { Link } from 'react-router-dom';
export function CategoryName({ className, title, image }) {
  return (
    <div className={`category__name ${className}`}>
      <div className="category__text">
        <h3>{title}</h3>
        <Link to ="/shop">Shop Now</Link>
      </div>
      <div className="category__image">
        <img src={image} alt="{title}" />
      </div>
    </div>
  );
}
