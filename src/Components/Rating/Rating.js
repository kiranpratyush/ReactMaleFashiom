import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';
import "./style.css"

export function Rating({ ratings }) {
  return (
    <div>
      {[...Array(ratings)].map((_, i) => {
        return <StarIcon key={i} className="ratings" />;
      })}
      {[...Array(5 - ratings)].map((e, i) => {
        return <StarOutlineIcon key={Math.random()} className ="ratings" />;
      })}
    </div>
  );
}
