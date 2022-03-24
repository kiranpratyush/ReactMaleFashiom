import React, { useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { getData } from '../getData';
const dataContext = createContext();
function reducerfn(previousState, action) {
  switch (action.type) {
    case 'setData':
      return {
        ...previousState,
        data: [
          ...previousState.data,
          { id: action.payload.id, itemName: action.payload.title, price: action.payload.price,image:action.payload.image,category:action.payload.category },
        ],
      };
    default:
      return;
  }
}


function ContextProvider({ children }) {
  function setData(arr)
  {
      arr.forEach(element => {
        dispatch({type:"setData",payload:element[0]})    
      });
  }
  const [state, dispatch] = useReducer(reducerfn, {data:[]});
  useEffect(()=>
  {
    getData()
    .then(arr=>setData(arr))
    
  },[])
  return (
    <dataContext.Provider value={{ state, dispatch }}>
      {children}
    </dataContext.Provider>
  );
}

function useDataContext() {
  const { state, dispatch } = useContext(dataContext);
  return { state, dispatch };
}

export { ContextProvider, useDataContext };
