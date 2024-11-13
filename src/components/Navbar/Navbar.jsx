import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../Images/logo.jpg";
import "./Navbar.css";
import { LuGoal } from "react-icons/lu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={LOGO} alt="Flutter Logo" />
        {/* <span>Flutter</span> */}
      </div>

      <div className={`navbar__menu ${menuOpen ? "navbar__menu--open" : ""}`}>
        {/* Close menu when a link is clicked */}
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Vision
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      <div className="navbar__actions">
        <a
          href="https://wa.me/+8615072486774?text=Hello,%20I'm%20interested%20in%20getting%20started!"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__get-started"
        >
          Donate Now
        </a>
        <button className="navbar__toggle" onClick={toggleMenu}>
          <span role="img" aria-label="Menu Icon">
            ☰
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
