import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin");
    }
  }, [navigate]);

  const isAuthenticated = localStorage.getItem("adminAuthenticated");
  
  if (!isAuthenticated) {
    return null; // Don't render anything while redirecting
  }

  return children;
} 