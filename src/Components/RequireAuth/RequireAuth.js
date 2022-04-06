import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../export';

export function RequireAuth({ children }) {
  const [state, _] = useAuthContext();
  console.log(state);
  if (!state) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
}
