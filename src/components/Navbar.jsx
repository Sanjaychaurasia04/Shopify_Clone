import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import cart from '../assets/cart.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logoimage">
        <img src={logo} alt="logo" />
        <p>Shopify</p>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className='list'>
          <li onClick={() => { setMenu("home"); closeMobileMenu(); }}>
            <Link to="/">Home</Link>
            {menu === "home" && <hr />}
          </li>
          <li onClick={() => { setMenu("mens"); closeMobileMenu(); }}>
            <Link to="/mens">Mens</Link>
            {menu === "mens" && <hr />}
          </li>
          <li onClick={() => { setMenu("womens"); closeMobileMenu(); }}>
            <Link to="/womens">Womens</Link>
            {menu === "womens" && <hr />}
          </li>
          <li onClick={() => { setMenu("kids"); closeMobileMenu(); }}>
            <Link to="/kids">Kids</Link>
            {menu === "kids" && <hr />}
          </li>
        </ul>
        <div className="nav-actions">
          <Link to="/login" className="login-btn" onClick={closeMobileMenu}>
            Login
          </Link>
          <Link to="/cart" className="cart">
            <img src={cart} alt="cart" />
            <div className="zero">0</div>
          </Link>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
