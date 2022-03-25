import "./Quantity.css"
import React from "react"

export function Quantity({quantity})
{
    return(
        <div className="quantity">
            <button className="quantity__button">+</button>
            <input type="text" value ={quantity} className="quantity__input" />
            <button className="quantity__button">-</button>
        </div>
    )
}