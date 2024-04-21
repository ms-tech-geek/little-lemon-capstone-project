const Nav = ({ navMenu }) => {
  return (
    <nav>
      <ul>
        {navMenu.map((navItem, index) => (
          <li key={index}>
            <a href={navItem.url} key={index}>
              {navItem.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
