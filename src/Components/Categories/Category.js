import React from 'react';
import './Category.css';
import { CategoryName } from './CategoryName';
import image from '../../Assets/img5.webp';
import shoe from "../../Assets/img3.webp"
import glass from "../../Assets/glass.webp"
export function Category() {
  return (
    <div className="category__container">
      <CategoryName
        title="Clothing Collections"
        className="first"
        image={image}
      />
      <CategoryName title="Accessories" className="second" image={glass} />
      <CategoryName title="Shoes" className="third" image={shoe} />
    </div>
  );
}
