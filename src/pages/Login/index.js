import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

import Api from "../../services/api";
import { isAuthenticated, useAuth } from "../../context/auth";

import LoginPage from "./login";

const LoginIndex = (props) => {
  const { login } = useAuth();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const referer = props?.location?.state?.referer || "/";

  const handleLoginSubmit = async (data) => {
    setLoading(true);

    try {
      await Api.post("authenticate", data).then((res) => {
        if (res.status === 200) {
          login(res.data);
          setLoading(false);
          history.push(referer);
        }
      });
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.status === 401) {
        alert("Usuário ou senha incorretos");
      } else {
        alert("Erro do servidor, tente novamente mais tarde.");
      }
    }
  };

  return isAuthenticated() ? (
    <Redirect to={referer} />
  ) : (
    <LoginPage handleLoginSubmit={handleLoginSubmit} loading={loading} />
  );
};

export default LoginIndex;
