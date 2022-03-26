import React from 'react';
import { useDataContext } from '../../Contexts/DataContext';


export function SortByPrice() {
  const {dispatch} = useDataContext()

  return (
    <>
      <form className="category-list">
        <h1>Sort By Price</h1>
        <div key ="23">
          <input type="radio" value="LOWTOHIGH" name="sort" onClick ={()=>{dispatch({type:"FILTER",payload:{category:"LOWTOHIGH"}})} }/>
          <label htmlFor="SORTLOWTOHIGH">Low to high</label>
        </div>
        <div key ="24">
          <input type="radio" value="HIGHTOLOW" name="sort" onClick ={()=>dispatch({type:"FILTER",payload:{category:"HIGHTOLOW"}})}  />
          <label htmlFor="HIGHTOLOW">High to low</label>
        </div>
      </form>
    </>
  );
}
