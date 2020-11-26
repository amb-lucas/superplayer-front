import React, { useState } from "react";

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

  return (
    <div className="page-inside">
      <div id="trainer-edit-page">
        <h2 className="title">Configuração da Página de Treinador</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="fieldset-bg">
            <fieldset className="primary-data">
              <legend>Dados primários</legend>

              <label htmlFor="trainerRole">Título do treinador</label>
              <br />
              <input
                id="trainerRole"
                required="required"
                type="text"
                placeholder="Coach do LoL da UFPE Virtus"
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
                placeholder="olá, me chamo fernando"
                onChange={(e) => handleChangeIntro(e)}
                defaultValue={trainerIntroValue}
              ></textarea>
            </fieldset>
          </div>

          <div className="fieldset-bg">
            <fieldset className="class-data">
              <legend>Sobre seu treino</legend>

              <div className="class-title-field">
                <label htmlFor="classTitle">Título da aula</label>
                <br />
                <input
                  id="classTitle"
                  required="required"
                  type="text"
                  placeholder="Descomplicando o Lol"
                  onChange={(e) => handleChangeTitle(e)}
                  defaultValue={classTitle}
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
                    placeholder="League of Legends"
                    onChange={(e) => handleTeach(e)}
                    defaultValue={teach}
                  ></input>
                </div>

                <div>
                  <label htmlFor="forPlayers">Para jogadores</label>
                  <br />
                  <input
                    id="forPlayers"
                    required="required"
                    type="text"
                    placeholder="De todos os níveis"
                    onChange={(e) => handleForPlayers(e)}
                    defaultValue={forPlayers}
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
                    placeholder="60"
                    onChangeCapture={(e) => handlePrice(e)}
                    defaultValue={price}
                  ></input>
                </div>
                <div>
                  <label htmlFor="pricePer">por</label>
                  <br />
                  <input
                    id="pricePer"
                    required="required"
                    type="text"
                    placeholder="hora"
                    onChange={(e) => handlePerPrice(e)}
                    defaultValue={perPrice}
                  ></input>
                </div>
              </div>

              <label htmlFor="classInfo">Metodologia da aula</label>
              <br />
              <textarea
                id="classInfo"
                required="required"
                type="text"
                placeholder="Na aula vamos treinar muito"
                onChange={(e) => handleClassInfo(e)}
                defaultValue={classInfo}
              ></textarea>
            </fieldset>
          </div>

          <div className="end-row">
            <div className="white-box render-preview-box">
              <h2>Parece bom?</h2>
              <h2>Visualize a página!</h2>
              <button>Ver prévia</button>
            </div>

            <div className="white-box publish-page-box">
              <h2>Está pronto?</h2>
              <h2>Publique já sua página!</h2>
              <button type="submit">Publicar página</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainerEditionPage;
