import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage.js';
import BookingPage from './components/BookingPage.js';
import LoginForm from './components/LoginForm.js';
import ScrollToTopBtn from './components/ScrollToTopBtn.js';
import Confirm from './components/Confirm.js';
import Documentation from './components/Documentation.js';
import Welcome from './components/Welcome.js';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();


  const handleLogin = (userData) => {
    // Perform login logic here
    setUsername(userData.username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setUsername('');
    setLoggedIn(false);
    navigate("/#home");
  };

  return (
    <>
      <Navbar loggedIn={loggedIn} username={username} onLogout={handleLogout}  />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/#about" element={<Homepage />} />
        <Route path='/#specials' element={<Homepage />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path='/login' element={<LoginForm onLogin={handleLogin} />} />
        <Route path='/confirm' element={<Confirm />} />
        <Route path='/documentation' element={<Documentation />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
      <ScrollToTopBtn />
    </>
  );
}

export default App;
