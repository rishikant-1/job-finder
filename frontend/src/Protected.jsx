// src/component/Auth/ProtectedRoute.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
