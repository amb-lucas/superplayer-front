import React from "react";

import TitleTab from "../../../components/titleTab";
import PlayerTab from "../../../components/playerTab";

import "./styles.css";

const MeetTrainers = ({ loading, error, trainers }) => {
  return (
    <div id="meet-the-trainers">
      <TitleTab title="Conheça os eTrainers" />

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div>
          <p className="etrainers-intro-text">
            <span>Conheça alguns dos eTrainers do SuperPlayer!</span>
            <span>
              Essas são as pessoas apaixonadas por jogos que se especializaram
              em jogos e ajudaram diversos jogadores iniciantes a melhorarem
              suas habilidades
            </span>
            <span>
              Caso deseje se especializar em algum jogo, considere buscar em
              nossa plataforma contatar um de nossos eTrainers
            </span>
          </p>

          {!error &&
            trainers.map(({ name, photo, title, description, id }, i) => {
              return (
                <PlayerTab
                  key={`eTrainer-${i}`}
                  name={name}
                  photo={photo}
                  title={title}
                  trainerId={id}
                  photoPosition={i % 2 === 0 ? "left" : "right"}
                  description={description}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MeetTrainers;
