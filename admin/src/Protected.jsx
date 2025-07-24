import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Protected({ children }) { 
  
const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default Protected;
