import React from 'react';
import SocialLinks from '../SocialLinks';
import './Menu.css';

const Menu = ({showMenu, toggleMenu})=> {
  return (
    <div className={`menu-container ${showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              intro
            </a>
          </li>
          <li>
            <a href="#project-details" onClick={toggleMenu}>
              project details
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              project
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              our experience  
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              references
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Menu;
