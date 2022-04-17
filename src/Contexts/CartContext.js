import React, { createContext, useContext, useEffect, useReducer } from 'react';
import {
  getCart,
  setCart,
  getWishList,
  setWishList,
  useAuthContext,
} from '../export';
import { deleteCart, deleteWishList } from '../getData';
const CartContext = createContext();

function reducerfn(previousState, action) {
  switch (action.type) {
    case 'INITIALIZE_DATA':
      return {
        ...previousState,
        data: [ ...action.data],
      };
    case 'INITIALIZE_WISHLIST':
      return {
        ...previousState,
        wishList: [ ...action.data],
      };
    case "EMPTY_CART":
      return {
        ...previousState,data:[],wishList:[]
      }
    case 'ADD_TO_CART':
      if (action.payload.user) {
        setCart(action.payload.user, action.payload.data[0]);
      }

      return {
        ...previousState,
        data: [...previousState.data, ...action.payload.data],
      };

    case 'ADD_TO_WISHLIST':
      if (action.payload.user) {
        setWishList(action.payload.user, action.payload.data[0]);
      }

      return {
        ...previousState,
        wishList: [...previousState.wishList, ...action.payload.data],
      };
    case 'MOVE_TO_WISHLIST':
      const wishListdata = previousState.data.filter(
        (element) => element.id === action.payload.id
      );
      setWishList(action.payload.user, wishListdata[0]);
      const cartData = previousState.data.filter(
        (element) => element.id !== action.payload.id
      );
      console.log(wishListdata);
      return {
        ...previousState,
        wishList: [...previousState.wishList, ...wishListdata],
        data: [...cartData],
      };
    case 'MOVE_TO_CART':
      const cartDataFromWishList = previousState.wishList.filter(
        (element) => element.id === action.payload.id
      );
      setCart(action.payload.user, cartDataFromWishList[0]);
      const remainingWishListData = previousState.wishList.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...previousState,
        wishList: remainingWishListData,
        data: [...previousState.data, ...cartDataFromWishList],
      };
    case 'REMOVE_FROM_CART':
      console.log('i am running');
      deleteCart(action.payload.user, action.payload.id);
      const data = previousState.data.filter(
        (element) => element.id !== action.payload.id
      );
      return { ...previousState, data };
    case 'REMOVE_FROM_WISHLIST':
      deleteWishList(action.payload.user, action.payload.id);
      const remainingWishListDatanew = previousState.wishList.filter(
        (element) => element.id !== action.payload.id
      );
      return { ...previousState, wishList: remainingWishListDatanew };
    case 'INCREMENT_QUANTITY':
      const dataToBeIncremented = previousState.data.map((element) =>
        element.id === action.payload.id
          ? { ...element, quantity: element.quantity + 1 }
          : element
      );
      return { ...previousState, data: dataToBeIncremented };
    case 'DECREMENT_QUANTITY':
      const dataToBeDecremented = previousState.data.map((element) =>
        element.id === action.payload.id && element.quantity > 1
          ? { ...element, quantity: element.quantity - 1 }
          : { ...element }
      );
      return { ...previousState, data: dataToBeDecremented };

    default:
      return { ...previousState };
  }
}

function useCartContext() {
  const { state, dispatch } = useContext(CartContext);
  return { state, dispatch };
}

function CartContextProvider({ children }) {
  const [user] = useAuthContext();
  const [state, dispatch] = useReducer(reducerfn, {
    data: [],
    wishList: [],
  });
  useEffect(() => {
    if (!user.user) {
      return;
    }
    getCart(user.user.uid).then((arr) =>
      dispatch({ type: 'INITIALIZE_DATA', data: arr })
    );
    getWishList(user.user.uid).then((arr) =>
      dispatch({ type: 'INITIALIZE_WISHLIST', data: arr })
    );
  }, [user]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { useCartContext, CartContextProvider };
