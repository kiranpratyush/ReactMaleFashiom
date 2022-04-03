import React from 'react';
import './Cartpage.css';
import { Cart } from '../Components/Cart/Cart';
import { Checkout } from '../Components/Checkout/Checkout';
import { Header } from '../Components/Header/Header';
import { useCartContext } from '../Contexts/CartContext';
import { Empty } from '../Components/EmptyNotification/Empty';
export function CartPage() {
  const { state } = useCartContext();
  return (
    <>
      <Header />
      <div className="cartpage__header">
        <span>My shopping Cart</span>
      </div>
      <div
        className={
          state.data.length === 0
            ?  'cartempy__middle'
            : 'cartcontainer'
        }
      >
        <div>
          {state.data.length > 0 ? (
            state.data.map((element) => (
              <Cart
                key={element.id}
                itemName={element.itemName}
                price={element.price}
                quantity={element.quantity}
                id={element.id}
              />
            ))
          ) : (
            <Empty title ="It is empty here :(" />
          )}
        </div>
        {state.data.length > 0 ? <Checkout /> : null}
      </div>
    </>
  );
}
