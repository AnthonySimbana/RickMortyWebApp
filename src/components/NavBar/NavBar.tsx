import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de importar tu archivo CSS

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to={"/"} className="nav-logo">
        <p className='logo'>Rick and Morty</p>
      </Link>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to={"/characters"} className="nav-link" onClick={closeMenu}>
            Personajes
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="nav-link" onClick={closeMenu}>
            Sobre mi
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link" onClick={closeMenu}>
            Contáctame
          </Link>
        </li>
      </ul>
    </nav>
  );
};
