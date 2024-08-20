import React from 'react';
import "./Header.css";
import logo from "../../assets/ctm.svg";


const Header = () => {
  const navLinks = ["Car insurance"];

    return (
      <div className="car-details-container">
        <header className="car-details-header">
          <img src={logo} alt="Logo" className="logo" />
          <nav aria-label="Main Navigation" className="navigation">
          {navLinks.map((link, index) => (
            <span key={index}>{link}</span>
          ))}
          </nav>
        </header>
      </div>
    );
  };
  
  export default Header;
 