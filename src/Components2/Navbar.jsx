import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <Link
          to="/"
          onClick={closeMenu}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src={logo} alt="logo" className="logo-img" />
          <h1 className="logo-text">Bangalore Bakery</h1>
        </Link>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/products">Cakes</Link>
        </li>

        <li onClick={closeMenu}>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li className="dropdown">
          <span
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: "pointer" }}
          >
            Pages ▼
          </span>

          <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <li onClick={closeMenu}>
              <Link to="/about">About</Link>
            </li>

            <li onClick={closeMenu}>
              <Link to="/contact">Contact</Link>
            </li>

            <li onClick={closeMenu}>
              <Link to="/gallery">Gallery</Link>
            </li>

            <li onClick={closeMenu}>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;