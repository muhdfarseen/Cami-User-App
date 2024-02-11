import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider defaultColorScheme="auto">
        <Router> 
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
