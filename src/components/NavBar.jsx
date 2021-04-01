import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [showLogo, setShowLogo] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const changeLogo = () => {
    if (window.scrollY >= 460) setShowLogo(true);
    else setShowLogo(false);
  };

  window.addEventListener("scroll", changeLogo);

  return (
    <nav className="navbar">
      <Link to="/" className={showLogo ? "logo-show" : "logo"}>
        <div className="logo-container">
          <img
            src="/images/display picture.jpg"
            alt="logo"
            style={{ height: "32px", width: "32px" }}
          />
          <p>Swapnil Tanzim</p>
        </div>
      </Link>

      <ul className="nav-items">
        <li>
          <div>
            <NavLink
              exact
              className="nav-link"
              activeClassName="nav-link-active"
              to="/"
            >
              Portfolio
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/upload"
            >
              Upload
            </NavLink>
          </div>
        </li>
      </ul>
      <ul className="nav-buttons">
        <li>
          <Link to="/email">
            <button className="follow-button">Message</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
