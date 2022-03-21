import React from 'react';
import "./style.css"
import { useState } from 'react';
export function Slider() {
  const [value, setValue] = useState(0);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <nav>
    <div className ="category-list">
    <h1>Price Range</h1>
    <input className='category-list slider'
      type="range"
      min="0"
      max="900"
      value={value}
      onChange={handleChange}
    />
    </div>
    </nav>
  );
}
