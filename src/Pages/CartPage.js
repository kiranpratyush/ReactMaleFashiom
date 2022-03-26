import React from 'react';
import './Cartpage.css';
import { Cart } from '../Components/Cart/Cart';
import { Checkout } from '../Components/Checkout/Checkout';
import { Header } from '../Components/Header/Header';
import { useCartContext } from '../Contexts/CartContext';
export function CartPage() {
  const {state} = useCartContext()
  return (
    <>
      <Header />
      <div className='cartpage__header'><span>My shopping Cart</span></div>
      <div className="cartcontainer">
        <div>
          {
            state.data.map(element=><Cart key={element.id} itemName={element.itemName} price={element.price} quantity ={element.quantity} id ={element.id}/>)
          }
          
        </div>
        <Checkout />
      </div>
    </>
  );
}
