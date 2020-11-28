import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Tab from "../../components/tab";
import TitleTab from "../../components/titleTab";
import MeetTrainers from "./MeetTrainers";

import JoystickIcon from "../../assets/icons/joystick.svg";
import DoubleArrowIcon from "../../assets/icons/double-arrow.svg";
import HeadsetIcon from "../../assets/icons/headset.svg";

import "./styles.css";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChangeInput = (value) => {
    setSearchInput(value);
  };

  const history = useHistory();
  const handleClickSearch = () => {
    history.push(`/search?term=${searchInput}`);
  };

  return (
    <div className="head">
      <div className="page-inside">
        <div className="top-home">
          <h1 className="title">Treine com os melhores</h1>

          <div className="search-bar">
            <input
              onChange={(e) => handleChangeInput(e.target.value)}
              className="search-game-input"
              placeholder="Insira nome do jogo"
            />
            <button onClick={handleClickSearch}>Buscar Treinadores</button>
          </div>

          <div className="join-us">
            <p>Joga competitivamente?</p>
            <Link to="/">{">"} Junte-se a nós!</Link>
          </div>
        </div>

        <MeetTrainers />

        <div id="who-are-we">
          <TitleTab title="Quem somos?" />

          <p>
            Nós somos uma equipe apaixonada por jogos, por isso o SuperPlayer: a
            plataforma que promove a <strong>conexão</strong> entre{" "}
            <strong>jogadores</strong> interessados em avançar suas habilidades
            com os melhores <strong>treinadores</strong>, que estão dispostos a
            lhe ajudar a alcançar <strong>o próximo nível</strong>.
          </p>

          <Tab>
            <div className="icons-col">
              <img src={JoystickIcon} alt="gamers icon" />
              <h3>JOGADORES</h3>
            </div>

            <img src={DoubleArrowIcon} alt="connection icon" />

            <div className="icons-col">
              <img src={HeadsetIcon} alt="eTrainers icon" />
              <h3>TREINADORES</h3>
            </div>
          </Tab>

          <div className="icons-expl">
            <p>
              Ajudar os jogadores a alcançar o próximo nível é nosso objetivo.
              Estamos na torcida pela sua evolução.
            </p>
            <p>
              E-trainers são como chamamos os jogadores especialistas que estão
              se disponibilizando a treinar e ajudar os outros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
