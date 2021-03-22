import React from "react";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="/logo192.png"
          alt="logo"
          style={{ height: "32px", width: "32px" }}
        />
      </div>
      <ul className="nav-items">
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <ul className="nav-buttons">
        <li>
          <button className="follow-button">Facebook</button>
        </li>
        <li>
          <button className="message-button">Message</button>
        </li>
      </ul>
    </nav>
  );
}
