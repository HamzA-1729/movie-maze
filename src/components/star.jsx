import React from "react";

const Star = ({ filled, onClick, onMouseOver }) => {
  const starStyle = {
    cursor: "pointer",
    fill: filled ? "gold" : "gray",
  };

  return (
    <svg
      onClick={onClick}
      onMouseOver={onMouseOver}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      style={starStyle}
    >
      <path d="M12 .587l3.668 7.451 8.332 1.151-6.064 5.838 1.436 8.285L12 18.897l-7.372 3.915 1.436-8.285L0 9.189l8.332-1.151z" />
    </svg>
  );
};

export default Star;
