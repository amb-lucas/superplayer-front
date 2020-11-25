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
        }}
      >
        <Routes />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
