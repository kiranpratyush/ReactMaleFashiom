import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './export';
import { ShopPage } from './export';
import { SignInPage } from './export';
import { CartPage } from './export';
import { WishListPage } from './export';
import { RequireAuth } from './export';
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
