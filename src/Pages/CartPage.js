import React from 'react';
import './Cartpage.css';
import { Cart } from '../export';
import { Checkout } from '../export';
import { Header } from '../export';
import { useCartContext } from '../export';
import { Empty } from '../export';
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
          state.data.length === 0 ? 'cartempty__middle' : 'cartcontainer'
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
                image={element.image}
              />
            ))
          ) : (
            <Empty title="It is empty here :(" />
          )}
        </div>
        {state.data.length > 0 ? <Checkout /> : null}
      </div>
    </>
  );
}
