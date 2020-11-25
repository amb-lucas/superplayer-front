import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import Api from "../../services/api";
import { isAuthenticated, useAuth } from "../../context/auth";

import LoginPage from "./login";

const LoginIndex = () => {
  const { login } = useAuth();
  const history = useHistory();

  const handleLoginSubmit = async (data) => {
    await Api.post("authenticate", data).then((res) => {
      if (res.status === 200) {
        login(res.data);
        history.push("/");
      } else if (res.status === 401) {
        alert("Erro no usuário ou senha");
      } else {
        alert("Um erro inesperado aconteceu, tente novamente mais tarde");
      }
    });
  };

  return isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <LoginPage handleLoginSubmit={handleLoginSubmit} />
  );
};

export default LoginIndex;
