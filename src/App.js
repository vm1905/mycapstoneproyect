import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage.js';
import Booking from './components/Booking.js';
import Login from './components/Login.js';
import { Routes, Route } from 'react-router-dom';
import ScrollToTopBtn from './components/ScrollToTopBtn.js';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/#about" element={<Homepage />} />
        <Route path='/#specials' element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ScrollToTopBtn />
    </>
  );
}

export default App;
