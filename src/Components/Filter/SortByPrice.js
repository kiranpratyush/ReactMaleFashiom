import React from 'react';

export function SortByPrice() {
  return (
    <>
      <form className="category-list">
        <h1>Sort By Price</h1>
        <div key ="23">
          <input type="radio" value="LOWTOHIGH" name="sort" />
          <label htmlFor="LOWTOHIGH">Low to high</label>
        </div>
        <div key ="24">
          <input type="radio" value="HIGHTOLOW" name="sort" />
          <label htmlFor="HIGHTOLOW">High to low</label>
        </div>
      </form>
    </>
  );
}
