import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectIfNoUserData() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('studentData');
    if (!userData) {
      navigate('/'); // Redirect to login if user data does not exist
    }
  }, [navigate]);

  return null;
}

export default RedirectIfNoUserData;
