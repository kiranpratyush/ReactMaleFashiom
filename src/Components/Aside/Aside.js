import React, { useEffect,useState } from 'react';
import './style.css';
import { useDataContext } from '../../Contexts/DataContext';
import { Category } from '../Category/Category';
import { SortByPrice } from '../Filter/SortByPrice';
import { Slider } from '../Filter/PriceRange';
export function Aside() {
  const {state,dispatch} = useDataContext()
  const [isCleared,setCleared] = useState(false)
  console.log("I am running",isCleared)
  useEffect(()=>{isCleared?dispatch({type:"CLEAR_FILTER"}):console.log("i")},[isCleared])
  return (
    <aside className='side-bar'>
      <button onClick ={()=>setCleared(true)}>Clear filter</button>
      <Category data={state.categories} clear ={isCleared}/>
      <SortByPrice  clear ={isCleared}/>
      <Slider clear ={isCleared} />
    </aside>
  );
}
