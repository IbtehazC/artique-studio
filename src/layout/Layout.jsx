import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div className="main">
      <Profile />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
