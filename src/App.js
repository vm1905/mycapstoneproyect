import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage.js';
import BookingPage from './components/BookingPage.js';
import Login from './components/Login.js';
import ScrollToTopBtn from './components/ScrollToTopBtn.js';
import Confirm from './components/Confirm.js';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/#about" element={<Homepage />} />
        <Route path='/#specials' element={<Homepage />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/confirm' element={<Confirm />} />
      </Routes>
      <ScrollToTopBtn />
    </>
  );
}

export default App;
