import React, { useState } from "react";

import Dropzone from "../../components/dropzone";

import "./styles.css";

const RegisterPage = ({ handleRegister }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
    if (!seePassword) setSeePassword(true);
    else setSeePassword(false);
  };

  const [selectedFile, setSelectedFile] = useState();
  const handleUploadImage = (image) => {
    setSelectedFile(image);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      profileImage: selectedFile,
    };

    handleRegister(data);
  };

  return (
    <div className="page-inside">
      <form className="register-form" onSubmit={handleSubmitForm}>
        <fieldset id="about-me">
          <legend>Dados</legend>

          <div>
            <label htmlFor="name">Nome</label>
            <br />
            <input
              id="name"
              type="text"
              required="required"
              onChange={(e) => handleNameChange(e)}
            ></input>
            <br />

            <label htmlFor="email">E-mail</label>
            <br />
            <input
              id="email"
              type="email"
              onChange={(e) => handleEmailChange(e)}
            ></input>
            <br />

            <label htmlFor="password">Senha</label>
            <br />
            <input
              id="password"
              type={seePassword ? "text" : "password"}
              required="required"
              onChange={(e) => handlePasswordChange(e)}
            ></input>
            <br />

            <input
              type="checkbox"
              id="showpassword"
              onChange={handleSeePasswordChange}
            />
            <label htmlFor="showpassword">Mostrar senha?</label>
          </div>

          <div>
            <label>Imagem de Perfil</label>
            <br />
            <Dropzone onFileUploaded={(img) => handleUploadImage(img)} />
          </div>
        </fieldset>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
