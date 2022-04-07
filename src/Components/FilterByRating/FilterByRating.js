import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './FilterByRating.css';

import { useDataContext } from '../../export';

export function FilterByRating() {
  const { dispatch } = useDataContext();
  function handleClick(ratings) {
    console.log(ratings);
    dispatch({ type: 'FILTER_BY_RATINGS', payload: { value: ratings } });
  }
  return (
    <>
      <h4>Filter By Ratings</h4>
      <div className="filter__rating">
        <button onClick={() => handleClick(3)} value={3}>
          3 <StarIcon className="staricon" /> and above
        </button>
        <button onClick={() => handleClick(4)}>
          4 <StarIcon className="staricon" /> and above
        </button>
        <button onClick={() => handleClick(5)}>
          5 <StarIcon className="staricon" />
        </button>
      </div>
    </>
  );
}
