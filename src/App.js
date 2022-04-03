import React from 'react';
import {Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ShopPage from './Pages/ShopPage';
import { CartPage } from './Pages/CartPage';
import { WishListPage } from './Pages/WishListPage';
import { Empty } from './Components/EmptyNotification/Empty';
export default function App() {

  return (

    <Routes>
      <Route path ="/" element ={<HomePage/>}></Route>
      <Route path ="/shop" element ={<ShopPage/>}></Route>
      <Route  path="/cart" element ={<CartPage />}></Route>
      <Route path ="/wishlist" element ={<WishListPage/>}></Route>
      <Route path ="/empty" element ={<Empty />}></Route>
    </Routes>
  )

}
