import React  from 'react';
import "./style.css"
import { useDataContext } from '../../Contexts/DataContext';
export function Slider() {
  const {state,dispatch} = useDataContext()
  function handleChange(e) {
    dispatch({type:"FILTER_BY_PRICE_RANGE",payload:{value:e.target.value}})

  }
 
  return (
    <nav>
    <div className ="">
    <h1>Price Range</h1>
    <input className='slider'
      list ="tickmarks"
      type="range"
      min="0"
      max="4000"
      step="200"
      value ={state.filter.range}
      onChange={handleChange}
    />
    </div>
    <span>{state.filter.range}</span>
    </nav>
  );
}
