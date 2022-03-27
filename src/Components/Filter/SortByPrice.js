import React from 'react';
import { useDataContext } from '../../Contexts/DataContext';


export function SortByPrice() {
  const {state,dispatch} = useDataContext()

  return (
    <>
      <form className="category-list">
        <p>Sort By Price</p>
        <div key ="23">
          <input type="radio"  value="LOWTOHIGH" name="sort" checked ={state.filter.price==="ASC"} onChange ={()=>{dispatch({type:"FILTER_BY_SORT",payload:{value:"ASC"}})} }/>
          <label htmlFor="SORTLOWTOHIGH">Low to high</label>
        </div>
        <div key ="24">
          <input type="radio" value="HIGHTOLOW" name="sort" checked={state.filter.price==="DESC"} onChange ={()=>dispatch({type:"FILTER_BY_SORT",payload:{value:"DESC"}})}  />
          <label htmlFor="HIGHTOLOW">High to low</label>
        </div>
      </form>
    </>
  );
}
