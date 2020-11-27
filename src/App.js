import React, { useState } from "react";

import { AuthContext } from "./context/auth";
import Routes from "./routes";

const App = () => {
  const [authTokens, setAuthTokens] = useState(
    JSON.parse(localStorage.getItem("tokens"))
  );

  const handleLogin = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  const handleUpdate = ({ user }) => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    tokens.user = user;
    localStorage.setItem("tokens", JSON.stringify(tokens));
    setAuthTokens(tokens);
  };

  const handleUpgradeToTrainer = () => {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    tokens.user.trainer = true;
    localStorage.setItem("tokens", JSON.stringify(tokens));
    setAuthTokens(tokens);
  };

  const handleLogout = () => {
    localStorage.removeItem("tokens");
    setAuthTokens();
  };

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          authTokens,
          login: handleLogin,
          logout: handleLogout,
          update: handleUpdate,
          upgrade: handleUpgradeToTrainer,
        }}
      >
        <Routes />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
