import React, { useContext, useReducer } from "react"
import { createContext } from "react"
const data =[{id:23,itemName:"coat" ,Price:"23"},{id:34,itemName:"Dress" ,Price:"24"}]
const dataContext = createContext()
function reducerfn(previousState,action)
{
    switch(action.type)
    {
        case "setData":
            return {...previousState,data:[...previousState.data,{id:action.id,itemName:action.itemName}]}
        default:
            return
    }
}


function ContextProvider({children})
{   
    const [state,dispatch]= useReducer(reducerfn,{data})
    
    return <dataContext.Provider value ={{state,dispatch}}>
        {children}
    </dataContext.Provider>

}

function useDataContext()
{
    const {state,dispatch} = useContext(dataContext)
    console.log(state)
    return {state,dispatch}
}



export {ContextProvider,useDataContext}