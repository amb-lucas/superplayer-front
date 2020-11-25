import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import Api from "../../services/api";
import { isAuthenticated, useAuth } from "../../context/auth";

import LoginPage from "./login";

const LoginIndex = () => {
  const { login } = useAuth();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (data) => {
    setLoading(true);

    try {
      await Api.post("authenticate", data).then((res) => {
        if (res.status === 200) {
          login(res.data);
          setLoading(false);
          history.push("/");
        }
      });
    } catch (err) {
      setLoading(false);
      if (err.response.status === 401) {
        alert("Usuário ou senha incorretos");
      } else {
        alert("Erro do servidor, tente novamente mais tarde.");
      }
    }
  };

  return isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <LoginPage handleLoginSubmit={handleLoginSubmit} loading={loading} />
  );
};

export default LoginIndex;
