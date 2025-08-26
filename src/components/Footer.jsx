import React from "react";
import "./Footer.css"; // Importing the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-title">CraftedCareer</h2>
          <p className="footer-text">
            Building modern web solutions with simplicity and clarity.  
            Stay connected with us for updates and support.
          </p>
        </div>

        {/* Middle Section (Links) */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/feedback">Feedback</a></li>
          </ul>
        </div>

        {/* Right Section (Contact) */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Get in Touch</h3>
          <p>Email: support@craftedcareer.com</p>
          <p>Phone: +91 6202166141</p>
          <div className="footer-socials">
            <a href="https://github.com/apurvavats"><img src="git.png"></img></a>
            <a href="https://www.linkedin.com/in/apurva-vats-12193b292/"><img src="linked.png"></img></a>
           
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} CraftedCareer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
