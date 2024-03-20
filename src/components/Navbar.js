import React, {useState} from 'react';
import './Navbar.css';
import Logo from '../images/logosm.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdLogout } from "react-icons/md";
import { HashLink as Link } from 'react-router-hash-link';

function Navbar({ loggedIn, username, onLogout }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="top-bar" id='home'>
      <img src={Logo} alt="Logo" className="topbar-logo" />
      <nav>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><Link smooth to="/" className="nav-item" onClick={handleClick}>home</Link></li>
          <li><Link smooth to="/#about" className='nav-item' onClick={handleClick}>about</Link></li>
          <li><Link smooth to="/#specials" className='nav-item' onClick={handleClick}>menu</Link></li>
          <li><Link smooth to="/booking-page" className='nav-item' onClick={handleClick}>reservations</Link></li>
          <li><Link smooth to="/#specials" className='nav-item' onClick={handleClick}>order online</Link></li>
          {loggedIn ? ( // If logged in, display username instead of login
            <li><span className='nav-item logged-user'  onClick={onLogout} title='Click to log out'>{username} <MdLogout className='logout-icon' /></span></li>
          ) : (
            <li><Link smooth to="/login" className='nav-item' onClick={handleClick} title='Click to log in'>login</Link></li>
          )}
        </ul>
      </nav>
      <div className="hamburguer" onClick={handleClick}>
        {click ? (<FaTimes size={30} />) : (<FaBars size={30}/>)} 
      </div>
    </div>
  );
}

export default Navbar;