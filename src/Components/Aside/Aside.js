import React from 'react';
import { FilterByRating } from '../../export';
import { useDataContext } from '../../export';
import { Category } from '../../export';
import { SortByPrice } from '../../export';
import { Slider } from '../../export';
import './style.css';
export function Aside() {
  const { state, dispatch } = useDataContext();
  return (
    <aside className="side-bar">
      <div className="side-bar__container">
        <Category data={state.categories} />
        <SortByPrice />
        <Slider />
        <FilterByRating />
      </div>
      <button
        className="side-bar__clear-filter"
        onClick={() => {
          dispatch({ type: 'CLEAR_FILTER' });
        }}
      >
        Clear filter
      </button>
    </aside>
  );
}
