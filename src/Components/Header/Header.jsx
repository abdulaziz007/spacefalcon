import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="welcome-section">
      <div className="horizon" />
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vyzMmMBsjsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="buttons">
          <a href="#about">intro</a>
          <a href="#projects" className="cta">
           the project
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
