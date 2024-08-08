import React, { useState } from "react";
import Star from "./Star";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(10)].map((_, index) => (
        <Star
          key={index}
          filled={index < (hover || rating)}
          onClick={() => setRating(index + 1)}
          onMouseOver={() => setHover(index + 1)}
          onMouseOut={() => setHover(rating)}
        />
      ))}
      <p>Selected Rating: {rating}</p>
    </div>
  );
};

export default StarRating;
