import React, { useContext, createContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
const AuthContext = createContext();

function reducerfn(previousState, action) {
  switch (action.type) {
    case 'SET_USER':
      const newStateSetUser = { ...previousState };
      newStateSetUser['user'] = action.user;
      newStateSetUser['error'] = action.error && null;
      return newStateSetUser;
    default:
      return previousState;
  }
}
function useAuthContext() {
  const { state, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: 'SET_USER', user, error: null });
      } else {
        dispatch({ typr: 'SET_USER', user: null, error: null });
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return [state, dispatch];
}
function AuthContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducerfn, {
    user: null,
    error: null,
  });
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuthContext, AuthContextProvider };
