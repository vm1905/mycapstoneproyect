import HeaderImg from './img/restauranfood.jpg';

function Header() {
  return (
    <header>
    <div>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual
      environment. The restaurant features a locally-sourced menu with daily specials.</p>
      <div class="header-button">
        <a href="" class="button">reserve a table</a>
      </div>
    </div>
    <div class="header-img-wrapper">
      <img src={HeaderImg} alt="" class="header-img" />
    </div>
  </header>
  );
}

export default Header;

