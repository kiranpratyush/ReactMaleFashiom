import React from 'react';
import { Rating } from '../Rating/Rating';
import "./FilterByRating.css"

export function FilterByRating() {
  return (
    <>
    <h4>Filter By Ratings</h4>
    <div className='filter__rating'>
      <button><Rating ratings={3} /></button>
      <button><Rating ratings={4} /></button>
      <button><Rating ratings={5} /></button>
    </div>
    </>
  );
}
