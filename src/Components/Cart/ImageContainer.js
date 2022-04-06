
import React from "react"
import "./ImageContainer.css"


export function ImageContainer({title,image})
{


    return(
        <div className="imagecontainer">
            <img src ={image} className="imagecontainer__image" alt ="Item"/>
            <p>{title}</p>
        </div>
    )
}