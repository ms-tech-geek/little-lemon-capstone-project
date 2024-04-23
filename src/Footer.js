import logo from './assets/logo.svg';
import Nav from './Nav';
import './App.css';

const Footer = () => {
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
    <footer className="container">
      <img src={logo} alt="logo" />
      <div>
        Doormat Navigation
        <Nav navMenu={navMenu} />
      </div>
      <div>
        Contact
        <Nav navMenu={navMenu} />
      </div>
      <div>
        Social Media Nav
        <Nav navMenu={navMenu} />
      </div>
    </footer>
  );
};

export default Footer;
