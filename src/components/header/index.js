import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
  return (
    <header className="sp-header">
      <div className="header-inside">
        <Link to="/">
          <p className="header-primary">SuperPlayer</p>
        </Link>

        <div>
          <Link to="/login">
            <p className="header-secondary">Entrar</p>
          </Link>
          <Link to="/register">
            <p className="header-secondary">Cadastre-se</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
