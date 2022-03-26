import React from 'react';
import logo from '../../Assets/logo.png';
import './Header.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useCartContext } from '../../Contexts/CartContext';
export function Header() {
  const { state } = useCartContext();
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
            <a href="https://www.google.com" class="btn-link">
              Home
            </a>
            <a href="https://www.google.com">Shop</a>
          </nav>
          <nav className="second-nav">
            <button className="cart__button">
              <LocalMallOutlinedIcon />
              <span>{state.data.length}</span>
            </button>
            <button className="cart__button">
              <FavoriteBorderOutlinedIcon />
              <span>{state.wishList.length}</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
