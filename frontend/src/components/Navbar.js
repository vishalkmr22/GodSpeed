import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L19.5 12h-1.5v7h-3v-6H9v6H6v-7H4.5L12 4.84z"/>
            </svg>
            GodSpeed
          </Link>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#product" className="nav-link" onClick={() => setIsOpen(false)}>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link" onClick={() => setIsOpen(false)}>
                Meet the Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className={`nav-auth ${isOpen ? 'active' : ''}`}>
          <Link to="/login" className="nav-link login-btn" onClick={() => setIsOpen(false)}>
            Log in
          </Link>
          <Link to="/signup" className="nav-link signup-btn" onClick={() => setIsOpen(false)}>
            Sign up
          </Link>
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
