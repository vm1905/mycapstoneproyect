import logo from './img/logosm.png';

function Nav() {
  return (
    <nav className='top-menu'>
      <img src={logo} alt="Logo for Little Lemon" className='logo-sm'></img>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Log in</li>
      </ul>
    </nav>
  );
}

export default Nav;