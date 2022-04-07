import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage,ShopPage,SignInPage,CartPage,WishListPage,RequireAuth } from './export';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/shop" element={<ShopPage />}></Route>
      <Route path="/signin" element={<SignInPage />}></Route>
      <Route
        path="/cart"
        element={
          <RequireAuth>
            <CartPage />
          </RequireAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequireAuth>
            <WishListPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
