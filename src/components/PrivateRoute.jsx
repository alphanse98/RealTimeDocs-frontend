import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated by looking for the token
  const token = sessionStorage.getItem('authToken');

  // If no token, redirect to the login page
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // If token exists, allow access to the route
  return children;
};

export default PrivateRoute;
