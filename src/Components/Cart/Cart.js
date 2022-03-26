import React from 'react';
import './cart.css';
import { ImageContainer } from './ImageContainer';
import { useCartContext } from '../../Contexts/CartContext';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Quantity } from './Quantity';
import sample from '../../Assets/img5.webp';
export function Cart({id,itemName,price,image,quantity}) {
 const {dispatch} = useCartContext()
 function handleMoveToWhishlist()
 {dispatch({type:"MOVE_TO_WISHLIST",payload:{data:[{id}]}})
 }

 function handleRemoveCart()
 {
     dispatch({type:"REMOVE_FROM_CART",payload:{id}})
 }
  return (
    <div className="cart">
      <ImageContainer image={image||sample} title={itemName} />
      <Quantity quantity={quantity} id ={id} />
      <span>${price}</span>
      <button className='cart__close' onClick ={handleMoveToWhishlist}><FavoriteBorderOutlinedIcon /></button>
      <button className="cart__close" onClick ={handleRemoveCart}>
        <CloseIcon className="close__icon" />
      </button>
    </div>
  );
}
