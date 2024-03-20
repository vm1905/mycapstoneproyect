import { HashLink as Link } from 'react-router-hash-link';
import FooterLogo from '../images/logov.jpg';
import './Footer.css';


function Footer() {
    return(
        <footer>
        <img src={FooterLogo} alt="" className="footer-logo" />
        <nav>
          <ul>
            <li>about us</li>
            <li><Link smooth to="/#home">home</Link></li>
            <li><Link smooth to="/#about">about</Link></li>
            <li><Link smooth to="/#specials">menu</Link></li>
            <li><Link smooth to="/booking-page">reservations</Link></li>
            <li><Link smooth to="/#specials">order online</Link></li>
            <li><Link smooth to="/login">login</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>contact us</li>
            <li>123 Main St, Chicago</li>
            <li>(555) 555-5555</li>
            <li className='email-item'>littlelemon@email.com</li>
            <li><Link smooth to="/documentation#top">Documentation</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>follow us</li>
            <li><a href="https://www.facebook.com/?locale=es_LA" target='blank'>Facebook</a></li>
            <li><a href="https://www.instagram.com/" target='blank'>Instragram</a></li>
            <li><a href="https://ar.pinterest.com/" target='blank'>Pinterest</a></li>
          </ul>
        </nav>
      </footer>
    );
}

export default Footer;