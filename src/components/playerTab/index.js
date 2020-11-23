import React from "react";

import Tab from "../tab";

import "./styles.css";

const PlayerTab = ({ name, photo, description, photoPosition = "left" }) => {
  const descriptionHTML = description.split("\n").map((item, idx) => {
    return (
      <span key={`desc-${idx}`}>
        {item}
        <br />
      </span>
    );
  });

  const playerDetails = (
    <div className="player-tab-cell">
      <h1>{name}</h1>
      <p>{descriptionHTML}</p>
    </div>
  );

  const photoCell = (
    <div className="player-tab-cell">
      <img
        src={photo}
        alt={`${name} profile`}
        className={photoPosition === "left" ? "left-img" : "right-img"}
      />
    </div>
  );

  if (photoPosition === "right") {
    return (
      <Tab>
        {playerDetails}
        {photoCell}
      </Tab>
    );
  } else
    return (
      <Tab>
        {photoCell}
        {playerDetails}
      </Tab>
    );
};

export default PlayerTab;
