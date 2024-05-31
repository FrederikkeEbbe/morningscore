import React, { useState } from 'react';
import '../navbar.scss'; 
import '../../public/logo-horizontal.svg'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo-horizontal.svg" alt="Logo" />
      </div>
      <button className="navbar-menu" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#funktioner">Funktioner</a>
        <a href="#priser">Priser</a>
        <a href="#omos">Om os</a>
        <a href="#preview">Preview</a>
      </div>
      <div className="navbar-buttons">
          <button className="button-thick-outline">Login</button>
          <button className="button-thick-primary">Gratis prøve</button>
        </div>
    </nav>
  );
}

export default Navbar;