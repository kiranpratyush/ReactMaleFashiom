import React from 'react';
import './style.css';
import { Rating } from '../Rating/Rating';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useCartContext } from '../../Contexts/CartContext';
export function Card({ id, itemName, price, image, rating }) {
  const { state, dispatch } = useCartContext();
  console.log(state);
  const isPresentInCart = state.data.some((element) => element.id === id);
  const isPresentInWishList = state.wishList.some(
    (element) => element.id === id
  );
  console.log(isPresentInWishList);
  function handleAddToCart() {
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: { data: [{ id, itemName, price, image ,quantity:1 }] },
    });
  }
  function handleAddToWishList() {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: { data: [{ id, itemName, price, image }] },
    });
  }
  return (
    <div className="card-animated">
      <div className="card-imgwrapper">
        <img src={image} alt="shirt" />
      </div>
      <button className="btn btn-default icon" onClick={handleAddToWishList} disabled={isPresentInWishList}>
        {isPresentInWishList ? (
          <FavoriteOutlinedIcon className="hearticon" />
        ) : (
          <FavoriteBorderOutlinedIcon className ="heartoutlineicon" />
        )}
      </button>
      <div className="card-animated-body">
        <button className="btn btn-link cart" onClick={handleAddToCart}>
          {isPresentInCart ? 'Go to cart' : 'Add to cart'}
        </button>

        <h5>{itemName}</h5>
        <h4>${price}</h4>
        <Rating ratings={rating} />
      </div>
    </div>
  );
}
