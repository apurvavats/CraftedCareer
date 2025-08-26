import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect,
    logout,
    user,
  } = useAuth0();

  // 🔥 State for hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Oops... {error.message}</div>;
  }

  return (
    <header className="nav-wrap">
      <nav className="nav">
        {/* Brand */}
        <a href="/" className="brand">
          <img src="/logo.jpg" alt="Logo" className="logo" />
          <span className="brand-name">CraftedCareer</span>
        </a>

        {/* Hamburger (mobile only) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links + Auth section */}
        <div className={`links ${isOpen ? "active" : ""}`}>
          <ul className="menuIcon">
            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact us</NavLink>
            </li>
            <li>
              <NavLink to="/feedback" onClick={() => setIsOpen(false)}>Feedback</NavLink>
            </li>
          </ul>

          {/* Auth section */}
          {!isAuthenticated ? (
            <button className="btn" onClick={() => loginWithRedirect()}>
              Login
            </button>
          ) : (
            <div className="auth-info">
              <span className="username">Hi, {user.name}</span>
              <button
                className="btn logout"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
