import React from 'react';
import './Nav.css';

const Nav = ({toggleMenu, showMenu}) => {
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">Space<strong>Falcons</strong></p>
          <a href onClick={toggleMenu} className={showMenu === 'active' ? 'menu-button active' : 'menu-button'}><span />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
