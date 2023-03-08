import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"


function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/products/1">STORE</Link>
        <Link to="/">PRIVACY</Link>
        <Link to="/">ACCESSIBILITY</Link>
        <Link to="/">TERMS</Link>
      </div>
      <div className="footer-h4">
      <h4>GOLF le FLEUR* REGISTERED 2023</h4>
      <h4>ALL RIGHTS RESERVED</h4>
      </div>
    </div>
  );
}

export default Footer;