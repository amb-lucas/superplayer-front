import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const LoginPage = ({ handleLoginSubmit, loading }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSeePasswordChange = () => {
    if (seePassword) setSeePassword(false);
    else setSeePassword(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    handleLoginSubmit(data);
  };

  return (
    <div className="page-inside">
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className={loading ? "loader" : ""}></div>

        <fieldset id="login-fieldset">
          <legend>Login</legend>

          <label htmlFor="email">E-mail</label>
          <br />
          <input
            id="email"
            type="email"
            required="required"
            onChange={(e) => handleEmailChange(e)}
          ></input>
          <br />

          <label htmlFor="password">Senha</label>
          <br />
          <input
            id="password"
            required="required"
            type={seePassword ? "text" : "password"}
            onChange={(e) => handlePasswordChange(e)}
          ></input>
          <br />

          <input
            type="checkbox"
            id="showpassword"
            onChange={handleSeePasswordChange}
          />
          <label htmlFor="showpassword">Mostrar senha?</label>
        </fieldset>

        <div className="bottom-box">
          <button type="submit">Entrar</button>
          <Link to="/register">Ainda não é usuário? Cadastre-se</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
