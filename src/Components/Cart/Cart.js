import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './cart.css';
import {
  ImageContainer,
  useCartContext,
  Quantity,
  deleteCart,
  useAuthContext,
  setWishList
} from '../../export';

export function Cart({ id, itemName, price, image, quantity }) {
  const { state,dispatch } = useCartContext();
  const [ authState ] = useAuthContext();

  function handleMoveToWhishlist() {
    const data =  state.data.filter(
      (element) => element.id === id
    );
    console.log(id)
    deleteCart(authState.user.uid,id)
    setWishList(authState.user.uid,data[0])
    .then(()=>dispatch({ type: 'MOVE_TO_WISHLIST', payload: {id}}))
    
  }

  function handleRemoveCart() {
    console.log(authState)
    deleteCart(authState.user.uid, id).then(() =>
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
    );
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
