import Nav from './Nav.js';
import logo from './assets/logo.svg';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;
