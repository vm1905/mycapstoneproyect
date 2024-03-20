import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import BookingImage from '../images/book.jpg';
import Footer from './Footer';

function Welcome() {
  const location = useLocation();
  const username = location.state?.username || ''; // Access username from location state

  return (
    <>
        <header className="booking-header">
                <img src={BookingImage} alt="Book a table" className="booking-image" />
            </header>
        <section className="reservation-section">
            <h2>Welcome {username}!</h2>
            <Link className="button" to="/booking-page">Reserve a Table</Link>
        </section>
        <Footer />
    </>
    );
}

export default Welcome;