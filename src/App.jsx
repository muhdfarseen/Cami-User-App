import React, { useEffect } from 'react';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import PasswordReset from './Pages/PasswordReset';
import Profile from './Pages/Profile';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginOrRedirect />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Password Reset" element={<PasswordReset />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

function LoginOrRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      navigate('/'); 
    }
  }, [navigate]);

  return <Login />;
}

export default App;
