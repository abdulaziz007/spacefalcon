import React from 'react';
import SocialLinks from '../SocialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <h3>شكراً لزيارتك</h3>
        <p>© {new Date().getFullYear()} عبدالعزيز البيضاني.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
