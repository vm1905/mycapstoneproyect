import { Link } from 'react-router-dom';
import Heroimage from '../images/restauranfood.jpg';
import './Hero.css';

function Hero() {
    return(
        <header className='main-header'>
            <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual
            environment. The restaurant features a locally-sourced menu with daily specials.</p>
            <div className="header-button">
                <Link className="button" to="/booking-page">Reserve a Table</Link>
            </div>
            </div>
            <div className="header-img-wrapper">
                <img src={Heroimage} alt="Food served at Little Lemon" className="header-img" />
            </div>
        </header>
    );
}

export default Hero;