import React from 'react';


function CheckBox(data) {
  return (

    <div className='category-list'>
    <h1>Category</h1>
    <div key ={data.id} >
      <input type="checkbox" name={data.value} value={data.value} />
      <label htmlFor={data.value}>{data.value}</label>
    </div>
    </div>
    
  );
}
export function Category({data}) {
  return <div className='category-list'>{data.map((element) => CheckBox(element))}</div>;
}
