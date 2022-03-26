import React from 'react';
import './cart.css';
import { ImageContainer } from './ImageContainer';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Quantity } from './Quantity';
import sample from '../../Assets/img5.webp';
export function Cart() {
  return (
    <div className="cart">
      <ImageContainer image={sample} title="Spice Potato" />
      <Quantity quantity={2} />
      <span>$20.30</span>
      <button className='cart__close'><FavoriteBorderOutlinedIcon /></button>
      <button className="cart__close">
        <CloseIcon className="close__icon" />
      </button>
    </div>
  );
}
