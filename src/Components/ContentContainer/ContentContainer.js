import React from 'react';
import { Card } from '../Card/Card';
import './style.css';

const data = [
  { itemName: 'Coat', Price: '23' },
  { itemName: 'Coat', Price: '23' },
  { itemName: 'Coat', Price: '23' },
  { itemName: 'Coat', Price: '23' },
  { itemName: 'Coat', Price: '23' },
  { itemName: 'Coat', Price: '23' },
  { itemName: 'Coat', Price: '23' },
  { itemName: 'Coat', Price: '23' },
];
export function ContentContainer({ children }) {
  return (
    <>
      <div className="content-container">
        {data.map((element) => (
          <Card itemName={element.itemName} Price={element.Price} />
        ))}
      </div>
    </>
  );
}
