import React from "react"
import "./style.css"
import {Card} from "../Card/Card.js"
import {HeroContainer} from "../HeroContainer/Hero.js"
import { useDataContext } from "../../Contexts/DataContext"
export function Main({children})
{   const {state} = useDataContext()
    return (
        <>
        <HeroContainer />
        <h3 className="best-seller">Best-Seller</h3>
        <div className ="catalog-container">
        {
            state.data.map(({id,itemName,price,image,rating}) => (
                <Card
                  id ={id}
                  itemName={itemName}
                  price={price}
                  key={id}
                  image={image}
                  rating ={rating}
                />
              ))
        }
        </div>
        </>
    )
}