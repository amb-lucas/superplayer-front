import React, { useState } from "react";

import TitleTab from "../../components/titleTab";
import TrainerCard from "../../components/trainerCard";

import "./styles.css";

function SearchPage(props) {
  const [searchInput, setSearchInput] = useState("");
  const [queryValue, setQueryValue] = useState(
    props.match.params.query ? props.match.params.query : ""
  );

  const handleChangeInput = (value) => {
    setSearchInput(value);
  };

  const handleClickSearch = () => {
    setQueryValue(searchInput);
    // remake query
  };

  const queryResponseSample = {
    total: 2,
    trainers: [
      {
        name: "Yodami",
        title: "Coach de League of Legends",
        photo: process.env.PUBLIC_URL + "/sample-images/yodami.png",
        description: "League of Legends Jungle, para todos os níveis",
        id: "1",
      },
      {
        name: "Zilde Souto",
        title: "Jungle da UFPE Virtus",
        photo: process.env.PUBLIC_URL + "/sample-images/zilde.png",
        description: "Aprenda a gankar  com o Top 1 Rek'Sai BR",
        id: "2",
      },
      {
        name: "Yodami",
        title: "Coach de League of Legends",
        photo: process.env.PUBLIC_URL + "/sample-images/yodami.png",
        description: "League of Legends Jungle, para todos os níveis",
        id: "3",
      },
      {
        name: "Zilde Souto",
        title: "Jungle da UFPE Virtus",
        photo: process.env.PUBLIC_URL + "/sample-images/zilde.png",
        description: "Aprenda a gankar  com o Top 1 Rek'Sai BR",
        id: "4",
      },
      {
        name: "Yodami",
        title: "Coach de League of Legends",
        photo: process.env.PUBLIC_URL + "/sample-images/yodami.png",
        description: "League of Legends Jungle, para todos os níveis",
        id: "5",
      },
      {
        name: "Zilde Souto",
        title: "Jungle da UFPE Virtus",
        photo: process.env.PUBLIC_URL + "/sample-images/zilde.png",
        description: "Aprenda a gankar  com o Top 1 Rek'Sai BR",
        id: "6",
      },
    ],
  };

  return (
    <div className="search-head">
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
        </div>

        <div id="search-results">
          <TitleTab title="eTrainers encontrados" />

          <div className="trainers-list">
            {queryResponseSample.trainers.map(
              ({ name, photo, title, description, id }, i) => {
                return (
                  <TrainerCard
                    key={`trainer-${i}`}
                    name={name}
                    title={title}
                    photo={photo}
                    description={description}
                    id={id}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
