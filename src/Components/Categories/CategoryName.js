import React from 'react';

export function CategoryName({ className, title, image }) {
  return (
    <div className={`category__name ${className}`}>
      <div className="category__text">
        <h3>{title}</h3>
        <a href="#">Shop Now</a>
      </div>
      <div className="category__image">
        <img
          src={image}
          alt="{title}"
        />
      </div>
    </div>
  );
}
