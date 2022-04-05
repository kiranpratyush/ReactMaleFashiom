import "./Quantity.css"
import React from "react"
import { useCartContext } from "../../Contexts/CartContext"
export function Quantity({id,quantity})
{   const {dispatch} = useCartContext()
    function handleIncrement()
    {
        dispatch({type:"INCREMENT_QUANTITY",payload:{id}})
    }
    function handleDecrement()
    {
        dispatch({type:"DECREMENT_QUANTITY",payload:{id}})
    }
    return(
        <div className="quantity">
            <button className="quantity__button" onClick ={handleIncrement}>+</button>
            <input type="text" value ={quantity} className="quantity__input" readOnly />
            <button className="quantity__button" onClick ={handleDecrement}>-</button>
        </div>
    )
}