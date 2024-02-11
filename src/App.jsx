import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import RedirectIfNoUserData from './RedirectIfNoUserData';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import PasswordReset from './Pages/PasswordReset';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">
        <BrowserRouter>
          <RedirectIfNoUserData />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Password Reset" element={<PasswordReset />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
