import React from 'react';
import './Cartpage.css';
import { WishList } from '../Components/Cart/WishList';
import { Header } from '../Components/Header/Header';
import { useCartContext } from '../Contexts/CartContext';
import { Empty } from '../Components/EmptyNotification/Empty';
export function WishListPage() {
  const { state } = useCartContext();
  return (
    <>
      <Header />
      <div className="cartpage__header">
        <span>My wishList</span>
      </div>
      <div className={
          state.wishList.length === 0
            ? 'cartcontainer cartempy__middle'
            : 'cartcontainer'
        }>
        <div>
          {state.wishList.length>0?state.wishList.map((element) => (
            <WishList
              key={element.id}
              itemName={element.itemName}
              price={element.price}
              quantity={element.quantity}
              id={element.id}
            />
          )):<Empty title ="Nothing in wishList"/>}
        </div>
      </div>
    </>
  );
}
