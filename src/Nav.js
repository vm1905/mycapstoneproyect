import logo from './img/logosm.png';

function Nav() {
  return (
      <div class="top-bar">
    <img src={logo} alt="" class="topbar-logo" />
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <ion-icon name="menu-outline"></ion-icon>
      </label>
      <ul>
        <li><a href="">home</a></li>
        <li><a href="">about</a></li>
        <li><a href="">menu</a></li>
        <li><a href="">reservations</a></li>
        <li><a href="">order online</a></li>
        <li><a href="">log in</a></li>
      </ul>
    </nav>
  </div>

  );
}

export default Nav;