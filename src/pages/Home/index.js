import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Tab from "../../components/tab";
import TitleTab from "../../components/titleTab";
import PlayerTab from "../../components/playerTab";

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
    history.push(`/search/${searchInput}`);
  };

  const eTrainersSamples = [
    {
      name: "Yodami",
      photo: process.env.PUBLIC_URL + "/sample-images/yodami.png",
      description: `Olá! Sou Luís Augusto, também conhecido como Yodami.\n
      Jogo League of Legends desde 2013 e tenho 6 anos de experiência jogando competitivamente como Jungle, com main Amumu.\n
      É uma das posições mais complicadas, mas vou lhe ensinar quando gankar, que rotas fazer, como evitar armadilhas e o que se deve ter na build de um Jungle...`,
    },
    {
      name: "Zilde Souto",
      photo: process.env.PUBLIC_URL + "/sample-images/zilde.png",
      description: `Sou Zilde e faço parte do time de League of Legends da UFPE Virtus desde 2017.\n
      Jogo League of Legends competitivamente desde 2015 como Jungle. Meu main é Rek'Sai e sou atualmente o top 1 BR com o campeão.\n
      Vou lhe ensinar quais skills se deve procurar para ser um bom jungle e como identificar as oportunidades para gankar uma lane.`,
    },
    {
      name: "ToBK",
      photo: process.env.PUBLIC_URL + "/sample-images/tobk.png",
      description: `Jogo pelo nome de ToBK e sou o mid titular do time da UFPE Virtus.\n
      Estou nessa posição há 5 anos e jogo principalmente com a Katarina.\n
      Sou bem extrovertido e analítica, o que se reflete nos meus treinos.\n
      Você terá acesso a todo conhecimento necessário para saber o que fazer em cada momento do jogo e poderemos focar no ponto mais importante: Prática.`,
    },
  ];

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

        <div id="meet-the-trainers">
          <TitleTab title="Conheça os eTrainers" />

          {eTrainersSamples.map(({ name, photo, description }, i) => {
            return (
              <PlayerTab
                key={`eTrainer-${i}`}
                name={name}
                photo={photo}
                photoPosition={i % 2 === 0 ? "left" : "right"}
                description={description}
              />
            );
          })}
        </div>

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
