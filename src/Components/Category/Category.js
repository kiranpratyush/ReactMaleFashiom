import React,{useEffect, useState} from 'react';

import { useDataContext } from '../../Contexts/DataContext';

function CheckBox({ data, Change, index, checked }) {
  return (
    <div className="category-list">
      <div>
        <input
          type="checkbox"
          name={data}
          value={data}
          onChange={(e)=>{Change(e,index)}}
        />
        <label htmlFor={data}>{data}</label>
      </div>
    </div>
  );
}
let checked = {}
export function Category({ data }) {
  const {dispatch} = useDataContext()
  function handleChange(e,index) {
     checked[e.target.value] =e.target.checked
     dispatch({type:"FILTER",payload:{category:"CATAEGORY",data:checked}})
    }
  
  return (
    <>
      <h4>Category</h4>
      <div className="category-list">
        {data.map((element, index) => (
          
          <CheckBox
            data={element}
            Change={handleChange}
            index={index}
            key={index}
          />
        ))}
      </div>
    </>
  );
}
