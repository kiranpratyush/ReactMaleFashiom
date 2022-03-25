
import React from "react"
import "./ImageContainer.css"


export function ImageContainer({image,title})
{


    return(
        <div className="imagecontainer">
            <img src ={image} className="imagecontainer__image" />
            <p>title</p>
        </div>
    )
}