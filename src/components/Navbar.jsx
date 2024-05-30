import React, { useState } from 'react';
import '../navbar.scss'; 


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <button className="navbar-menu" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#funktioner">Funktioner</a>
        <a href="#priser">Priser</a>
        <a href="#omos">Om os</a>
        <a href="#preview">Preview</a>
        <div className="navbar-buttons">
          <button className="btn">Login</button>
          <button className="btn">Gratis prøve</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;