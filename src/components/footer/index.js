import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="sp-footer">
      <div className="footer-inside">
        <Link to="/">
          <p className="footer-primary">SuperPlayer</p>
        </Link>

        <p className="footer-secondary">Copyright {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
