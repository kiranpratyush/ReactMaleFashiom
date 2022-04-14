import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getCart, getWishList ,useAuthContext} from '../export';
const CartContext = createContext();

function reducerfn(previousState, action) {
  switch (action.type) {
    case 'INITIALIZE_DATA':
      console.log("I am running",action.data)
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
      return {
        ...previousState,
        data: [...previousState.data, ...action.payload.data],
      };

    case 'ADD_TO_WISHLIST':
      return {
        ...previousState,
        wishList: [...previousState.wishList, ...action.payload.data],
      };
    case 'MOVE_TO_WISHLIST':
      const wishListdata = previousState.data.filter(
        (element) => element.id === action.payload.id
      );
      const cartData = previousState.data.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...previousState,
        wishList: [...previousState.wishList, wishListdata],
        data: [...cartData],
      };
    case 'MOVE_TO_CART':
      const cartDataFromWishList = previousState.wishList.filter(
        (element) => element.id === action.payload.id
      );
      const remainingWishListData = previousState.wishList.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...previousState,
        wishList: remainingWishListData,
        data: [...previousState.data, ...cartDataFromWishList],
      };
    case 'REMOVE_FROM_CART':
      const data = previousState.data.filter(
        (element) => element.id !== action.payload.id
      );
      return { ...previousState, data };
    case 'REMOVE_FROM_WISHLIST':
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
    console.log(user)
    if (!user.user) {
      return;
    }
    getCart(user.user).then((arr) =>
      dispatch({ type: 'INITIALIZE_DATA', data: arr })
    );
    getWishList(user.user).then((arr) =>
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
