import React from "react"
import "./style.css"
import {Card} from "../Card/Card.js"
import {HeroContainer} from "../HeroContainer/Hero.js"
const data =[{itemName:"coat" , price:"$19.2"},{itemName:"coat" , price:"$19.2"},{itemName:"coat" , price:"$19.2"},{itemName:"coat" , price:"$19.2"},{itemName:"coat" , price:"$19.2"},{itemName:"coat" , price:"$19.2"},{itemName:"coat" , price:"$19.2"}]

export function Main({children})
{
    return (
        <>
        <HeroContainer />
        <h3 className="best-seller">Best-Seller</h3>
        <div className ="catalog-container">
        {
            data.map(element=><Card itemName={element.itemName} Price ={element.price}/>)
        }
        </div>
        </>
    )
}