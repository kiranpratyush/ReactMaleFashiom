import React from 'react';


function CheckBox(data) {
  console.log(data)
  return (

    <div className='category-list' key ={Math.random()}>
    <div  >
      <input type="checkbox" name={data.category} value={data.category} />
      <label htmlFor={data.category}>{data.category}</label>
    </div>
    </div>
    
  );
}
export function Category({data}) {
  return (
  <>
  <h4>Category</h4>
  <div className='category-list'>{data.map((element) => CheckBox(element))}</div>
  </>
  )
  
}
