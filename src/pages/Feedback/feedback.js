import React, { useState } from "react";

import { GetAuthData } from "../../context/auth";
import RatingStarsInput from "../../components/ratingStarsInput";

import "./styles.css";

const Feedback = ({ name, title, photo, commentSubmit }) => {
  const userName = GetAuthData().user.name;

  const [ratingValue, setRatingValue] = useState("5");
  const handleRatingChange = (value) => {
    setRatingValue(value);
  };

  const [commentValue, setCommentValue] = useState("");
  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      message: commentValue,
      ranking: ratingValue,
    };

    commentSubmit(data);
  };

  return (
    <div id="feedback-page">
      <div className="page-inside">
        <form className="feedback-form" onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Avaliação do Treinador</legend>

            <div className="trainer-summary">
              <img src={photo} alt={`trainer-${name}`} />

              <div className="trainer-details">
                <div>
                  <h1>{name}</h1>
                  <h3>{title}</h3>
                </div>
              </div>
            </div>
          </fieldset>

          <div className="comment">
            <h2>Comentário de {userName}</h2>

            <label className="label-title">Avaliação</label>
            <br />
            <RatingStarsInput
              defaultValue={ratingValue}
              valueUpdate={handleRatingChange}
            />
            <br />

            <label className="label-title" htmlFor="rating-stars-input">
              Comentário
            </label>
            <br />
            <textarea
              id="rating-stars-input"
              required="required"
              onChange={(e) => handleCommentChange(e)}
            ></textarea>
            <br />
          </div>

          <button type="submit" className="cta-button">
            Submeter Avaliação
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
