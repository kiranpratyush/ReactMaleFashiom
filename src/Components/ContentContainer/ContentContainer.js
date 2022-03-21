import React from 'react';
import { Card } from '../Card/Card';
import './style.css';
import {  useDataContext } from '../../Contexts/DataContext';
export function ContentContainer({ children }) {
  const {state,dispatch} = useDataContext()
  
  const data = state.data
  console.log(data)
  return (
    <>
      <div className="content-container">
        {data.map((element) => (
          <Card itemName={element.itemName} Price={element.Price} key ={element.id} />
        ))}
      </div>
    </>
  );
}
