import React from 'react';
import logo from '../../Assets/logo.png';
import './Header.css';

export function Header() {
  return (
    <>
      <header>
        <div className="header-top">
          <p>Free shipping.30-day return or refund guarantee</p>
          <nav>
            <a href="https://www.google.com">SIGN IN</a>
          </nav>
        </div>
        <div className="header-bottom">
          <div className="logo-container">
            <img src={logo} alt="Male Fashion Logo" />
          </div>
          <nav className="first-nav">
            <a href="https://www.google.com" className="btn-link">
              Home
            </a>
            <a href="https://www.google.com">Shop</a>
          </nav>
          <nav className="second-nav">
            <a href="https://www.google.com">WishList</a>
            <a href="https://www.google.com">Add to cart</a>
          </nav>
        </div>
      </header>
    </>
  );q
}
