import React, { useState } from "react";
import { Link } from "react-router-dom";

import { GetAuthData } from "../../context/auth";
import Dropzone from "../../components/dropzone";

import "./styles.css";

const ProfilePage = ({ name, photo, email, isTrainer, updateProfile }) => {
  const [nameInput, setNameInput] = useState(name);
  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const [selectedFile, setSelectedFile] = useState();
  const handleUploadImage = (image) => {
    setSelectedFile(image);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name: nameInput, photo: selectedFile });
  };

  return (
    <div className="page-inside">
      <div id="profile-page">
        <form className="update-profile-form" onSubmit={handleFormSubmit}>
          <fieldset id="basic-data">
            <legend>Dados Básicos</legend>

            <div>
              <label htmlFor="name">Nome</label>
              <br />
              <input
                id="name"
                type="text"
                required="required"
                defaultValue={name}
                onChange={(e) => handleNameChange(e)}
              ></input>
              <br />

              <label htmlFor="email">E-mail</label>
              <br />
              <input
                id="email"
                type="email"
                required="required"
                disabled="disabled"
                defaultValue={email}
              ></input>
              <br />

              <div className="trainer-data">
                <h2>
                  {isTrainer ? "Perfil de Treinador" : "Perfil de Jogador"}
                </h2>
              </div>
            </div>

            <div className="profile-picture">
              <label>Imagem de Perfil</label>
              <br />
              <Dropzone
                defaultFile={photo}
                onFileUploaded={(img) => handleUploadImage(img)}
              />
            </div>
          </fieldset>

          <div className="bottom-box">
            <button type="submit">Atualizar Dados</button>

            {!GetAuthData().user.trainer && (
              <Link to="trainer-edit">
                <h2>{"> "} Deseja configurar um perfil de Treinador?</h2>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
