import React from 'react';
import { Card } from '../Card/Card';
import './style.css';
import { useDataContext } from '../../Contexts/DataContext';
export function ContentContainer() {
  const { state } = useDataContext();
  const data = state.filter ? state.filteredData : state.data;
  return (
    <>
      <div className="content-container">
        {data.map((element) => (
          <Card
            itemName={element.itemName}
            price={element.price}
            key={element.id}
            image={element.image}
          />
        ))}
      </div>
    </>
  );
}
