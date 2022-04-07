import React from 'react';
import { Link } from 'react-router-dom';
import emptyIcon from '../../Assets/empty.svg';
import './Empty.css';
export function Empty({ title }) {
  return (
    <div className="empty__container">
      <h2>{title}</h2>
      <div className="empty__imagecontainer">
        <img src={emptyIcon} alt="empty cart" />
      </div>
      <Link to="/shop">Go shopping</Link>
    </div>
  );
}
