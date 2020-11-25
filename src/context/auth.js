import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const isAuthenticated = () => {
  return localStorage.getItem("tokens") !== null;
};

export const GetToken = () => {
  if (!isAuthenticated()) return null;
  return JSON.parse(localStorage.getItem("tokens")).token;
};

export const GetAuthData = () => {
  return JSON.parse(localStorage.getItem("tokens"));
};
