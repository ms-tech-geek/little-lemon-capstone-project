import Nav from './Nav.js';
import logo from './assets/logo.svg';

const Header = () => {
  const navMenu = [
    {
      name: 'Home',
      url: '#',
    },
    {
      name: 'About',
      url: '#',
    },
    {
      name: 'Menu',
      url: '#',
    },
    {
      name: 'Reservations',
      url: '#',
    },
    {
      name: 'Order Online',
      url: '#',
    },
    {
      name: 'Login',
      url: '#',
    },
  ];
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav navMenu={navMenu} />
    </header>
  );
};

export default Header;
