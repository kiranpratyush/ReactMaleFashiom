import React  from 'react';
import "./style.css"
import { useDataContext } from '../../Contexts/DataContext';
export function Slider() {
  const {dispatch} = useDataContext()
  function handleChange(e) {
    dispatch({type:"FILTER",payload:{category:"slider",data:e.target.value}})

  }
 
  return (
    <nav>
    <div className ="category-list">
    <h1>Price Range</h1>
    <input className='category-list slider'
      type="range"
      min="0"
      max="30"
      onChange={handleChange}
    />
    </div>
    </nav>
  );
}
