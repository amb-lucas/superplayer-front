import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

import "./styles.css";

const RatingStarsInput = ({ valueUpdate, defaultValue = "5" }) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const handleValueChange = (value) => {
    setCurrentValue(value);
    valueUpdate(value);
  };

  return (
    <div className="rating-stars-input">
      <label>
        <input type="radio" value="1" onClick={() => handleValueChange("1")} />
        <FaStar
          size={64}
          className={Number(currentValue) >= 1 ? "active" : "inactive"}
        />
      </label>
      <label>
        <input type="radio" value="2" onClick={() => handleValueChange("2")} />
        <FaStar
          size={64}
          className={Number(currentValue) >= 2 ? "active" : "inactive"}
        />
      </label>
      <label>
        <input type="radio" value="3" onClick={() => handleValueChange("3")} />
        <FaStar
          size={64}
          className={Number(currentValue) >= 3 ? "active" : "inactive"}
        />
      </label>
      <label>
        <input type="radio" value="4" onClick={() => handleValueChange("4")} />
        <FaStar
          size={64}
          className={Number(currentValue) >= 4 ? "active" : "inactive"}
        />
      </label>
      <label>
        <input type="radio" value="5" onClick={() => handleValueChange("5")} />
        <FaStar
          size={64}
          className={Number(currentValue) >= 5 ? "active" : "inactive"}
        />
      </label>
    </div>
  );
};

export default RatingStarsInput;
