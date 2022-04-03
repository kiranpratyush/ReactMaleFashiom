import React, { useContext, createContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { signIn, signUp } from '../fireBaseAuth';

const AuthContext = createContext();

function reducerfn(previousState, action) {
  switch (action.type) {
    case 'SET_USER':
      const newStateSetUser = { ...previousState };
      newStateSetUser['user'] = action.user;
      newStateSetUser['error'] = action.error && null;
      return newStateSetUser;
    case 'SIGN_IN':
      const newStateSignIn = { ...previousState };
      signIn(action.email, action.password)
        .then((user) => (newStateSignIn['user'] = user))
        .catch((error) => (newStateSignIn['error'] = error));
      return newStateSignIn;
    case 'SIGN_UP':
      const newStateSignUp = { ...previousState };
      signUp(action.email, action.password)
        .then((user) => (newStateSignUp['user'] = user))
        .catch((error) => (newStateSignUp['error'] = error));
      return newStateSignUp;
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
  }, []);
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
