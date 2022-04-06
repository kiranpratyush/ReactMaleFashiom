import React from 'react';
import './Cartpage.css';
import { WishList } from '../export';
import { Header } from '../export';
import { useCartContext } from '../export';
import { Empty } from '../export';
export function WishListPage() {
  const { state } = useCartContext();
  return (
    <>
      <Header />
      <div className="cartpage__header">
        <span>My wishList</span>
      </div>
      <div
        className={
          state.wishList.length === 0
            ? 'cartcontainer cartempy__middle'
            : 'cartcontainer'
        }
      >
        <div>
          {state.wishList.length > 0 ? (
            state.wishList.map((element) => (
              <WishList
                key={element.id}
                itemName={element.itemName}
                price={element.price}
                quantity={element.quantity}
                id={element.id}
              />
            ))
          ) : (
            <Empty title="Nothing in wishList" />
          )}
        </div>
      </div>
    </>
  );
}
