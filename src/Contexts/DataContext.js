import React, { useContext, useEffect, useReducer } from 'react';
import { createContext } from 'react';
import { getData } from '../getData';
import { reducerfn } from './reducerfn';
const dataContext = createContext();

function ContextProvider({ children }) {
  function setData(arr) {
    arr.forEach((element) => {
      dispatch({ type: 'SET_DATA', payload: element[0] });
    });
  }
  const [state, dispatch] = useReducer(reducerfn, { data: [],filteredData:[],categories:["shoe","shirt","glass"],filter:{category :[],price:"NONE",range:0}});
  useEffect(() => {
    getData().then((arr) => setData(arr));
  }, []);
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
