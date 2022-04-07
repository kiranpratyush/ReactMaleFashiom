import React from 'react';
import './style.css';
import { Card } from '../../export';
import { HeroContainer ,useDataContext,CategoryHeader} from '../../export';
export function Main({children})
{   const {state} = useDataContext()
    return (
        <>
        <HeroContainer />
        <CategoryHeader />
        <h3 className="best-seller">Best-Seller</h3>
        <div className ="catalog-container">
        {
            state.data.slice(1,5).map(({id,itemName,price,image,rating}) => (
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

