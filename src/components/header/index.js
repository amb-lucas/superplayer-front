import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

import { useAuth, isAuthenticated, GetAuthData } from "../../context/auth";

import "./styles.css";

const Header = () => {
  const history = useHistory();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <header className="sp-header">
      <div className="header-inside">
        <Link to="/">
          <p className="header-primary">SuperPlayer</p>
        </Link>

        {isAuthenticated() ? (
          <div className="auth-greet dropdown">
            <p>Olá, {GetAuthData().user.name}</p>
            <FaCaretDown size={34} />

            <div className="dropdown-content">
              <div className="dropdown-item">
                <Link to="/">Meu Perfil</Link>
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <p className="header-secondary">Entrar</p>
            </Link>
            <Link to="/register">
              <p className="header-secondary">Cadastre-se</p>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
