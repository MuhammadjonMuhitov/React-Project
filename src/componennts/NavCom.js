import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

export const NavCom = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Закрыть меню при клике вне или при изменении маршрута (можно по желанию)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <div className="navbar">
      <nav>
        <div className="nav-logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <h1>MMM</h1>
          </Link>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/catalog" onClick={() => setMenuOpen(false)}>Catalog</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link>
          <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link>
        </div>

        <div className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </div>
  );
};
