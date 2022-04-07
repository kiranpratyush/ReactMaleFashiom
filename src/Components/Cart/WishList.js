import React from 'react';
import './cart.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { ImageContainer,useCartContext } from '../../export';

export function WishList({ id, itemName, price, image }) {
  const { dispatch } = useCartContext();
  function handleMoveToCart() {
    dispatch({ type: 'MOVE_TO_CART', payload: { id } });
  }
  function handleRemoveWishList() {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id } });
  }
  return (
    <div className="cart">
      <ImageContainer title={itemName} image={image} />
      <span>${price}</span>
      <button className="cart__close" onClick={handleMoveToCart}>
        <ShoppingCartOutlinedIcon />
      </button>
      <button className="cart__close" onClick={handleRemoveWishList}>
        <CloseIcon className="close__icon" />
      </button>
    </div>
  );
}
