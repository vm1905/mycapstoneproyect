import HeaderImg from './img/restauranfood.jpg';

function Header() {
  return (
    <header>
      <div className="left-column">
        <h1 className="header-title">Little Lemon</h1>
        <h2 className="header-subtitle">Chicago</h2>
        <p className="header-text">Lttle Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
        <a href='#' className='reserve-btn'>Reserve a Table</a>
      </div>
      <div className="right-column">
        <img src={HeaderImg} alt="Restaurante food"></img>
        hello
      </div>
    </header>
  );
}

export default Header;

