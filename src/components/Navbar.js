import React, {useState} from 'react';
import './Navbar.css';
import Logo from '../images/logosm.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="top-bar">
      <img src={Logo} alt="Logo" className="topbar-logo" />
      <nav>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><Link smooth to="/" className="nav-item">home</Link></li>
          <li><Link smooth to="/#about" className='nav-item'>about</Link></li>
          <li><Link smooth to="/#specials" className='nav-item'>menu</Link></li>
          <li><Link smooth to="/booking" className='nav-item'>reservations</Link></li>
          <li><Link smooth to="/#specials" className='nav-item'>order online</Link></li>
          <li><Link smooth to="/login" className='nav-item'>login</Link></li>
        </ul>
      </nav>
      <div className="hamburguer" onClick={handleClick}>
        {click ? (<FaTimes size={30} />) : (<FaBars size={30}/>)}
      </div>
    </div>
  );
}

export default Navbar;