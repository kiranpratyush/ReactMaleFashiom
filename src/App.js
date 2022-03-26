import React from 'react';
import {Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ShopPage from './Pages/ShopPage';
export default function App() {

  return (

    <Routes>
      <Route path ="/" element ={<HomePage/>}></Route>
      <Route path ="/shop" element ={<ShopPage/>}></Route>
    
    </Routes>
  )

}
