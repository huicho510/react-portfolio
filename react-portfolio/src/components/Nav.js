import React from "react";
import "../styles/Nav.css";

const Nav = () => {
  return (
    
      <header>
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <a href="./main" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="./about" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="./work" className="nav-link">
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a href="./contact" className="nav-link">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        
      </header>
    
  );
};

export default Nav;
