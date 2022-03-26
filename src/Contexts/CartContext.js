import React ,{createContext,useContext,useReducer} from "react"


const CartContext = createContext()

function reducerfn(previousState,action)
{
    switch(action.type)
    {
        case "ADD_TO_CART":
            return {...previousState,data:[...previousState.data,...action.payload.data]}
        case "REMOVE_FROM_CART":
            return {...previousState}
        
        case "ADD_TO_WISHLIST":
            return {...previousState,wishList:[...previousState.wishList,...action.payload.data]}
        
        default:
            return {...previousState}
    }
}


function useCartContext()
{
    const {state,dispatch} = useContext(CartContext)
    return {state,dispatch}
}
function CartContextProvider({children})
{
    const [state,dispatch] = useReducer(reducerfn,{data:[],wishList:[]})
    return <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
}

export {useCartContext,CartContextProvider}