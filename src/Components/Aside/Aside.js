import React from 'react';
import './style.css';
import { Category } from '../Category/Category';
import { SortByPrice } from '../Filter/SortByPrice';
import { Slider } from '../Filter/PriceRange';

export function Aside() {
  const data = [{ id: 23, value: 'apple' }];
  return (
    <aside className='side-bar'>
      <Category data={data} />
      <SortByPrice />
      <Slider />
    </aside>
  );
}
