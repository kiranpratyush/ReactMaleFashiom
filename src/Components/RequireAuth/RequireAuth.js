import React from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { useAuthContext } from '../../Contexts/AuthContext';

export function RequireAuth({ children }) {
  const [state, _] = useAuthContext();
  const location = useLocation()
  console.log(state,location);
  if (!state.user) {
    return <Navigate to="/signin" replace state = {{path:location.pathname}}/>;
  } else {
    return children;
  }
}
