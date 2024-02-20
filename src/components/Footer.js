import './Footer.css';
import FooterLogo from '../images/logov.jpg';

function Footer() {
    return(
        <footer>
        <img src={FooterLogo} alt="" class="footer-logo" />
        <nav>
          <ul>
            <li>about us</li>
            <li><a href="">home</a></li>
            <li><a href="">about</a></li>
            <li><a href="">menu</a></li>
            <li><a href="">reservations</a></li>
            <li><a href="">order online</a></li>
            <li><a href="">log in</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>contact us</li>
            <li><a href="">123 Main St, Chicago</a></li>
            <li><a href="">(555) 555-5555</a></li>
            <li><a href="" class="email">littlelemon@email.com</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>follow us</li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instragram</a></li>
            <li><a href="">Pinterest</a></li>
          </ul>
        </nav>
      </footer>
    );
}

export default Footer;