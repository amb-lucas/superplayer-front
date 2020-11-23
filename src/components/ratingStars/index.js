import { FaStar } from "react-icons/fa";

import "./styles.css";

const RatingStars = ({ rating }) => {
  const ratingValue = Number(rating);

  const checkpoints = [0.5, 1.5, 2.5, 3.5, 4.5];

  return (
    <div className="rating-stars">
      {checkpoints.map((point, idx) => {
        return (
          <FaStar
            key={`star-${idx}`}
            className={ratingValue >= point ? "active" : "inactive"}
            size={32}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
