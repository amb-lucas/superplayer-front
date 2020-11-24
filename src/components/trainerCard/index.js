import React from "react";
import { Link } from "react-router-dom";

import Image from "../../components/imageRenderer";

import "./styles.css";

const trainerCard = ({ name, photo, role, classTitle, id }) => {
  return (
    <div className="trainer-card">
      <Image imageData={photo} alt={`${name}-profile-picture`} />
      <div className="card-text">
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{classTitle}</p>
      </div>
      <Link to={`/profile/${id}`}>
        <button>{">"} Saiba mais</button>
      </Link>
    </div>
  );
};

export default trainerCard;
