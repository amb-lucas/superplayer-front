import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const trainerCard = ({ name, photo, role, classTitle, id }) => {
  return (
    <div className="trainer-card">
      <img src={photo} alt={`${name}-profile`} />
      <div className="card-text">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{classTitle}</p>
      </div>
      <Link to={`/trainer/${id}`}>
        <button>{">"} Saiba mais</button>
      </Link>
    </div>
  );
};

export default trainerCard;
