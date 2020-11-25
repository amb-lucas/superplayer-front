import React from "react";

import RatingStars from "../../components/ratingStars";
import ClassSummaryBox from "../../components/classSummaryBox";
import CommentBox from "../../components/comments";

import "./styles.css";

const TrainerPage = ({
  name = "",
  photo = "",
  rating = "",
  title = "",
  intro = "",
  teaching = "",
  forPlayers = "",
  price = "",
  costPer = "",
  train = "",
  comments = [],
}) => {
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

  const commentsSection = comments && (
    <div id="class-feedback">
      <h2>O que os alunos de {name} falam sobre seus treinos?</h2>
      {comments.map(({ comment, author }, idx) => {
        return (
          <CommentBox
            key={`comment-${idx}`}
            comment={comment}
            author={author}
          />
        );
      })}
    </div>
  );

  return (
    <div className="trainer-page">
      <div className="page-inside">
        <div id="trainer-summary">
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

          <input placeholder="Insira seu nome"></input>
          <br />
          <input placeholder="Insira seu email"></input>
          <br />

          <button>Pedir treino</button>
        </div>

        {commentsSection}

        <div id="end-of-page-cta">
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

            <button>Avaliar treino</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerPage;
