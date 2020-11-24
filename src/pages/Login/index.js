import React from "react";

import Api from "../../services/api";

import LoginPage from "./login";

const LoginIndex = () => {
  const handleLoginSubmit = (data) => {
    Api.post("authenticate", data).then((res) => {
      console.log(res);
    });
  };

  return <LoginPage handleLoginSubmit={handleLoginSubmit} />;
};

export default LoginIndex;
