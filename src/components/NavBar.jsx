import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showLogo, setShowLogo] = useState(false);

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
            <Link to="/portfolio">Portfolio</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/about">About</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to="/upload">Upload</Link>
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
