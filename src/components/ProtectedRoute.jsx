import React from 'react';
import { Navigate } from 'react-router-dom';

import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ role, children }) => {
  const token = localStorage.getItem('adminToken')
  if (!token) return <Navigate to="/admin/login" replace />
    

  try {
    const decoded = jwtDecode(token)

    const currentTime = Date.now() / 1000
    if (decoded.exp < currentTime) {
      localStorage.removeItem('adminToken')
      return <Navigate to="/admin/login" replace />
    }

    if (decoded.role !== role) {
      return <Navigate to="/admin/login" replace />
    }

    return children
  } catch (errors) {
    localStorage.removeItem('adminToken')
    return <Navigate to="/admin/login" replace />
  }
}

export default ProtectedRoute;
