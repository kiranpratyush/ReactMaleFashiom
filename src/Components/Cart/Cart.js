import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './cart.css';
import { ImageContainer,useCartContext,Quantity } from '../../export';

export function Cart({ id, itemName, price, image, quantity }) {
  const { dispatch } = useCartContext();
  console.log(image);
  function handleMoveToWhishlist() {
    dispatch({ type: 'MOVE_TO_WISHLIST', payload: {  id } });
  }

  function handleRemoveCart() {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  }
  return (
    <div className="cart">
      <ImageContainer image={image} title={itemName} />
      <Quantity quantity={quantity} id={id} />
      <span>${price}</span>
      <button className="cart__close" onClick={handleMoveToWhishlist}>
        <FavoriteBorderOutlinedIcon />
      </button>
      <button className="cart__close" onClick={handleRemoveCart}>
        <CloseIcon className="close__icon" />
      </button>
    </div>
  );
}
