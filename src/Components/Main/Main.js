import React from "react"
import "./style.css"
import {Card} from "../Card/Card.js"
import {HeroContainer} from "../HeroContainer/Hero.js"
import { useDataContext } from "../../Contexts/DataContext"

export function Main({children})
{   const {state} = useDataContext()
    const data = state.data
    return (
        <>
        <HeroContainer />
        <h3 className="best-seller">Best-Seller</h3>
        <div className ="catalog-container">
        {
            data.map(element=><Card itemName={element.itemName} price ={element.price} rating ={element.rating} image ={element.image} id ={element.id}/>)
        }
        </div>
        </>
    )
}