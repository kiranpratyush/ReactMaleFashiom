import React from 'react';
import { Card } from '../Card/Card';
import './style.css';
import { useDataContext } from '../../Contexts/DataContext';
export function ContentContainer() {
  const { state } = useDataContext();
  const data = state.filteredData.length>0?state.filteredData:state.data
  return (
    <>
      <div className="content-container">
        {data.map((element) => (
          <Card
            id ={element.id}
            itemName={element.itemName}
            price={element.price}
            key={element.id}
            image={element.image}
            rating ={element.rating}
          />
        ))}
      </div>
    </>
  );
}
