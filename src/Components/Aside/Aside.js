import React from 'react';
import './style.css';
import { useDataContext } from '../../Contexts/DataContext';
import { Category } from '../Category/Category';
import { SortByPrice } from '../Filter/SortByPrice';
import { Slider } from '../Filter/PriceRange';

export function Aside() {
  const {state} = useDataContext()
  return (
    <aside className='side-bar'>
      <Category data={state.data} />
      <SortByPrice />
      <Slider />
    </aside>
  );
}
