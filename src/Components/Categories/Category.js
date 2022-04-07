import React from 'react';
import { CategoryName } from '../../export';
import './Category.css';
import image from '../../Assets/img5.webp';
export function CategoryHeader() {
  return (
    <div className="category__container">
      <CategoryName
        title="Clothing Collections"
        className="first"
        image={image}
      />
      <CategoryName title="Accessories" className="second" image={image} />
      <CategoryName title="Shoes" className="third" image={image} />
    </div>
  );
}
