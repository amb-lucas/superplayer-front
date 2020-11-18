import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const trainerCard = ({ name, photo, title, description, id }) => {
  return (
    <div className="trainer-card">
      <img src={photo} alt={`${name}-profile-picture`} />
      <div className="card-text">
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link to={`/profile/${id}`}>
        <button>{">"} Saiba mais</button>
      </Link>
    </div>
  );
};

export default trainerCard;
