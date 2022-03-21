import React from 'react';
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
    <input className='category-list'
      type="range"
      min="1"
      max="2000"
      value={value}
      class="slider"
      id="myRange"
      onChange={handleChange}
    />
    </div>
    </nav>
  );
}
