import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import { SignInPage } from './Pages/SignInPage/SignInPage';
import { CartPage } from './Pages/CartPage';
import { WishListPage } from './Pages/WishListPage';
import { RequireAuth } from './Components/RequireAuth/RequireAuth';
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
