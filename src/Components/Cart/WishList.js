import React from 'react';
import './cart.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { ImageContainer,useCartContext ,useAuthContext} from '../../export';

export function WishList({ id, itemName, price, image }) {
  const { dispatch } = useCartContext();
  const [user] = useAuthContext()
  function handleMoveToCart() {
    dispatch({ type: 'MOVE_TO_CART', payload: { id,user:user.user.uid } });
  }
  function handleRemoveWishList() {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: { id,user:user.user.uid } });
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
