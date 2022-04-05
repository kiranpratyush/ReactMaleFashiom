import React from 'react';
import { Card } from '../Card/Card';
import './style.css';
import { useDataContext } from '../../Contexts/DataContext';
export function ContentContainer() {
  const { state } = useDataContext();
  const data = state.filteredData.length>0?state.filteredData:state.data
  console.log(data)
  return (
    <>
      <div className="content-container">
        {data.map(({id,itemName,price,image,rating}) => (
          <Card
            id ={id}
            itemName={itemName}
            price={price}
            key={id}
            image={image}
            rating ={rating}
          />
        ))}
      </div>
    </>
  );
}
