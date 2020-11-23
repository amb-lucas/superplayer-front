import { FaStar } from "react-icons/fa";

import "./styles.css";

const RatingStars = ({ rating }) => {
  const ratingValue = Number(rating);

  const checkpoints = [0.75, 1.75, 2.75, 3.75, 4.75];

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
