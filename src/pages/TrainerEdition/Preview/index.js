import React from "react";

import { GetAuthData } from "../../../context/auth";
import RatingStars from "../../../components/ratingStars";
import ClassSummaryBox from "../../../components/classSummaryBox";

import "./styles.css";

const TrainerPagePreview = ({
  rating = "5",
  title,
  intro,
  teaching,
  forPlayers,
  price,
  costPer,
  train,
  closePreview,
}) => {
  const name = GetAuthData().user.name;
  const photo = GetAuthData().user.profileImage;

  const introText = intro.split("\n").map((text, idx) => {
    return (
      <span className="multiline-text" key={`intro-${idx}`}>
        {text}
      </span>
    );
  });

  const trainText = train.split("\n").map((text, idx) => {
    return (
      <span className="multiline-text" key={`train-${idx}`}>
        {text}
      </span>
    );
  });

  return (
    <div id="preview-trainer-profile">
      <button className="close-button" onClick={closePreview}>
        X
        <span className="tooltiptext">
          Clique para fechar a prévia e retornar à página de configuração
        </span>
      </button>

      <div className="trainer-summary">
        <div className="summary-top">
          <img src={photo} alt={`${name}-profile`} />
          <div className="summary-details">
            <h1>{name}</h1>
            <RatingStars rating={rating} />
            <h3>{title}</h3>

            <button
              className="primary-btn"
              onClick={() => (window.location.href = "#class-request")}
            >
              Pedir treino
            </button>
            <button
              className="secondary-btn"
              onClick={() => (window.location.href = "#class-details")}
            >
              Sobre o treino
            </button>
          </div>
        </div>

        <div className="trainer-simple-box">
          <p className="trainer-summary-intro">{introText}</p>
        </div>
      </div>

      <div id="class-details">
        <div className="summary-box">
          <ClassSummaryBox primaryText="Eu ensino" value={teaching} />
          <ClassSummaryBox primaryText="Para jogadores" value={forPlayers} />
          <ClassSummaryBox
            primaryText="Eu cobro"
            value={`R$ ${price}`}
            secondaryText={`por ${costPer}`}
          />
        </div>

        <div className="trainer-simple-box">
          <p className="trainer-summary-intro">{trainText}</p>
        </div>
      </div>

      <div id="class-request">
        <h2>Tenha já seu treino!</h2>
        <h3>Insira seus dados e {name} irá lhe contatar.</h3>

        <form>
          <input
            type="text"
            required="required"
            placeholder="Insira seu nome"
          ></input>
          <br />
          <input
            type="email"
            required="required"
            placeholder="Insira seu email"
          ></input>
          <br />
          <textarea
            type="text"
            placeholder="Caso tenha, insira observações adicionais"
          ></textarea>
          <br />

          <button type="submit" disabled="disabled">
            Pedir treino
          </button>
        </form>
      </div>

      <div className="end-of-page-cta">
        <div className="white-box">
          <h2>Se interessou pelo treino?</h2>
          <br />
          <h2>Entre já em contato!</h2>

          <button onClick={() => (window.location.href = "#class-request")}>
            Pedir treino
          </button>
        </div>

        <div className="white-box">
          <h2>Treinou com {name}?</h2>
          <br />
          <h2>Deixe seu comentário!</h2>

          <button disabled="disabled">Avaliar treino</button>
        </div>
      </div>
    </div>
  );
};

export default TrainerPagePreview;
