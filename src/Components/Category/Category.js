import React from 'react';


function CheckBox(data) {
  return (

    <div className='category-list' key ={Math.random()}>
    <h1>Category</h1>
    <div  >
      <input type="checkbox" name={data.value} value={data.value} />
      <label htmlFor={data.value}>{data.value}</label>
    </div>
    </div>
    
  );
}
export function Category({data}) {
  return <div className='category-list'>{data.map((element) => CheckBox(element))}</div>;
}
