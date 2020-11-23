import React from "react";

import "./styles.css";

const classSummaryBox = ({ primaryText, value, secondaryText }) => {
  const styleClass = secondaryText ? "three-items" : "two-items";

  return (
    <div className={`class-box ${styleClass}`}>
      <h3>{primaryText}</h3>
      <h2>{value}</h2>
      {secondaryText && <h3>{secondaryText}</h3>}
    </div>
  );
};

export default classSummaryBox;
