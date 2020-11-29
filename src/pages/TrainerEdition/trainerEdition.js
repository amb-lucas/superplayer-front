import React, { useState } from "react";

import TrainerPreview from "./Preview";

import "./styles.css";

const TrainerEditionPage = ({
  trainerRole = "",
  trainerIntro = "",
  classTitle = "",
  teach = "",
  forPlayers = "",
  price = "",
  perPrice = "",
  classInfo = "",
  handleUpdateData,
}) => {
  const [trainerRoleValue, setTrainerRoleValue] = useState(trainerRole);
  const handleChangeRole = (e) => {
    setTrainerRoleValue(e.target.value);
  };

  const [trainerIntroValue, setTrainerIntroValue] = useState(trainerIntro);
  const handleChangeIntro = (e) => {
    setTrainerIntroValue(e.target.value);
  };

  const [classTitleValue, setClassTitleValue] = useState(classTitle);
  const handleChangeTitle = (e) => {
    setClassTitleValue(e.target.value);
  };

  const [teachValue, setTeachValue] = useState(teach);
  const handleTeach = (e) => {
    setTeachValue(e.target.value);
  };

  const [forPlayersValue, setForPlayersValue] = useState(forPlayers);
  const handleForPlayers = (e) => {
    setForPlayersValue(e.target.value);
  };

  const [priceValue, setPriceValue] = useState(price);
  const handlePrice = (e) => {
    setPriceValue(e.target.value);
  };

  const [perPriceValue, setPerPriceValue] = useState(perPrice);
  const handlePerPrice = (e) => {
    setPerPriceValue(e.target.value);
  };

  const [classInfoValue, setClassInfoValue] = useState(classInfo);
  const handleClassInfo = (e) => {
    setClassInfoValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      trainerRoleValue,
      trainerIntroValue,
      classTitleValue,
      teachValue,
      forPlayersValue,
      priceValue,
      perPriceValue,
      classInfoValue,
    };

    handleUpdateData(data);
  };

  const [openPreview, setOpenPreview] = useState(false);
  const handleOpenPreview = () => {
    setOpenPreview(true);
  };
  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  return (
    <div id="trainer-edit-page">
      <div className="page-inside">
        {openPreview ? (
          <TrainerPreview
            title={trainerRoleValue}
            intro={trainerIntroValue}
            teaching={teachValue}
            forPlayers={forPlayersValue}
            price={priceValue}
            costPer={perPriceValue}
            train={classInfoValue}
            closePreview={handleClosePreview}
          />
        ) : (
          <form onSubmit={handleFormSubmit}>
            <h2 className="title">Configuração da Página de Treinador</h2>
            <div className="fieldset-bg">
              <fieldset className="primary-data">
                <legend>Dados primários</legend>

                <label htmlFor="trainerRole">Título do treinador</label>
                <br />
                <input
                  id="trainerRole"
                  required="required"
                  type="text"
                  placeholder="Ex: Coach de LoL"
                  onChange={(e) => handleChangeRole(e)}
                  defaultValue={trainerRoleValue}
                ></input>
                <br />

                <label>Apresentação do treinador</label>
                <br />
                <textarea
                  id="trainerIntro"
                  required="required"
                  type="text"
                  placeholder="Sobre você e sua experiência com o jogo"
                  onChange={(e) => handleChangeIntro(e)}
                  defaultValue={trainerIntroValue}
                ></textarea>
              </fieldset>
            </div>

            <div className="fieldset-bg">
              <fieldset className="class-data">
                <legend>Sobre seu treino</legend>

                <div className="class-title-field">
                  <label htmlFor="classTitle">Título do treino</label>
                  <br />
                  <input
                    id="classTitle"
                    required="required"
                    type="text"
                    placeholder="Ex: Dominando Jungle"
                    onChange={(e) => handleChangeTitle(e)}
                    defaultValue={classTitleValue}
                  ></input>
                  <br />
                </div>

                <div className="box-row">
                  <div>
                    <label htmlFor="teach">Eu ensino</label>
                    <br />
                    <input
                      id="teach"
                      required="required"
                      type="text"
                      placeholder="Nome do jogo"
                      onChange={(e) => handleTeach(e)}
                      defaultValue={teachValue}
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="forPlayers">Para jogadores</label>
                    <br />
                    <input
                      id="forPlayers"
                      required="required"
                      type="text"
                      placeholder="Ex: Iniciantes"
                      onChange={(e) => handleForPlayers(e)}
                      defaultValue={forPlayersValue}
                    ></input>
                  </div>
                </div>

                <div className="box-row">
                  <div>
                    <label htmlFor="price">Eu cobro (em reais)</label>
                    <br />
                    <input
                      id="price"
                      required="required"
                      type="number"
                      placeholder="Ex: 50"
                      onChangeCapture={(e) => handlePrice(e)}
                      defaultValue={priceValue}
                    ></input>
                  </div>
                  <div>
                    <label htmlFor="pricePer">por</label>
                    <br />
                    <input
                      id="pricePer"
                      required="required"
                      type="text"
                      placeholder="Ex: sessão"
                      onChange={(e) => handlePerPrice(e)}
                      defaultValue={perPriceValue}
                    ></input>
                  </div>
                </div>

                <label htmlFor="classInfo">Metodologia do treino</label>
                <br />
                <textarea
                  id="classInfo"
                  required="required"
                  type="text"
                  placeholder="Sobre o que você ensina e sua metodologia"
                  onChange={(e) => handleClassInfo(e)}
                  defaultValue={classInfoValue}
                ></textarea>
              </fieldset>
            </div>

            <div className="end-row">
              <div className="white-box render-preview-box">
                <h2>Parece bom?</h2>
                <h2>Visualize a página!</h2>
                <button onClick={handleOpenPreview}>Ver prévia</button>
              </div>

              <div className="white-box publish-page-box">
                <h2>Está pronto?</h2>
                <h2>Publique já sua página!</h2>
                <button type="submit">Publicar página</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default TrainerEditionPage;
