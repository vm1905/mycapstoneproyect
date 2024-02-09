import logov from './img/logov.jpg';

function Footer() {
  return (
    <footer>
      <img src={logov} alt="logo" className='footer-logo'></img>
      <nav>
        <ul>
          <li>About Us</li>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>Reservations</a></li>
          <li><a href='#'>Order Online</a></li>
          <li><a href='#'>Log in</a></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>Contact Us</li>
          <li><a href='#'>123 Main St, Chicago</a></li>
          <li><a href='#'>555 555.5555</a></li>
          <li><a href='#'>hello@littlelemon.com</a></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>Follow Us</li>
          <li><a href='#'>Facebook</a></li>
          <li><a href='#'>Instagram</a></li>
          <li><a href='#'>Pinterest</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;