import React from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useAuthContext } from '../../export';
import './style.css';
import { Rating,useCartContext } from '../../export';
import { useNavigate } from 'react-router-dom';
export function Card({ id, itemName, price, image, rating }) {
  const { state, dispatch } = useCartContext();
  const navigate = useNavigate()
  const [user]= useAuthContext()
  const isPresentInCart = state.data.some((element) => element.id === id);
  const isPresentInWishList = state.wishList.some(
    (element) => element.id === id
  );
  console.log(isPresentInWishList);
  function handleAddToCart() {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { data: [{ id, itemName, price, image, quantity: 1 }], user:user.user.uid},
    });
  }
  function handleAddToWishList() {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      payload: { data: [{ id, itemName, price, image,quantity:1 }],user:user.user.uid },
    });
  }
  return (
    <div className="card-animated">
      <div className="card-imgwrapper">
        <img src={image} alt="shirt" />
      </div>
      <button
        className="btn btn-default icon"
        onClick={handleAddToWishList}
        disabled={isPresentInWishList}
      >
        {isPresentInWishList ? (
          <FavoriteOutlinedIcon className="hearticon" />
        ) : (
          <FavoriteBorderOutlinedIcon className="heartoutlineicon" />
        )}
      </button>
      <div className="card-animated-body">
        <button
          className="btn btn-link addtocart"
          onClick={!isPresentInCart?handleAddToCart:()=>navigate("/cart")}
        >
          {isPresentInCart ? 'Go to cart' : 'Add to cart'}
        </button>

        <h5>{itemName}</h5>
        <h4>${price}</h4>
        <Rating ratings={rating} />
      </div>
    </div>
  );
}
