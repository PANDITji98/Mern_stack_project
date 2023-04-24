import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
            <span className="nav-logo">Booking App</span>
            <div className="nav-items">
                <button className="nav-button">Register</button>
                <button className="nav-button">Login</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
