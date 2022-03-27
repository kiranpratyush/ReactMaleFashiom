import React, { useEffect, useState } from 'react';
import './style.css';
import { useDataContext } from '../../Contexts/DataContext';
import { Category } from '../Category/Category';
import { SortByPrice } from '../Filter/SortByPrice';
import { Slider } from '../Filter/PriceRange';
export function Aside() {
  const { state, dispatch } = useDataContext();
  return (
    <aside className="side-bar">
      <div className='side-bar__container'>
        <Category data={state.categories} />
        <SortByPrice />
        <Slider />
      </div>
      <button
        onClick={() => {
          dispatch({ type: 'CLEAR_FILTER' });
        }}
      >
        Clear filter
      </button>
    </aside>
  );
}
