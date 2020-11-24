import React, { useState } from "react";

import TitleTab from "../../components/titleTab";
import TrainerCard from "../../components/trainerCard";

import "./styles.css";

const SearchPage = ({
  queryValue,
  queryLoading,
  handleNewQuery,
  queryResponse,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChangeInput = (value) => {
    setSearchInput(value);
  };

  const handleClickSearch = () => {
    handleNewQuery(searchInput);
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
              defaultValue={queryValue}
            />
            <button onClick={handleClickSearch}>Buscar Treinadores</button>
          </div>
        </div>

        <div id="search-results">
          <TitleTab title="eTrainers encontrados" />
          {queryLoading ? (
            <div className="loader"></div>
          ) : (
            <div className="trainers-list">
              {queryResponse.total === 0 ? (
                <h3 className="no-trainer-found">
                  Nenhum treinador encontrado
                </h3>
              ) : (
                queryResponse.trainers.map(
                  ({ name, photo, role, classTitle, id }, i) => {
                    return (
                      <TrainerCard
                        key={`trainer-${i}`}
                        name={name}
                        role={role}
                        photo={photo}
                        classTitle={classTitle}
                        id={id}
                      />
                    );
                  }
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
