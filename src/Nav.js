const Nav = () => {
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
    <nav>
      <ul>
        {navMenu.map((navItem, index) => (
          <li key={index}>{navItem.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
