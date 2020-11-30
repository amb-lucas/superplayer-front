import React from "react";
import { Redirect, useHistory } from "react-router-dom";

import { isAuthenticated } from "../../context/auth";
import Api from "../../services/api";
import ReadFileAsync from "../../utils/readFileAsync";

import RegisterPage from "./register";

const RegisterIndex = () => {
  const history = useHistory();

  const handleRegister = async ({ name, email, password, profileImage }) => {
    const image = profileImage ? await ReadFileAsync(profileImage) : undefined;

    const formData = {
      name,
      email,
      password,
      profileImage: image,
      trainer: false,
    };

    try {
      await Api.post("register", formData).then((res) => {
        if (res.status === 200) {
          alert("Usuário cadastrado com sucesso!");
          history.push("/");
        }
      });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("Email já cadastrado, tente com um diferente.");
      } else {
        alert("Erro no servidor, por favor tente novamente mais tarde.");
      }
    }
  };

  return isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <RegisterPage handleRegister={handleRegister} />
  );
};

export default RegisterIndex;
