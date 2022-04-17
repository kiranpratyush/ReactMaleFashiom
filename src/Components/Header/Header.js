import React from 'react';
import logo from '../../Assets/logo.png';
import { NavLink } from 'react-router-dom';
import './Header.css';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useCartContext, useAuthContext, signOutUser } from '../../export';
import { Link } from 'react-router-dom';
export function Header() {
  const { state ,dispatch:cartDispatch} = useCartContext();
  const [authState, dispatch] = useAuthContext();
  function handleSignOutUser() {
    signOutUser()
      .then(() => {
        dispatch({ type: 'SET_USER', user: null });
        cartDispatch({type:"EMPTY_CART"})
      })
      .catch((error) => dispatch({ type: 'SET_USER', error }));
  }
  return (
    <>
      <header>
        <div className="header-top">
          <p>Free shipping.30-day return or refund guarantee</p>
          <nav>
            {authState.user ? (
              <button onClick={handleSignOutUser}>SIGN OUT</button>
            ) : (
              <Link to="/signin">SIGN IN</Link>
            )}
          </nav>
        </div>
        <div className="header-bottom">
          <div className="logo-container">
            <img src={logo} alt="Male Fashion Logo" />
          </div>
          <nav className="first-nav">
            <NavLink to="/" className="btn-link">
              Home
            </NavLink>
            <NavLink to="/shop" className="btn-link">
              Shop
            </NavLink>
          </nav>
          <nav className="second-nav">
            <NavLink to="/cart" className="cart__button">
              <LocalMallOutlinedIcon />
              <span>{authState.user?state.data.length:0}</span>
            </NavLink>
            <NavLink to="/wishlist" className="cart__button">
              <FavoriteBorderOutlinedIcon />
              <span>{authState.user?state.wishList.length:0}</span>
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
