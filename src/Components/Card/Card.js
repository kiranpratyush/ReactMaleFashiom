import React from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useAuthContext } from '../../export';
import './style.css';
import { Rating, useCartContext, useAuthContext, setCart } from '../../export';
import { useNavigate, useLocation } from 'react-router-dom';
export function Card({ id, itemName, price, image, rating }) {
  const [authState] = useAuthContext();
  console.log(authState)
  const navigate = useNavigate();
  const location = useLocation();
  const { state, dispatch } = useCartContext();
  const navigate = useNavigate()
  const [user]= useAuthContext()
  const isPresentInCart = state.data.some((element) => element.id === id);
  const isPresentInWishList = state.wishList.some(
    (element) => element.id === id
  );
  function handleAddToCart() {
    console.log(authState.user);
    if (!authState.user) {
      navigate('/signin', { state: { path: location.pathname } });
      return;
    }
    const data = [{ id, itemName, price, image, quantity: 1 }];
    setCart(authState.user.uid, data[0]).then(() =>
      dispatch({
        type: 'ADD_TO_CART',
        payload: { data },
      })
    );

  }
  function handleAddToWishList() {
    if (!authState.user) {
      navigate('/signin', { state: { path: location.pathname } });
    }
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
